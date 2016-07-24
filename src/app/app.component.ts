import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import * as d3 from 'd3';

import { InsertionSort } from './common/services/insertion-sort.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry, InsertionSort]
})
export class AppComponent {
  public data: number[] = [];
  public message: string = '';

  constructor(private insertionSort: InsertionSort) {
    this.data = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }

  run() {
    //this.data = [2, 4, 8, 1, 9, 4, 3, 6, 7, 5];
    this.data = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    this.insertionSort.sort(this.data);
    //this.insertionSort.playSteps();

    for(let i = 0; i < this.insertionSort.getNumberOfSteps(); i++) {
      setTimeout(() => {
        this.data = this.insertionSort.getNextStep();
        if (i === this.insertionSort.getNumberOfSteps() - 1) { this.message = 'Sorted!'; }
      }, i * 500);
    }
  }

}
