// Namespace our flowerApp
var app = app || {};

app.singleFlowerView = Backbone.View.extend({

    tagName: "article",
    className: "flowerListItem",

    template: _.template($("#flowerElement").html()),

    render: function() {
        //console.log(this.model.toJSON());
        var flowerTemplate = this.template(this.model.toJSON());
        // console.log(flowerTemplate);
        this.$el.html(flowerTemplate);
        console.log(this);
        return this;
    }

});
