angular.module('ngpWebcamRecorder')
    .directive('ngpVideoControls', [
        function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    /**
                     * Watch for scope changes and add remove controls attribute 
                     */
                    scope.$watch(
                        function () {
                            
                            scope.isMute ? element.removeAttr('muted') : element.attr('muted', 'muted');
                            scope.autoPlay ? element.attr('autoplay', 'autoplay') : element.removeAttr('autoplay');
                            scope.showControls ? element.attr('controls', 'controls') : element.removeAttr('controls');
                        }
                    );
                }
            };
        }
    ]);