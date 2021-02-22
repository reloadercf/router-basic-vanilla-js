import { Go } from '../components/Go.js';
import { GoFunction } from '../utils/GoFunction.js';

const buttonGo = document.getElementById('go');

export const GoHelper = (onNavigate) => {
  buttonGo.addEventListener('click', () => {
    onNavigate('/vamos');
  });

  return Go();
};

export const seterGoFunction = () => GoFunction();
