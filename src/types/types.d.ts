declare type Game = {
  id: number
  name: string
  description: string
  release_date: string | null
  prices: {
    discount: number
    old: number
    current: number
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
    gallery: GalleryItem[]
  }
}
declare type GalleryItem = {
  type: 'image' | 'video'
  url: string
}
