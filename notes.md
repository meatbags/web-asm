# NOTES

# WASM without EMSCRIPTEN
# https://github.com/mikerourke/learn-webassembly/tree/master/chapter-06-interact-with-js
emcc build/app.c -O3 -s WASM=1 -s MODULARIZE=1 -o build/app.js

# ???
emcc src/app.c -s WASM=1 -o build/app.wasm

# specify output formats
emcc hello.c -s WASM=1 -o hello.html
emcc -o temp.html temp.c -O3 -s WASM=1 --shell-file template/shell_minimal.html
emcc -o temp.html temp.c -O3 -s WASM=1 --shell-file template/shell_minimal.html -s NO_EXIT_RUNTIME=1  -s "EXPORTED_RUNTIME_METHODS=['ccall']"
