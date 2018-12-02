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
### Backbone have some shortcut method

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


## We have using template methods UNDERSCOREJS
```javascript
var TodoItem1 = Backbone.Model.extend({
		defaults: {
			description: 'Empty todo...',
			status: 'incomplete'
		}
	});
	var todoItem1 = new TodoItem1();


	var TodoView1 = Backbone.View.extend({
		tagName: 'article',
		id: 'todo-view',
		className: 'todo',
		template: _.template('<h3><%= status %></h3>'),
		render: function () {
			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));
		}
	});

	var todoView1 = new TodoView1({ model: todoItem1 });
	todoView1.render();
	console.log(todoView1.el);
```

##Template concepts

- Underscore.js
```html
<h3><%= description %></h3>
```
- Mustache.js
```html
<h3>{{description}}</h3>
```
- Haml-js
```html
%h3= description
```
- Eco
```html
<h3><%= @description %></h3>
```


## Adding View Events

In jQuery add an alert on click

```javascript
$("h3").click(alertStatus);
function alertStatus(e){
    alert('Have you clicked the h3!');
}
```

- In backbonejs inside the view have click object
```javascript
var TodoView =  Backbone.View.extend({
    events:{
        "click h3" : "alertStatus"
    },
    alertStatus: function(e){
    alert('Have you clicked the h3!');
}
})
```
## Selector is scoped to the el

```javascript
this.$el.delegate('h3','click',alertStatus);
```
### List of events support in backbonejs


![Special Events](https://raw.githubusercontent.com/gsivaprabu/Backbonejs-for-Beginners/master/01%20The%20Anatomy%20of%20Backbonejs%20-%20I/02%20Models/Special%20Events.png)