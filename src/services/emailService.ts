/**
 * Email service for sending messages from the chat box
 * Using EmailJS for simple email integration
 */

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Send email using EmailJS service
 * To use this, you need to:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Install EmailJS: npm install @emailjs/browser
 * 3. Set up your email service and template
 * 4. Replace the IDs below with your actual EmailJS IDs
 */
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // For now, we'll simulate the email sending
    // In production, you would use EmailJS like this:
    
    /*
    import emailjs from '@emailjs/browser';
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Non spécifiée',
      message: data.message,
      to_email: 'laura.perez.fr@gmail.com'
    };

    const result = await emailjs.send(
      'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
    );

    return result.status === 200;
    */

    // Simulation for development
    console.log('📧 Email would be sent with data:', {
      to: 'laura.perez.fr@gmail.com',
      subject: `Nouveau message de ${data.name} via le CV`,
      content: {
        name: data.name,
        email: data.email,
        company: data.company || 'Non spécifiée',
        message: data.message
      }
    });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success (you can set to false to test error handling)
    return true;

  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

/**
 * Alternative: Using Formspree (https://formspree.io/)
 * This is another simple option for handling form submissions
 */
export const sendEmailWithFormspree = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
        _subject: `Nouveau message de ${data.name} via le CV`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error with Formspree:', error);
    return false;
  }
};
