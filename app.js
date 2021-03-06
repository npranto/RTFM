angular.module('rtfmApp', ['ui.router', 'firebase'])
	
	.constant('fb', {
		url: 'https://devmtn-rtfmapp.firebaseio.com/'
	})

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('threads', {
				url: '/threads',
				templateUrl: './views/threads.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsRef: function(threadService){
						return threadService.getThreads();
					}
				}
			})
			.state('thread', {
				url: '/threads/:threadId',
				templateUrl: './views/thread.html',
				controller: 'threadCtrl',
				resolve: {
        			threadRef: function (threadService, $stateParams) {
            			return threadService.getThread($stateParams.threadId);
        			},
        			commentsRef: function (threadService, $stateParams) {
    					return threadService.getComments($stateParams.threadId);
  					}
   				}
			
			});

		$urlRouterProvider.otherwise('/threads');

	})

