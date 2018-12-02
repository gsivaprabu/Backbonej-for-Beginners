# 01 The Anatomy of Backbone.js - PART-I - 02 - Models

### Generating a Model Class
```javascript
var TodoItem = Backbone.Model.extend({});
```
### Generating a Model Instance
```javascript
var todoItem = new TodoItem(
{description:'pick up milk',status:'incomplete'});
```
### To get an attribute
```javascript
var todoItem.get('description')
```
### To set an attribute
```javascript
var todoItem.set({status:'complete'});
```


###  Fetcing data fro the server
```javascript
var todoItem = new TodoItem();
```

###  url to get data from server
```javascript
todoItem.url = '/todo';
```


###  To populate model from server
```javascript
todoItem.fetch();
var todoItem.get('description')
```

### RESTFUL way

```javascript
var TodoItem = Backbone.Model.extend({urlRoot:'/todos'});
var todoItem = new TodoItem({id:1})
todoItem.fetch(); // GET /todos/1
```

### Update the todo

```javascript
todoItem.set({description:'Pick up cookies'});
todoItem.save(); // PUT /todos/1  with JSON parameters
todoItem.get('id'); // => 2
todoItem.destroy(); // DELETE /todos/2
todoItem.toJSON(); // GET JSON from Model
```

### Default Values

```javascript
var TodoItem = Backbone.Model.extend({
    defaults:{
        description: 'Empty todo...',
        status: 'incomplete'
    }
});


var todoItem = new TodoItem();

todoItem.get('description');

todoItem.get('status');

```

### Events
- To listen for event on a model

```javascript
todoItem.on('event-name',function(){
    alert('event name happened !');
});

```

### Run the event
```javascript
todoItem.trigger('event-name');
```

### Special event

- To listen for changes 

```javascript
todoItem.on('change',doThing);

var doThing = function(){
    alert('doThing called');
}
```

- Event triggered on chnage you can set the model means

```javascript
var todoItem.set({status:'complete'});
```

- Set without triggering event
```javascript
var todoItem.set(
    {status:'complete'},
    {silent:true}
);
```


### Remove event listener
```javascript
todoItem.off('change',doThing);

var doThing = function(){
    alert('doThing called');
}
```
# Special Events
![Special Events](https://raw.githubusercontent.com/gsivaprabu/Backbonejs-for-Beginners/master/01%20The%20Anatomy%20of%20Backbonejs%20-%20I/02%20Models/Special%20Events.png)