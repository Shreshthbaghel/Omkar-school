/**
 * Form Validation Utilities
 * 
 * Centralized validation logic for form inputs
 */

/**
 * Validate name fields (parent name, student name)
 * @param {string} name - Name to validate
 * @returns {object} { valid: boolean, error: string }
 */
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
    // Only letters, spaces, hyphens, and apostrophes allowed
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(name)) {
        return { valid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
    }
    return { valid: true, error: '' };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {object} { valid: boolean, error: string }
 */
export const validatePhone = (phone) => {
    if (!phone || phone.trim().length === 0) {
        return { valid: false, error: 'Phone number is required' };
    }
    // Remove spaces, hyphens, and parentheses for validation
    const cleanPhone = phone.replace(/[\s\-()]/g, '');

    // Indian phone number: 10 digits, optionally starting with +91
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
        return { valid: false, error: 'Please enter a valid 10-digit Indian phone number' };
    }
    return { valid: true, error: '' };
};

/**
 * Validate class selection
 * @param {string} className - Selected class
 * @param {array} availableClasses - List of available classes
 * @returns {object} { valid: boolean, error: string }
 */
export const validateClass = (className, availableClasses) => {
    if (!className || className.trim().length === 0) {
        return { valid: false, error: 'Please select a class' };
    }
    if (!availableClasses.includes(className)) {
        return { valid: false, error: 'Please select a valid class' };
    }
    return { valid: true, error: '' };
};

/**
 * Validate message/additional info
 * @param {string} message - Message to validate
 * @returns {object} { valid: boolean, error: string }
 */
export const validateMessage = (message) => {
    // Message is optional, but if provided, check length
    if (message && message.trim().length > 500) {
        return { valid: false, error: 'Message must be less than 500 characters' };
    }
    return { valid: true, error: '' };
};

/**
 * Validate entire callback form
 * @param {object} formData - Form data object
 * @param {array} availableClasses - List of available classes
 * @returns {object} { valid: boolean, errors: object }
 */
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
