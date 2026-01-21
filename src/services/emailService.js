
import emailjs from '@emailjs/browser';


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJS = () => {
    if (EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.warn('EmailJS public key not configured. Form submissions will fail.');
    }
};

/**
 * Send callback request email
 * @param {object} formData - Form data
 * @returns {Promise} EmailJS promise
 */
export const sendCallbackRequest = async (formData) => {
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS not configured. Please check environment variables.');
    }


    const templateParams = {
        parent_name: formData.parentName,
        student_name: formData.studentName,
        class: formData.class,
        phone: formData.phone,
        message: formData.message || 'No additional message provided',
        submission_date: new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata'
        })
    };

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Email sent successfully:', response);
        return {
            success: true,
            message: 'Thank you! We have received your callback request and will contact you soon.'
        };
    } catch (error) {
        console.error('EmailJS ERROR FULL:', {
            status: error?.status,
            text: error?.text,
            message: error?.message,
            raw: error
        });

        let errorMessage = 'Failed to send request. Please try again later.';

        if (error.text === 'The public key is invalid') {
            errorMessage = 'Email service configuration error. Please contact support.';
        } else if (error.text === 'Template not found') {
            errorMessage = 'Email template not configured. Please contact support.';
        } else if (error.status === 429) {
            errorMessage = 'Too many requests. Please try again in a few minutes.';
        }

        return {
            success: false,
            message: errorMessage
        };
    }
};

/**
 * Check if EmailJS is properly configured
 * @returns {boolean}
 */
export const isEmailJSConfigured = () => {
    return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};
