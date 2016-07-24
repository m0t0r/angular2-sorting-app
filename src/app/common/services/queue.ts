import { Injectable } from '@angular/core';

@Injectable()
export class Queue {
  private queue: Array<number[]> = [];
  private size: number = 0;

  enqueue(array: number[]): void {
    this.queue.push(array);
    this.size = this.queue.length;
  }

  dequeue(): number[] {
    return this.queue.shift();
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size > 0;
  }
}
