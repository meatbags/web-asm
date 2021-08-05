
export function sum(a:i32, b:i32): i32 {
  return a + b;
}

export function bench(): i32 {
  let sum: f64 = 0;
  for (let i=0; i<100000; i++) {
    sum += Math.random() * Math.random();
  }
  return 0;
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
