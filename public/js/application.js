$(document).ready(function() {
  console.log('READY');
  getNewTodosForm();
  postNewTodo();
});

function getNewTodosForm() {
  $('#new-todo-form').on('click', function(event){
    event.preventDefault();

    $.ajax({
      url: '/todos/new',
      method: 'GET'
    })
    .done(function(serverData){
      // hide the link for a new form
      $('#new-todo-form').hide();
      // show the form
      $('#new-todo').append(serverData);
    })
    .fail(function(serverData){
      console.log('failing');
    })
  })
};

function postNewTodo(){
  $('#new-todo').on('submit', function(event){
    event.preventDefault();
    var formData = $('#new-todo form').serialize()
    console.log(formData)

    $.ajax({
      url: '/todos',
      method: 'POST',
      data: formData
    })
    .done(function(serverData){
      console.log('SUCCESS', serverData)
    })
    .fail(function(serverData){
      console.log('FAILING')
    })
  })
}













