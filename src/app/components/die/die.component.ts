import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'
import { ClearService } from '../../services/clear.service'

import { Die } from '../../die';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent implements OnInit {
  @Input() die!: Die;
  @Output() onSelectDie: EventEmitter<Die> 
  = new EventEmitter();
  subscription!: Subscription;

  isShow: Boolean = true;
  isSelected: Boolean = false;

  color = 'transparent';

  constructor(private clearService:ClearService){
    this.subscription = this.clearService
    .onClear()
    .subscribe((value) => (this.isSelected = value));
  }

  ngOnInit(): void {
  }

  onSelect(die: Die) {
    this.onSelectDie.emit(die);
    this.isSelected = !this.isSelected;
  }

}
