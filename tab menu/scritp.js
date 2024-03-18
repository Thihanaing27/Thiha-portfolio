const ulTag = document.getElementsByTagName("ul")[0];
const sliderTag = document.querySelector(".slider");
const homeTag = document.querySelector(".home");
const serviceTag = document.querySelector(".service");
const aboutTag = document.querySelector(".about");
const contactTag = document.querySelector(".contact");
const loginTag = document.querySelector(".login");


const tabs = ["Home", "services", "about us", "contact us", "login"];

const handleTabChange = (event) => {
    homeTag.classList.add("hideHome");
    const clickTabId = event.target.id;
    const clickLiTag = document.getElementById(clickTabId);
    const clickLiTagWidth = clickLiTag.offsetWidth;
    const clickLiTagOffserLeft = clickLiTag.offsetLeft;
    sliderTag.style.width = clickLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickLiTagOffserLeft}px)`;
    showDiv(clickTabId);
};
for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleTabChange);
    ulTag.append(liTag);
    if (i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "Px";
    }
}

const showDiv = (tabsId) => {
    const divId = tabsId;
    divId == 0 ? homeTag.classList.add("showHome") : homeTag.classList.remove("showHome");
    divId == 1 ? serviceTag.classList.add("showService") : serviceTag.classList.remove("showService");
    divId == 2 ? aboutTag.classList.add("showAbout") : aboutTag.classList.remove("showAbout");
    divId == 3 ? contactTag.classList.add("showContact") : contactTag.classList.remove("showContact");
    divId == 4 ? loginTag.classList.add("showLogin") : loginTag.classList.remove("showLogin");
}