import type {DateTime} from "luxon";
import type {User} from "@/types/User.ts";
export interface Experience {
    id: string | null,
    image: string | null,
    text: string | null,
    link: string | null,
    comments: number,
    owner: User | null,
    publishDate: string | DateTime | null,
}