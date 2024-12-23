var button = document.querySelector("button");

function cb() {
    console.log(Math.random());
}


button.addEventListener("click", debounce(cb,500));

var callback =throttle(cb,500);//返回值是一个function

button.addEventListener("click",callback );



//防抖函数
function debounce(fn,delay) {
    var timer =null;
    //矫正的e在这里传入
    return function (e) {
        var self = this;
        clearTimeout(timer);
        timer=setTimeout(function () {
            //第一个参数是矫正this
            //第二个参数是矫正e
            fn.call(self,e);
        },delay);
    };
}

function throttle(fn, delay) {
    var timeStamp = null;
    return function (e) {
        var self = this;
        if (timeStamp===null){
            fn.call(self,e);
            timeStamp=Date.now();
        }else {
            var current = Date.now();
            if (current-timeStamp>=delay){
                fn.call(self,e);
                timeStamp=current;
            }
        }
    };
}
function resizeCb() {
    console.log(Math.random());
}

window.addEventListener("resize", throttle(resizeCb,1000));

function myThrottle(fn, delay) {
    var timer = null;
    var flag = true;
    return function (e) {
        var self = this;
        clearTimeout(timer);
        timer=setTimeout(function () {
            //第一个参数是矫正this
            //第二个参数是矫正e
            fn.call(self,e);
        },delay);
    };
}