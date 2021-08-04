/** App */

import WASMWorker from './wasm_worker';

class App {
  constructor() {
    let w = new WASMWorker();
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
