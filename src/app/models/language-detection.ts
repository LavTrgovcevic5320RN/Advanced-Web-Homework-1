export interface LanguageDetection {
  timestamp: string,
  time: string,
  detectedLangs: DetectedLanguage[]
}

export interface DetectedLanguage{
  lang: string,
  confidence: number
}
