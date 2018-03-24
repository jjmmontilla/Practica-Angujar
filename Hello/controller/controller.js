var app = angular.module('MyApp', ["LocalStorageModule"]);
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
		e.comments.push(e.newComment);
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

app.controller("ToDoList", ["$scope", "$http", "localStorageService", function(e, http, storage){
	e.todo = [];
	e.newToDo = {};

	if(storage.get('angular-todoList')){
		e.todo = storage.get('angular-todoList');
	}else{
		e.todo = [];
	}

	e.addActividad = function(){
		e.todo.push(e.newToDo);
		storage.set("angular-todoList", e.todo);
		e.newToDo = {};
	}
}]
);