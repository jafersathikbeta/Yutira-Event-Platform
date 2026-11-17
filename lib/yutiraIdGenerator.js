import Counter from '@/models/Counter';
import User from '@/models/User';

export function formatYutiraId(n) {
  return `YUTIRA${String(n).padStart(4, '0')}`;
}

async function getExistingMaxSeq() {
  const last = await User.findOne({ yutiraId: { $exists: true, $ne: null } })
    .sort({ yutiraId: -1 })
    .lean();

  if (!last?.yutiraId) return 0;

  const num = Number(String(last.yutiraId).replace('YUTIRA', ''));
  return Number.isFinite(num) ? num : 0;
}

export async function generateNextYutiraId() {
  // Seed once from existing IDs so a fresh counter never collides with live data.
  const floor = await getExistingMaxSeq();
  await Counter.findOneAndUpdate(
    { id: 'yutiraId' },
    { $setOnInsert: { seq: floor } },
    { upsert: true }
  );

  // Keep counter ahead of any IDs created before the counter existed.
  await Counter.findOneAndUpdate(
    { id: 'yutiraId', seq: { $lt: floor } },
    { $set: { seq: floor } }
  );

  const counter = await Counter.findOneAndUpdate(
    { id: 'yutiraId' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  return formatYutiraId(counter.seq);
}
