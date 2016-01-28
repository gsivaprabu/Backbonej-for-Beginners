// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg"
    },

    initialize: function() {
        var name;
        var price;
        if (this.get("name") === undefined) {
            name = "[ Name field is Empty ]";
        } else {
            name = this.get("name");
        }

        if (this.get("price") === undefined) {
            price = "[ Price field is Empty ]";
        } else {
            price = this.get("price");
        }

        console.log("A model instance named " + name + " has been created and it costs " + price);

        this.on('change', function() {
            console.log("Something in our model has changed");
        });

        this.on('change:price', function() {
            console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
        });

    }

});
