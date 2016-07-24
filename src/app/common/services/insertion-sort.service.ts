import { Injectable } from '@angular/core';
import { Queue } from './queue';

@Injectable()
export class InsertionSort implements ISorting {

  constructor(private queue: Queue) { }

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

  playSteps() {
    // DEBUG
    for(let i  = 0; i < this.queue.getSize(); i++) {
      setTimeout(() => {
        console.log('DEBUG', this.queue.dequeue());
      }, i * 1000);
    }
  }

  getNumberOfSteps(){
    return this.queue.getSize();
  }

  getNextStep() {
    return this.queue.dequeue();
  }

}
