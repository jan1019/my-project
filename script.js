const faders = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class when in viewport
            observer.unobserve(entry.target);       // Stop observing once visible
        }
    });
}, {
    threshold: 0.2 
});

faders.forEach(fader => {
    observer.observe(fader);
});


function showDetails(d){
    const div = document.getElementById(d);
    switch(d){
        case "skills":
            div.style.display = "block";
            document.getElementById('experience').style.display = "none";
            document.getElementById('education').style.display = "none";

            document.getElementById('skills-tab').style.color = "#1b7f8f";
            document.getElementById('experience-tab').style.color = "#ffffff";
            document.getElementById('education-tab').style.color = "#ffffff";
            break;
        case "experience":
            div.style.display = "block";
            document.getElementById('skills').style.display = "none";
            document.getElementById('education').style.display = "none";

            document.getElementById('skills-tab').style.color = "#ffffff";
            document.getElementById('experience-tab').style.color = "#1b7f8f";
            document.getElementById('education-tab').style.color = "#ffffff";
            break;
        case "education":
            div.style.display = "block";
            document.getElementById('experience').style.display = "none";
            document.getElementById('skills').style.display = "none";

            document.getElementById('skills-tab').style.color = "#ffffff";
            document.getElementById('experience-tab').style.color = "#ffffff";
            document.getElementById('education-tab').style.color = "#1b7f8f";
            break;
             

    }
};


function formSubmit(){
    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if(username === "" || email === ""){
        alert("Please fill in all required fields.");
        return;
    }

    alert(`Thank you! ${username} for reaching out. I will get back to you soon.`);
};