'use strict';
app.directive('myEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
				scope.$eval(attrs.myEnter);
			});

			event.preventDefault();
			}
		});
	};
});


app.directive('focusOnShow', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            if ($attr.ngShow){
                $scope.$watch($attr.ngShow, function(newValue){
                    if(newValue){
                        $timeout(function(){
                            $element.focus();
                        }, 100);
                    }
                })      
            }
            if ($attr.ngHide){
                $scope.$watch($attr.ngHide, function(newValue){
                    if(!newValue){
                        $timeout(function(){
                            $element.focus();
                        }, 0);
                    }
                })      
            }

        }
    };
});

// app.directive('focusOn',function($timeout) {
//     return {
//         restrict : 'A',
//         link : function($scope,$element,$attr) {
//             $scope.$watch($attr.focusOn,function(_focusVal) {
//                 $timeout(function() {
//                     _focusVal ? $element.focus() :
//                         $element.blur();
//                 });
//             });
//         }
//     }
// });


// app.directive('myFocus', function($timeout) {
//   return {
//     link: function(scope, element, attrs) {
//       scope.$watch(attrs.myFocus, function(value) {
//         if(value === true) { 
//           console.log('value=',value);
//           //$timeout(function() {
//             element[0].focus();
//             scope[attrs.myFocus] = false;
//           //});
//         }
//       });
//     }
//   };
// });

// app.directive('focusInput', function($timeout){
//         return function(scope, element, attr){

//             // Add a watch on the `focus-input` attribute.
//             // Whenever the `focus-input` statement changes this callback function will be executed.
//             scope.$watch(attr.focusInput, function(value){
//                 // If the `focus-input` statement evaluates to `true`
//                 // then use jQuery to set focus on the element.
//                 if (value){
//                     $timeout(function(){
//                         element[0].select();
//                     });
//                 }
//             });

//         };
//     });

// app.directive('todoBlur', [
//         '$parse', function($parse){
//             return function(scope, element, attr){

//                 var fn = $parse(attr['todoBlur']);
//                 return element.on('blur', function(event){

//                     return scope.$apply(function(){
//                         return fn(scope, {
//                             $event: event
//                         });
//                     });

//                 });

//             };
//         }
//     ]);