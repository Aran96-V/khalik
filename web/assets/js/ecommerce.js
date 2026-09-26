document.addEventListener('DOMContentLoaded',()=>{
 const mini=document.querySelector('.mini-cart'), overlay=document.querySelector('.mini-cart-overlay');
 document.querySelectorAll('.js-cart-toggle,.add-cart').forEach(el=>el.addEventListener('click',e=>{if(el.classList.contains('js-cart-toggle'))e.preventDefault();mini?.classList.add('open');overlay?.classList.add('open')}));
 const close=()=>{mini?.classList.remove('open');overlay?.classList.remove('open')};
 document.querySelector('.mini-close')?.addEventListener('click',close);overlay?.addEventListener('click',close);
 document.querySelector('.mobile-filter')?.addEventListener('click',()=>document.querySelector('.filters')?.classList.toggle('open'));
 document.querySelectorAll('.qty').forEach(q=>{let i=q.querySelector('input'),b=q.querySelectorAll('button');b[0]?.addEventListener('click',()=>i.value=Math.max(1,(+i.value||1)-1));b[1]?.addEventListener('click',()=>i.value=(+i.value||1)+1)});
 document.querySelectorAll('.account-nav button[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.account-nav button').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.account-tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.tab)?.classList.add('active')}));
 document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>document.querySelector(`[data-tab="${b.dataset.go}"]`)?.click()));
});
