import { addProviders, inject} from '@angular/core/testing';
import { HeapSort } from './heap-sort.service';

describe('Service: HeapSort', () => {
  beforeEach(() => {
    addProviders([HeapSort]);
  });

  it('should be able to be instantiated', inject([HeapSort], (heapSort: HeapSort) => {
    expect(heapSort).toBeTruthy();
  }));

  it('should be able to sort items which are in reverse order', inject([HeapSort], (heapSort: HeapSort) => {
    let itemsActual = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let itemsExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    heapSort.sort(itemsActual);

    expect(itemsActual).toEqual(itemsExpected);
  }));
});
