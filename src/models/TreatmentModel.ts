import type {BaseModel, Treatment, Supplier} from '@/types'

export class TreatmentModel implements BaseModel<Treatment>, Treatment {

    id: string | null;
    name: string | null;
    pictures: string[] | null;
    supplier: Supplier | null;

    constructor(data?: Partial<Treatment>) {
        this.id = data?.id ?? null;
        this.name = data?.name ?? null;
        this.pictures = data?.pictures ?? [];
        this.supplier = data?.supplier ?? null;

    }

    static fromJson(data: Treatment): TreatmentModel {
        return new TreatmentModel(data)
    }

    toApi(): Partial<Treatment> {
        return {
            name: this.name
        };
    }
}
