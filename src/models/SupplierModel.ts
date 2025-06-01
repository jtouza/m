import type {BaseModel, Supplier, User} from '@/types'

export class SupplierModel implements BaseModel<Supplier>, Supplier {

    id: string | null;
    name: string | null;
    logo: string | null;
    headquarters: string[] | null;

    constructor(data?: Partial<Supplier>) {
        this.id = data?.id ?? null;
        this.name = data?.name ?? null;
        this.logo = data?.logo ?? null;
        this.headquarters = data?.headquarters ?? [];
    }

    static fromJson(data: any): SupplierModel {
        return new SupplierModel(data)
    }

    toApi(): Partial<User> {
        return {
        }
    }
}
