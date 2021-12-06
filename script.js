window.onload = function(){

    var leftA = document.querySelectorAll(".leftArticle");
    var rightA = document.querySelectorAll(".rightArticle");
    var _scroll = document.querySelector("#scroll");

    window.addEventListener('scroll', e=>{
        var value = ( (((document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight) -0.16713) ).toFixed(3);
        _scroll.innerHTML = Math.min(value/.656, 1);

        for(e of leftA){
            e.style.left = ((Math.min(value/.656, 1)-1) * 16) + "rem";
        }
        for(e of rightA){
            e.style.left = ((Math.min(value/.656, 1)-1) * -16) + "rem";
        }
    });
}