declare interface GalleryItem {
  type: 'imagem' | 'video'
  url: string
}
declare type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    publisher: string
    category: string
    developer: string
    system: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
