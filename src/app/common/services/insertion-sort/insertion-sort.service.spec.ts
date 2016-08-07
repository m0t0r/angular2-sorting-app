import { addProviders, inject} from '@angular/core/testing';
import { InsertionSort } from './insertion-sort.service';

describe('Service: InsertionSort', () => {
  beforeEach(() => {
    addProviders([InsertionSort]);
  });

  it('should be able to be instantiated', inject([InsertionSort], (insertionSort: InsertionSort) => {
      expect(insertionSort).toBeTruthy();
  }));

  it('should be able to sort items which are in reverse order', inject([InsertionSort], (insertionSort: InsertionSort) => {
    let itemsActual = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let itemsExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    insertionSort.sort(itemsActual);

    expect(itemsActual).toEqual(itemsExpected);
  }));
});
