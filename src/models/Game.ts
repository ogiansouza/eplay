class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
