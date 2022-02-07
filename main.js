let backgroundDivs = document.getElementsByClassName('background--noAnimate');
let typeWriter = document.getElementById('typeWriter');
let texts = ['Poorna Sandeep','a Web Developer','a competetive programmer'];
let count = 0, index = 0, currentText = "", letter = "";

/* IIFE (USING A SELF INVOKED FUNCTION) */

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
})();

backgroundDivs = Array.from(backgroundDivs);

let options = {
    root : null,
    threshold : .35,
    rootMargin : "-60px"
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
