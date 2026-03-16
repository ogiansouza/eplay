class Games {
  category: string
  description: string
  image: string
  system: string
  title: string
  infos: string[]
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    system: string,
    title: string,
    infos: string[]
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.title = title
    this.infos = infos
  }
}

export default Games
