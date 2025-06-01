
import {DateTime} from "luxon";
import type {User, Treatment} from "@/types";

export interface Review {
    id: string | null,
    title: string | null,
    text: string | null,
    recommended: boolean,
    score: number,
    price: number,
    currency: 'EUR' | 'USD',
    owner: User | null,
    treatment: Treatment | null,
    createdAt: string | DateTime | null,
}