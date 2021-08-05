/** App */

//import WASMWorker from './wasm_worker';
import loader from "@assemblyscript/loader"

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
    const sumJS = (a, b) => a + b;
    const sumASM = this.asm.sum;
    const now = performance.now();
    const iter = 10000000;
    this.runBenchmark(() => { sumJS(2047,3032); }, iter).then(res => { console.log('JS', res-now); });
    this.runBenchmark(() => { sumASM(2047,3032); }, iter).then(res => { console.log('ASM', res-now); });

  }
}

window.addEventListener('load', () => {
  const app = new App();
});
