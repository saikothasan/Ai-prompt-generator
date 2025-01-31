# AI Prompt Generator

An advanced AI prompt enhancement tool built with Next.js 13, Tailwind CSS, and Google's Gemini AI. This application helps users create more effective prompts for various AI tools and use cases.

![AI Prompt Generator](https://sjc.microlink.io/kRPBFiQGAjTLRm9hVpM5fQhGuwbgJb3yHprSgMY-JeJ66lWM8QLOySJKLC1ojHupXpms5qNZEba94Sk5pjDodw.jpeg)

## Features

- 🤖 Powered by Google's Gemini AI
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🌙 Dark/Light mode support
- 🔐 Authentication with Supabase
- 📝 Save and manage prompt history
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 13
- 🔄 Real-time prompt enhancement
- 📊 Rate limiting for API protection
- 📈 Google Analytics integration

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Supabase Auth
- **Database:** Supabase
- **AI Model:** Google Gemini Pro
- **Analytics:** Google Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/pnpm
- Supabase account
- Google AI (Gemini) API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saikothasan/Ai-prompt-generator.git
   cd Ai-prompt-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_API_KEY=your_google_api_key
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
   ```

4. Set up your Supabase database using the provided schema in `supabase/schema.sql`

5. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

Visit `http://localhost:3000` to see the application.

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `GOOGLE_API_KEY`: Your Google AI (Gemini) API key
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID

## Features in Detail

### Prompt Enhancement
- Supports multiple AI tools and use cases
- Real-time enhancement using Google's Gemini AI
- Copy-to-clipboard functionality
- History tracking for authenticated users

### Authentication
- Email/password authentication
- Protected routes and API endpoints
- User profile management
- Secure session handling

### Database Schema
- User profiles
- Prompt history
- AI tools configuration
- User feedback system

## API Routes

- `/api/enhance`: Enhances user prompts using Gemini AI
- `/api/generate`: Generates new prompts based on topics
- Protected with rate limiting
- Authenticated endpoints for user-specific operations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the repository or contact the maintainers.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [Google AI](https://ai.google.dev/)
