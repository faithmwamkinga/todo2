let todoList=document.getElementById('todo')
//this is the container that holds the fetched data
let getTodoList=()=>{
  return fetch('https://dummyjson.com/todos/user/3',
  {
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify()  
  })
  .then(response=>response.json())
  .then(response=>console.log(response))
  .catch(error=>console.log(error))
};
//use an async function to display the list of todos fetched by a 
//specific userid
// const displayTodos= async()=>{
//   const todoss=await getTodoList();
//   console.log(todoss);
  // todoz.forEach(item => {
  //   let div = document.createElement('div');
  //   let todoo = document.createElement('input');
  //   let ids = document.createElement('span');
  //   let checkbox = document.createElement('input');
  //   let icon = document.createElement('i');
  //   checkbox.type = 'checkbox';
  //   checkbox.checked = item.completed;
  //   icon.classList.add('fa', 'fa-trash');
  //   ids.appendChild(icon);
  //   todoo.value = item.todo;
  //   checkbox.addEventListener('change', () => {
  //   });
  
  // });
  
// }

 return fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  })
})
.then(response => response.json())
.then(console.log(response));




