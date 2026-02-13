import { APIErrorResult, FieldError } from '../../videos/types/error';

export const createErrorMessages = (
    errors: FieldError[],
): { errorMessages: FieldError[] } => {
    return { errorMessages: errors };
};