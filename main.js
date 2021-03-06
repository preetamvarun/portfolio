let backgroundDivs = document.getElementsByClassName('background--noAnimate');
let typeWriter = document.getElementById('typeWriter');
let typeWriter1 = document.getElementById('typeWriter1');
let texts = ['a Web Developer','a problem solver'];
let texts1 = ['Web Developer','problem solver'];
let count = 0, index = 0, currentText = "", letter = "";
let count1 = 0, index1 = 0, currentText1 = "", letter1 = "";

(function type(){
    if(count === texts.length){
        count = 0;
    } else{
        currentText = texts[count];
        index++;
        letter = currentText.slice(0,index);
        typeWriter.textContent = letter;
        if(letter.length === currentText.length){
            count++;
            index = 0;
        }
    }
    setTimeout(type,200);
}());

(function type1(){
    if(count1 === texts1.length){
        count1 = 0;
    } else{
        currentText1 = texts1[count1];
        index1++;
        letter1 = currentText1.slice(0,index1);
        typeWriter1.textContent = letter1;
        if(letter1.length === currentText1.length){
            count1++;
            index1 = 0;
        }
    }
    setTimeout(type1,200);
}());


backgroundDivs = Array.from(backgroundDivs);

let options = {
    root : null,
    threshold : .35,
    rootMargin : "-10px"
}

let backgroundObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('backgroundAnimation');
            backgroundObserver.unobserve(entry.target);
        }
    });
},options);

backgroundDivs.forEach((backgroundDiv) => backgroundObserver.observe(backgroundDiv));


// place an observer on the entire nav div 

let navDiv = document.getElementsByClassName('nav');
let navBck = document.getElementById('navigation-menu');
let menuLinks = document.getElementsByClassName('menu-links');

let options1 = {
    rootMargin : "-60px 0px 0px 0px"
};

/* Here the entry is gonna be a single div */

let navDivObserver = new IntersectionObserver(function(entry){
    // console.log(entry[0].target);
    if(!entry[0].isIntersecting){
        navBck.classList.add('nav__changeFixed');
    } else{
        navBck.classList.remove('nav__changeFixed');
    }
}, options1);

navDiv = Array.from(navDiv);

navDivObserver.observe(navDiv[0]);