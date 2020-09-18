//alert('Funcionado!');
var lista = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');

var todos = [
  'Bom dia',
  'Boa tarde',
  'Boa noite'
];

function render() {
lista.innerHTML = '';

  for (todo of todos) {
    var todosElement = document.createElement('li');
    var todosText = document.createTextNode(todo);

    todosElement.appendChild(todosText);
    lista.appendChild(todosElement);

    
  }
}
render();

function addTodos() {
  var todosText = input.value;
  
  
  todos.push(todosText);
  input.value = '';
  render();
} 

button.onclick = addTodos;