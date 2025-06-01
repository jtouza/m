export interface BaseModel<T> {
    toApi(): Partial<T>;
}

export interface BaseModelStatic<T, M extends BaseModel<T>> {
    fromJson(data: any): M;
}