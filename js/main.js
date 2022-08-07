// loader 
window.addEventListener('load', () => {
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.home-section').classList.add('active');


    setTimeout(() => {
        document.querySelector('.page-loader').classList.add('fade-out');
        document.querySelector('.page-loader').style.display = 'none';
    }, 700)
});


//navbars
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toogleNavbar();
    document.body.classList.toggle('hide-scrolling')
});

function hideSection() {
    document.querySelector('section.active').classList.toggle('fade-out');
}
function toogleNavbar() {
    document.querySelector('.header').classList.toggle('active');
}

// active section
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('link-item') && e.target.hash !== "") {
        document.querySelector('.overlay').classList.add('active');
        navToggler.classList.add('hide');
        if (e.target.classList.contains('nav-item')) {
            toogleNavbar();
        } else {
            hideSection();
            document.body.classList.add('hide-scrolling')
        }
        setTimeout(() => {
            document.querySelector('section.active').classList.remove('active', 'fade-out');
            document.querySelector(e.target.hash).classList.add('active');
            window.scrollTo(0, 0);
            document.body.classList.remove('hide-scrolling');
            navToggler.classList.remove('hide');
            document.querySelector('.overlay').classList.remove('active');
        }, 500)
    }
})

// about tabs
const tabsContainer = document.querySelector('.about-tabs'),
    aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');

    }
});


//about portfolio details

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopur();
        document.querySelector('.portfolio-popur').scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopur() {
    document.querySelector('.portfolio-popur').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out')
}

document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopur);

// hide popur when clicking outside of it
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pp-inner')) {
        togglePortfolioPopur();
    }
})

function portfolioItemDetails(portfolioItem) {
    console.log(portfolioItem);
    document.querySelector('.pp-thumbnail img').src =
        portfolioItem.querySelector('.portfolio-item-thumbnail img').src;

    document.querySelector('.pp-header h3').innerHTML =
        portfolioItem.querySelector('.portfolio-item-title').innerHTML;


    document.querySelector('.pp-body').innerHTML =
        portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}