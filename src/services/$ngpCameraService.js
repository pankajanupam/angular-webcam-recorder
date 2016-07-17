angular.module('ngpWebcamRecorder')
    .directive('$ngpCameraService', [
        function () {
            var stream;

            return{
                getStream: function () {
                    return stream;
                },
                },
                start: function (successHandle, errorHandel) {
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

                    if (navigator.getUserMedia) {
                        navigator.getUserMedia({audio: true, video: true}, successHandle, errorHandel);
                    }
                },
                stop: function () {
                    // stop all stream audio, video etc
                    stream.getTracks().map(function (val) {
                        val.stop();
                    });
                }
            };
        }
    ]);
