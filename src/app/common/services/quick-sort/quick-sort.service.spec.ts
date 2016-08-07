import { addProviders, inject} from '@angular/core/testing';
import { QuickSort } from './quick-sort.service';

describe('Service: QuickSort', () => {
  beforeEach(() => {
    addProviders([QuickSort]);
  });

  it('should be able to be instantiated', inject([QuickSort], (quickSort: QuickSort) => {
    expect(quickSort).toBeTruthy();
  }));

  it('should be able to sort items which are in reverse order', inject([QuickSort], (quickSort: QuickSort) => {
    let itemsActual = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let itemsExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    quickSort.sort(itemsActual);

    expect(itemsActual).toEqual(itemsExpected);
  }));
});
