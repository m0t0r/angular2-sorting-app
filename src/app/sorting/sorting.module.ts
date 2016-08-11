import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdCardModule } from '@angular2-material/card';

import { SaChartCardComponent} from './components/sa-chart-card/sa-chart-card.component';
import { SaToSecondsPipe} from './pipes/sa-to-seconds/sa-to-seconds.pipe';

import { InsertionSort } from './services/insertion-sort/insertion-sort.service';
import { MergeSort } from './services/merge-sort/merge-sort.service';
import { QuickSort } from './services/quick-sort/quick-sort.service';
import { HeapSort } from './services/heap-sort/heap-sort.service';
import { CommandService } from './services/command/command.service';


@NgModule({
  imports: [CommonModule, MdButtonModule, MdIconModule, MdCardModule],
  exports: [SaChartCardComponent],
  declarations: [SaChartCardComponent, SaToSecondsPipe],
  providers: [InsertionSort, MergeSort, QuickSort, HeapSort, CommandService]
})

export class SortingModule { }
