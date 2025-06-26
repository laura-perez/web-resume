/**
 * Email service for sending messages from the chat box
 * Using EmailJS for simple email integration
 */
import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Non spécifiée',
      message: data.message,
      to_email: 'laura.perez.fr@gmail.com'
    };

    const result = await emailjs.send(
      'service_db3ikqi',     // Replace with your EmailJS service ID
      'template_kj1r0fo',    // Replace with your EmailJS template ID
      templateParams,
      '5ix2-LAM1uqSC5Evj'      // Replace with your EmailJS public key
    );

    return result.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};