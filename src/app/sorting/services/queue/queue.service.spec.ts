import { Queue } from './queue.service';

describe('Service: Queue', () => {
  var queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should be able to be instantiated', () => {
    expect(queue).toBeDefined();
  });

  it('should be able to return its size', () => {
    expect(queue.getSize()).toBe(0);
  });

  it('should be able to enqueue an array of items and increase its size', () => {
    let items = [1, 2, 3];
    queue.enqueue(items);

    expect(queue.getSize()).toBe(1);
  });

  it('should be able to dequeue an item and decrease its size', () => {
    let items = [1, 2, 3];
    queue.enqueue(items);
    queue.enqueue(items);

    expect(queue.getSize()).toBe(2);

    queue.dequeue();
    expect(queue.getSize()).toBe(1);
  });

  it('should be able to know if queue is empty', () => {
    let items = [1, 2, 3];

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(items);
    expect(queue.isEmpty()).toBe(false);
  });

  it('should be able to empty itself', () => {
    let items = [1, 2, 3];
    queue.enqueue(items);
    expect(queue.isEmpty()).toBe(false);

    queue.setEmpty();
    expect(queue.isEmpty()).toBe(true);
  });
});
