// Namespace our flowerApp
var app = app || {};

//Namespace variable
app.singleFlowerView = Backbone.View.extend({

	//which tag the single model binded
  tagName: "article",
  className: "flowerListItem",

  template: _.template( $("#flowerElement").html() ),

  render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
    return this;
  }

});
