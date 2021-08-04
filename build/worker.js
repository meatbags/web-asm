/** Worker */

class Worker {
  constructor() {}

  onmessage(evt) {
    const { action, data } = evt.data;
    const res = {};

    switch (action) {
      case 'PING': res.data = 'PONG'; break;
      default: break;
    }

    postMessage(res);
  }
}

const app = new Worker();
onmessage = evt => app.onmessage(evt);
