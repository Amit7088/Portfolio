const form =document.querySelector('form');

function sendEmail(){
    Email.send({
        Host: "amitchandola2002@gmail.com",
        Username: "amitchandola2002@gmail.com",
        Password: "A558262430CC32B439657A78197DFE602BA1",
        To: 'amitchandola2002@gmail.com',
        From: "amitchandola2002@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message=>alert(message)
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
})

//toggle icon navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//scroll section
let sections = document.querySelectorAll('sections');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset= sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

