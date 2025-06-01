import {z} from 'zod';
import {
    TITLE_MAX_LENGTH,
    TITLE_MIN_LENGTH,
    TEXT_MAX_LENGTH,
    TEXT_MIN_LENGTH
} from '@/constants/review.constants';


/**
 * Rules:
 * treatment_id: required, string
 * recommended:  required, bool
 * title: required when recommended === true | string | min TITLE_MIN_LENGTH | max TITLE_MAX_LENGTH
 * text: required when recommended === true | string | min TEXT_MIN_LENGTH | max TEXT_MAX_LENGTH
 */

export const reviewSchema = z.object({
    treatment_id: z.string().min(1, 'validation.treatment_required'),

    //recommended: z.union([z.boolean({ required_error: 'validation.required' }),]),
    recommended: z.boolean({ required_error: 'validation.required' }),
    title: z.string().nullable().optional(),
    text: z.string().nullable().optional(),

}).superRefine((data, ctx) => {
    const isRecommended = data.recommended === true;

    if (isRecommended) {
        if (!data.title || data.title.trim().length < TITLE_MIN_LENGTH) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'validation.string_min',
                path: ['title'],
            });
        } else if (data.title.length > TITLE_MAX_LENGTH) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'validation.string_max',
                path: ['title'],
            });
        }

        if (!data.text || data.text.trim().length < TEXT_MIN_LENGTH) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'validation.string_min',
                path: ['text'],
            });
        } else if (data.text.length > TEXT_MAX_LENGTH) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'validation.string_max',
                path: ['text'],
            });
        }
    }
});

export const validatedSchema = reviewSchema;
