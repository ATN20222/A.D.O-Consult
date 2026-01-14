// Test script to verify the integration between frontend and email service
import fetch from 'node-fetch';

const testContactForm = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    subject: 'Integration Test',
    message: 'This is a test message from the contact form integration.',
    honeypot: '' // Empty honeypot for testing
  };

  console.log('🧪 Testing contact form integration...');

  try {
    // First check if email service is running
    console.log('🔍 Checking email service health...');
    const healthCheck = await fetch('http://localhost:3001/health');
    if (!healthCheck.ok) {
      console.log('❌ Email service not responding');
      return;
    }
    console.log('✅ Email service is running');

    // Test direct email service call (like the frontend does now)
    console.log('📤 Sending test data directly to email service...');

    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: `New Contact Form Submission: ${testData.subject}`,
        message: testData.message,
        from: testData.email,
        name: testData.name,
        phone: testData.phone,
        fields: [
          { label: 'Name', value: testData.name },
          { label: 'Email', value: testData.email },
          testData.phone && { label: 'Phone', value: testData.phone }
        ].filter(Boolean)
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Contact form integration successful!');
      console.log('📧 Message ID:', result.messageId);
      console.log('📧 Check your email at info@ado-egy.com');
    } else {
      console.log('❌ Contact form test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Error testing contact form:', error.message);
    console.log('💡 Make sure the email service is running:');
    console.log('   - Email service: cd email-service && npm start');
  }
};

// Run the test
testContactForm();