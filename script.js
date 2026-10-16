document.documentElement.classList.add('js');
const b=document.querySelector('.burger'),m=document.querySelector('#menu');
b&&b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const f=document.querySelector('#contact-form');
f&&f.addEventListener('submit',e=>{e.preventDefault();
 // Branchez ici un service (Formspree, Netlify Forms...) pour recevoir réellement les messages.
 f.innerHTML='<p class="ok" role="status">Merci ! Votre message a bien été pris en compte. Nous vous répondrons rapidement.</p>'});
