(function($){

// our model
var Item = Backbone.Model.extend({
	defaults: {
		part1: "Oi",
		part2:"Vay",
	}
});

// a collection of our models
var List = Backbone.Collection.extend({
	model: Item,
});




var ListView = Backbone.View.extend({
		el: $('body'), // attaches `this.el` to an existing element -body-.
		// DOM events are bound to view methods no controllers
		events: {
			'click button#add': 'addItem'
		},
		initialize: function(){
			// every function that uses this should be in this prams
      _.bindAll(this, 'render', 'addItem', 'appendItem'); // fixes loss of context for 'this' within methods
      this.collection = new List();
      this.collection.bind('add', this.appendItem);

      this.counter = 0;
      this.render(); // not all views are self-rendering. This one is.
  },

  render: function(){
  	var self = this;


  	$(this.el).append("<button id='add'>Add List Item</button>");
  	$(this.el).append("<ul></ul>");
  	 _(this.collection.models).each(function(item){ // in case collection is not empty
        self.appendItem(item);
      }, this);
    },


  addItem: function() {
  	this.counter++;
  	var item = new Item();
  	item.set({
  		part2: item.get('part2') + this.counter,
  	});
  	this.collection.add(item);
  },
  appendItem: function(){
  	$('ul', this.el).append("<li>Oi Vay" + this.counter + "</li>");
  }
});

var listView = new ListView();
})(jQuery);


