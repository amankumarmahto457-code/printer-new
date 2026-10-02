var C={biz:"PrinterCraftTech",phone:"+1 (844) 516-9721",email:"info@printercrafttech.com",addr:"Your registered business address, City, State ZIP"};
function each(s,f){document.querySelectorAll(s).forEach(f)}
each("[data-biz]",function(e){e.textContent=C.biz});each("[data-phone]",function(e){e.textContent=C.phone});
each("[data-email]",function(e){e.textContent=C.email});each("[data-addr]",function(e){e.textContent=C.addr});
each("[data-tel]",function(e){e.href="tel:"+C.phone.replace(/[^+\d]/g,"")});each("[data-mail]",function(e){e.href="mailto:"+C.email});
each(".yr",function(e){e.textContent=new Date().getFullYear()});
var d=document.getElementById("d");if(d)d.textContent=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});