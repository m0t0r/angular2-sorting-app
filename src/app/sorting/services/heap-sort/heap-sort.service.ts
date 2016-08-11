import { Injectable } from '@angular/core';
import { ISorting } from '../ISorting';
import { Queue } from '../queue/queue.service';

@Injectable()
export class HeapSort implements ISorting {
  private queue: Queue;

  constructor() { this.queue = new Queue(); }

  sort(array:number[]): void {
    // enqueue original array state
    this.queue.enqueue([...array]);

    let size = array.length - 1;

    this.buildMaxHeap(array, size);
    while(size > 0) {
      this.swap(array, 0, size);
      size -= 1;
      this.siftDown(array, 0, size);
    }
  }

  private buildMaxHeap(array: number[], size: number) {
    for(let i = Math.floor(array.length / 2 - 1); i >= 0 ; i--) {
      this.siftDown(array, i, size);
    }
  }

  private leftChild(i: number): number {
    return 2 * i + 1;
  }

  private rightChild(i: number): number {
    return 2 * i + 2;
  }

  private siftDown(array: number[], i: number, size: number) {
    let maxIndex =  i;
    let l = this.leftChild(i);
    let r = this.rightChild(i);

    if (l <= size && array[l] > array[maxIndex]) {
      maxIndex = l;
    }

    if (r <= size && array[r] > array[maxIndex]) {
      maxIndex = r;
    }

    if (i !== maxIndex) {
      this.swap(array, i, maxIndex);
      this.siftDown(array, maxIndex, size);
    }
  }

  private swap(array: number[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;

    this.queue.enqueue([...array]);
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
    return 'Heap Sort';
  }
}
