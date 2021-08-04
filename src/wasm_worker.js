/** wasm worker */

class WASMWorker {
  constructor(path='') {
    this.worker = new Worker('./build/worker.js');
    this.worker.onmessage = evt => { this.onmessage(evt); };
    this.worker.postMessage({action: 'PING', data: null});
  }

  onmessage(evt) {
    console.log(evt.data);
  }
}

export default WASMWorker;
