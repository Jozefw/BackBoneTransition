(function($){
	var ListView = Backbone.View.extend({
		el: $('body'), // attaches `this.el` to an existing element -body-.
		// DOM events are bound to view methods no controllers
		events: {
			'click button#add': 'addItem'
		},
		initialize: function(){
			// every function that uses this should be in this prams
      _.bindAll(this, 'render', 'addItem'); // fixes loss of context for 'this' within methods
      this.counter = 0;
      this.render(); // not all views are self-rendering. This one is.
  },

  render: function(){
  	$(this.el).append("<button id='add'>Add List Item</button>");
  	$(this.el).append("<ul></ul>");
  },
  addItem: function() {
  	this.counter++;
  	$('ul', this.el).append("<li>Oi Vay" + this.counter + "</li>");
  }
});

	var listView = new ListView();
})(jQuery);


