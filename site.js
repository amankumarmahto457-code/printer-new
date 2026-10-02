/* EDIT THESE 5 VALUES ONLY */
var C={biz:"Your Business Name",phone:"+1 (844) 516-9721",email:"info@yourdomain.com",hours:"Mon–Sat, 9:00 AM – 7:00 PM",addr:"Your full registered business address, City, PIN"};
function each(s,fn){document.querySelectorAll(s).forEach(fn)}
each("[data-biz]",function(e){e.textContent=C.biz});
each("[data-phone]",function(e){e.textContent=C.phone});
each("[data-email]",function(e){e.textContent=C.email});
each("[data-hours]",function(e){e.textContent=C.hours});
each("[data-addr]",function(e){e.textContent=C.addr});
each("[data-tel]",function(e){e.href="tel:"+C.phone.replace(/[^+\d]/g,"")});
each("[data-mail]",function(e){e.href="mailto:"+C.email});
document.getElementById("y").textContent=new Date().getFullYear();
var d=document.getElementById("d");if(d)d.textContent=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
