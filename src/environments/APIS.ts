import { environment } from './environment';

const baseURL = environment.baseURL;

export const ENDPOINTS = {
    getWalks: baseURL,
    deleteWalk: baseURL,
    updateWalk: baseURL,
    addNewWalk: baseURL
}