
const navLinks = document.querySelectorAll('aside div div h3');
navLinks.forEach(link => {
  // for each nav link...
  link.addEventListener('click', function(event) {
    // don't do the default behavior
    event.preventDefault();
    // First select all aside div divs
    // and remove the active class
    // so the other menus close
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    event
      .target // what they clicked
      .closest('aside div div') // get the nearest match
      .classList.toggle('active'); // toggle active
  });
});


// Grab every link inside 'aside div div'
// when it is clicked, toggle the active class to 
// off on every 'aside div div'