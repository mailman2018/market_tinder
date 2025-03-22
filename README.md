# Market Tinder

A B2C AI-powered platform that connects customers with local vendors for event planning and services.

## Features

- User authentication (Customers and Vendors)
- Event creation and management
- Vendor profile creation and management
- Location-based vendor matching
- Service categorization and preferences
- Basic messaging system
- Review and rating system

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- Google Maps API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your database URL and API keys

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and shared code
- `/prisma` - Database schema and migrations

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
