import { Go } from '../components/Go.js';

const buttonGo = document.getElementById('go');

const GoHelper = (onNavigate) => {
  buttonGo.addEventListener('click', () => {
    onNavigate('/vamos');
  });
  return Go();
};

export default GoHelper;
