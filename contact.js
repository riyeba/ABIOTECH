const textbuttons=document.querySelectorAll('.contact_btn');

textbuttons.forEach(textbutton => {
  let text= textbutton.querySelector('p');
 text.innerHTML= text.innerHTML.split('').map((character,index)=>`<span style="transform: rotate(${index*25}deg)">${character}</span>`).join('');
  

});

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
