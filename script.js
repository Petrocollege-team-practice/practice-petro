const vkButton = document.getElementById("vkButton");

vkButton.addEventListener("click", function () {
  window.open("https://vk.com/petrocollege_spb_practice", "_blank");
});

const fromCollege = document.getElementById("from-college");

fromCollege.addEventListener("click", function () {
  window.open("https://vk.com/im?media=&sel=-222597982", "_blank");
});

const otherPlace = document.getElementById("other-place");

otherPlace.addEventListener("click", function () {
  window.open("https://vk.com/im?media=&sel=-222597982", "_blank");
});



const plusIcons = document.querySelectorAll(".icon-plus");

plusIcons.forEach(function(plusIcon) {
  plusIcon.addEventListener("click", function() {
    const parentRow = plusIcon.parentElement;
    const answer = parentRow.querySelector(".answer");

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
