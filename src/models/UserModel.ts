import type {BaseModel, User} from '@/types'

export class UserModel implements BaseModel<User>, User {

    id: string | null;
    firstName: string | null;
    lastName: string | null;
    picture: string | null;
    title: 'mrs' | 'miss' | 'mr' | 'ms' | null;
    email: string | null;
    location: string | null;

    constructor(data?: Partial<User>) {
        this.id = data?.id ?? null;
        this.firstName = data?.firstName ?? null;
        this.lastName = data?.lastName ?? null;
        this.picture = data?.picture ?? null;
        this.title = data?.title ?? null;
        this.email = data?.email ?? null;
        this.location = data?.location ?? null;
    }

    get display_name(): string {
        return [this.firstName, this.lastName].filter(Boolean).join(' ') || 'Unknown User';
    }

    get full_name(): string {
        return [this.firstName, this.lastName].filter(Boolean).join(' ') || 'Unknown User';
    }

    static fromJson(data: User): UserModel {
        return new UserModel(data)
    }

    toApi(): Partial<User> {
        return {
            firstName: this.firstName!,
            lastName: this.lastName!,
            picture: this.picture!,
            title: this.title!,
            email: this.email!,
            location: this.location!
        };
    }
}
