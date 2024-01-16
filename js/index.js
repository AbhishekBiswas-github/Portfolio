import {testimonials, skiilList, projectList, socialLinks} from './resources.js'



// DOM Variables
const introCard = document.querySelector(".intro-card");
const experienceCardContainer = document.querySelector(".card-container");
const testiNext = document.querySelector(".btn-testi-next");
const skills = document.querySelector('.skill-list');
const projects = document.querySelector('.project-lists');
const movileNavBtn = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelectorAll(".menu-link");
const formBtn = document.querySelector(".form-btn");
const footerLinks = document.querySelector('.footer-links');

// Fixed Values
let TESTI_INDEX = 1;

// Intro Card animation
introCard.addEventListener('mouseenter',()=>{
    introCard.classList.add('show-intro');
})
introCard.addEventListener('mouseleave',()=>{
    introCard.classList.remove('show-intro');
})


// Flip Effect
experienceCardContainer.addEventListener("click",function(e){
    experienceCardContainer.classList.toggle('rotate-card')
})


// Testimonials buttons
const setTestimonial = (testi) => {
    const testiBody = document.querySelector('.testi-body').innerHTML = `<p class="testi-label">${testi.name}</p>
    <img src="${testi.image}" alt="testimonial image" class="testi-image">
    <p class="testi-detail">
       ${testi.about}
    </p>
    <p class="doi">Issued on : ${testi.issuedOn}</p>`
}

const changeTesti = function(){
        console.log(TESTI_INDEX)
        setTestimonial(testimonials[TESTI_INDEX]);
        TESTI_INDEX = (TESTI_INDEX !== testimonials.length-1) ? TESTI_INDEX + 1 : 0;
}
testiNext.addEventListener("click",() => {
    changeTesti()
})


// Show skill list
const skillHTML = skiilList.map(skill => `<div class="skiil-item">
<p class="skill-name">${skill.name}</p>
<div class="skill-image">
    <img src="${skill.imageSrc}" alt="skill image" class="skill-img">
</div>
</div>`).join('\n');
skills.innerHTML = skillHTML;

// Project list display
const projectHTML = projectList.map(project => `<a class="project-card" href="${project.link}" target="_blank">
<div class="project-logo">
    <img src="${project.imageSRC}" alt="" class="logo">
</div>
<p class="project-name">${project.name}</p>
</a>`).join('')

projects.innerHTML = projectHTML

// Mobile Navigation Feature
movileNavBtn.addEventListener("click",()=>{
    document.querySelector(".main-nav").classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click",()=>{
        document.querySelector(".main-nav").classList.remove('nav-open');
    })
})


// Email JS Configuration
function sendMail (){
    const params = {
        name: document.querySelector("#c-name").value,
        email: document.querySelector("#c-email").value,
        phone: document.querySelector("#c-phone").value,
        message: document.querySelector("#c-subject").value
    }

    const serviceId = "service_tfihn9m";
    const templateId = "template_la294pe";

    emailjs.send(serviceId, templateId, params)
    .then(
        res =>{
            document.querySelector("#c-name").value = ""
            document.querySelector("#c-email").value = ""
            document.querySelector("#c-phone").value = ""
            document.querySelector("#c-subject").value = ""
            console.log(res)
            alert("Email send successfully")
        }
    )
    .catch(
        err => console.log(err)
        
    )
}

formBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    sendMail();
})


const footerHTML = socialLinks.map(link => `<li class="footer-link"><a href="${link.link}" target="${link.target}" rel="noopener noreferrer"><img src="${link.image}" alt="social-links" class="social-links"></a></li>`).join('');
console.log(footerHTML)
footerLinks.innerHTML = footerHTML;