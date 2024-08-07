export const tasks = [
    {
      id: 1,
      title: "Tâche 1",
      content: "Contenu de la tâche 1",
      urgency: "URGENT / IMPORTANT"
    },
    {
      id: 2,
      title: "Tâche 2",
      content: "Contenu de la tâche 2",
      urgency: "IMPORTANT / NON URGENT"
    },
    {
      id: 3,
      title: "Tâche 3",
      content: "Contenu de la tâche 3",
      urgency: "URGENT / NON IMPORTANT"
    },
    {
      id: 4,
      title: "Tâche 4",
      content: "Contenu de la tâche 4",
      urgency: "NON URGENT / NON IMPORTANT"
    }
  ];
  
  // Enregistrer les tâches dans le local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  