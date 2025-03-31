const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;
 
const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;
 
const menubutton = document.querySelector('#menubutton');
const menuitems = document.querySelector('#menuitems');
 
menubutton.addEventListener('click', () => {
  menuitems.classList.toggle('open');
  menubutton.classList.toggle('hidden');
 
  if (menuitems.classList.contains('open')) {
    menubutton.textContent = '❌';
  } else {
    menubutton.textContent = '☰';
  }
});
 
//console.log("JavaScript is running...");

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Memphis Tennessee",
      location: "Bartlett, Tennessee",
      dedicated: "2000, April, 23",
      area: 10890,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/memphis-tennessee-temple/memphis-tennessee-temple-36981-main.jpg"
    },
    {
      templeName: "Okinawa Japan",
      location: "Okinawa-shi, Okinawa-ken, Okinawa",
      dedicated: "2023, November, 12",
      area: 12437,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
    },
    {
      templeName: "Phoenix Arizona",
      location: "Phoenix, Arizona",
      dedicated: "2014, November, 16",
      area: 226076,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
    },

  ];

  createTempleCard(temples);

  function createTempleCard(temples) {
    document.querySelector(".res-grid").innerHTML = "";  
    temples.forEach(temple => {
      console.log("Adding temple:", temple.templeName);
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedicated = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
  
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName}`);
      img.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(img);
  
      document.querySelector(".res-grid").appendChild(card)
    });
  }

  const homenav = document.querySelector("#home")
  homenav.addEventListener("click", () => {
    createTempleCard(temples);
  })
   
  const oldnav = document.querySelector("#old");
  oldnav.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    });
    createTempleCard(oldTemples);
  });
   
  const newnav = document.querySelector("#new");
  newnav.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    });
    createTempleCard(newTemples);
  });
   
  const largenav = document.querySelector("#large");
  largenav.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
  });
   
  const smallnav = document.querySelector("#small");
  smallnav.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area <= 10000);
    createTempleCard(smallTemples);
  });