import { sum } from './utils/sum.js';
import { helloPromise } from './utils/promises'

import '../public/css/main.css';

const hello = 'hello';
console.log(hello);

console.log(sum(8, 5));

helloPromise()
    .then(value => console.log(value));