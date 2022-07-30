export interface Title {
    id: string;
    type: string;
    attributes: {
        title: {
            en: string,
        },
        altItems: object[],
        description: {
            en: string
        }
    };
}

export interface MainState {
    titles: Title[];
    loading: boolean;
}

export interface Action<T> {
    type: string;
    payload: T;
}
