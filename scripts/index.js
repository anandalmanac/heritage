
tl1=gsap.timeline()
tl1.from("#zoom-1",{scale:4,opacity:0,duration:6,ease:'ease-in-out'})
tl1.from("#zoom-2",{scale:4,opacity:0,duration:7,ease:'ease-in-out'},"=-4")
tl1.from("#zoom-3",{scale:4,opacity:0,duration:7,ease:'ease-in-out'},"=-4")
tl1.from(".parallax-img",{scale:4,opacity:0,duration:6,ease:'ease-in-out'},"=-3")
tl1.to('.arrow',{display:'unset'})



gsap.from('.home-content',{scale:.6,opacity:0,duration:16})


window.addEventListener('scroll',()=>{
    document.querySelector('.home-content').style.transform='translateY('+(.25*window.scrollY)+'px)';
    document.querySelector('.home-content').style.opacity=(1-.0025*window.scrollY);
    document.querySelector('#parallax-1').style.transform='translateY('+(.1*window.scrollY)+'px)';
    document.querySelector('#parallax-1').style.filter=" brightness("+(0.8-.0006*window.scrollY)+")";


 
    document.querySelector('.aboutbg').style.transform="scale("+(1+.00019*window.scrollY)+")"
    document.querySelector('.about2bg').style.transform="scale("+(1.5-.00019*window.scrollY)+")"
    document.querySelector('.about3bg').style.transform="scale("+(1+.00019*window.scrollY)+")"
    document.querySelector('.about4bg').style.transform="scale("+(1.5-.0001*window.scrollY)+")"
    document.querySelector('.about5bg').style.transform="scale("+(1+.00019*window.scrollY)+")"
})


