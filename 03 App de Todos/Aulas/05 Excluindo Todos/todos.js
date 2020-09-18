//alert('Funcionado!');
var lista = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');
var excluir = document.querySelector('exclir');
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

    var linkElement = document.createElement('a');
    var linkTxt = document.createTextNode(' Excluir');

    linkElement.setAttribute('href','#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('Onclick','delTodo('+pos+')');
    
    linkElement.appendChild(linkTxt);
    
    todosElement.appendChild(todosText);
    todosElement.appendChild(linkElement);

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


  function delTodo(pos) {
    todos.splice(pos,1);
    render();
  }