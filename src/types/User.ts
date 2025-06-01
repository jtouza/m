export interface User {
    id: string | null;
    firstName: string | null,
    lastName: string | null,
    picture: string | null,
    title: 'mrs' | 'miss' | 'mr' | 'ms' | null,
    email: string | null,
    location: string | null,
}