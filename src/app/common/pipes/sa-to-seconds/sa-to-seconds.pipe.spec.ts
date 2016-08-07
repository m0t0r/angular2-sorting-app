import { SaToSecondsPipe } from './sa-to-seconds.pipe';

describe('Pipe: saToSeconds', () => {

  it('should be able to be instantiated', () => {
    let pipe = new SaToSecondsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be able to translate milliseconds to seconds', ()  => {
    let milliseconds =  17300, seconds = 17;
    let pipe = new SaToSecondsPipe();

    expect(pipe.transform(milliseconds)).toBe(seconds);

    milliseconds = 19900;
    seconds = 20;

    expect(pipe.transform(milliseconds)).toBe(seconds);
  });
});
