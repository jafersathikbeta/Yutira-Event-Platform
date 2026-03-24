# Yutira 2026 - Event Management Platform

A modern, full-stack web platform built for **Yutira 2026**, the national level technical symposium hosted by the Department of Civil Engineering at PSG College of Technology. 

Developed as a freelance project, this platform handles everything from attendee registration and paper submissions to payment verification and on-ground attendance tracking.

## Core Features

- **Dynamic Event Landing Page:** Features a live countdown timer, event schedule, and smooth UI transitions powered by `framer-motion`.
- **Secure Authentication:** Complete auth flow using JWT, `bcryptjs` for password hashing, and `nodemailer` for email verification and password resets.
- **Complex Registration System:** 
  - Tracks user details, college, and department.
  - Separate payment status flows for general events and specific workshops.
  - Generates unique `Yutira ID`s using a custom Counter schema.
- **Paper Submission Portal:** Allows students to submit research papers. PDFs are securely uploaded and hosted via **Cloudinary**.
- **Admin Dashboard:** 
  - Track attendance for Day 1 and Day 2.
  - Approve or reject paper submissions with remarks.
  - Toggle payment statuses manually.
  - Export participant data to CSV/XLSX using `xlsx` and `csv-stringify`.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** MongoDB (Mongoose)
- **Styling:** Tailwind CSS
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs
- **File Storage:** Cloudinary
- **Email:** Nodemailer

## Setup & Installation

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/jafersathikbeta/Yutira-Event-Platform.git
   cd Yutira-Event-Platform
   npm install
   ```

2. Configure your Environment Variables:
   Rename `.env.example` to `.env.local` and fill in your credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The production build is optimized for deployment on Vercel or any Node.js hosting provider. 
```bash
npm run build
npm start
``` 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
