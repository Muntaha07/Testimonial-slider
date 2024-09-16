var Testimonials = [
    {
        userImage:"https://plus.unsplash.com/premium_photo-1661304704888-542933309d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJ1c2luZXNzbWVuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
        userName:"- Samantha Davis",
        userText:"I am beyond impressed with the user-friendly design of Apple's mobile products. They truly make technology accessible for all.",
    },
    {
        userImage:"https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzbWVuJTIwcHJvZmlsZSUyMHBpY3R1cmUlMjBtZW58ZW58MHx8MHx8fDA%3D",
        userName:"- Alexa Johnson",
        userText:"I cannot imagine my life without my mobile from apple. It is incredibly user-friendly and I love every feature.",
    },
    {
        userImage:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJ1c2luZXNzbWVuJTIwcHJvZmlsZSUyMHBpY3R1cmUlMjBtZW58ZW58MHx8MHx8fDA%3D",
        userName:"- Emily Wilson",
        userText:"I am extremely satisfied with apple's mobile products. They are user-friendly and offer top-notch performance.",
    },
]
var imageEl = document.querySelector("img")
var textEl = document.querySelector(".text")
var userNameEl = document.querySelector(".user")

var idx =0;


function updateTheTestimonial() {
    const {userName,userImage,userText}=Testimonials[idx];
    imageEl.src = userImage;
    textEl.innerHTML =userText;
    userNameEl.innerHTML =userName;
    idx++
    if(idx===Testimonials.length){
        idx=0
    }
    setTimeout(() => {
        updateTheTestimonial();
        console.log(Testimonials);
        
    }, 3000);
}
updateTheTestimonial()
