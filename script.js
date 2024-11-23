/**
 * Untuk membuat link bisa dicopy
 */
const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    /**
     * Untuk memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
    <div class="toast-container">
        <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
    </div>
  `;

    /**
     * Untuk menghilangkan toas notification
     */
    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});

/**
 * Untuk ganti icon sosmed saat hover
 */
document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});

/**
 * Animasi text bergerak saat scroll
 */
document.addEventListener("scroll", (e) => {
  console.log("scroll : ", window.scrollY);

  document.querySelector(".bg-text-animation").style.transform = `translateX(${
    window.scrollY / 5
  }px)`;
});

/**
 * Share link
 */
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", (event) => {
  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator
      .share({
        text: "Check This Out: ",
        url: "https://farhanazrahsb.github.io/fafis_kitchen_linktree.github.io/",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert(
      "The current browser does not support the share function. Please, manually share the link"
    );
  }
});
