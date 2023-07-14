let opencity = document.querySelectorAll(".affilated-container");
opencity.forEach(affilatedcontainer => {
    affilatedcontainer.addEventListener("click", () => {
        affilatedcontainer.classList.toggle("active");
        // console.log(affilatedcontainer.classList.toggle("active"));
    })
})
let opencourse = document.querySelectorAll(".course-name-container");
opencourse.forEach(coursenamecontainer => {
    coursenamecontainer.addEventListener("click", () => {
        coursenamecontainer.classList.toggle("active");
    })
})
let openfee=document.querySelectorAll(".course-fee-container");
openfee.forEach(coursefeecontainer =>{
    coursefeecontainer.addEventListener("click",()=>{
        coursefeecontainer.classList.toggle("active");
    })
})
let opentype=document.querySelectorAll(".type-clz-container");
opentype.forEach(typeclzcontainer =>{
    typeclzcontainer.addEventListener("click",()=>{
        typeclzcontainer.classList.toggle("active");
    })
})
let openduration=document.querySelectorAll(".duration-container");
openduration.forEach(durationcontainer =>{
    durationcontainer.addEventListener("click",() =>{
        durationcontainer.classList.toggle("active");
    })
})
    