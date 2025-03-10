export class Game {
  id: number;
  image: string;
  infos: string[];
  system: string;
  category: string;
  title: string;
  description: string;

  constructor(
    id: number,
    image: string,
    infos: string[],
    system: string,
    category: string,
    title: string,
    description: string
  ) {
    this.id = id;
    this.image = image;
    this.infos = infos;
    this.system = system;
    this.category = category;
    this.title = title;
    this.description = description;
  }
}
