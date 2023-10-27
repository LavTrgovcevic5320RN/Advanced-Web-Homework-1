export interface SentimentAnalysis {
  timestamp: string,
  time: number,
  lang: string,
  langConfidence: number,
  text: string,
  sentiment: Sentiment
}


export interface Sentiment {
  score: number,
  type: string
}
