class Restaurante {
  category: string[]
  description: string
  image: string
  title: string
  id: number
  note: string

  constructor(
    id: number,
    category: string[],
    description: string,
    image: string,
    title: string,
    note: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.title = title
    this.image = image
    this.note = note
  }
}

export default Restaurante
