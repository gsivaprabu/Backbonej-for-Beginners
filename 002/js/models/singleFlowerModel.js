// Namespace our app
var app = app || {};

var dateObject = new Date();
var todayDate = dateObject.getDate();

app.singleFlower = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg",
        date: todayDate
    }

});
