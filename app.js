var InstaApi=angular.module('InstaApi',['ngResource']);

InstaApi.controller('InstaApiCtrl',function($scope,$http){
   $scope.search='';
    
$scope.fetch=function(){
   $http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=ca79a6ea91d221034bf6c18bfcb5944c&query='+$scope.search+'&callback=JSON_CALLBACK')
    .success(function(result){
       console.log(result);
       $scope.data=result;
   });
}
    $scope.showDetail=function(movie)
    {
        $http.jsonp('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=ca79a6ea91d221034bf6c18bfcb5944c&callback=JSON_CALLBACK')
        .success(function(result)
                {
             
                $('.modal').modal({
                    show:true
                });
            
            $scope.r=result;
            console.log(result);
        });
    }
    $scope.hide=function(){
        $('.modal').modal({
                    show:false
                });
        
    }
    $scope.changebox=function()
    {
        var input = $('input[type="text"]');
        input.css({width:'400px'});
    }
   
    
})  ;

