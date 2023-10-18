export interface EntityExtraction {
  timestamp: string,
  time: number,
  lang: string,
  annotations: Entity[]
}

export interface Entity {
    abstract: string,
    title: string,
    label: string,
    confidence: number,
    spot: string,
    image: Image,
    categories: string[],
}

export interface Image {
  full: string,
  thumbnail: string
}
