
import {DateTime} from "luxon";
import type {BaseModel, Review, Treatment} from '@/types'
import {UserModel, TreatmentModel} from "@/models";

export class ReviewModel implements BaseModel<Review>, Review {

    id: string | null;
    title: string | null;
    text: string | null;
    recommended: boolean = false;
    score: number = 0;
    price: number = 0;
    owner: UserModel | null;
    currency: 'EUR' | 'USD';
    treatment: TreatmentModel | null;
    createdAt : DateTime | null;

    constructor(data?: Partial<Review>) {
        this.id = data?.id ?? null;
        this.title = data?.title ?? null;
        this.text = data?.text ?? null;
        this.recommended = data?.recommended ?? false;
        this.score = data?.score ?? 0;
        this.price = data?.price ?? 0;
        this.currency = data?.currency ?? 'EUR';
        this.owner = data?.owner ? UserModel.fromJson(data.owner) : null
        this.treatment = data?.treatment ? TreatmentModel.fromJson(data.treatment) : null;
        this.createdAt = data?.createdAt
            ? typeof data.createdAt === 'string'
                ? DateTime.fromISO(data.createdAt)
                : data.createdAt
            : null;
    }

    static fromJson(data: Review): ReviewModel {
        return new ReviewModel(data)
    }

    toApi(): Partial<Review> {
        return {
            title: this.title,
            text: this.text,
            recommended: this.recommended,
            treatment: this.treatment?.id != null
                ? { id: this.treatment.id } as unknown as Treatment
                : null,
        }
    }
}
