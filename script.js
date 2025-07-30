const rocks = [
  {
    name: "Hulk",
    img: "big-boii.jpeg",
    desc: "Loves jazz and judgment."
  },
  {
    name: "Nerdy Pebbles",
    img: "glasses.jpg",
    desc: "scared of water, loves books."
  },
  {
    name: "happy Shelly",
    img: "smoll.jpeg",
    desc: "Loves to be held, enjoys long walks on the beach."
    },
    {
    name: "He Bob",
    img: "he-bob.gif",
    desc: "A rock with a heart of gold, loves to roll around and make friends."
  }
    ,{
        name: "weird twins",
        img: "weird-twins.jpeg",
        desc: "These two are inseparable, always up to some mischief together."
    },
];

let current = 0;
const rockCard = document.getElementById("rockCard");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementById("close-btn");

function updateCard() {
  const rock = rocks[current];
  rockCard.innerHTML = `
    <img src="${rock.img}" alt="${rock.name}" />
    <h3>${rock.name}</h3>
    <p>${rock.desc}</p>
    <button class="adopt-btn">Adopt</button>
  `;

  const adoptBtn = rockCard.querySelector(".adopt-btn");
  adoptBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  rockCard.classList.remove("visible");
  void rockCard.offsetWidth; // force reflow
  rockCard.classList.add("visible");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + rocks.length) % rocks.length;
    updateCard();
  });

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % rocks.length;
    updateCard();
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // fade-in observer
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  faders.forEach(fade => observer.observe(fade));

  updateCard();
});
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // optional: fade-out when out of view
      }
    });
  },
  { threshold: 0.3 }
);

faders.forEach(el => observer.observe(el));
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    document.getElementById("next").click();
  } else if (e.key === "ArrowLeft") {
    document.getElementById("prev").click();
  } else if (e.key === "ArrowDown") {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  } else if (e.key === "ArrowUp") {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }
});
