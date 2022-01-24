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

////////////////////// PAGE1 ///////////////////////

const y_IntroBegin = 700;
const y_IntroFinish = 5000;
const y_ArticleBegin = 0;
const y_ArticleFinish = 0;

const _bg = document.querySelector("#bg");
const _topArea = document.querySelector("#topArea");
const _bottomArea = document.querySelector("#bottomArea");

const _title = document.querySelector("#title");
const _title_text = document.querySelectorAll(".title_text_img");
const _title_text_hover = document.querySelectorAll(".title_text_img:hover");

const _title_text_lower = document.querySelector("#title_text_lower");
const _title_indicator = document.querySelectorAll(".title_indicator");
const _skip_Button = document.querySelector("#skipButton");

const _intro = document.querySelector("#intro");

////////////////////// PAGE2 ///////////////////////

const _scrollDownImg = document.querySelector("#scrollDownImg");
const A = document.querySelector("#article");
const leftA = document.querySelectorAll(".leftArticle");
const rightA = document.querySelectorAll(".rightArticle");
const _scroll = document.querySelector("#scroll");

const _side = document.querySelector("#side");

const _proBar = document.querySelector("#progressBar_now");
const _proPoint = document.querySelector("#progressPoint_now_outer");

const _chapterNum = document.querySelector("#chapterNum");
const _chapterCal = document.querySelector("#chapterCal");


/////////////////////////////////////////////////////

const TITLE_TEXT_OPACITY = .5;

function pageChange_bySkip(){
    document.documentElement.scrollTop = 11600;
}
function pageChange_byLogo(){
    document.documentElement.scrollTop = 0;
}

window.onload = function(){
    
    setTimeout(function(){
        scrollTo(0, 0);
    }, 100);
    
    var chapter, chapterCal;
    
    function currentScroll(){
        return Math.min(1, (11000 - chapterCal)/8000);
    }
    
    window.addEventListener('scroll', e=>{  
        document.querySelector("#scrollHeightNum").innerHTML = "전체 높이 : " + document.documentElement.scrollHeight;
        document.querySelector("#scrollTopNum").innerHTML = "현재 위치 : " + document.documentElement.scrollTop.toFixed(0);
        document.querySelector("#innerHeightNum").innerHTML = "화면 높이 : " + window.innerHeight;
        

        var scr = document.documentElement.scrollTop;

        if(scr < y_IntroBegin || scr > y_IntroFinish && scr < y_IntroBegin + y_IntroFinish){
            
            if(scr < y_IntroBegin){
                temp = scr / y_IntroBegin;
                
                _title_text[0].style.opacity = 1;
                _title_text[1].style.opacity = 1;
                for(let i=2; i<6; i++)
                    _title_text[i].style.opacity = 1- temp/2;
            }
            else{
                temp = (y_IntroBegin + y_IntroFinish - scr) / y_IntroBegin;
                
                for(let i=0; i<5; i++)
                    _title_text[i].style.opacity = 1 - temp/2;
                _title_text[5].style.opacity = 1;
            }

            _bottomArea.style.top = 26 - 6*temp + "%";
            _title.style.left = 29.5 - 20.5*temp + "rem";

            for(let i=0; i<4; i++){
                _title_text[i].style.height = 7.7 - 4.5*temp + "rem";
                _title_text[i].style.marginBottom = .1 - .9*temp + "rem";
            }
            for(let i=4; i<6; i++){
                _title_text[i].style.height = 2 + 1.2*temp + "rem";
                _title_text[i].style.marginBottom = 1 - 1.8*temp + "rem";
            }
            
            _title_text_lower.style.top = -11.5 + 11.5*temp + "rem";
            _title_text_lower.style.left = 39 - 39*temp + "rem";

            for(let i=0; i<6; i++){
                _title_text[i].style.borderColor = "white";
            }
            for(let i=0; i<4; i++){
                _title_indicator[i].style.display ="none";
            }

            _skip_Button.style.display = "none";
            
            _intro.style.opacity = temp;
        }
        else if(scr < y_IntroFinish){
            _bottomArea.style.top = "20%";
            _title.style.left = "9rem";
            
            for(let i=0; i<6; i++){
                _title_text[i].style.height = "3.2rem";
                _title_text[i].style.marginBottom = "-.8rem";
            }
            
            _title_text_lower.style.top = "0rem";
            _title_text_lower.style.left = "0rem";
            
            _skip_Button.style.display = "block";

            _intro.style.opacity = 1;
            
            for(let i=0; i<6; i++){
                _title_text[i].style.opacity = TITLE_TEXT_OPACITY;
                _title_text[i].style.borderColor = "white";
            }
            for(let i=0; i<4; i++){
                _title_indicator[i].style.display ="none";
            }
            
            if(scr < 2200){
                _title_text[0].style.opacity = 1;
                _title_text[1].style.opacity = 1;
                _title_text[0].style.borderColor = "black";
                _title_text[1].style.borderColor = "black";
                _title_indicator[0].style.display ="inline";
            } else if(scr < 3150){
                _title_text[2].style.opacity = 1;
                _title_text[3].style.opacity = 1;
                _title_text[2].style.borderColor = "black";
                _title_text[3].style.borderColor = "black";
                _title_indicator[1].style.display ="inline";
            } else if(scr < 4000){
                _title_text[4].style.opacity = 1;
                _title_text[4].style.borderColor = "black";
                _title_indicator[2].style.display ="inline";
            } else if(scr < 6000){
                _title_text[5].style.opacity = 1;
                _title_text[5].style.borderColor = "black";
                _title_indicator[3].style.display ="inline";
            }
        }

        // page1 page2 transition

        if(scr < 9000){
            _page1.style.opacity = 1;
            _page2.style.opacity = 0;

            _bg.style.width = "100%";
            _bg.style.marginLeft = "-50%";
        } else if(scr < 11000){
            _page1.style.display = "block";
            _page1.style.opacity = 1- (scr-9000) /2000;
            _page2.style.opacity = (scr-9000) /2000;
            
            _bg.style.width = `${
                scr/9000 *100
            }%`;
            _bg.style.marginLeft = `${
                scr/9000 * -50
            }%`;
        } else if(scr < 12000){
            _page1.style.display = "none";
            _page1.style.opacity = 1;
            _page2.style.opacity = 1;

            _bg.style.width = 1100/9 + "%";
            _bg.style.marginLeft = -550/9 + "%";
        }

        if(scr < 13000){
            _scrollDownImg.style.display = "block";
            _scrollDownImg.style.opacity = 1;
        } else if(scr < 14400){
            _scrollDownImg.style.display = "block";
            _scrollDownImg.style.opacity = (14400-scr) /1400;
        } else{
            _scrollDownImg.style.display = "none";
        }


        if(scr < 6000){
            _topArea.style.height = "19%";

            _title.style.transform = "scale(1)";
        } else if(scr < 11000){
            _topArea.style.height = `${Math.max(0,
                19 - (scr-6000) /100 *19
            )}%`;

            // 초기비율:1 나중비율 p:10
            // 시작scr 8000 나중scr 10000
            // opacity = p-1/2000 x + 1-4(p-1)
            _title.style.transform = `scale(${
                scr*9/2000 -26
            })`;
        } else{
            _topArea.style.height = "0%";

            _title.style.transform = "scale(23.5)";
        }

        ////////////
        // 기존 page2

        // page1_length = 13000, extra = 2000
        chapterCal = window.innerHeight -11000 -2000
            +document.documentElement.scrollTop;

        if(chapterCal <= 2000){
            A.style.width = Math.min(1,
                Math.max(0, chapterCal/2000)
            ) *78 + "rem";

            _side.style.opacity = Math.max(0,
                (chapterCal/2000)
            );
        } else if(chapterCal <= 3000){
            A.style.width = "78rem";
        } else if(chapterCal <= 11000){
            A.style.width = currentScroll() * 36 + 42 + "rem";

            for(e of leftA){
                e.style.left = (currentScroll()) * -18 + "rem";}
            for(e of rightA){
                e.style.left = (currentScroll()) * 18 + "rem";}
        }
        else if(chapterCal <= 15700){
            A.style.width = "42rem";
            leftA.left = "-18rem";
            rightA.left = "18rem";
        }
        else if(chapterCal <= 17700){
            A.style.width = (17700 - chapterCal)/2000 * 42 + "rem";
        }
        else{
            A.style.width = "0rem";
        }

        var scrollArticle = Math.min(1, Math.max(0,
            (chapterCal -window.innerHeight -1800) 
            / (17400 - window.innerHeight)
        ));

        _proBar.style.height =  scrollArticle * 90 + "%";
        _proPoint.style.top = 5 + scrollArticle * 90 + "%";


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
        

        if(chapterCal < 2100+ 2560){
            chapter = 1;
        }
        else if(chapterCal < 2100+ 5300){
            chapter = 2;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "übersetzen,";
            _cl[3].innerHTML = "übersetzen,";
            _cl[4].innerHTML = "das Manuskript";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 2100+ 6100){chapter = 3;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "번역하는,";
            _cl[3].innerHTML = "übersetzen,";
            _cl[4].innerHTML = "das Manuskript,";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 2100+ 7800){chapter = 4;
            _cl[1].innerHTML = "원고지,";
            _cl[2].innerHTML = "번역하는,";
            _cl[3].innerHTML = "번역하는,";
            _cl[4].innerHTML = "das Manuskript,";
            _cl[5].innerHTML = "die See.";
        }
        else if(chapterCal < 2100+ 9450){chapter = 5;
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

        if(chapterCal < 2100+ 13700){
            _cl[chapter - 1].style.color = "blue";
            _clImage[chapter - 1].style.display = "inline";
        }
    });
    window.addEventListener('mouseout', e=>{
        document.querySelector(".title_text_img:hover").style.opacity = 1;
    });
    window.addEventListener('mouseover', e=>{
        document.querySelector(".title_text_img:hover").style.opacity = 1;
    });

    A.onmouseup = function(){
        if(isHlbOn){
            for(e of leftA){
                e.style.backgroundColor = "#19269C";
            }
            for(e of rightA){
                e.style.backgroundColor = "#19269C";
            }
        }
    }
}

const _hlb = document.querySelector("#highlightButton");
let isHlbOn = false;
function highlight(){
    if(isHlbOn){
        _hlb.src = "image/highlight_out.svg";
        A.style.cursor = "text";
        isHlbOn = false;

        for(e of leftA){
            e.style.backgroundColor = "white";
        }
        for(e of rightA){
            e.style.backgroundColor = "white";
        }
    } else{
        _hlb.src = "image/highlight_on.svg";
        A.style.cursor = "url(image/highlight_cursor.cur) 5 10, default";
        isHlbOn = true;
    }
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

/////////////////
