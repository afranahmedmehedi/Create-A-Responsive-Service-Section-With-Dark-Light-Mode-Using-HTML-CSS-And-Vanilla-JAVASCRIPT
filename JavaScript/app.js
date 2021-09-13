


let themeToggler = document.querySelector('#them-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('fa-sun');


    if(themeToggler.classList.contains('fa-sun')){ 
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}