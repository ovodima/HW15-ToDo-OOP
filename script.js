class Task {
  constructor(value, status) {
    this.value = value;
    this.status = status;
    this.id = Math.random().toString(36).substr(2, 9);
  }
}

const input = document.querySelector('.todo-input')


class TodoList {
    constructor(el) {
      this.todos = [];
      this.el = el;

      this.el.addEventListener('click', (e) => {
        e.preventDefault()
        let target = e.target
        let getId = target.parentElement.dataset.id
       if(target.className === 'completed-button') {
         this.changeStatus(getId)
         target.parentElement.classList.toggle('green')
       } else if(target.className === 'trash-button') {
         this.removeTodo(getId)
         target.parentElement.remove()
       }
      })
    }
    addTodo(todo) {
      this.todos.push(todo);
      
    }
    removeTodo(id) {
      this.todos = this.todos.filter((el) => {
        return el.id !== id;
      });
    }
    getTodos() {
      return this.todos;
    }
    changeStatus(id) {
      let index = this.todos.findIndex((el) => el.id === id);
      this.todos[index].status = !this.todos[index].status;
    }
    render() {
      let list = '';
      for (let el of this.todos) {
        if (!el) {
          return;
        }
        list += `<li data-id="${el.id}" class="todo-item">${el.value}
            <button class="completed-button"> &#9745; </button>
            <button class="trash-button"> &#10006; </button> 
            </li>`
      }
      this.el.innerHTML = list;
    }

    findTask() {
     return this.todos
    }
  }
  

  const list = document.querySelector('.todo-list')
  const main = document.querySelector('.main')
  
  
  let createTodo = new TodoList(list)
  let todo = []

main.addEventListener('click', (e) => {
    let target = e.target
    if(target.className === 'todo-button') {
      todo.push(createTodo.addTodo(new Task(input.value, false)))
      createTodo.render()
      input.value = ''
    }

    else if(target.className === 'search-button') {
      console.log(createTodo.findTask())
    }
  })



  // // let todo1 = new TodoList(list);
  // todo1.addTodo(new Task('Footbal', true));
  // todo1.addTodo(new Task('CSGO', false));
  // console.log(todo1.getTodos());
  // todo1.render();