import type {Supplier} from "@/types/Supplier.ts";

export interface Treatment {
    id: string | null,
    name: string | null,
    pictures: string[] | null,
    supplier: Supplier | null,
}