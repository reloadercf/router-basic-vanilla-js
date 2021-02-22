/* eslint-disable no-use-before-define */
import Home from './helpers/HomeHelper.js';
import { GoHelper, seterGoFunction } from './helpers/GoHelper.js';

const rootDiv = document.getElementById('app');

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
  seterGoFunction();
};

const welcome = Home(onNavigate);
const letsGo = GoHelper(onNavigate);

const routes = {
  '/': welcome,
  '/vamos': letsGo,
};

rootDiv.innerHTML = routes[window.location.pathname];
