export type ContentfulApiResponse<I> = {
    items: {
        fields: I,
        sys: {
            id: string
        }
    }[]
    includes?: {
        Entry: Entry[]
        Asset: Asset[]
    }

}

type Entry = {
    sys: {
        id: string
        contentType: {
            sys: {
                id: string
            }
        }
    },
    fields: {
        name: string
    }
}

type Asset = {
    sys: {
        id: string
    }
    fields: {
        fileName: string
        contentType: string
        file: {
            url: string
        }
    }
}

type RecipeTag = {
    sys: {
        id: string
    },
    name?: string
}

type RecipeChef = {
    sys: {
        id: string
    },
    name?: string
}

export type Recipe = {
    title: string
    photo: {
        sys: {
            id: string
        },
        url?: string
    },
    calories: number,
    description: string
    id: string
    tags?: RecipeTag[]
    chef?: RecipeChef
}

