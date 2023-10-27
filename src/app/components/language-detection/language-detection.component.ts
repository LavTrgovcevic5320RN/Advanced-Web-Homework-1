import { Component, OnInit } from '@angular/core';
import { DetectedLanguage} from'../../models/language-detection'
import { LanguageDetectionService} from '../../services/language-detection.service'

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit{
    text: string = '';
    clean: boolean = false;
    detectedLanguages: DetectedLanguage[] = [];

    constructor(private languageDetectionService: LanguageDetectionService) {
    }


    ngOnInit(): void {
    }

    hasText(){
      return this.text.length == 0;
    }

    detectText(){
      this.languageDetectionService.getDetectedLanguage(this.text, this.clean).subscribe( (detectedLanguage) => {
        this.detectedLanguages = detectedLanguage.detectedLangs
      })
    }

}
