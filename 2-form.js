import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const n={email:"",message:""},t=document.querySelector(".feedback-form");t.querySelector(".message");o();t.addEventListener("input",s);t.addEventListener("submit",r);function s(e){const a=e.target.name;n[a]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:a,message:l}=t.elements;a.value=e.email,l.value=e.message}}function r(e){e.preventDefault();const{email:a,message:l}=t.elements;if(a.value===""||l.value==="")return alert("Please fill in all the fields!");localStorage.clear("feedback-form-state"),t.reset()}
//# sourceMappingURL=2-form.js.map
