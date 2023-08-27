function skillsMember(){
    restrict: 'E',
    scope: {
        member: '='
    };
    templateUrl: 'views/directives/skills-member.html',
    controller: skillsMemberController,
    controllerAs: 'skillsMemberCtrl'
}