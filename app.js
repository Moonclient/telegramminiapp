const tg = window.Telegram.WebApp;
tg.expand();

// Définition des boutiques
const boutiques = [
  {
    name: "CBD Paris",
    description: "Boutique premium CBD à Paris.",
    telegram: "https://t.me/cbdparis_shop",
    products: [
      { name: "Huile CBD 10%", desc: "Huile de CBD pure 10%" },
      { name: "Fleur Amnesia", desc: "Fleur CBD Amnesia premium" },
      { name: "Résine Afghan", desc: "Résine CBD Afghan" }
    ]
  },
  {
    name: "CBD Lyon",
    description: "Spécialités CBD à Lyon.",
    telegram: "https://t.me/cbdlyon_shop",
    products: [
      { name: "Huile CBD 20%", desc: "Huile de CBD pure 20%" },
      { name: "Fleur OG Kush", desc: "Fleur CBD OG Kush" },
      { name: "Résine Maroc", desc: "Résine CBD Maroc" }
    ]
  },
  {
    name: "CBD Nice",
    description: "Sélection CBD Côte d'Azur.",
    telegram: "https://t.me/cbdnice_shop",
    products: [
      { name: "Huile CBD 15%", desc: "Huile de CBD pure 15%" },
      { name: "Fleur Lemon Haze", desc: "Fleur CBD Lemon Haze" },
      { name: "Résine Libanais", desc: "Résine CBD Libanais" }
    ]
  }
];

let selectedBoutiqueIdx = 0;

function renderBoutiqueList() {
  const list = document.getElementById('boutique-list');
  list.innerHTML = '';
  boutiques.forEach((b, idx) => {
    const card = document.createElement('div');
    card.className = 'boutique-card' + (idx === selectedBoutiqueIdx ? ' selected' : '');
    card.innerHTML = `
      <h3>${b.name}</h3>
      <p>${b.description}</p>
      <button data-idx="${idx}">Voir les produits</button>
    `;
    card.querySelector('button').onclick = () => {
      selectedBoutiqueIdx = idx;
      showProductsSection();
    };
    list.appendChild(card);
  });
}

function showProductsSection() {
  document.getElementById('boutiques-section').style.display = 'none';
  document.getElementById('products-section').style.display = '';
  document.getElementById('contact-section').style.display = 'none';
  renderBoutiquePage();
  tg.MainButton.text = "Commander";
  tg.MainButton.show();
  tg.MainButton.onClick(() => {
    window.open(boutiques[selectedBoutiqueIdx].telegram, '_blank');
  });
}

function renderBoutiquePage() {
  const section = document.getElementById('products-section');
  const b = boutiques[selectedBoutiqueIdx];
  section.innerHTML = `
    <div class="boutique-page-header">
      <h2>${b.name}</h2>
      <p>${b.description}</p>
      <a href="${b.telegram}" target="_blank" class="tg-logo-link" title="Contacter sur Telegram">
        <img src="https://telegram.org/img/t_logo.svg" alt="Telegram" class="tg-logo" />
      </a>
    </div>
    <div class="boutique-products-list"></div>
  `;
  const productsList = section.querySelector('.boutique-products-list');
  b.products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h2>${prod.name}</h2><p>${prod.desc}</p>`;
    productsList.appendChild(div);
  });
  // Ajout bouton retour
  const backBtn = document.createElement('button');
  backBtn.className = 'menu-btn';
  backBtn.style.marginTop = '16px';
  backBtn.textContent = 'Retour aux boutiques';
  backBtn.onclick = () => showBoutiquesSection();
  section.appendChild(backBtn);
}

function showBoutiquesSection() {
  document.getElementById('boutiques-section').style.display = '';
  document.getElementById('products-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  tg.MainButton.hide();
  renderBoutiqueList();
}

function showContactSection() {
  document.getElementById('boutiques-section').style.display = 'none';
  document.getElementById('products-section').style.display = 'none';
  document.getElementById('contact-section').style.display = '';
  const b = boutiques[selectedBoutiqueIdx];
  document.getElementById('contact-info').innerHTML = `Contacte <b>${b.name}</b> pour commander ou poser une question.`;
  const link = document.getElementById('contact-link');
  link.href = b.telegram;
  tg.MainButton.text = "Contacter sur Telegram";
  tg.MainButton.show();
  tg.MainButton.onClick(() => {
    window.open(b.telegram, '_blank');
  });
}

document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const page = btn.dataset.page;
    if (page === 'home') {
      showBoutiquesSection();
    } else if (page === 'contact') {
      showContactSection();
    }
    document.querySelectorAll('.menu-btn').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Initialisation
showBoutiquesSection();
