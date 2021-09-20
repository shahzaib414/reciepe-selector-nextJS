export const getTitles = (title: string) => {
    const titles = title.split(" with ");

    return {title: titles[0], subTitle: `with ${titles[1]}`}
}

export const getUrl = (url?: string) => url ? `https:${url}` : ''