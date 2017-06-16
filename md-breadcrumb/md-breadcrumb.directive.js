/*
 * Author: rammurthy
 * version: v1.0
 * reference: https://ui-router.github.io/ng1/
*/

// breadcrumb directive definition
function breadcrumbDirective() {
    return {
        restrict: 'EA',
        templateUrl: './md-breadcrumb/breadcrumb/breadcrumb.tmpl.html',
        controller: breadcrumbController
    }
}
