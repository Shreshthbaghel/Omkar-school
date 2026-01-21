import React, { useState } from 'react';
import Section from '../components/Section';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { getAvailableClasses } from '../services/dataService';
import { sendCallbackRequest, isEmailJSConfigured } from '../services/emailService';
import { validateCallbackForm } from '../utils/validation';
import { canSubmit, recordSubmission, formatRemainingTime } from '../utils/rateLimiter';


const Admissions = () => {
    const availableClasses = getAvailableClasses();


    const [formData, setFormData] = useState({
        parentName: '',
        studentName: '',
        class: '',
        phone: '',
        message: '',
        honeypot: '' 
    });


    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.honeypot) {
            console.log('Bot detected via honeypot');
            return;
        }

        const rateLimitResult = canSubmit();
        if (!rateLimitResult.allowed) {
            setSubmitStatus('error');
            setStatusMessage(
                `You've reached the maximum submission limit. Please try again in ${formatRemainingTime(rateLimitResult.remainingTime)}.`
            );
            return;
        }

        
        const validation = validateCallbackForm(formData, availableClasses);
        if (!validation.valid) {
            setErrors(validation.errors);
            setSubmitStatus('error');
            setStatusMessage('Please fix the errors above and try again.');
            return;
        }

        if (!isEmailJSConfigured()) {
            setSubmitStatus('error');
            setStatusMessage('Email service is not configured. Please contact the school directly.');
            return;
        }

        setLoading(true);
        setSubmitStatus(null);
        setErrors({});

        try {
            const result = await sendCallbackRequest(formData);

            if (result.success) {
                setSubmitStatus('success');
                setStatusMessage(result.message);
                recordSubmission();
                setFormData({
                    parentName: '',
                    studentName: '',
                    class: '',
                    phone: '',
                    message: '',
                    honeypot: ''
                });
            } else {
                setSubmitStatus('error');
                setStatusMessage(result.message);
            }
        } catch (error) {
            setSubmitStatus('error');
            setStatusMessage('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section
            id="admissions"
            title="Admissions & Callback Request"
            subtitle="Fill out the form below and we'll get back to you within 24 hours"
            bgColor="bg-gradient-to-br from-primary/5 to-secondary/5"
        >
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    {/* Status Messages */}
                    {submitStatus && (
                        <div className={`
              mb-6 p-4 rounded-lg flex items-start gap-3
              ${submitStatus === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}
            `}>
                            {submitStatus === 'success' ? (
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            )}
                            <p className={submitStatus === 'success' ? 'text-green-800' : 'text-red-800'}>
                                {statusMessage}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Parent Name */}
                        <FormInput
                            label="Parent/Guardian Name"
                            name="parentName"
                            type="text"
                            value={formData.parentName}
                            onChange={handleChange}
                            error={errors.parentName}
                            required
                            placeholder="Enter parent's full name"
                        />

                        {/* Student Name */}
                        <FormInput
                            label="Student Name"
                            name="studentName"
                            type="text"
                            value={formData.studentName}
                            onChange={handleChange}
                            error={errors.studentName}
                            required
                            placeholder="Enter student's full name"
                        />

                        {/* Class */}
                        <FormInput
                            label="Class"
                            name="class"
                            type="select"
                            value={formData.class}
                            onChange={handleChange}
                            error={errors.class}
                            required
                            options={availableClasses}
                        />

                        {/* Phone */}
                        <FormInput
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            required
                            placeholder="Enter 10-digit phone number"
                        />

                        {/* Message */}
                        <FormInput
                            label="Additional Message (Optional)"
                            name="message"
                            type="textarea"
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                            placeholder="Any questions or special requirements?"
                            rows={4}
                        />

                        {/* Honeypot - Hidden from users, visible to bots */}
                        <div className="hidden" aria-hidden="true">
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            loading={loading}
                            disabled={loading}
                        >
                            Request Callback
                        </Button>
                    </form>

                    {/* Additional Info */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>By submitting this form, you agree to be contacted by our admissions team.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Admissions;
