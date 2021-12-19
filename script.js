(function(d){
    var config = {
        kitId: 'qfx6bmh',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement, t=setTimeout(function(){
        h.className = h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";
        }, config.scriptTimeout), tk=d.createElement("script"),
        f=false, s=d.getElementsByTagName("script")[0], a;
        
        h.className += " wf-loading";
        tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
        tk.async = true;
        tk.onload = tk.onreadystatechange = function(){
            a = this.readyState;
            if(f || a && a != "complete" && a != "loaded")
                return;
            
            f = true;
            clearTimeout(t);
            try{
                Typekit.load(config)}catch(e){}
            };
            
            s.parentNode.insertBefore(tk,s)
        })(document);

        
// CODE BEGINS

const _page1 = document.querySelector("#page1");
const _page2 = document.querySelector("#page2");

var page1IsOn = true;

function pageChange(){
    if(page1IsOn){
        _page1.style.display = "none";
        _page2.style.display = "block";

        page1IsOn = false;
    }
    else{
        _page1.style.display = "block";
        _page2.style.display = "none";
        page1IsOn = true;
    }
}

window.onload = function(){
    setTimeout(function(){
        scrollTo(0, 0);
    }, 100);

    const A = document.querySelector("#article");
    const leftA = document.querySelectorAll(".leftArticle");
    const rightA = document.querySelectorAll(".rightArticle");
    const _scroll = document.querySelector("#scroll");
    
    const _proBar = document.querySelector("#progressBar_now");
    const _proPoint = document.querySelector("#progressPoint_now_outer");
    
    const _chapterNum = document.querySelector("#chapterNum");
    const _chapterCal = document.querySelector("#chapterCal");
    var chapter, chapterCal;

    function currentScroll(){
        // return Math.min(1, document.documentElement.scrollTop / (document.documentElement.scrollHeight-window.innerHeight)*1.45);
        return Math.min(1, (8600 - chapterCal)/8300);
    }

    window.addEventListener('scroll', e=>{
        chapterCal = document.documentElement.scrollTop + window.innerHeight;

        if(chapterCal <= 8600){
            A.style.width = currentScroll() * 36 + 42 + "rem";

            for(e of leftA){
                e.style.left = (currentScroll()) * -18 + "rem";}
            for(e of rightA){
                e.style.left = (currentScroll()) * 18 + "rem";}
        }
        else if(chapterCal <= 13700){
            A.style.width = "42rem";
            leftA.left = "-18rem";
            rightA.left = "18rem";
        }
        else if(chapterCal <= 18700){
            A.style.width = (18700 - chapterCal)/5000 * 42 + "rem";
        }
        else{
            A.style.width = "0rem";
        }

        var scrollArticle = Math.min(1, (chapterCal - window.innerHeight) / (12400 - window.innerHeight));

        _proBar.style.height =  scrollArticle * 90 + "%";
        _proPoint.style.top = 5 + scrollArticle * 90 + "%";

        document.querySelector("#scrollHeightNum").innerHTML = "전체 높이 : " + document.documentElement.scrollHeight;
        document.querySelector("#scrollTopNum").innerHTML = "현재 위치 : " + document.documentElement.scrollTop.toFixed(0);
        document.querySelector("#innerHeightNum").innerHTML = "화면 높이 : " + window.innerHeight;


        

        const _cl = document.querySelectorAll(".cl");
        const _clImage = document.querySelectorAll(".clImage");

        //reset

        for(let i=0; i<6; i++){
            _cl[i].style.color = "black";
            _clImage[i].style.display = "none";
        }
        _cl[1].innerHTML = "das Manuskript,";
        _cl[2].innerHTML = "übersetzen,";
        _cl[3].innerHTML = "übersetzen,";
        _cl[4].innerHTML = "das Manuskript";
        _cl[5].innerHTML = "die See.";
        

        if(chapterCal < 2560){chapter = 1;
        }
        else if(chapterCal < 5300){
            chapter = 2;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "übersetzen,";
            _cl[3].innerHTML = "übersetzen,";
            _cl[4].innerHTML = "das Manuskript";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 6100){chapter = 3;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "번역하는,";
            _cl[3].innerHTML = "übersetzen,";
            _cl[4].innerHTML = "das Manuskript,";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 7800){chapter = 4;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "번역하는,";
            _cl[3].innerHTML = "번역하는,";
            _cl[4].innerHTML = "das Manuskript,";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 9450){chapter = 5;
        _cl[1].innerHTML = "원고지,";
        _cl[2].innerHTML = "번역하는,";
        _cl[3].innerHTML = "번역하는,";
        _cl[4].innerHTML = "원고지,";
        _cl[5].innerHTML = "die See.";
        }
        else{chapter = 6;
        _cl[1].innerHTML = "원고지,";
        _cl[2].innerHTML = "번역하는,";
        _cl[3].innerHTML = "번역하는,";
        _cl[4].innerHTML = "원고지,";
        _cl[5].innerHTML = "바다.";
        }
        
        _chapterNum.innerHTML = chapter;
        _chapterCal.innerHTML = chapterCal;


        _cl[chapter - 1].style.color = "blue";
        _clImage[chapter - 1].style.display = "inline";
    });
}

const _footnote = document.querySelectorAll(".footnote");
const _footnoteBox = document.querySelectorAll(".footnoteBox");

_footnote[0].addEventListener("mouseover", function (e){
    _footnoteBox[0].style.display = "block";
}, false);
_footnote[0].addEventListener("mouseout", function (e){
    _footnoteBox[0].style.display = "none";
}, false);

_footnote[1].addEventListener("mouseover", function (e){
    _footnoteBox[1].style.display = "block";
}, false);
_footnote[1].addEventListener("mouseout", function (e){
    _footnoteBox[1].style.display = "none";
}, false);