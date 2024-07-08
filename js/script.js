const menuBtn = document.getElementById('menu-button');
const navList = document.getElementById('nav-list');
const hamburgerIcon = document.getElementById('hamburger-icon');
const crossIcon = document.getElementById('cross-icon');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const heading = document.getElementById('slider-heading');
const formSubmit=document.getElementById('contactForm')
let currentIndex = 0;

//form submission 

formSubmit.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
  
      // Get form data
      const formData = new FormData(this);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      
      // Log form data to console
      console.log('Form Data:', formDataObject);
      
      // Optionally, clear form inputs
      this.reset();
});


// Add functionality to menu 
menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
});

// Optional: Add an event listener to close the menu when a menu item is clicked
navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navList.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        crossIcon.classList.add('hidden');
    });
});

// Function to update the heading based on the current slide
function updateHeading(index) {
    const newHeading = slides.children[index].getAttribute('data-heading');
    heading.innerHTML = newHeading;
}

// Slider function
function showSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
    updateHeading(index);  // Update the heading whenever the slide changes
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.children.length - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}, 3000);

// Initialize the first slide
showSlide(currentIndex);
