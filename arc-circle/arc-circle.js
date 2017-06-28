(function () {
    var CIRCLE_DEGREE = 360;
    var HALF_CIRCLE_DEGREE = CIRCLE_DEGREE / 2;
    var MASK_ZINDEX = 300;

    function step(timestamp) {
        if (Pie.start == null) {
            Pie.start = timestamp;
        }
    
        var progress = timestamp - Pie.start;
        var deg = Math.min(progress * Pie.rot / Pie.duration, CIRCLE_DEGREE);
        
        document.getElementsByClassName('spinner')[0].style.transform = 'rotate(' + deg + 'deg)';
        
        if (deg >= HALF_CIRCLE_DEGREE) {
            document.getElementsByClassName('filler')[0].style.borderColor = 'rgba(0,0,0,0.5)';
            document.getElementsByClassName('mask')[0].style.zIndex = 100;
        }
        
        var shouldContinue = deg < Pie.rot;
        
        if (shouldContinue) {
            Pie.requestId = requestAnimationFrame(step);
        } else if (Pie.infinite) {
            Pie.launch(Pie.rot, Pie.duration, Pie.infinite);
        }
    }
    
    function reset(rot, duration, infinite) {
        Pie.start = null;
        Pie.rot = rot;
        Pie.duration = duration;
        Pie.infinite = infinite;
        
        if (Pie.requestId) {
            window.cancelAnimationFrame(Pie.requestId);
        }
        
        document.getElementsByClassName('spinner')[0].style.transform = 'rotate(0deg)';
        document.getElementsByClassName('filler')[0].style.borderColor = 'rgba(0,0,0,0.1)';
        document.getElementsByClassName('mask')[0].style.zIndex = MASK_ZINDEX;
    }
    
    function launch(rot, duration, infinite) {
        reset(rot, duration, infinite);
        Pie.requestId = requestAnimationFrame(step);
    }

    window.Pie = {
        launch: launch
    }

    window.onload = function() {
        Pie.launch(360, 1000, false);
    }
})();