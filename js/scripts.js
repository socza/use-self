$(document).ready(function() {

	function printInfo() {
		console.log("jQuery works OK");
	}

	printInfo();

	function Button(text) {

		this.text = text || "Default display text";

	}

	Button.prototype = {

		create: function() {

			var self = this;

			this.$element = $('<button>');
			this.$element.text(this.text);
			
			this.$element.click(function() {
				
				alert(self.text);
			
			});

			$('body').append(this.$element);

		}

	}

	var btn1 = new Button("Yes it's works");
	var btn2 = new Button("");

	btn1.create();
	btn2.create();

});