window.onload = function(){
    const A = document.querySelector("#article");
    const leftA = document.querySelectorAll(".leftArticle");
    const rightA = document.querySelectorAll(".rightArticle");
    const _scroll = document.querySelector("#scroll");

    function currentScroll(){
        return Math.min(1, document.documentElement.scrollTop / (document.documentElement.scrollHeight-window.innerHeight)*1.45);

    }

    window.addEventListener('scroll', e=>{
        _scroll.innerHTML = (currentScroll() * 100).toFixed(2) + "%";

        A.style.width = (1-currentScroll()) * 36 + 42 + "rem";
        for(e of leftA){
            e.style.left = (1-currentScroll()) * -18 + "rem";
        }
        for(e of rightA){
            e.style.left = (1-currentScroll()) * 18 + "rem";
        }
    });
}