import { LinkedList } from './LinkedList.js';

let list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.atIndex(3));
console.log(list.find('hamster'));
console.log(list.toString());
