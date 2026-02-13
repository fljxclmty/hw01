"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpdateValidation = exports.videoInputValidation = void 0;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const videoInputValidation = (data) => {
    const errors = [];
    if (!data.title ||
        data.title.trim().length > 40) {
        errors.push({ field: 'title', message: 'Invalid title' });
    }
    if (!data.author ||
        data.author.trim().length > 20) {
        errors.push({ field: 'author', message: 'Invalid author' });
    }
    return errors;
};
exports.videoInputValidation = videoInputValidation;
const videoUpdateValidation = (data) => {
    const errors = [];
    if (!data.title ||
        data.title.trim().length > 40) {
        errors.push({ field: 'title', message: 'Invalid title' });
    }
    if (!data.author ||
        data.author.trim().length > 20) {
        errors.push({ field: 'author', message: 'Invalid author' });
    }
    if (!data.availableResolutions) {
        errors.push({ field: 'availableResolutions', message: 'At least one resolution should be added' });
    }
    if (!data.canBeDownloaded) {
        errors.push({ field: 'canBeDownloaded', message: 'Cannot be empty' });
    }
    if (data.minAgeRestriction !== undefined) {
        if (data.minAgeRestriction === null) {
            // null - допустимое значение (нет ограничений)
        }
        else if (data.minAgeRestriction > 18 ||
            data.minAgeRestriction < 1) {
            errors.push({
                field: 'minAgeRestriction',
                message: 'Min age restriction must be between 1 and 18 or null'
            });
        }
    }
    function isValidISODate(dateString) {
        const date = new Date(dateString);
        return date instanceof Date &&
            !isNaN(date.getTime()) &&
            dateString === date.toISOString();
    }
    // Валидация publicationDate
    // Валидация publicationDate
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
//# sourceMappingURL=videoInputValidation.js.map