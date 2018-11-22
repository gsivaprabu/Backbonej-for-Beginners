# 01 The Anatomy of Backbone.js - PART-I - 01 - Introduction

- Why we choose BackboneJS ?
- Create really simple to-do application
- to get the todo data
	```js
	$.getJSON('todo/',function(data){
	});
	```
- the data returned
	```json
	{description:'Pick up milk',status:'incomplete',id:1}
	```
- To create a model class
	```js
	var TodoItem = Backbone.Model.extend({});
	```
- To create a model instance
	```js
	var todoItem = new TodoItem({description:'Pick up milk',status:'incomplete',id:1});
	```

- To get an attribute
	```js
	todoItem.get('description');
	```


- To set an attribute
	```js
	todoItem.set({status:'complete'});
	```

- Sync to the server
	```js
	todoItem.save();
	```

- To create a view class
	```js
	var TodoView = Backbone.View.extend({});
	```
- To create a view instance
	```js
	var  todoView = new TodoView({model:todoItem});
	```

- Rendering the View
	```js
		var TodoView = Backbone.View.extend({
			render:function(){
				var html = '<h3>'+ this.model.get('description') +'</h3>';
				$(this.el).html(html);
				//Every view has a top level ELement like <div> <p> <span> <li> <header>
			}
		});
	```

	```js
	var  todoView = new TodoView({model:todoItem});
	todoView().render();
	console.log(todoView.el);
	```
- Print like below
	```html
	<div>
		<h3>Pick up Milk</h3>
	</div>
	```