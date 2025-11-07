import { Cocobase } from "https://unpkg.com/cocobase@1.1.4/dist/index.js";
//HP7asIbxewy1wu4LzPyZp_EAaPc6BZRLNWNnrWvW
const db = new Cocobase({
  apiKey: "HP7asIbxewy1wu4LzPyZp_EAaPc6BZRLNWNnrWvW",
  projectId: "03a010bf-5938-44 ae-8ae1-2e3574319b10"
});

//function displayGreeting() {
//}

document.querySelector("body").onload = () => {
  // Importing elements needed
  let greetingBox = document.getElementById('greeting');
  
  let greetArray = ['Hola', 'Hi', 'Hello', 'Good Day', 'Ahoy', 'Wagwan', 'What\'s up?', 'Howdy', 'Yo', 'How far', 'Ele way?'];
  let min = 0;
  let max = 9;
  let index = Math.floor(Math.random() * (max - min + 1)) + min;
  let greeting = greetArray[index];
  
  // Modifying elements imported
  greetingBox.innerHTML = greeting + '! ' + '👋';
  
  // Another part of the code that loads saved tasks on Cocobase's DB
  let taskName;
  let taskDesc;
  let dateData;
  let todos = document.getElementById('todos');
  let lists = document.getElementById('lists');
  let note = document.getElementById('note');
  
  // Load tasks from the my Cocobase DB
  try {
    // write cocobase shit here
    db.listDocuments('task').then((docs) => {
      if (docs) {
        docs.forEach((doc) => {
          taskName = doc.data.taskname;
          taskDesc = doc.data.taskdesc;
          dateData = doc.data.taskdate;
          note.style.display = 'none';
          todos.style.display = 'block';
          console.log(doc.data.taskname, doc.data.taskdesc, doc.data.taskdate)
          
          // Creating elements
          let list = document.createElement('span');
          let date = document.createElement('span');
          let deleteButton = document.createElement('button');
          let flx = document.createElement('div');
          let img = document.createElement('img');
          let checkBox = document.createElement('input');
          
          // Giving properties
          flx.id = 'flx';
          flx.className = 'flx';
          img.src = 'delete' + '.svg';
          img.width = 25;
          img.height = 25;
          list.className = 'todo';
          list.id = 'todo';
          list.innerHTML = taskName;
          date.className = 'todo-date';
          date.innerHTML = dateData;
          deleteButton.className = 'delete-btn';
          deleteButton.onclick = () => {
            flx.remove();
          };
          checkBox.type = 'checkbox';
          checkBox.className = 'check-box';
          checkBox.id = 'check-box';
          checkBox.onclick = (e) => {
            if (e.target.checked) {
              flx.classList.add('disabled');
            } else {
              flx.classList.remove('disabled');
            }
          };
          
          
          // Appending
          deleteButton.append(img);
          flx.append(list);
          flx.append(deleteButton);
          flx.append(checkBox);
          list.append(date);
          todos.append(flx);
          console.log(taskName, taskDesc, dateData)
        });
      } else {
        note.style.display = 'block';
        todos.style.display = 'none';
      }
    });
  } catch (error) {
    throw error
  }
}

document.querySelector('#dark-btn').addEventListener('click', () => {
  // Importing elements needed
  let lightBtn = document.getElementById('light-btn');
  let darkBtn = document.getElementById('dark-btn');
  let body = document.body;
  let letters = document.getElementById('writeup');
  let h1 = document.getElementById('name');
  let todos = document.getElementById('todos');
  let greeting = document.getElementById('greeting');
  let note = document.getElementById('note');
  
  // Modifying elements imported
  // toggling theme buttons
  lightBtn.style.display = 'block';
  darkBtn.style.display = 'none';
  
  // styling elements for dark theme
  body.style.backgroundColor = 'black';
  h1.style.webkitTextStrokeColor = 'white';
  h1.style.webkitTextStrokeWidth = '1.5px';
  letters.style.color = 'white';
  todos.style.borderBottom = '5px solid white';
  todos.style.color = 'white';
  greeting.style.color = 'white';
  note.style.color = 'white';
})

document.querySelector('#light-btn').addEventListener('click', () => {
  // Importing elements needed
  let lightBtn = document.getElementById('light-btn');
  let darkBtn = document.getElementById('dark-btn');
  let body = document.body;
  let letters = document.getElementById('writeup');
  let h1 = document.getElementById('name');
  let todos = document.getElementById('todos');
  let greeting = document.getElementById('greeting');
  let lists = document.getElementById('todo');
  let note = document.getElementById('note');
  
  // Modifying elements imported
  // toggling theme buttons
  lightBtn.style.display = 'none';
  darkBtn.style.display = 'block';
  
  // styling elements for dark theme
  body.style.backgroundColor = 'white';
  h1.style.webkitTextStrokeColor = 'black';
  h1.style.webkitTextStrokeWidth = '1.5px';
  letters.style.color = 'black';
  todos.style.borderBottom = '5px solid black';
  todos.style.color = 'black';
  greeting.style.color = 'black';
  note.style.color = 'black';
})

document.querySelector('.add-btn').addEventListener('click', () => {
  // Importing elements needed
  let taskAdder = document.getElementById('task-adder');
  let note = document.getElementById('note');
  let todos = document.getElementById('todos');
  
  // Modifying elements imported
  taskAdder.style.display = 'block';
  note.style.display = 'none';
  todos.style.display = 'block';
})

document.querySelector('.hide-btn').addEventListener('click', () => {
  // Importing elements needed
  let taskAdder = document.getElementById('task-adder');
  let note = document.getElementById('note');
  let todos = document.getElementById('todos');
  
  // Modifying elements imported
  taskAdder.style.display = 'none';
  if (lists.children.length === 0) {
    todos.style.display = 'none';
    note.style.display = 'block';
  }
})

document.querySelector('.add-taskbtn').addEventListener('click', () => {
  // Importing elements needed
  let taskAdder = document.getElementById('task-adder').style.display = 'none';
  let todos = document.getElementById('todos');
  let lists = document.getElementById('lists');
  let taskName = document.getElementById('task-name');
  let dateData = document.getElementById('date');
  let taskDesc = document.getElementById('task-desc');
  let note = document.getElementById('note');
  
  // Creating elements
  let list = document.createElement('span');
  let date = document.createElement('span');
  let deleteButton = document.createElement('button');
  let flx = document.createElement('div');
  let img = document.createElement('img');
  let checkBox = document.createElement('input');
  
  // Giving properties
  flx.id = 'flx';
  flx.className = 'flx';
  img.src = 'delete' + '.svg';
  img.width = 25;
  img.height = 25;
  list.className = 'todo';
  list.id = 'todo';
  list.innerHTML = taskName.value.trim();
  date.className = 'todo-date';
  date.innerHTML = dateData.value.trim();
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = () => {
    flx.remove();
  };
  checkBox.type = 'checkbox';
  checkBox.className = 'check-box';
  checkBox.id = 'check-box';
  checkBox.onclick = (e) => {
    if (e.target.checked) {
      flx.classList.add('disabled');
    } else {
      flx.classList.remove('disabled');
    }
  };
  
  // Saving to Local Storage
  /*try {
  localStorage.setItem(taskName.value.trim(), list.innerHTML);
  } catch (error) {
  throw error
  }*/
  
  // Saving task to Cocobase
  try {
    // write cocobase shit here
    db.createDocument('task', { taskname: taskName.value, taskdesc: taskDesc.value, taskdate: dateData.value });
  } catch (error) {
    throw error
  }
  //console.log(taskName, taskDesc, dateData)
  
  //console.log(localStorage.getItem(taskName.value.trim()))
  
  // Appending
  deleteButton.append(img);
  flx.append(list);
  flx.append(deleteButton);
  flx.append(checkBox);
  list.append(date);
  todos.append(flx);
  
  taskName.value = '';
  taskDesc.value = '';
  dateData.value = '';
})