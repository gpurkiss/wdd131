const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;
 
const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;
 
// Function to dynamically update the year in the footer
function updateFooterYear() {
    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
  
  // Run the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", updateFooterYear);
  
  // Function to toggle a "highlight" class on service cards when clicked
  function toggleHighlight(event) {
    const card = event.currentTarget;
    card.classList.toggle("highlight");
  }
  
  // Function to dynamically add a new service card
  function addServiceCard() {
    const details = document.querySelector(".details");
    const newCard = {
      title: "Custom Design",
      description: "Includes tailored landscaping designs and options from all other plans.",
      price: "Contact us for pricing",
      imageUrl: "images/customdesign.jpg",
    };
  
    const cardHTML = `
      <article class="details_card">
        <img src="${newCard.imageUrl}" alt="${newCard.title} card">
        <div class="card_content">
          <h2>${newCard.title}</h2>
          <p>${newCard.description}</p>
          <p>${newCard.price}</p>
        </div>
      </article>
    `;
  
    details.insertAdjacentHTML("beforeend", cardHTML);
  }
  
  // Function to save a user's favorite service to localStorage
  function saveFavoriteService(serviceName) {
    localStorage.setItem("favoriteService", serviceName);
    alert(`Your favorite service, "${serviceName}", has been saved!`);
  }
  
  // Function to load the favorite service from localStorage
  function loadFavoriteService() {
    const favoriteService = localStorage.getItem("favoriteService");
    if (favoriteService) {
      alert(`Your favorite service is: "${favoriteService}"`);
    }
  }
  
  // Add event listeners to service cards
  function addCardEventListeners() {
    const cards = document.querySelectorAll(".details_card");
    cards.forEach((card) => {
      card.addEventListener("click", toggleHighlight);
      card.addEventListener("dblclick", () => {
        const serviceName = card.querySelector("h2").textContent;
        saveFavoriteService(serviceName);
      });
    });
  }
  
  // Initialize the page
  function init() {
    updateFooterYear();
    addCardEventListeners();
    loadFavoriteService();
  }
  
  // Run the initialization function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);
