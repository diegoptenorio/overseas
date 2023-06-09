import { CONSTANTS } from '../constants';
import axios from 'axios';

export const api = axios.create({
    baseURL: CONSTANTS.API_URL,
    auth: {
        username: 'root@root.com',
        password: 'rootroot'
    }
});