export class Queue {
  private queue: Array<number[]> = [];
  private size: number = 0;

  enqueue(array: number[]): void {
    this.queue.push(array);
    this.size = this.queue.length;
  }

  dequeue(): number[] {
    this.size--;
    return this.queue.shift();
  }

  getSize(): number {
    return this.size;
  }

  setEmpty(): void {
    this.queue.length = 0;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
