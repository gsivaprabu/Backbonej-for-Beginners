// Namespace our app
var app = app || {};

app.singleFlowerModel = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg",
        link: "nolink"
    }

});
