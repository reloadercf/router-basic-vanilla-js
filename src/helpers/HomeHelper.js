import { Home } from '../components/Home.js';

const buttonHome = document.getElementById('home');

const HomeHelper = (onNavigate) => {
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  return Home();
};

export default HomeHelper;
