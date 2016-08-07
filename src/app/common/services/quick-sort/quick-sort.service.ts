import { Injectable } from '@angular/core';
import { ISorting } from '../ISorting';
import { Queue } from '../queue/queue.service';

@Injectable()
export class QuickSort implements ISorting {
  private queue: Queue;

  constructor() { this.queue = new Queue(); }

  sort(array:number[]):void {
    // enqueue original array state
    this.queue.enqueue([...array]);

    this.shuffle(array);
    this._sort(array, 0, array.length - 1);
  }


  private _sort(array: number[], lo: number, hi: number) {

    if (hi <= lo) return;
    let lt = lo, gt = hi;
    let pivot = array[lo];
    let i = lo;

    while(i <= gt) {
      if (array[i] < pivot) {
        this.swap(array, lt++, i++);
        this.queue.enqueue([...array]);
      } else if (array[i] > pivot) {
        this.swap(array, i, gt--);
        this.queue.enqueue([...array]);
      } else {
        i++;
        this.queue.enqueue([...array]);
      }
    }

    this._sort(array, lo, lt - 1);
    this._sort(array, gt + 1, hi);
  }

  /**
   * Durstenfeld shuffle algorithm
   */

  private shuffle(array: number[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  private swap(array: number[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }


  getNumberOfSteps(): number {
    return this.queue.getSize();
  }

  getNextStep(): number[] {
    return this.queue.dequeue();
  }

  reset(): void {
    this.queue.setEmpty();
  }

  getAlgorithmName(): string {
    return 'Quick Sort';
  }
}
