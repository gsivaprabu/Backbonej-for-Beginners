# 01 The Anatomy of Backbone.js - PART-I - 03 - Views

- Simple view Class

```javascript
var SimpleView = Backbone.View.extend({});
var simpleView = new SimpleView();

console.log(simpleView.el); // Simply print <div></div>
```

### tag name can be any html tag

```javascript
var SimpleView = Backbone.View.extend({
    tagName:'li'
});
var simpleView = new SimpleView();

console.log(simpleView.el); // <li></li>
```


```javascript
var TodoView = Backbone.View.extend({
    tagName:'article',
    id:'todo-view',
    className: 'todo'
});

var todoView = TodoView();
console.log(todoView.el); // <article id="todo-view" class="todo"> </article>
```

## jQuery Method

```javascript
$('#todo-view').html();
// el is a DOM element
$(todoView.el).html();
```
### BAckbone have some shortcut method

```javascript
todoView.$el.html();
// Good since the el's id may be dynamic
```


```javascript
var TodoView =  Backbone.View.extend({
    render: function(){
        var html = '<h3>'+this.model.get('description')+'</h3>';
        $(this.el).html(html);
    }
})
```

```javascript
var todoView = new TodoView({model:todoItem});
todoView.render();
console.log(todoView.el);
```
