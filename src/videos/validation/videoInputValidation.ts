import { CreateVideoInputModel, UpdateVideoInputModel } from "../types/video";
import { FieldError } from '../types/error';
import { Resolutions } from "../types/video";

export const videoInputValidation = (
    data: CreateVideoInputModel,
): FieldError[] => {
    const errors: FieldError[] = [];

    // title
    if (!data.title || data.title.trim() === '') {
        errors.push({ field: 'title', message: 'Title is required' });
    } else if (data.title.length > 40) {
        errors.push({ field: 'title', message: 'Title must be no longer than 40 characters' });
    }

    // author
    if (!data.author || data.author.trim() === '') {
        errors.push({ field: 'author', message: 'Author is required' });
    } else if (data.author.length > 20) {
        errors.push({ field: 'author', message: 'Author must be no longer than 20 characters' });
    }

    // availableResolutions
    if (!data.availableResolutions || data.availableResolutions.length === 0) {
        errors.push({ field: 'availableResolutions', message: 'At least one resolution is required' });
    } else {
        const validResolutions = Object.values(Resolutions);
        const invalidResolutions = data.availableResolutions.filter(
            res => !validResolutions.includes(res)
        );
        if (invalidResolutions.length > 0) {
            errors.push({
                field: 'availableResolutions',
                message: 'Invalid resolution value'
            });
        }
    }

    return errors;
};

export const videoUpdateValidation = (
    data: UpdateVideoInputModel,
): FieldError[] => {
    const errors: FieldError[] = [];

    // title
    if (data.title !== undefined) {
        if (data.title.trim() === '') {
            errors.push({ field: 'title', message: 'Title is required' });
        } else if (data.title.length > 40) {
            errors.push({ field: 'title', message: 'Title must be no longer than 40 characters' });
        }
    }

    // author
    if (data.author !== undefined) {
        if (data.author.trim() === '') {
            errors.push({ field: 'author', message: 'Author is required' });
        } else if (data.author.length > 20) {
            errors.push({ field: 'author', message: 'Author must be no longer than 20 characters' });
        }
    }

    // availableResolutions
    if (data.availableResolutions !== undefined) {
        if (data.availableResolutions.length === 0) {
            errors.push({ field: 'availableResolutions', message: 'At least one resolution is required' });
        } else {
            const validResolutions = Object.values(Resolutions);
            const invalidResolutions = data.availableResolutions.filter(
                res => !validResolutions.includes(res)
            );
            if (invalidResolutions.length > 0) {
                errors.push({
                    field: 'availableResolutions',
                    message: 'Invalid resolution value'
                });
            }
        }
    }

    // canBeDownloaded
    if (data.canBeDownloaded === undefined) {
        errors.push({ field: 'canBeDownloaded', message: 'Can be downloaded is required' });
    }

    // minAgeRestriction
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

    // publicationDate
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

function isValidISODate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) && dateString === date.toISOString();
}