export const tasks = [
    {
      id: 1,
      content: "Contenu de la tâche 1",
      urgency: "URGENT / IMPORTANT"
    },
    {
      id: 2,
      content: "Contenu de la tâche 2",
      urgency: "IMPORTANT / NON URGENT"
    },
    {
      id: 3,
      content: "Contenu de la tâche 3",
      urgency: "URGENT / NON IMPORTANT"
    },
    {
      id: 4,
      content: "Contenu de la tâche 4",
      urgency: "NON URGENT / NON IMPORTANT"
    },
    {
      id: 5,
      content: "Contenu de la tâche 4 azeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee azerazeraezr azerezrazer azr azer aze razer azrazr  az a zer  za   ",
      urgency: "NON URGENT / NON IMPORTANT"
    },
    {
      id: 6,
      content: "Contenu de la tâche 4 azeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee azerazeraezr azerezrazer azr azer aze razer azrazr  az a zer  za   ",
      urgency: "NON URGENT / NON IMPORTANT"
    }
  ];
  
  // Enregistrer les tâches dans le local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  