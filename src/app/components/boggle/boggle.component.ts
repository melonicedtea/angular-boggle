import { Component, OnInit } from '@angular/core';
import { BoggleService } from '../../services/boggle.service';
import { ClearService } from '../../services/clear.service';
import { Die } from '../../die';

@Component({
  selector: 'app-boggle',
  templateUrl: './boggle.component.html',
  styleUrls: ['./boggle.component.css'],
})
export class BoggleComponent implements OnInit { 
  boggleBoxID: string = "";
  dice: Die[][] = [];
  word: string = '';
  wordList:string[] = [];
  score: number = 0;

  constructor(private boggleService: BoggleService,
    private clearService: ClearService) { }

  ngOnInit(): void {
    this.boggleService.getBoggleBox().subscribe(
      (boggleBox) => (this.dice = boggleBox.dies, this.boggleBoxID = boggleBox.boggleBoxID) );
  }

  selectDie(die: Die){
    this.word += die.value;
  }

   async onSubmit(){
    //this.score += await this.boggleService.checkScore(this.word);
    let isValid = await this.boggleService.checkValidWord(this.boggleBoxID, this.word);
      if(isValid == true) {
        this.wordList.push(this.word);
        //this.score += 1;
        this.score += await this.boggleService.checkScore(this.word);
      }
      this.word = '';
      this.clearService.clearIsSelected();
      
  }
}
