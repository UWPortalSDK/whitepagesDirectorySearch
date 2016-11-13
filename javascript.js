angular.module('portalApp')
.controller('whitepagesDirectorySearchCtrl', ['$scope', function ($scope) {	
	// mock data
	$scope.items = [
		{
			title:'Item 1',
			tags: ['tag A', 'tag B', 'tag C'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('whitepagesDirectorySearchMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('whitepagesDirectorySearchDetails.html', 2);
	}
}]);