const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function requiredValidate() {
  const name = document.forms["reservation-form"]["reservation-name"].value;
  const email = document.forms["reservation-form"]["reservation-email"].value;
  const date = document.forms["reservation-form"]["reservation-date"].value;
  const time = document.forms["reservation-form"]["reservation-time"].value;
  const people = document.forms["reservation-form"]["reservation-people"].value;
  if (name == "" || name == null || email == "" || email == null || date == "" || date == null || time == ""
    || time == null || people == "" || people == null) {
    alert("Blanks must be filled out!");
    return false;
  }
}

function validateEmail() {
  const email = document.forms["reservation-form"]["reservation-email"].value;

  if (emailRegex.test(String(email).toLowerCase())) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function checkNumber() {
  const people = document.forms["reservation-form"]["reservation-people"].value;

  if (isNaN(people) || !people || people.trim() === '') {
    alert("Must input numbers!");
    return false;
  }

  return true;
}

const formSubmit = () => {
  const name = document.forms["reservation-form"]["reservation-name"].value;
  const email = document.forms["reservation-form"]["reservation-email"].value;
  const date = document.forms["reservation-form"]["reservation-date"].value;
  const time = document.forms["reservation-form"]["reservation-time"].value;
  const people = document.forms["reservation-form"]["reservation-people"].value;

  const validatedRequired = requiredValidate();
  const validatedEmail = validateEmail();
  const validatedNumber = checkNumber();

  if (validatedRequired && validatedEmail && validatedNumber) {
    console.log(name, email, date, time, people);
  }

  return false;
}

export { formSubmit };
