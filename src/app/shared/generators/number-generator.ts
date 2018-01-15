export class NumberGenerator {
  rollDie(sides: number): number {
    return this.numberBetween(1, sides);
  }

  rollGaussianDie(sides: number): number {
    return this.gaussianNumberBetween(1, sides);
  }

  rollDice(sides: number, times: number): number[] {
    const retVal: number[] = new Array();
    for (let n = 0; n < times; n++) {
      retVal.push(this.rollDie(sides));
    }
    return retVal;
  }

  public numberBetween(min: number, max: number): number {
    return this.numBetween(Math.random(), min, max);
  }

  public rollTotal(sides: number, times: number): number {
    const roll = this.rollDice(sides, times);
    return roll.reduce((a, b) => a + b);
  }

  /**
   * Similar to 'Success Dice', rolls 6ds and counts number above a threshold.
   */
  public rollThresholds(times: number, threshold: number) {
    let count = 0;
    for (let i = 0; i < times; i++) {
      count += this.rollDie(6) > threshold ? 1 : 0;
    }
    return count;
  }

  public gaussianNumberBetween(min: number, max: number): number {
    const half = (max - min) / 2;
    return Math.round(min + half + half * this.gaussianNumber());
  }

  public gaussianNumber(): number {
    while (true) {
      const r = Math.sqrt(-2 * Math.log(Math.random()));
      const t = 2 * Math.PI * Math.random();
      const x = r * Math.cos(t) / 2.8;
      if (x > -1 && x < 1) {
        return x;
      }
    }
  }

  private numBetween(source: number, min: number, max: number): number {
    min = Number(min);
    max = Number(max);
    return Math.floor(source * (max - min + 1)) + min;
  }
}
