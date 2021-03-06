const header = document.querySelector('header');
const sectionOne = document.querySelector('.home');
const menuIcon = document.querySelector('.hamburger-icon');
const lines = document.querySelectorAll('.line');
const navbar = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const inputs = document.querySelectorAll('.input');

// Responsive menu
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle('black-background');
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('black-text');
  }
});

// Nav animation
const sectionOneOptions = {
  rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Content animation
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -250px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Form input animation
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

// Form validation
function validateForm() {
  var name = document.getElementById('name').value;
  if (name == '') {
    document.querySelector('#status').innerHTML = 'Name cannot be empty';
    return false;
  }
  var email = document.getElementById('email').value;
  if (email == '') {
    document.querySelector('#status').innerHTML = 'Email cannot be empty';
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<i>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('#status').innerHTML = 'Email format invalid';
      return false;
    }
  }
  var subject = document.getElementById('subject').value;
  if (subject == '') {
    document.querySelector('#status').innerHTML = 'Subject cannot be empty';
    return false;
  }
  var message = document.getElementById('message').value;
  if (message == '') {
    document.querySelector('#status').innerHTML = 'Message cannot be empty';
    return false;
  }

  document.getElementById('status').innerHTML = 'Sending...';
}
