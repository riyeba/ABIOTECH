window.addEventListener('scroll', function(){
  document.querySelector('nav').classList.toggle('window_scroll',window.scrollY>0)
})

//Contact buttons//

const textbuttons=document.querySelectorAll('.contact_btn');

textbuttons.forEach(textbutton => {
  let text= textbutton.querySelector('p');
 text.innerHTML= text.innerHTML.split('').map((character,index)=>`<span style="transform: rotate(${index*25}deg)">${character}</span>`).join('');
  

});

//Initialize Swiper//
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        599:{
          slidesPerView: 2,
          spaceBetween: 40
        },
        1023:{
          slidesPerView:3,
          spaceBetween: 60,

        }

      }
    });


   // nav bar//

   const navlinks=document.querySelector('.nav_links');
   const navtoggleopen=document.getElementById('nav_toggle-open');
   const navtoggleclose=document.getElementById('nav_toggle-close');
   const navlink=document.querySelector('.nav_links')
   

   navtoggleopen.addEventListener('click',()=>{
      navlinks.style.display='flex';
      navtoggleopen.style.display='none'
      navtoggleclose.style.display='inline-block'
   })

   navtoggleclose.addEventListener('click',()=>{
    navlinks.style.display='none';
    navtoggleclose.style.display='none'
    navtoggleopen.style.display='inline-block'
 })




navlink.addEventListener('click',()=>{
  if ((window.innerWidth <=1020)){
    navlinks.style.display='none';
    navtoggleclose.style.display='none'
    navtoggleopen.style.display='block'
  }
    
})


//navigation//
/*document.querySelector('.nav_links').addEventListener('click',(e)=>{
  e.preventDefault()
if(e.target.classList.contains('nav_link')){
  const id=e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({behavior:'smooth'})


}
})*/

document.querySelector('.nav').addEventListener('mouseover',(e)=>{
  if(e.target.classList.contains('nav_link')){
  const link=e.target
  const sibling=link.closest('.nav').querySelectorAll('.nav_link')
  const logo=link.closest('.nav').querySelector('h1');

  sibling.forEach(el=>{
    if(el!==link) el.style.opacity=0.995;
  })
  logo.style.opacity=0.995;
  }
})

document.querySelector('.nav').addEventListener('mouseout',(e)=>{
  if(e.target.classList.contains('nav_link')){
  const link=e.target
  const sibling=link.closest('.nav').querySelectorAll('.nav_link')
  const logo=link.closest('.nav').querySelector('h1');

  sibling.forEach(el=>{
    if(el!==link) el.style.opacity=1;
  })
  logo.style.opacity=1;
  }
})

const allSection =document.querySelectorAll('.reveal');
console.log(allSection);

const revealSection=(entries,observer)=>{
const [entry]=entries;
console.log(entry.target);
}

const sectionObsever=new IntersectionObserver(revealSection,()=>{

})

  

