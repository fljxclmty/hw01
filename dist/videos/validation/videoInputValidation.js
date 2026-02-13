"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpdateValidation = void 0;
const videoUpdateValidation = (data) => {
    const errors = [];
    // title — опционально, но если есть — проверяем
    if (data.title !== undefined) {
        if (data.title.trim() === '') {
            errors.push({ field: 'title', message: 'Title is required' });
        }
        else if (data.title.length > 40) {
            errors.push({ field: 'title', message: 'Title must be no longer than 40 characters' });
        }
    }
    // author — опционально, но если есть — проверяем
    if (data.author !== undefined) {
        if (data.author.trim() === '') {
            errors.push({ field: 'author', message: 'Author is required' });
        }
        else if (data.author.length > 20) {
            errors.push({ field: 'author', message: 'Author must be no longer than 20 characters' });
        }
    }
    // availableResolutions — опционально, но если есть — проверяем
    if (data.availableResolutions !== undefined) {
        if (data.availableResolutions.length === 0) {
            errors.push({ field: 'availableResolutions', message: 'At least one resolution is required' });
        }
    }
    // canBeDownloaded — уже boolean по типу, проверяем только наличие
    if (data.canBeDownloaded === undefined) {
        errors.push({ field: 'canBeDownloaded', message: 'Can be downloaded is required' });
    }
    // minAgeRestriction — опционально, number | null по типу
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
    // publicationDate — опционально, string по типу
    if (data.publicationDate !== undefined) {
        if (!isValidISODate(data.publicationDate)) {
            errors.push({
                field: 'publicationDate',
                message: 'Publication date must be in ISO 8601 format'
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