const form = document.getElementById('form');
const email = document.getElementById('email');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = email.value;
  if (!emailVal) {
    form.classList.add('error2');
    form.classList.remove('error1');
  } else if (!validateEmail(emailVal)) {
    form.classList.add('error1');
    form.classList.remove('error2');
  } else {
    form.classList.remove('error1', 'error2');
  }
});

