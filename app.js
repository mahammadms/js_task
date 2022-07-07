var ssCounter = function () {
    document.getElementById("counter").innerHTML = cnt.sscounter
}

var Event = function () {
    document.getElementById("increase").addEventListener("click", function () {
        increase();
        ssCounter();
      });
}

document.getElementById("decrease").addEventListener("click", function () {
    decrease();
    ssCounter();
});

var cnt = {
    counter: 0
};

var increase = function () {
    cnt.counter++;
};
  

var decrease = function () {
    cnt.counter--;
};

var init = function () {
    bindEvents();
    drawCounter();
  };
