import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();


const checkHeader = () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 0){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

if(document.querySelector(".header")){
    document.addEventListener('scroll', checkHeader)
    document.addEventListener('load', checkHeader)
}