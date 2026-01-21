const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

export const validateName = (name) => {
    if (!name || name.trim().length === 0) {
        return { valid: false, error: 'Name is required' };
    }
    if (name.trim().length < 2) {
        return { valid: false, error: 'Name must be at least 2 characters' };
    }
    if (name.trim().length > 50) {
        return { valid: false, error: 'Name must be less than 50 characters' };
    }
    const nameRegex = /^[A-Za-z\s.'-]+$/;
    if (!nameRegex.test(name)) {
        return { valid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
    }
    return { valid: true, error: '' };
};

export const validatePhone = (phone) => {
    if (!phone || phone.trim().length === 0) {
        return { valid: false, error: 'Phone number is required' };
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');

    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
        return { valid: false, error: 'Please enter a valid 10-digit Indian phone number' };
    }
    return { valid: true, error: '' };
};

export const validateClass = (className, availableClasses) => {
    if (!className || className.trim().length === 0) {
        return { valid: false, error: 'Please select a class' };
    }
    if (!availableClasses.includes(className)) {
        return { valid: false, error: 'Please select a valid class' };
    }
    return { valid: true, error: '' };
};

export const validateMessage = (message) => {
    if (message && message.trim().length > 500) {
        return { valid: false, error: 'Message must be less than 500 characters' };
    }
    return { valid: true, error: '' };
};

export const validateCallbackForm = (formData, availableClasses) => {
    const errors = {};

    const parentNameResult = validateName(formData.parentName);
    if (!parentNameResult.valid) errors.parentName = parentNameResult.error;

    const studentNameResult = validateName(formData.studentName);
    if (!studentNameResult.valid) errors.studentName = studentNameResult.error;

    const phoneResult = validatePhone(formData.phone);
    if (!phoneResult.valid) errors.phone = phoneResult.error;

    const classResult = validateClass(formData.class, availableClasses);
    if (!classResult.valid) errors.class = classResult.error;

    const messageResult = validateMessage(formData.message);
    if (!messageResult.valid) errors.message = messageResult.error;

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};
