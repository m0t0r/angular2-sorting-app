import { Injectable } from '@angular/core';
import { ISorting } from '../ISorting';
import { Queue } from '../queue/queue.service';

@Injectable()
export class InsertionSort implements ISorting {
  private queue: Queue;

  constructor() { this.queue = new Queue(); }

  sort(array: Array<number>) {
    // enqueue original array state
    this.queue.enqueue([...array]);

    for(let i = 1; i < array.length; i++) {
      let j = i;
      while(j > 0 && array[j - 1] > array[j]) {
        let tmp = array[j];
        array[j] = array[j-1];
        array[j - 1] = tmp;

        j = j - 1;
        this.queue.enqueue([...array]);
      }
    }
  }

  getNumberOfSteps(): number {
    return this.queue.getSize();
  }

  getNextStep(): number[] {
    return this.queue.dequeue();
  }

  getAlgorithmName(): string {
    return 'Insertion Sort';
  }
}
