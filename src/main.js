import { Bienvenida } from './components/Bienvenida.js';
import {Go} from './components/Go.js'

const rootDiv = document.getElementById('app');
const buttonGo = document.getElementById('go')

document.addEventListener('DOMContentLoaded', ()=>{
 buttonGo.addEventListener('click', ()=>{
     onNavigate('/vamos')
 })
})

const welcome = Bienvenida();
const letsGo = Go()

const routes = {
  '/': welcome,
  '/vamos': letsGo
};

rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) =>{
window.history.pushState(
{},
pathname,
window.location.origin + pathname,
)
rootDiv.innerHTML = routes[pathname]
}