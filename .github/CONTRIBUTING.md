# Local Development Setup Guide

## Prerequisites
- Node.js (compatible with the project)
- pnpm
- Docker (for running PostgreSQL)

## Step 1: Fork and Clone the Repository
1. Fork the repository on GitHub
2. Clone your forked repository:
   ```bash
   git clone https://github.com/[your-username]/fevo
   cd fevo
   ```

## Step 2: Install Dependencies
```bash
pnpm install
```

## Step 3: Environment Configuration
1. Create environment file:
   ```bash
   cp .env.example .env
   ```

2. Generate Authentication Secret
   Use OpenSSL to create a secure secret:
   ```bash
   openssl rand -base64 32
   ```
   Copy the generated secret and add to `.env`:
   ```bash
   BETTER_AUTH_SECRET=your_generated_secret_here
   ```

## Step 4: Add Credentials
Edit the `.env` file to add necessary credentials:

### Google OAuth Credentials (Required)
```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Optional Credentials
```bash
# Email service
RESEND_API_KEY=your_resend_api_key
```

### Obtaining Credentials
- Google OAuth: [Google Cloud Console](https://console.cloud.google.com/)
- Resend API Key: [Resend Dashboard](https://resend.com/)

## Step 5: Start Development Environment
This command will:
- Start a PostgreSQL database container
- Launch the development server

```bash
pnpm local
```

The development server will be available at: `http://localhost:3000`

