export interface Title {
    id: string;
    type: string;
    attributes: {
        title: {
            en: string;
        },
        description: {
            en: string;
        },
        tags: {
            attributes: {
                name: {
                    en: string;
                }
            }
        }[]
    }
}

export interface MainState {
    titles: Title[];
    loading: boolean;
}

export interface Action<T> {
    type: string;
    payload?: T;
    isLoading?: boolean;
}
