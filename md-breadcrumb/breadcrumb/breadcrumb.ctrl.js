function breadcrumbController($scope, $state) {
    $scope.breadcrumbs    = [];
    stateChanged(); // call to get initial breadcrumb

    // change breadcrumb on each state change success
    $scope.$on('$stateChangeSuccess', stateChanged);

    // executes on $stateChangeSuccess
    function stateChanged(){
        $scope.breadcrumbs    = getParentList($state.$current); // holds all active states
        $scope.onClickingLink = onClickingLink; // holds link clicking function
        $scope.breadcrumbs.reverse(); // reverse breadcrumbs child to root states
    }

    // executes on link click
    function onClickingLink(event, breadcrumb) {
        event.preventDefault(); // prevent default action
        $state.go(breadcrumb.stateName); // move to state
    }
        
    // below function used to get parent states
    function getParentList(state) {
        var parentList = []; // holds parent states list
        while(state) { // loop until root state occurs

            // push into parentList array
            parentList.push({'state': state, 'url': state.self.url.slice(1, state.self.url.length), 'stateName': state.toString()});
            state = state.parent; // make parent as current state for loop
        }
        return parentList; // return parentList
    }
}