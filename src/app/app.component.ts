import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { saChartCardComponent } from './common/components/sa-chart-card/sa-chart-card.component';

import { InsertionSort } from './common/services/insertion-sort/insertion-sort.service';
import { MergeSort } from './common/services/merge-sort/merge-sort.service';
import { QuickSort } from './common/services/quick-sort/quick-sort.service';
import { HeapSort } from './common/services/heap-sort/heap-sort.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon,
    saChartCardComponent
  ],
  providers: [MdIconRegistry, InsertionSort, MergeSort, QuickSort, HeapSort]
})
export class AppComponent {
  public data: number[] = [];

  constructor(public insertionSort: InsertionSort,
              public mergeSort: MergeSort,
              public quickSort: QuickSort,
              public heapSort: HeapSort) {
    this.data = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }

  run() {}

}
