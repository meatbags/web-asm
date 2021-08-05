/** App */

//import WASMWorker from './wasm_worker';
import loader from "@assemblyscript/loader";
import Benchmark from './benchmark';

class App {
  constructor() {
    // worker
    // let w = new WASMWorker();
    // WebAssembly.instantiateStreaming(fetch('./build/app.wasm'), {})
		// .then(res => { console.log(res); });

    let wasmSource = 'build/out.wasm';
    console.log('Loading:', wasmSource);
    fetch(wasmSource)
      .then(res => res.arrayBuffer())
      .then(bytes => loader.instantiate(bytes, {}))
      .then(res => {
        this.asm = res.exports;
        this.bench();
      });
  }

  runBenchmark(callback, iter) {
    return new Promise((resolve, reject) => {
      let i = 0;
      while (i++ < iter) {
        callback;
      }
      resolve(performance.now());
    });
  }

  bench() {
    const benchJS = () => {
      let sum = 0;
      for (let i=0; i<100000; i++) {
        sum += Math.random() * Math.random();
      }
      return 0;
    };
    const benchASM = this.asm.bench;

    // run benchmark
    const benchmark = new Benchmark();
    benchmark.add('ASM', () => { benchASM(); });
    benchmark.add('JS', () => { benchJS(); });
    benchmark.run();
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
