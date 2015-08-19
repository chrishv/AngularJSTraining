angular.module('todoApp', [])
  .controller('TodoListController', function() {
    this.todoText = '';
    
    this.todos = [
      {text:'buy food', done:true},
      {text:'learn angularJS', done:false},
      {text:'learn typescript', done:false},
      ];
 
    this.addTodo = function() {
      this.todos.push({text:this.todoText, done:false});
      this.todoText = '';
    };
 
    this.uncompleted = function() {
      var count = 0;
      
      angular.forEach(this.todos, function(todo) {
        if (!todo.done) {
          count = count + 1;
        }
      });
      
      return count;
    };
    
    this.delete = function() {
      var newTodos = [];
      angular.forEach(this.todos, function(todo) {
        if (!todo.done) {
          newTodos.push({text:todo.text, done:false});
          
        }
        
      }); 
      this.todos = newTodos;
    } 
    
    this.clear = function() {
      angular.forEach(this.todos, function(todo) {
        if (todo.done) {
          todo.done = false;
        }
      });
      
    
      /*this.todos.push({text:this.todoText, done:false});
      this.todoText = ''; */
    };
    
    
    });