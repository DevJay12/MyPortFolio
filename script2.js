(function () {
  emailjs.init("xjmnr9qu3qvuSjlNH"); // Replace with your actual public key
})();

const form = document.getElementById("contact-form");
const statusPopup = document.getElementById("status");
const statusMessage = document.getElementById("status-message");
const spinner = document.getElementById("loading");
let timeoutId;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  spinner.style.display = "flex";

  emailjs
    .sendForm("service_gb56uty", "template_s3mykag", this)
    .then(() => {
      showPopup("Message has been sent!", "success");
      form.reset(); // ✅ Reset the form only after successful send
    })
    .catch(() => {
      showPopup(
        "Message unable to send, please check your internet connection, and try again.",
        "error"
      );
    })
    .finally(() => {
      spinner.style.display = "none";
    });
});

function showPopup(message, type) {
  clearTimeout(timeoutId);

  statusMessage.textContent = message;
  statusPopup.className = "status-popup " + type;
  statusPopup.classList.remove("hide");
  statusPopup.classList.add("show");

  timeoutId = setTimeout(() => {
    closePopup();
  }, 5000);
}

function closePopup() {
  statusPopup.classList.add("hide");
  setTimeout(() => {
    statusPopup.classList.remove("show", "hide", "success", "error");
  }, 400); // duration matches CSS transition
}