const devBaseURL = "http://150.158.24.181:9003";
const proBaseURL = "http://150.158.24.181:9003";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;