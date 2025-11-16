# Contact Form Setup Guide

## 📧 How to Receive Contact Form Submissions

I've set up your contact form with EmailJS integration. Here are the steps to receive contact form submissions:

### Option 1: EmailJS Setup (Recommended)

1. **Create EmailJS Account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up Email Service:**
   - Add your email service (Gmail, Outlook, etc.)
   - Get your Service ID

3. **Create Email Template:**
   - Create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Amiya)
   - Get your Template ID

4. **Get Public Key:**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Contact.jsx:**
   - Replace these values in `src/components/Contact.jsx`:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID' // Replace with your service ID
     const templateId = 'YOUR_TEMPLATE_ID' // Replace with your template ID
     const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your public key
     ```

### Option 2: Console Logging (For Testing)

The form currently logs all submissions to the browser console. To see them:

1. **Open Browser Developer Tools:**
   - Press F12 or right-click → Inspect
   - Go to Console tab

2. **Submit a test form:**
   - Fill out the contact form
   - Click "Send Message"
   - Check the console for logged data

### Option 3: Alternative Solutions

- **Netlify Forms** (if hosting on Netlify)
- **Formspree** (simple form handling service)
- **Custom backend** (Node.js, Python, etc.)

## 🎯 Current Features

✅ **Form validation** - All fields required
✅ **Loading state** - Shows spinner while sending
✅ **Success/Error messages** - User feedback
✅ **Console logging** - For debugging
✅ **EmailJS integration** - Ready for email setup

## 📝 Form Data Structure

When someone submits the form, you'll receive:
```javascript
{
  name: "John Doe",
  email: "john@example.com", 
  message: "Hello, I'd like to work with you..."
}
```

## 🔧 Next Steps

1. Set up EmailJS account
2. Update the configuration in Contact.jsx
3. Test the form
4. You'll receive emails for all submissions!

---

**Need help?** The form is fully functional and will work once you add your EmailJS credentials.

