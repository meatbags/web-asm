/** App */

import WASMWorker from './wasm_worker';

class App {
  constructor() {
    // worker
    let w = new WASMWorker();

    // WASM test
    // WebAssembly.instantiateStreaming(fetch('./build/app.wasm'), {})
		// .then(res => { console.log(res); });

    let importObject = {
      env: {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({ initial: 256 }),
        table: new WebAssembly.Table({ initial: 2, element: 'anyfunc' }),
        abort: console.log,
        env: {},
      }
    };
    fetch('./build/app.wasm')
      .then(res => res.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, importObject))
      .then(res => {
        console.log(res);
      });
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
