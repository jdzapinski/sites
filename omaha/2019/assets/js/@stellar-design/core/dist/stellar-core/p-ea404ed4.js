const t={},c=(t=!1,c=null)=>({success:t,value:c});t.__setupTextArea__=(t="")=>{const c=document.createElement("textarea");return c.value=t,c.style.position="fixed",c.style.top=0,c.style.right=0,c.style.width=0,c.style.height=0,document.body.appendChild(c),c},t.copyPlain=(e="",n=(()=>{}))=>{let u=!1,l=null;const o=t.__setupTextArea__(e);o.select();try{u=document.execCommand("copy"),l=c(u,e)}catch(e){l=c()}return document.body.removeChild(o),n(l),l},t.copyFromElement=(t=null)=>{let e=!1,n=null;t.select();try{e=document.execCommand("copy"),n=c(e,t)}catch(u){n=c(e,t)}};export{t as e};