// get references to the form and display area
const resumeForm = document.getElementById("resumeform") as HTMLFormElement
const resumeDisplayElement=document.getElementById("resumedisplay") as HTMLDivElement
// Handle form submission
resumeForm.addEventListener("submit",(event:Event)=>{
    event.preventDefault(); // prevent page reload
    // collect input values
    const name=(document.getElementById("name") as HTMLInputElement).value
    const email=(document.getElementById("email") as HTMLInputElement).value
    const phone=(document.getElementById("phone") as HTMLInputElement).value
    const education=(document.getElementById("education") as HTMLInputElement).value
    const experience=(document.getElementById("experience") as HTMLInputElement).value
    const skills=(document.getElementById("skills") as HTMLInputElement).value
    
    // generate the resume or content dynamically
    const resumeHtml=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:<b/> ${name}</p>
     <p><b>Email:<b/> ${email}</p>
      <p><b>phone:<b/> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
    
      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Skills</h3>
      <p>${skills}</p>

    `;
    // display generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML=resumeHtml;
    }else{
        console.error("The resume display element is missing")
    }
})