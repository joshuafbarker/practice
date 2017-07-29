import { check } from './module';
import _ from 'lodash';

// styles
import './sass/main.sass';

console.log('App.js present.');
console.log(check());

function component(){
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'world'], ' ');
  return element;
}

document.body.appendChild(component());
