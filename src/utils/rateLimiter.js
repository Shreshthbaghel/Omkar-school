

const STORAGE_KEY = 'callback_form_submissions';
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW_MS = 30 * 60 * 1000; 

const getSubmissionHistory = () => {
    try {
        const history = localStorage.getItem(STORAGE_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error reading submission history:', error);
        return [];
    }
};

const saveSubmissionHistory = (history) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
        console.error('Error saving submission history:', error);
    }
};


const cleanOldSubmissions = (history) => {
    const now = Date.now();
    return history.filter(timestamp => (now - timestamp) < TIME_WINDOW_MS);
};


export const canSubmit = () => {
    let history = getSubmissionHistory();
    history = cleanOldSubmissions(history);

    const attemptsLeft = MAX_SUBMISSIONS - history.length;

    if (history.length < MAX_SUBMISSIONS) {
        return {
            allowed: true,
            attemptsLeft,
            remainingTime: 0
        };
    }

    const oldestSubmission = Math.min(...history);
    const remainingTime = TIME_WINDOW_MS - (Date.now() - oldestSubmission);

    return {
        allowed: false,
        attemptsLeft: 0,
        remainingTime
    };
};


export const recordSubmission = () => {
    let history = getSubmissionHistory();
    history = cleanOldSubmissions(history);
    history.push(Date.now());
    saveSubmissionHistory(history);
};

export const formatRemainingTime = (ms) => {
    const minutes = Math.ceil(ms / (60 * 1000));
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    const hours = Math.ceil(minutes / 60);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
};

export const resetSubmissions = () => {
    localStorage.removeItem(STORAGE_KEY);
};
