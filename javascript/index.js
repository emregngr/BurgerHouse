import { hamburgerToggle } from './header';
import { slider } from './slider';
import { formSubmit } from './form-validation'
import 'slick-carousel'

function ready(callback) {
  // belge yüklendiğinde

  if (document.readyState != 'loading') callback();

  // modern browsers

  else if (document.addEventListener)

    document.addEventListener('DOMContentLoaded', callback);

  // IE <= 8

  else document.attachEvent('onreadystatechange', function () {

    if (document.readyState == 'complete') callback();
  });
}

ready(function () {
  window.hamburgerToggle = hamburgerToggle();
  window.formSubmitClick = formSubmit;
  slider();
});
