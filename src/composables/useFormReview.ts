import {ref} from "vue";
import { validatedSchema } from '@/schemas/ReviewFormSchema';
import {
    TITLE_MAX_LENGTH,
    TITLE_MIN_LENGTH,
    TEXT_MAX_LENGTH,
    TEXT_MIN_LENGTH
} from '@/constants/review.constants';

type ReviewForm = {
    treatment_id: string | null,
    title: string | null,
    text: string | null,
    recommended: boolean |null,
}

type ReviewFormErrors = {
    treatment_id: string | null,
    title: string | null,
    text: string | null,
    recommended: string | null,
}

export const useFormReview = () => {


    const form = ref<ReviewForm>({
        treatment_id: '',
        title: null,
        text: null,
        recommended: null,
    });

    const errors = ref<ReviewFormErrors>({
        treatment_id: null,
        title: null,
        text: null,
        recommended: null,
    });

    const submitting = ref(false);

    const save = () => {

        if (submitting.value) {
            return;
        }

        submitting.value = true;


        const isValid = validateWithZod();


        if (!isValid) {
            console.log('errors', errors.value);
            submitting.value = false;
            return;
        }

        alert('Success!');
    };

    function validateWithZod() {


        const result = validatedSchema.safeParse(form.value);

        errors.value = {
            treatment_id: null,
            title: null,
            text: null,
            recommended: null,
        };

        if (!result.success) {
            for (const issue of result.error.issues) {
                const path = issue.path[0] as keyof ReviewFormErrors;
                errors.value[path] = issue.message;

                console.log(path, issue.message);
            }

            return false;
        }

        return result.success;
    }

    return {
        form,
        save,
        errors,
        submitting,
        TITLE_MAX_LENGTH,
        TITLE_MIN_LENGTH,
        TEXT_MAX_LENGTH,
        TEXT_MIN_LENGTH
    }
};