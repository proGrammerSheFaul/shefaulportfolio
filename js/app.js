

const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const activePage = () => {

   const barsbox = document.querySelector('.bars-box');
   const header = document.querySelector('header');

   header.classList.remove('active');
   setTimeout(() => {
       header.classList.add('active');
   }, 1100);


    navLinks.forEach(link => {
       link.classList.remove('active');
    });

    barsbox.classList.remove('active');
    setTimeout(() => {
        barsbox.classList.add('active');
    }, 1100);

    
    sections.forEach(section => {
        section.classList.remove('active');
     });
 

     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
}

navLinks.forEach((link, idx)  => {
    link.addEventListener('click', () => {

        if (!link.classList.contains('active')) {

     
            activePage();

          link.classList.add('active');

          setTimeout(() => {
           sections[idx].classList.add('active');
        }, 1100);
    
        }
    });
}); 



logoLinks.addEventListener('click', () => {

if (!navLinks[0].classList.contains('active')) {
    activePage();
navLinks[0].classList.add('active');

setTimeout(() => {
    sections[0].classList.add('active');
 }, 1100);

}

});





 






























       //     btn click korla class ad hoba color border change hoba


const resumeBtns = document.querySelectorAll('.resume-btn');


resumeBtns.forEach((btn, idx) => {

    btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-details')

        resumeBtns.forEach(btn => {

            btn.classList.remove('active');

                
        });

        btn.classList.add('active');


            resumeDetails.forEach(details => {

                  details.classList.remove('active');
                
              });

              resumeDetails[idx].classList.add('active');

      });        
        
});





const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {

    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

    const PortfolioDetails = document.querySelectorAll('.portfolio-details');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    PortfolioDetails.forEach(detail => {

         detail.classList.remove('active')
   });

   PortfolioDetails[index].classList.add('active');
}

                  // arrow right


arrowRight.addEventListener('click', () => {

    if (index < 4) {
           index++;
           arrowLeft.classList.remove('disabled');
    }

    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();

});
                // arrow left 

arrowLeft.addEventListener('click', () => {

    if (index > 1) {
           index--;
           arrowRight.classList.remove('disabled');
    }

    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();

});

