// Scroll Animations

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
".card,.stat-box,.testimonial-card"
).forEach(el => {

    el.classList.add("fade-up");
    observer.observe(el);

});


// Counter Animation

const counters = document.querySelectorAll(".stat-box h1");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        parseInt(counter.innerText);

        const current =
        parseInt(counter.getAttribute("data-count")) || 0;

        const increment =
        Math.ceil(target / 100);

        if(current < target){

            const value =
            current + increment;

            counter.setAttribute(
            "data-count",
            value);

            counter.innerText = value + "+";

            setTimeout(updateCounter,20);

        }
        else{
            counter.innerText =
            target + "+";
        }

    };

    updateCounter();

});


// Loading Message

window.addEventListener("load",()=>{

    console.log(
    "Swift Logistics Loaded Successfully"
    );

});
