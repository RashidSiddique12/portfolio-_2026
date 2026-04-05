# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to the EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Click "Email Templates" in the sidebar
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Click "Save"
5. Copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., "abcd1234567890")

## Step 5: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcd1234567890
```

## Step 6: Restart Development Server
After updating the `.env` file, restart your development server:
```bash
npm start
```

## Step 7: Test the Form
1. Fill out the contact form on your website
2. Check your email inbox for the message
3. Check the EmailJS dashboard for delivery status

## Troubleshooting
- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Check spam folder and EmailJS dashboard
- **Template errors**: Verify template variable names match the code
- **Service errors**: Ensure your email service is properly connected

## Security Notes
- Never commit your actual EmailJS keys to version control
- The `.env` file is already in `.gitignore` for security
- EmailJS free plan allows 200 emails/month

## Template Variables Used
- `{{from_name}}` - Sender's name from form
- `{{from_email}}` - Sender's email from form
- `{{message}}` - Message content from form
- `{{to_name}}` - Your name (hardcoded as "Rashid")
- `{{reply_to}}` - Sender's email for easy reply

## Next Steps
Once configured, your contact form will:
1. ✅ Send emails directly to your inbox
2. ✅ Show success/error messages to users
3. ✅ Reset form after successful submission
4. ✅ Validate email addresses before sending
5. ✅ Handle loading states during submission