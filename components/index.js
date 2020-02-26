Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
  })

var app = new Vue({
  el: "#app",
  data: {
    list: [
      {id:0, text:'ev'},
      {id:1, text:'bob'},
      {id:2, text:'dil'}
    ]
  }
})