app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b style='color: red'>This is Class Type Custom Directive !</b></div>"
    }
}