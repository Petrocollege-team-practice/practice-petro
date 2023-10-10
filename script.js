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

const askBtn = document.getElementById("askBtn");

askBtn.addEventListener("click", function () {
  window.open("https://vk.com/topic-222597982_50343408", "_blank");
});




function toggleAnswer(icon) {
    const answer = icon.closest('.row-question').querySelector('.answer');
    const plusMinusIcon = icon.querySelector('.plus-minus');
  
    answer.classList.toggle('active');
    if (answer.classList.contains('active')) {
      plusMinusIcon.style.transform = 'rotate(45deg)'; // Изменяем угол поворота на 45 градусов для "минуса"
    } else {
      plusMinusIcon.style.transform = 'rotate(0deg)'; // Возвращаем угол поворота в исходное состояние для "плюса"
    }
  }
  