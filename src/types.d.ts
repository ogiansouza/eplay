declare interface GalleryType {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  id: number
  name: string
  description: string
  release_data?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryType[]
  }
}
