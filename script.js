function pageNavigationViewModel(){
	var self = this;
	self.page = function(id, name, content, selected){
		var page = this;
		page.id = ko.observable(id);
		page.name = ko.observable(name);
		page.content = ko.observable(content);
		return page;
	}
	// init link list
	self.selectedPage = ko.observable(1);
	self.pages = [];
	self.pagesData = [
        {
            id: 1,
            name: 'Works',
            content: [
                {"id": "1", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "2", "title": "boompam", "url": "page2", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "3", "title": "crapalida", "url": "page3", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "4", "title": "kooskoos", "url": "page4", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "5", "title": "stomtape", "url": "page5", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "6", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "7", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "8", "title": "boompam", "url": "page2", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "9", "title": "crapalida", "url": "page3", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "10", "title": "kooskoos", "url": "page4", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "11", "title": "stomtape", "url": "page5", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "12", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "13", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "14", "title": "boompam", "url": "page2", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "15", "title": "crapalida", "url": "page3", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "16", "title": "kooskoos", "url": "page4", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "17", "title": "stomtape", "url": "page5", "img": "http://img", "linkTo": "someUrl", "description": "description text"},
                {"id": "18", "title": "vestibulum", "url": "page1", "img": "http://img", "linkTo": "someUrl", "description": "description text"}
            ]
        },
        {
            id: 2, name: 'Learn',
            content: [
                {"id": "1", "name": "Front End", "videoUrl": "https://www.youtube.com/embed/iJR-TbIjb2w?rel=0&showinfo=0&autoplay=1"},
                {"id": "2", "name": "Design", "videoUrl": "https://www.youtube.com/embed/Gvd5h9_sYrc?rel=0&showinfo=0&autoplay=1"},
                {"id": "3", "name": "Server Side", "videoUrl": "https://www.youtube.com/embed/JnCLmLO9LhA?rel=0&showinfo=0&autoplay=1"}
            ]
        },
        {
            id: 3,
            name: 'Profile',
            content: 'here  we are in page 3'
        },
        {
            id: 4,
            name: 'Contact',
            content: 'i am page number 4'
        }
	];

    self.work =  function(id, title, url, img, link, description){
        var work = this;
        work.id = ko.observable(id);
        work.title = ko.observable(title);
        work.url = ko.observable(url);
        work.img = ko.observable(img);
        work.link = ko.observable(link);
        work.description = ko.observable(description);
        return work;
    };
    self.selectedWork = ko.observable(1);
    self.works = [];
    self.workData = _.find(self.pagesData, function (data) {
        if(data.name === "Works"){
            return data.content;
        }
    });

    //console.log(self.workData);

    self.selectedLearningVideo = ko.observable(1);
    self.learningVideos = [];
    self.learnData = _.find(self.pagesData, function (data) {
        if(data.name === "Learn"){
            return data.content;
        }
    });

    self.learningVideo =  function(id, name, url, selectedVideo){
        var video = this;
        video.id = ko.observable(id);
        video.name = ko.observable(name);
        video.url = ko.observable(url);
        return video;
    };

    // set page tabs data
	_.each(self.pagesData, function(page){
		self.pages.push(new self.page(page.id, page.name, page.content));
	});

    // set works data
    _.each(self.workData, function(work){
        self.works.push(new self.work(work.id, work.title, work.url, work.img, work.linkTo, work.description));
    });
console.log(self.works);
    // set learning tabs data
    _.each(self.learnData, function(learn){
        self.learningVideos.push(new self.learningVideo(learn.id, learn.name, learn.videoUrl));
    });

	return self;
}

function worksViewModel(page) {
    function works(title, url, img, linkTo, description) {
        var self = this;
        self.title = ko.observable(works.title);
        self.url = ko.observable(works.url);
        self.img = ko.observable(works.img);
        self.linkTo = ko.observable(works.linkTo);
        self.description = ko.observable(works.description);
        self.ArtistAlbumsUrl = ko.computed(function () {
            return "data/works.json";
        }, this);
    }
}

//ko.applyBindings(new worksViewModel());
ko.applyBindings(new pageNavigationViewModel());

//function MyViewModel(works) {
//	var self = this;

     //self.works = ko.observableArray([]);
     /*this.title = ko.observable(works.title);
     this.url = ko.observable(works.url);
     this.img = ko.observable(works.img);
     this.linkTo = ko.observable(works.linkTo);
     this.description = ko.observable(works.description);*/
//     self.getWorks = function() {
     	
  //   }
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
// }

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

 //ko.applyBindings(new MyViewModel());