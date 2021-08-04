/** App */

//import WASMWorker from './wasm_worker';
import loader from "@assemblyscript/loader"

class App {
  constructor() {
    // worker
    // let w = new WASMWorker();

    // WASM test
    // WebAssembly.instantiateStreaming(fetch('./build/app.wasm'), {})
		// .then(res => { console.log(res); });

    fetch('build/optimized.wasm')
      .then(res => res.arrayBuffer())
      .then(bytes => loader.instantiate(bytes, {}))
      .then(({ exports }) => {
        console.log(exports.add(1, 2));
      });
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
