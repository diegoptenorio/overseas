import { CONSTANTS } from '../constants';
import { auth } from '../constants/auth';
import axios from 'axios';

export const api = axios.create({
    baseURL: CONSTANTS.API_URL,
    auth: auth
});