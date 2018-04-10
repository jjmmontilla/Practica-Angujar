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

app.factory('ToDoService', function(localStorageService){
	var toDoService = {};
	toDoService.key = "angular-todoList";
	if(localStorageService.get(toDoService.key)){
		toDoService.activities = localStorageService.get(toDoService.key);
	}else{
		toDoService.activities =[];
	}

	toDoService.add = function(newToDo){
		toDoService.activities.push(newToDo);
		toDoService.updateStorage();
	}

	toDoService.updateStorage = function(){
		localStorageService.set(toDoService.key, toDoService.activities);
	}
	
	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updateStorage();
		return toDoService.getAll();
	}

	toDoService.getAll = function(){
		return toDoService.activities;
	}
	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		})
		toDoService.updateStorage();
		return toDoService.getAll();
	}

	return toDoService;
});

app.controller("ToDoList", ["$scope", "ToDoService", function(e, ToDoService){
	e.todo = ToDoService.getAll();
	e.newToDo = {};

	e.addActividad = function(){
		ToDoService.add(e.newToDo);
		e.newToDo = {} 
	}

	e.removeItem = function(item){
		e.todo = ToDoService.removeItem(item);
	}
	e.clean = function(){
		e.todo = ToDoService.clean()
	}
}]
);

app.filter("removeHtml", function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm, '');
	}
});

app.controller("FiltersController", ["$scope", "localStorageService", function(e, storage){
	e.listHtml = [];
	e.newHtml = {};

	if(storage.get('listHtml')){
		e.listHtml = storage.get('listHtml');
	}else{
		e.listHtml = [];
	}

	e.addHtml = function(){
		e.listHtml.push(e.newHtml);
		storage.set("listHtml", e.listHtml);
		e.newHtml = {};
	}

	e.cleanHtml = function(){
		storage.set("listHtml", []);
	}

}]
);

