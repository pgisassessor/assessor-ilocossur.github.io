document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let currentIndex = 0;

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
    });
    items[index].classList.add("active");
    currentIndex = index;
  }

  // Function to show next slide
  function showNextSlide() {
    let nextIndex = (currentIndex + 1) % items.length;
    showItem(nextIndex);
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    showItem((currentIndex - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    showNextSlide();
  });

  // Automatically slide after 5 seconds
  setInterval(showNextSlide, 10000);
});
