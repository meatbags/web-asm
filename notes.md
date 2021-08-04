# NOTES

emcc hello.c -s WASM=1 -o hello.html
emcc -o temp.html temp.c -O3 -s WASM=1 --shell-file template/shell_minimal.html
emcc -o temp.html temp.c -O3 -s WASM=1 --shell-file template/shell_minimal.html -s NO_EXIT_RUNTIME=1  -s "EXPORTED_RUNTIME_METHODS=['ccall']"
