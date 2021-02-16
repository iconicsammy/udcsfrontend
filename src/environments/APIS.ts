import { environment } from './environment';

const baseURL = environment.baseURL;
const galleryURL = environment.baseGalleryURL

export const ENDPOINTS = {
    getWalks: baseURL,
    deleteWalk: baseURL,
    updateWalk: baseURL,
    addNewWalk: baseURL,
    getImages: galleryURL,
    getUploadURL: galleryURL,
    saveImageInfo: galleryURL
}