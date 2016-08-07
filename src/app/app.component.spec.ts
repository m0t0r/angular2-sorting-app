/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InsertionSort } from './common/services/insertion-sort/insertion-sort.service';
import { MergeSort } from './common/services/merge-sort/merge-sort.service';
import { QuickSort } from './common/services/quick-sort/quick-sort.service';
import { HeapSort } from './common/services/heap-sort/heap-sort.service';
import { CommandService } from './common/services/command/command.service';

describe('App: Angular2SortingApp', () => {
  beforeEach(() => {
    addProviders([AppComponent, InsertionSort, MergeSort, QuickSort, HeapSort, CommandService]);
  });

  it('should create the app', inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
  }));
});
