import {ref} from "vue";
import {treatmentApiClient} from "@/api/clients/treatmentApiClient.ts";

type TreatmentOption = {
    value: string,
    label: string,
}

export const useTreatments = () => {

    const treatments = ref<TreatmentOption[]>([]);

    const getTreatments = async () => {
        treatments.value = treatmentApiClient.fetchOptions();
    }

    return {
        treatments,
        getTreatments,
    };
}