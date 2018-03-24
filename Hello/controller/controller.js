var app = angular.module('MyApp', []);
app.controller("CommentsFlash",["$scope", function(e) {
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
		
} ]
);

app.controller("CommentsAPI", ["$scope", "$http", function(e, http) {
	e.posts = [];

	http({
	      method: 'GET',
	      url: 'https://jsonplaceholder.typicode.com/posts'
	}).then(function (success){
		if(success.data){
			e.posts = success.data;
		}
	},function (error){

	});

	e.addCommentAPI = function(){

		http({
		    method: 'POST',
		    url: 'https://jsonplaceholder.typicode.com/posts',
		    data : e.newComment
		}).then(function (success){
			if(success.data){
				$scope.comments.push($scope.newComment);
				console.log(success.data);
			}
		},function (error){
			console.log(error);
		});
	}
}]
);