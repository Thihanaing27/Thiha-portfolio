const tabConatinerTag = document.querySelector(".tabMenuContainer");
const ulTag = document.querySelector(".tabMenuUl");
const sliderTag = document.querySelector(".slider");
// console.log(sliderTag);

const tabs = ["home", "services", "about", "contact","mail"];
const handlerTabswidth = (event) => {
    const liTagId = event.target.id;
    const clickLiTag = document.getElementById(liTagId);
    const clickLiTagwidth = clickLiTag.offsetWidth;
    const clickLiTagOffsetLeft = clickLiTag.offsetLeft;
    sliderTag.style.width = `${clickLiTagwidth}px`;
    sliderTag.style.transform = `translateX(${clickLiTagOffsetLeft}px)`;
}

for (let i = 0; i < tabs.length; i++) {
    const TabLiTag = document.createElement("li");
    TabLiTag.append(tabs[i].toUpperCase());
    TabLiTag.id = i;
    ulTag.append(TabLiTag);
    TabLiTag.addEventListener("click", handlerTabswidth);
    if (i === 0) {
        sliderTag.style.width = `${TabLiTag.offsetWidth + 32}px`;
    }
    TabLiTag.classList.add("liStyle");
}


// humbarger menu 
const menuContainerTag = document.querySelector(".menuContainer");
const menuBar1Tag = document.querySelector(".menuBar1");
const menuBar2Tag = document.querySelector(".menuBar2");
const menuBar3Tag = document.querySelector(".menuBar3");
const overMenuTag = document.querySelector(".overMenu");
const liTag = document.getElementsByTagName("li");

menuContainerTag.addEventListener("click", () => {
    if (menuContainerTag.classList.contains("isOpen")) {
        menuBar2Tag.classList.remove("hideLine2");
        menuBar1Tag.classList.remove("rotatePlus");
        menuBar3Tag.classList.remove("rotateMinus");
        menuContainerTag.classList.remove("isOpen");
        overMenuTag.classList.remove("showOverMenu");
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove("hideLiTag");
        }
    } else {

        menuBar2Tag.classList.add("hideLine2");
        menuBar1Tag.classList.add("rotatePlus");
        menuBar3Tag.classList.add("rotateMinus");
        menuContainerTag.classList.add("isOpen");
        overMenuTag.classList.add("showOverMenu");
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add("hideLiTag");
        }
    }
});