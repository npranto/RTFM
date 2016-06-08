angular.module('rtfmApp')
	
	.controller('threadCtrl', function ($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray) {
		$scope.thread = $firebaseObject(threadRef);
		console.log($scope.thread);
    	
    	$scope.comments = $firebaseArray(commentsRef);
    	// thread.$bindTo($scope, 'thread');

	    $scope.createComment = function (username, text) {
	      $scope.comments.$add({
	        username: username,
	        text: text
	      });
	    };
	})