import { addProviders, inject} from '@angular/core/testing';
import { MergeSort } from './merge-sort.service';

describe('Service: MergeSort', () => {
  beforeEach(() => {
    addProviders([MergeSort]);
  });

  it('should be able to be instantiated', inject([MergeSort], (mergeSort: MergeSort) => {
    expect(mergeSort).toBeTruthy();
  }));

  it('should be able to sort items which are in reverse order', inject([MergeSort], (mergeSort: MergeSort) => {
    let itemsActual = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let itemsExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    mergeSort.sort(itemsActual);

    expect(itemsActual).toEqual(itemsExpected);
  }));
});
