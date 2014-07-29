module.exports = {
	mergesort: function(input, property){
		var len = input.length;
		if(len == 1) return input;

		var a = input.slice(0, Math.floor(len/2));
		var b = input.slice(Math.floor(len/2));

		a = this.mergesort(a); 
		b = this.mergesort(b);

		return this.merge(a, b, property);
	},
	merge: function(a, b, property){
		var c = [];
		// descending
		while(a.length > 0 && b.length > 0){
			if(a[0].count < b[0].count){
				c[c.length] = b[0];
				b.splice(0, 1);
			} else {
				c[c.length] = a[0];
				a.splice(0, 1);
			}
		}
		while(a.length > 0){
			c[c.length] = a[0];
			a.splice(0, 1);
		}
		while(b.length > 0){
			c[c.length] = b[0];
			b.splice(0, 1);
		}
		
		return c;
	}
}
