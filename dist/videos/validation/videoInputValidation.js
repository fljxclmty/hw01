"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpdateValidation = exports.videoInputValidation = void 0;
const videoInputValidation = (data) => {
    const errors = [];
    // title - обязательное поле
    if (!data.title || data.title.trim() === '') {
        errors.push({ field: 'title', message: 'Title is required' });
    }
    else if (data.title.length > 40) {
        errors.push({ field: 'title', message: 'Title must be no longer than 40 characters' });
    }
    // author - обязательное поле
    if (!data.author || data.author.trim() === '') {
        errors.push({ field: 'author', message: 'Author is required' });
    }
    else if (data.author.length > 20) {
        errors.push({ field: 'author', message: 'Author must be no longer than 20 characters' });
    }
    // availableResolutions - обязательное поле
    if (!data.availableResolutions || data.availableResolutions.length === 0) {
        errors.push({ field: 'availableResolutions', message: 'At least one resolution is required' });
    }
    return errors;
};
exports.videoInputValidation = videoInputValidation;
const videoUpdateValidation = (data) => {
    const errors = [];
    // title - опционально, но если есть - проверяем
    if (data.title !== undefined) {
        if (data.title.trim() === '') {
            errors.push({ field: 'title', message: 'Title is required' });
        }
        else if (data.title.length > 40) {
            errors.push({ field: 'title', message: 'Title must be no longer than 40 characters' });
        }
    }
    // author - опционально, но если есть - проверяем
    if (data.author !== undefined) {
        if (data.author.trim() === '') {
            errors.push({ field: 'author', message: 'Author is required' });
        }
        else if (data.author.length > 20) {
            errors.push({ field: 'author', message: 'Author must be no longer than 20 characters' });
        }
    }
    // availableResolutions - опционально, но если есть - проверяем
    if (data.availableResolutions !== undefined) {
        if (data.availableResolutions.length === 0) {
            errors.push({ field: 'availableResolutions', message: 'At least one resolution is required' });
        }
    }
    // canBeDownloaded - опционально, но если есть - должен быть boolean
    if (data.canBeDownloaded !== undefined && typeof data.canBeDownloaded !== 'boolean') {
        errors.push({ field: 'canBeDownloaded', message: 'Can be downloaded must be a boolean' });
    }
    // minAgeRestriction - опционально
    if (data.minAgeRestriction !== undefined) {
        if (data.minAgeRestriction !== null) {
            if (data.minAgeRestriction > 18 || data.minAgeRestriction < 1) {
                errors.push({
                    field: 'minAgeRestriction',
                    message: 'Min age restriction must be between 1 and 18 or null'
                });
            }
        }
    }
    // publicationDate - опционально
    if (data.publicationDate !== undefined) {
        if (!isValidISODate(data.publicationDate)) {
            errors.push({
                field: 'publicationDate',
                message: 'Publication date must be in ISO 8601 format (e.g., 2024-01-15T10:30:00.000Z)'
            });
        }
    }
    return errors;
};
exports.videoUpdateValidation = videoUpdateValidation;
function isValidISODate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) && dateString === date.toISOString();
}
//# sourceMappingURL=videoInputValidation.js.map