
export function sum(a:i32, b:i32): i32 {
  return a + b;
}

/*
export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function bench(count: i32): i32 {
  //let primes = new StaticArray<i32>(count);
  let primes = new Int32Array(count);
  let index = 0;
  let n = 2;
  let is_prime = true;
  while (index < count) {
    is_prime = true;
    for (let i=0; i<index; i++) {
      if (n % unchecked(primes[i]) == 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      unchecked(primes[index] = n);
      index++;
    }
    n++;
  }
  return index;
}

export function helloWorld(): string {
  return 'hello world';
}
*/
