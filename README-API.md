# A.D.O CONSULT Contact Form API

## 🚀 Serverless Function Setup

The contact form uses a serverless function deployed to platforms like Vercel, Netlify, or Railway.

### Files:
- `api/contact.js` - Serverless function that handles form submissions
- Uses Resend API for email delivery

### Local Development:
1. Create a `.env` file in your project root (not committed to git)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_Q65uxyNE_9ABYqCZp8MgRaXycMXihzSCr
   ```

### Deployment:

**For Vercel:**
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variable in Vercel dashboard: `RESEND_API_KEY`
4. Vercel will automatically detect and deploy the API route

**For Netlify:**
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Add environment variable in Netlify dashboard: `RESEND_API_KEY`
4. Netlify will automatically detect and deploy the API route

### API Endpoint:
- **URL:** `/api/contact`
- **Method:** POST
- **Content-Type:** application/json

### Form Fields:
- `name` (required): Contact's full name
- `email` (required): Contact's email address
- `phone` (optional): Contact's phone number
- `subject` (required): Subject/message topic
- `message` (required): Message content
- `honeypot` (optional): Spam protection field

The contact forms will automatically submit to `/api/contact` and work once deployed! 🎉