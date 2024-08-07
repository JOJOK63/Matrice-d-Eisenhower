import './style.css';
import {Task} from './task.js'; 
import {tasks} from './tasks.js';

document.addEventListener("DOMContentLoaded", () => {
  const inputTaskAdd = document.getElementById('add-task');

  // Écoute les changements de texte
  inputTaskAdd.addEventListener('input', (event) => {
    console.log(event.target.value);
  });

  // Écoute l'appui de la touche "Entrée"
  inputTaskAdd.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      alert(`Saisie finale : ${event.target.value}`);
      event.preventDefault(); // Empêche l'ajout d'une nouvelle ligne si c'est un textarea
    }
  });
});
