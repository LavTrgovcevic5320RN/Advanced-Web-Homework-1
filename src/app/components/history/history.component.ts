import { Component, OnInit } from '@angular/core';
import { HistoryService} from '../../services/history.service'
import { History } from '../../models/history'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

    constructor(private historyService: HistoryService) {
    }
    
    ngOnInit(): void {
    }

    getHistory(): History[]{
      return this.historyService.getHistory();
    }

}
