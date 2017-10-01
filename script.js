function MyViewModel(works) {
	var self = this;		     
	this.navLinks = [
         { name: 'Works' },
         { name: 'Learn' },
         { name: 'Profile' },
         { name: 'Contact' }
     ];
     this.works = ko.observableArray([]);
     /*this.title = ko.observable(works.title);
     this.url = ko.observable(works.url);
     this.img = ko.observable(works.img);
     this.linkTo = ko.observable(works.linkTo);
     this.description = ko.observable(works.description);*/
     this.getWorks = function() {
     	
     }
     /*$.getJSON("data/works.json", function(data) { 
     	console.log(data);
	    // Now use this data to update your view models, 
	    // and Knockout will update your UI automatically 
	    //var d = JSON.stringify(data);
	    //console.log(d);
	    _.each(data, function(work){
	    	self.works.push(new works(work.title, work.url, work.img, work.linkTo, work.description));
	    })
	});*/
     //console.log(this.works);
 }

/*function works(title, url, img, linkTo, description) {
    var self = this;
    self.title = ko.observable(works.title);
    self.url = ko.observable(works.url);
    self.img = ko.observable(works.img);
    self.linkTo = ko.observable(works.linkTo);
    self.description = ko.observable(works.description);
    self.ArtistAlbumsUrl = ko.computed(function () {
        return "data/works.json";
    }, this);
}*/

 ko.applyBindings(new MyViewModel());