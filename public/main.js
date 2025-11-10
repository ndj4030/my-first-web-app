// ここからコードを書いてください
import setupTabs from "./js/tabs.js";
import {
  setupConverter,
  converter,
  conInput,
  from,
  to,
  form,
} from "./js/converter.js";

document.addEventListener(`DOMContentLoaded`, setupTabs);
document.addEventListener(`DOMContentLoaded`, setupConverter);
document.addEventListener(`DOMContentLoaded`, converter);
conInput.addEventListener(`input`, converter);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  converter();
});
from.addEventListener(`change`, converter);
to.addEventListener(`change`, converter);
