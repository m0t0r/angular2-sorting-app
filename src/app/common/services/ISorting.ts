export interface ISorting {

  sort(array: number[]): void;
  getNumberOfSteps(): number;
  getNextStep(): number[];
  getAlgorithmName(): string;
}
