var app = angular.module('MyApp', []);
app.controller("FirstController",["$scope", function(e) {
	e.name = "jjmmontilla";
	e.newComment = {};
	e.comments = [
		{
			username: "Yuraima",
			comment: "Buen trabajo con Angular"	
		},
		{
			username: "Yitzalba",
			comment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"	
		},
		{
			username: "Diego",
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"	
		}
	];

	e.addComment = function(){
		e.comments.push(e.newComment);
	}
}]
);