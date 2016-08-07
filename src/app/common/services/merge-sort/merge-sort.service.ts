import { Injectable } from '@angular/core';
import { ISorting } from '../ISorting';
import { Queue } from '../queue/queue.service';

@Injectable()
export class MergeSort implements ISorting {
  private queue: Queue;

  constructor() { this.queue = new Queue(); }

  sort(array:Array<number>) {
    // enqueue original array state
    this.queue.enqueue([...array]);

    let auxArray = [];
    this._sort(array, auxArray, 0, array.length - 1);
  }

  private _sort(array: number[], auxArray: number[], lo: number, hi: number) {
    if (hi <= lo) return;
    let mid = Math.floor(lo + (hi - lo) / 2);
    this._sort(array, auxArray, lo, mid);
    this._sort(array, auxArray, mid + 1, hi);
    this.merge(array, auxArray, lo, mid, hi);
  }

  private merge(array: number[], auxArray: number[], lo: number, mid: number, hi: number) {

    for(let k = lo; k <= hi; k++) {
      auxArray[k] = array[k];
    }

    let i = lo, j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        array[k] = auxArray[j++];
        this.queue.enqueue([...array]);
      }
      else if (j > hi) {
        array[k] = auxArray[i++];
        this.queue.enqueue([...array]);
      }
      else if (auxArray[j] < auxArray[i]) {
        array[k] = auxArray[j++];
        this.queue.enqueue([...array]);
      }
      else {
        array[k] = auxArray[i++];
        this.queue.enqueue([...array]);
      }
    }
  }

  getNumberOfSteps(){
    return this.queue.getSize();
  }

  getNextStep() {
    return this.queue.dequeue();
  }

  getAlgorithmName(): string {
    return 'Merge Sort';
  }
}
