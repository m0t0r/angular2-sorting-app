/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InsertionSort } from './sorting/services/insertion-sort/insertion-sort.service';
import { MergeSort } from './sorting/services/merge-sort/merge-sort.service';
import { QuickSort } from './sorting/services/quick-sort/quick-sort.service';
import { HeapSort } from './sorting/services/heap-sort/heap-sort.service';
import { CommandService } from './sorting/services/command/command.service';

describe('App: Angular2SortingApp', () => {
  beforeEach(() => {
    addProviders([AppComponent, InsertionSort, MergeSort, QuickSort, HeapSort, CommandService]);
  });

  it('should create the app', inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
  }));
});
