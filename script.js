(function(d) {
    var config = {
        kitId: 'qfx6bmh',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);


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