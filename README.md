# Devfolio - Tech Collaboration Platform

Devfolio is an all-in-one tech collaboration platform that combines freelancing, event management, and community features. Built with Next.js, MongoDB, and Clerk for authentication.

## Features

- 🧑‍💻 **Freelancing Module**

  - Create and manage gig listings
  - Submit and track proposals
  - Profile management and reviews

- 📅 **Event Management**

  - Create and manage tech events
  - Hackathons, webinars, and meetups
  - Registration and attendee management

- 💬 **Community Features**
  - Real-time chat
  - Public and private groups
  - Media sharing and announcements

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: Clerk
- **Real-time Features**: Socket.io
- **Styling**: Tailwind CSS with shadcn/ui components

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/devfolio.git
   cd devfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_uri

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Clerk Webhook
   WEBHOOK_SECRET=your_webhook_secret
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── models/               # MongoDB models
└── types/                # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
