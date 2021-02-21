/* eslint-disable no-use-before-define */
import Home from './helpers/HomeHelper.js';
import Go from './helpers/GoHelper.js';

const rootDiv = document.getElementById('app');

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

const welcome = Home(onNavigate);
const letsGo = Go(onNavigate);

const routes = {
  '/': welcome,
  '/vamos': letsGo,
};

rootDiv.innerHTML = routes[window.location.pathname];
