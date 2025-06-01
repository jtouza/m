import {DateTime} from "luxon";
import type {BaseModel, Experience} from '@/types';
import {UserModel} from '@/models';

export class ExperienceModel implements BaseModel<Experience>, Experience {

    id: string | null;
    image: string | null;
    text: string | null;
    link: string | null;
    comments: number;
    publishDate: string | DateTime | null;
    owner : UserModel | null;

    constructor(data?: Partial<Experience>) {
        this.id = data?.id ?? null;
        this.image = data?.image ?? null;
        this.text = data?.text ?? null;
        this.link = data?.link ?? null;
        this.comments = data?.comments ?? 0;
        this.owner = data?.owner ? UserModel.fromJson(data.owner) : null

        this.publishDate = data?.publishDate
            ? typeof data.publishDate === 'string'
                ? DateTime.fromISO(data.publishDate)
                : data.publishDate
            : null;
    }

    static fromJson(data: any): ExperienceModel {
        return new ExperienceModel(data)
    }

    toApi(): Partial<Experience> {
        return {
            text: this.text,
        };
    }
}
