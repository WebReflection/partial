# partial

[![build](https://github.com/WebReflection/partial/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/partial/actions/workflows/node.js.yml)

Partial function / Class application.

```js
import { partial, instance } from '@webreflection/partial';

// create a partial function: 3rd argument defaults to 60
const fromCharCode = partial(String.fromCharCode, ...[,,60]);

// pass only 2 args ... 3rd filled automatically
fromCharCode(40, 40);       // "((<"

// if explicitly passed the partial argument is overwritten
fromCharCode(40, 40, 40);   // "((("


const arr = instance(Array, ...[,2,3]);

arr(0);         // [0, 2, 3]
arr(...[1,,4])  // [1, 2, 4]
```

It is also possible to combine `partial` with bound function to have max freedom of choice.

```js
import { partial } from '@webreflection/partial';

function xyz(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

const point = {x: 0, y: 0, z: 0};
const updateCoords = partial(xyz.bind(point), ...[,,0]);

updateCoords(1, 2);
point; // {x: 1, y: 2, z: 0}
```
