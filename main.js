let backgroundDivs = document.getElementsByClassName('background--noAnimate');

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
            console.log(entry.target);
            entry.target.classList.add('backgroundAnimation');
            backgroundObserver.unobserve(entry.target);
        }
    })
},options);

backgroundDivs.forEach((backgroundDiv) => backgroundObserver.observe(backgroundDiv));