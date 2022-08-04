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

export interface Tag {
    id: string;
    type: string;
    attributes: {
        name: {
            en: string;
        }
    }
}

export interface MainState {
    titles: Title[];
    loading: boolean;
    tags: Tag[];
}

export interface Action {
    type: string;
    payload?: any;
    isLoading?: boolean;
}
