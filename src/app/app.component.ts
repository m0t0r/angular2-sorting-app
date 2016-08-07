import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { saChartCardComponent } from './common/components/sa-chart-card/sa-chart-card.component';

import { InsertionSort } from './common/services/insertion-sort/insertion-sort.service';
import { MergeSort } from './common/services/merge-sort/merge-sort.service';
import { QuickSort } from './common/services/quick-sort/quick-sort.service';
import { HeapSort } from './common/services/heap-sort/heap-sort.service';

import { CommandService } from './common/services/command/command.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MdIcon,
    saChartCardComponent
  ],
  providers: [MdIconRegistry, InsertionSort, MergeSort, QuickSort, HeapSort]
})
export class AppComponent implements OnInit{
  public data: number[] = [];
  private isStarted: boolean;
  private counter: number = 0;

  constructor(public insertionSort: InsertionSort, public mergeSort: MergeSort,
              public quickSort: QuickSort, public heapSort: HeapSort,
              private command: CommandService) { }

  ngOnInit(): void {
    // generate reverse data on init
    this.generateReverseData(20);
  }

  onTabChange(e) {
    this.generateData(e.index);

    // make sure to stop running sorting on tab change
    this.stop();
  }

  generateData(tabIndex) {
    switch (tabIndex) {
      case 0:
        this.generateReverseData(20);
        break;
      case 1:
        this.generateRandomData(20);
        break;
      case 2:
        this.generateFewUniqueData(20);
    }
  }

  generateReverseData(n: number) {
    this.data = [];
    for(let i = n; i >= 1; i--) {
      this.data.push(i);
    }
  }

  generateRandomData(n: number) {
    this.data = [];
    for(let i = 0; i < n; i++) {
      this.data.push(this.getRandomInt(1, n));
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateFewUniqueData(n: number) {
    let numbers = [5, 7, 10, 15, 19];
    this.data = [];
    for(let i = 0; i < n; i++) {
      this.data.push(numbers[this.getRandomInt(0, 4)]);
    }
  }

  start() {
    this.isStarted = true;
    this.counter = 0;
    this.command.sendCommand('start');
  }

  stop() {
    this.isStarted = false;
    this.command.sendCommand('stop');
  }

  onSortCompleteCount(algName) {
    this.counter++;
    this.isStarted = this.counter < 4;
    console.log(`[INFO] ${algName} has just finished sorting!`);
  }
}
