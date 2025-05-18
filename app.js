const tg = window.Telegram.WebApp;
tg.expand();

// --- Données vendeurs exemple ---
const vendeurs = [
  {
    photo: "candyland.png",
    nom: "CandyLand &#127852;",
    desc: "Meetup Orleans",
    departement: "45",
    livraison: true,
    meetup: true,
    postal: true,
    telegram: "https://t.me/cbdparis_shop",
    potato: "https://potato.im",
    signal: "https://signal.me/#p/+33123456789",
    produits: [
      { nom: "Frozen Sift", desc: "120u", tarifs: [ { label: '5g', prix: '50€' }, { label: '10g', prix: '90€' } ], img: "https://www.newsweed.fr/wp-content/uploads/2023/02/3x-filtre-haschisch-1000x600.jpg" },
      { nom: "Lemon Haze", desc: "NL Flower", tarifs: [ { label: '5g', prix: '40€' }, { label: '10g', prix: '80€' } ], img: "https://bcmedichronic.co/wp-content/uploads/2020/02/Super-Lemon-Haze-2.jpeg" },

      
    ]
  },
  {
    photo: "seven7.jpg",
    nom: "SEVEN HUSTLERS",
    desc: "Smoke et Pharma",
    departement: "74",
    livraison: false,
    meetup: true,
    postal : false,
    telegram: "https://t.me/+o4KytXKafTI1NGJk",
    potato: "https://potato.im/pluglyon",
    signal: "https://signal.me/#p/+33611223344",
    produits: [
      { nom: "3x Filtré", desc: "Sticky Fingers | Berry Skittlez", tarifs: [ { label: '10g', prix: '90€' } ], img: "https://www.greencanopy-shop.com/wp-content/uploads/2024/03/triple-filtre.webp" },
      { nom: "Cali Flower", desc: "Sour Cherry Biscotti", tarifs: [ { label: '5g', prix: '45€' }, { label: '10g', prix: '85€' } ], img: "https://kushfly.com/wp-content/uploads/2024/11/los_exotics_Cherry_biscotti_1.webp" },
      { nom: "Makatussin", desc: "Syrup", tarifs: [ { label: '1x', prix: '120€' } ], img: "https://www.digit-eyes.com/thumbs/1443/552/7680552740055.jpg" },
      { nom: "Euphon", desc: "Syrup", tarifs: [ { label: '1x', prix: '80€' } ], img: "https://5.imimg.com/data5/SELLER/Default/2024/9/451629882/AR/HV/JL/231989463/euphon-cough-syrup-hong-kong-dhl-express.jpg" },
      { nom: "Tosseina", desc: "Syrup", tarifs: [ { label: '1x', prix: '120€' } ], img: "https://i.etsystatic.com/54412197/r/il/0ee964/6227329224/il_fullxfull.6227329224_djzf.jpg" },
      { nom: "Seresta", desc: "Pills | 50mg", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://cdn.pim.mesoigner.fr/mesoigner/a0178481a0e658e0bdc3da58c2d935d4/mesoigner-thumbnail-1000-1000-inset/739/833/seresta-10-mg-comprime.webp" },
      { nom: "Rivotril", desc: "Pills | 2mg", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2016/09/13/node_44376/1078315/public/2016/09/13/B979691330Z.1_20160913152855_000%2BG7R7JLQRF.4-0.jpg?itok=GxkZK8QF1473788046" },
      { nom: "Xanax", desc: "Pills |2mg", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://www.xanax.com/-/media/Project/Common/XanaxCom/Home/xanax-alprazolam-2-mg-tablet.png?iar=0&hash=ABCF819B72E9B469D0C15FE418A373C2" },
      { nom: "Oxycodone", desc: "Pills", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://s.france24.com/media/display/7a883816-1072-11e9-aaa3-005056bff430/w:1280/p:16x9/25-08-opiaces-oxycontin-usa.jpg" },
      { nom: "Dicodin", desc: "Pills", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://cdn.pim.mesoigner.fr/mesoigner/118f26fb515ae7eacf7bdc23bc81f4c5/mesoigner-thumbnail-300-300-retina-inset/279/164/dicodin-l-p-60-mg-comprime-a-liberation-prolongee.webp" },
      { nom: "Dph", desc: "Pills | 50mg", tarifs: [ { label: '1x', prix: '55€' } ], img: "https://www.drugs.com/images/pills/fio/LNK03291.JPG" }
    ]
  },
  {
    photo: "cbd.svg",
    nom: "CBD Nice Côte d'Azur",
    desc: "Sélection CBD Côte d'Azur, livraison & meetup.",
    departement: "06",
    livraison: true,
    meetup: true,
    telegram: "https://t.me/cbdnice_shop",
    potato: "https://potato.im/plugnice",
    signal: "https://signal.me/#p/+33799887766",
    produits: [
      { nom: "Huile CBD 15%", desc: "Huile de CBD pure 15%", tarifs: [ { label: '10ml', prix: '75€' } ], img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80" },
      { nom: "Fleur Lemon Haze", desc: "Fleur CBD Lemon Haze", tarifs: [ { label: '5g', prix: '42€' }, { label: '10g', prix: '80€' } ], img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" },
      { nom: "Résine Libanais", desc: "Résine CBD Libanais", tarifs: [ { label: '5g', prix: '52€' } ], img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80" }
    ]
  }
];

// --- Filtres dynamiques ---
const departements = [
  "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","2A","2B","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95"
];

function fillDepartementFilter() {
  const select = document.getElementById('departement-filter');
  departements.forEach(dep => {
    const opt = document.createElement('option');
    opt.value = dep;
    opt.textContent = dep;
    select.appendChild(opt);
  });
}

// --- Affichage vendeurs filtrés ---
function renderVendeurList() {
  const list = document.getElementById('vendeur-list');
  list.innerHTML = '';
  const dep = document.getElementById('departement-filter').value;
  const livraison = document.getElementById('livraison-filter').value;
  const meetup = document.getElementById('meetup-filter').value;
  const postal = document.getElementById('postal-filter') ? document.getElementById('postal-filter').value : '';
  let filtered = vendeurs.filter(v =>
    (!dep || v.departement === dep) &&
    (!livraison || (livraison === 'oui' ? v.livraison : !v.livraison)) &&
    (!meetup || (meetup === 'oui' ? v.meetup : !v.meetup)) &&
    (!postal || (postal === 'oui' ? v.postal === true : v.postal !== true))
  );
  if (filtered.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:#b0bec5;">Aucun vendeur trouvé pour ces critères.</p>';
    return;
  }
  filtered.forEach((v, idx) => {
    const card = document.createElement('div');
    card.className = 'vendeur-card';
    const photoUrl = v.photo || 'profile-placeholder.jpg';
    card.innerHTML = `
      <img class="vendeur-photo" src="${photoUrl}" alt="Photo de profil" style="width:64px;height:64px;border-radius:50%;object-fit:cover;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;"/>
      <div class="vendeur-header">
        <span class="vendeur-nom">${v.nom}</span>
        <span class="vendeur-tags">
          <span class="tag departement">🗺️ ${v.departement}</span>
          ${v.livraison ? '<span class="tag livraison">🛵</span>' : ''}
          ${v.meetup ? '<span class="tag meetup">🏠</span>' : ''}
          ${v.postal ? '<span class="tag postal">✈️</span>' : ''}
        </span>
      </div>
      <div class="vendeur-desc">${v.desc}</div>
    `;
    card.onclick = () => showBoutiquePage(v);
    list.appendChild(card);
  });
}

// --- Navigation page boutique ---
function showBoutiquePage(vendeur) {
  // Masque le logo
  const logo = document.getElementById('logo-site');
  if (logo) logo.style.display = 'none';
  tg.MainButton.hide();
  // Remplace le titre par le nom du vendeur
  document.querySelector('header h1').innerHTML = vendeur.nom;

  document.getElementById('vendeurs-section').style.display = 'none';
  document.getElementById('filters').style.display = 'none';
  const section = document.getElementById('boutique-section');
  section.style.display = '';
  const photoUrl = vendeur.photo || 'profile-placeholder.jpg';
  section.innerHTML = `
    <button class="retour-btn">&larr;</button>
    <img class="boutique-photo" src="${photoUrl}" alt="Photo de profil" style="width:96px;height:96px;border-radius:50%;object-fit:cover;display:block;margin:0 auto 16px auto;box-shadow:0 2px 8px #bbb;"/>
    <div class="boutique-infos">
      <div class="boutique-info-dept" title="Département">🗺️ ${vendeur.departement}</div>
      ${vendeur.livraison ? '<div class="boutique-info-livraison" title="Livraison disponible">🛵 Livraison</div>' : ''}
      ${vendeur.meetup ? '<div class="boutique-info-meetup" title="Meetup possible">🏠 Meetup</div>' : ''}
      ${vendeur.postal ? '<div class="boutique-info-postal" title="Envoi postal disponible">✈️ Envoi postal</div>' : ''}
    </div>
    <div class="boutique-header"></div>

    <div class="galerie-produits"></div>
    <div class="contact-links" style="margin-top:18px;">
      <a href="${vendeur.telegram}" target="_blank" class="tg-logo-link" title="Telegram">
        <img src="https://telegram.org/img/t_logo.svg" alt="Telegram" class="tg-logo" />
      </a>
      <a href="${vendeur.potato}" target="_blank" class="potato-logo-link" title="Potato">
        <img src="https://cdn.jsdelivr.net/gh/enzoferey/potato-logo@main/potato.svg" alt="Potato" class="potato-logo" />
      </a>
      <a href="${vendeur.signal}" target="_blank" class="signal-logo-link" title="Signal">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg" alt="Signal" class="signal-logo" />
      </a>
    </div>
    <div class="boutique-header-desc">${vendeur.desc}</div>
  `;
  const galerie = section.querySelector('.galerie-produits');
  vendeur.produits.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'produit-card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nom}">
      <div class="nom">${prod.nom}</div>
      <div class="desc">${prod.desc}</div>
      <div class="tarifs">
        ${prod.tarifs.map(t=>`<span class='tarif-tag'>${t.label} ${t.prix}</span>`).join(' ')}
      </div>
    `;
    card.querySelector('img').style.cursor = 'pointer';
    card.querySelector('img').onclick = function(e) {
      e.stopPropagation();
      const popup = document.getElementById('popup-image');
      const popupImg = document.getElementById('popup-img');
      popupImg.src = prod.img;
      popup.style.display = 'flex';
    };
    galerie.appendChild(card);
  });

  // Gestion fermeture popup image overlay (menu contextuel)
  const popup = document.getElementById('popup-image');
  const popupClose = document.querySelector('.popup-close');
  if (popupClose) {
    popupClose.onclick = function() {
      popup.style.display = 'none';
      document.getElementById('popup-img').src = '';
    };
  }
  // Fermer popup si on clique sur le fond (mais pas sur l'image)
  if (popup) {
    popup.onclick = function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
        document.getElementById('popup-img').src = '';
      }
    };
  }
  section.querySelector('.retour-btn').onclick = () => {
    section.style.display = 'none';
    document.getElementById('vendeurs-section').style.display = '';
    document.getElementById('filters').style.display = '';
    tg.MainButton.hide();
    // Remet le titre d'origine
    document.querySelector('header h1').innerHTML = 'PlugMap';
    // Réaffiche le logo
    const logo = document.getElementById('logo-site');
    if (logo) logo.style.display = '';
    // Supprime la description sous le titre
    let descElem = document.querySelector('.boutique-header-desc');
    if (descElem) descElem.remove();
  }
}

// --- Initialisation ---
fillDepartementFilter();
renderVendeurList();

document.getElementById('departement-filter').onchange = renderVendeurList;
document.getElementById('livraison-filter').onchange = renderVendeurList;
document.getElementById('meetup-filter').onchange = renderVendeurList;
if(document.getElementById('postal-filter')) {
  document.getElementById('postal-filter').onchange = renderVendeurList;
}


function showBoutiquesSection() {
  document.getElementById('boutiques-section').style.display = '';
  document.getElementById('products-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  // Suppression du bouton principal Telegram

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
