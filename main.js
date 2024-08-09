import './style.css';
import { Task } from './task.js';
import deleteSvg from './public/delete-bin-6-line.svg';

const inputTaskAdd = document.getElementById('add-task');
const deroulanteUrgencyLevel = document.getElementById('urgency-level');
const addBtn = document.getElementById('add-btn');
const divUI = document.getElementById('u-i').querySelector('.scase');
const divINU = document.getElementById('i-nu').querySelector('.scase');
const divUNI = document.getElementById('u-ni').querySelector('.scase');
const divNUNI = document.getElementById('nu-ni').querySelector('.scase');

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function setViewtask(tasks) {
  // Vider les divs avant de réafficher les tâches
  divUI.innerHTML = '';
  divINU.innerHTML = '';
  divUNI.innerHTML = '';
  divNUNI.innerHTML = '';


    tasks.forEach(task => {
      const divTask = document.createElement('div');
      divTask.className = 'task-line';

      const divTcontent = document.createElement('p');
      const divAction = document.createElement('div');
      divAction.className = 'action-div';

      const spanDelete = document.createElement('span');
      spanDelete.className = 'span-delete';
      const deleteIcon = document.createElement('img');
      deleteIcon.src =  deleteSvg;
      spanDelete.appendChild(deleteIcon);

      // Ajouter un écouteur d'événements au bouton de suppression
      spanDelete.addEventListener('click', () => {
        deleteTask(task.id);
      });

      divTcontent.innerHTML = task.content;

     
      divAction.appendChild(spanDelete);
      divTask.appendChild(divTcontent);
      divTask.appendChild(divAction);

      switch (task.urgency) {
        case "URGENT / IMPORTANT":
          divTask.classList.add('u-i')
          divUI.appendChild(divTask);
          
          break;
        case "IMPORTANT / NON URGENT":
          divTask.classList.add('i-nu')
          divINU.appendChild(divTask);
          break;
        case "URGENT / NON IMPORTANT":
          divTask.classList.add('u-ni')
          divUNI.appendChild(divTask);
          break;
        case "NON URGENT / NON IMPORTANT":
          divTask.classList.add('nu-ni')
          divNUNI.appendChild(divTask);
          break;
        default:
          console.log("Unknown urgency level: ", task.urgency);
      }
    });
  }


addBtn.addEventListener("click", function(){
  const taskContent = inputTaskAdd.value;
  const taskUrgency = deroulanteUrgencyLevel.value;

  // Récupérer les tâches actuelles à partir du localStorage
  const tasks = getTasksFromLocalStorage();

  // Ajouter la nouvelle tâche à la liste
  addTask(taskContent, taskUrgency, tasks);

  event.preventDefault(); // Empêche l'ajout d'une nouvelle ligne si c'est un textarea
});

function observUrgencyChange() {
  inputTaskAdd.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskContent = inputTaskAdd.value;
      const taskUrgency = deroulanteUrgencyLevel.value;

      // Récupérer les tâches actuelles à partir du localStorage
      const tasks = getTasksFromLocalStorage();

      // Ajouter la nouvelle tâche à la liste
      addTask(taskContent, taskUrgency, tasks);

      event.preventDefault(); // Empêche l'ajout d'une nouvelle ligne si c'est un textarea
    }
  });
}

// Fonction pour ajouter une tâche
function addTask(content, urgency, tasks) {
  // Créer une nouvelle tâche avec un ID unique
  const newTask = new Task(tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, content, urgency);

  // Ajouter la nouvelle tâche à la liste
  tasks.push(newTask);

  // Enregistrer la liste mise à jour dans le localStorage
  saveTasksToLocalStorage(tasks);

  // Réafficher la liste des tâches à jour
  setViewtask(tasks);
}

function deleteTask(id) {
  // Récupérer les tâches actuelles à partir du localStorage
  const tasks = getTasksFromLocalStorage();

  // Filtrer les tâches pour exclure celle avec l'id donné
  const updatedTasks = tasks.filter(task => task.id !== id);

  // Enregistrer la liste mise à jour dans le localStorage
  saveTasksToLocalStorage(updatedTasks);

  // Réafficher la liste des tâches à jour
  setViewtask(updatedTasks);
}

document.addEventListener("DOMContentLoaded", () => {
  // Charger les tâches à partir du localStorage et les afficher
  const tasks = getTasksFromLocalStorage();
  setViewtask(tasks);
  observUrgencyChange();
});
