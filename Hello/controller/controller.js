var app = angular.module('MyApp', []);
app.controller("FirstController",["$scope", "$http", function(e, http) {
	e.name = "jjmmontilla";
	e.posts = [];
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
		$scope.comments.push($scope.newComment);
	}

	http({
	      method: 'GET',
	      url: 'https://jsonplaceholder.typicode.com/posts'
	}).then(function (success){
		if(success.data){
			e.posts = success.data;
		}
	},function (error){

	});
		
} ]
);