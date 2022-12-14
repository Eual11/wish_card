
var s = document.querySelector("#wish")
let hidden = document.querySelectorAll(".hidden")
let observer = new IntersectionObserver((entry)=>
{
    entry.forEach(element => {
        
        if(element.isIntersecting)
        {
            element.target.classList.add("show");
        }
        else{
            element.target.classList.remove("show");
        }
    });
})


hidden.forEach(element => {
    observer.observe(element)
});
let img = document.querySelectorAll("img");
img.forEach(el=>
    {
        observer.observe(el)
    })
party.confetti(s)    
party.sparkles(s)
party.sparkles(s)
setInterval((()=>
    {
        party.confetti(s)    
        party.sparkles(s)
    }),5000)
