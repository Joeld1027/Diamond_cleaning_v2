const activeTab = document.querySelector(".active-og");
const allLinks = document.querySelectorAll(".tablink");
const allImgs = document.querySelectorAll(".tabcontent");

const activeImg = document.querySelector("." + activeTab.id);
activeImg.classList.remove("d-none");

allLinks.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    allLinks.forEach((elem) => elem.classList.remove("active-og"));
    e.currentTarget.classList.add("active-og");
    allImgs.forEach((img) => {
      img.classList.add("d-none");
    });
    document.querySelector("." + e.currentTarget.id).classList.remove("d-none");
  });
});
