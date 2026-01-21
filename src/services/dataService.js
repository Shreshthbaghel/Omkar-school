/**
 * Data Service Layer
 * 
 * This abstraction layer separates data access from components.
 * Currently uses JSON files, but can easily be swapped for API calls later.
 * 
 * To add database support later:
 * 1. Replace imports with fetch() or axios calls
 * 2. Add async/await to all functions
 * 3. Components won't need any changes!
 */

import facultyData from '../data/faculty.json';
import schoolData from '../data/schoolInfo.json';

/**
 * Get all faculty members (founders, principal, teachers)
 */
export const getAllFaculty = () => {
    return facultyData;
};

/**
 * Get only founders
 */
export const getFounders = () => {
    return facultyData.founders;
};

/**
 * Get principal information
 */
export const getPrincipal = () => {
    return facultyData.principal;
};

/**
 * Get all teachers
 */
export const getTeachers = () => {
    return facultyData.teachers;
};

export const getSchoolInfo = () => {
    return schoolData;
};


export const getAvailableClasses = () => {
    return schoolData.classes;
};


export const getContactInfo = () => {
    return schoolData.contact;
};

/* 
 * FUTURE: When adding a backend, update like this:
 * 
 * export const getTeachers = async () => {
 *   const response = await fetch('/api/teachers');
 *   return response.json();
 * };
 * 
 * Components using getTeachers() will work automatically!
 */
