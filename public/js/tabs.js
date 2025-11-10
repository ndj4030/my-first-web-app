function setupTabs() {
  const homeLink = document.querySelector(`[data-tab="home"]`);
  const conTab = document.querySelector(`[data-tab="converter"]`);
  const homeSec = document.getElementById("home");
  const conSec = document.getElementById("converter");

  function hideCon() {
    conSec.classList.add(`hidden`);
    homeSec.classList.remove(`hidden`);
  }
  function hideHome() {
    homeSec.classList.add(`hidden`);
    conSec.classList.remove(`hidden`);
  }

  homeLink.addEventListener(`click`, hideCon);
  conTab.addEventListener(`click`, hideHome);
}

export default setupTabs;
