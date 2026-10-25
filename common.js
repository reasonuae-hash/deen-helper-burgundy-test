// إعدادات عامة: الموقع باللغة العربية فقط، ولا يوجد زر لتغيير اللغة.
document.documentElement.lang='ar';
document.documentElement.dir='rtl';
// تأثير ظهور هادئ عند تمرير الصفحة. يعمل الموقع أيضاً إذا لم يدعم المتصفح الميزة.
document.addEventListener('DOMContentLoaded',()=>{
  const cards=document.querySelectorAll('.feature-card,.card,.info-panel');
  if(!('IntersectionObserver' in window))return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('shown');observer.unobserve(entry.target)}});
  },{threshold:.08});
  cards.forEach(card=>{card.classList.add('reveal');observer.observe(card)});
});
