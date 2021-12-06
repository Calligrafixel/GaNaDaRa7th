window.onload = function(){

    var leftA = document.querySelectorAll(".leftArticle");
    var rightA = document.querySelectorAll(".rightArticle");
    var _scroll = document.querySelector("#scroll");

    window.addEventListener('scroll', e=>{
        var value = ( (((document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight) -0.16713)/(1-.16713) ).toFixed(3);
        _scroll.innerHTML = (value * -16) + "rem";

        for(e of leftA){
            e.style.left = ((1-value) * -16) + "rem";
        }
        for(e of rightA){
            e.style.left = ((1-value) * 16) + "rem";
        }
    });
}