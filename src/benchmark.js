/** benchmark */

class Benchmark {
  constructor() {
    this.iterations = 10000;
    this.benchmarks = [];
  }

  add(name, callback) {
    this.benchmarks.push({ name, callback });
  }

  run() {
    this.benchmarks.forEach(b => {
      let now = performance.now();
      console.log('START');
      for (let i=0; i<this.iterations; i++) {
        b.callback();
      }
      console.log(b.name, performance.now() - now);
    });
  }
}

export default Benchmark;
