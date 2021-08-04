/** Interface with WASM */

class WASMInterface {
  static ENV_WEB = typeof window === 'object';
  static ENV_WORKER = typeof importScripts === 'function';

  constructor(params) {
    this.path = params.path;


    let importObject = {
      a: {
        "b": _emscripten_memcpy_big,
        "a": _fd_write
      };
    };
    fetch(this.path)
      .then(res => res.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, importObject))
      .then(res => console.log(res));
  }

  call(funcName, argTypes, args) {

  }
}

export default Interface;
