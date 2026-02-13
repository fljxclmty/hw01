import { APIErrorResult, FieldError } from '../../videos/types/error';

export const createErrorMessages = (errors: FieldError[]): APIErrorResult => {
    return { errorsMessages: errors.length > 0 ? errors : null };  // ✅ исправлено
};