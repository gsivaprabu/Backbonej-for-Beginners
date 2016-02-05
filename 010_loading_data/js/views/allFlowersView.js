// Namespace our flowerApp
var app = app || {};

app.allFlowersView = Backbone.View.extend({

    tagName: "section",

    render: function() {
        this.collection.each(this.addFlower, this);
        return this;
    },

    addFlower: function(flower) {
        var flowerView = new app.singleFlowerView({
            model: flower
        });
        // console.log(flowerView);
        this.$el.append(flowerView.render().el);
    }

});
