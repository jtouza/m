import {ApiClient} from '@/api/apiClient';

import type {Treatment} from "@/types";
import {TreatmentModel} from "@/models";


type TreatmentOption = {
    value: string,
    label: string,
}

class TreatmentApiClient extends ApiClient<TreatmentModel, Treatment> {
    constructor() {
        super('treatments', (data: Treatment) => new TreatmentModel(data));
    }

    fetchOptions(): TreatmentOption[] {
        return [
            { value: 'A001', label: 'Aumento de pecho' },
            { value: 'A002', label: 'Abdominoplastia' },
            { value: 'A003', label: 'Rinoplastia' }
        ];
    }
}

export const treatmentApiClient:TreatmentApiClient = new TreatmentApiClient();