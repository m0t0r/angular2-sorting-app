export interface ISorting {

  sort(array: number[]): void;
  reset(): void;
  getNumberOfSteps(): number;
  getNextStep(): number[];
  getAlgorithmName(): string;
}
