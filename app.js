const tg = window.Telegram.WebApp;
tg.expand();

// --- Données vendeurs exemple ---
const vendeurs = [
  {
    id: "candyland",
    photo: "candyland.png",
    nom: "CandyLand &#127852;",
    desc: "Meetup Orleans",
    open: true,
    departement: "45",
    livraison: false,
    meetup: true,
    postal: true,
    telegram: "https://t.me/cbdparis_shop",
    potato: "https://potato.im",
    signal: "https://signal.me/#p/+33123456789",
    produits: [
      { nom: "Frozen Sift", desc: "120u", tarifs: [ { label: '5g', prix: '50€' }, { label: '10g', prix: '90€' } ], img: "https://www.newsweed.fr/wp-content/uploads/2023/02/3x-filtre-haschisch-1000x600.jpg", indisponible: true },
      { nom: "Lemon Haze", desc: "NL Flower", tarifs: [ { label: '5g', prix: '40€' }, { label: '10g', prix: '80€' } ], img: "https://bcmedichronic.co/wp-content/uploads/2020/02/Super-Lemon-Haze-2.jpeg", indisponible: true },

      
    ]
  },
  {
    id: "seven7",
    photo: "seven7.jpg",
    nom: "SEVEN HUSTLERS",
    desc: "Smoke & Pharma GNV \uD83C\uDDE8\uD83C\uDDED",
    open: true,
    departement: "GE - Genève",
    livraison: false,
    meetup: true,
    postal : false,
    telegram: "https://t.me/+o4KytXKafTI1NGJk",
    potato: "https://potato.im/pluglyon",
    signal: "https://signal.me/#p/+33611223344",
    produits: [
      { nom: "3x Filtré", desc: "Sticky Fingers | Berry Skittlez", tarifs: [ { label: '1g', prix: '10CHF' } ], img: "https://www.greencanopy-shop.com/wp-content/uploads/2024/03/triple-filtre.webp", indisponible: true },
      { nom: "L.A Mousse", desc: "2025 Season | Cheesecake", tarifs: [ { label: '1g', prix: '10CHF' } ], img: "https://github.com/Moonclient/telegramminiapp/blob/main/shmousse.jpg?raw=true", indisponible: false },
      { nom: "Cali #1", desc: "Sour Cherry Biscotti", tarifs: [ { label: '1g', prix: '20CHF' }], img: "https://kushfly.com/wp-content/uploads/2024/11/los_exotics_Cherry_biscotti_1.webp", indisponible: false },
      { nom: "Cali #2", desc: "GRAND DADDY CONFIDENTIAL", tarifs: [ { label: '1g', prix: '20CHF' }], img: "https://kushfly.com/wp-content/uploads/2024/11/los_exotics_Cherry_biscotti_1.webp", indisponible: true },
      { nom: "Makatussin", desc: "Syrup", tarifs: [ { label: '1x', prix: '150CHF' } ], img: "https://www.digit-eyes.com/thumbs/1443/552/7680552740055.jpg", indisponible: false },
      { nom: "Euphon", desc: "Syrup", tarifs: [ { label: '1x', prix: '100CHF' } ], img: "https://5.imimg.com/data5/SELLER/Default/2024/9/451629882/AR/HV/JL/231989463/euphon-cough-syrup-hong-kong-dhl-express.jpg", indisponible: true },
      { nom: "Phener", desc: "Pills", tarifs: [ { label: '1u', prix: '20CHF' }], img: "https://cdn.pim.mesoigner.fr/mesoigner/3f9f8cbc85b6814535bb984f84e4a6e6/mesoigner-thumbnail-1000-1000-inset/187/704/phenergan-25-mg-cpr-enr-plq-10.webp", indisponible: true },
      { nom: "Tosseina", desc: "Syrup", tarifs: [ { label: '1x', prix: '150CHF' } ], img: "https://i.etsystatic.com/54412197/r/il/0ee964/6227329224/il_fullxfull.6227329224_djzf.jpg", indisponible: false },
      { nom: "Seresta", desc: "Pills | 50mg", tarifs: [ { label: '1u', prix: '10CHF' } ], img: "https://cdn.pim.mesoigner.fr/mesoigner/a0178481a0e658e0bdc3da58c2d935d4/mesoigner-thumbnail-1000-1000-inset/739/833/seresta-10-mg-comprime.webp", indisponible: false },
      { nom: "Rivotril", desc: "Pills | 2mg", tarifs: [ { label: '1u', prix: '10CHF' } ], img: "https://cdn.pim.mesoigner.fr/mesoigner/428bf03f8f23ef979baa003c1033f75e/mesoigner-thumbnail-1000-1000-inset/669/753/rivotril-2-mg-comprime-quadrisecable.webp", indisponible: false },
      { nom: "Xanax", desc: "Pills |2mg", tarifs: [ { label: '1u', prix: '10CHF' } ], img: "https://www.xanax.com/-/media/Project/Common/XanaxCom/Home/xanax-alprazolam-2-mg-tablet.png?iar=0&hash=ABCF819B72E9B469D0C15FE418A373C2", indisponible: false },
      { nom: "Oxycodone", desc: "Pills | 20mg", tarifs: [ { label: '1u', prix: '20CHF' } ], img: "https://s.france24.com/media/display/7a883816-1072-11e9-aaa3-005056bff430/w:1280/p:16x9/25-08-opiaces-oxycontin-usa.jpg", indisponible: true },
      { nom: "Dicodin", desc: "Pills", tarifs: [ { label: '1u', prix: '10CHF' } ], img: "https://cdn.pim.mesoigner.fr/mesoigner/118f26fb515ae7eacf7bdc23bc81f4c5/mesoigner-thumbnail-300-300-retina-inset/279/164/dicodin-l-p-60-mg-comprime-a-liberation-prolongee.webp", indisponible: false },
      { nom: "Dph", desc: "Pills | 50mg", tarifs: [ { label: '2u', prix: '10CHF' } ], img: "https://www.drugs.com/images/pills/fio/LNK03291.JPG", indisponible: false },
      { nom: "DOUBLE CUP", desc: "SEVENHUSTLERS CUP", tarifs: [ { label: '2x', prix: '10CHF' }, { label: '5x', prix: '20CHF' } ], img: "https://github.com/Moonclient/telegramminiapp/blob/main/shcup.jpg?raw=true", indisponible: false },
      { nom: "PHARMA BOTTLE", desc: "Stock limité", tarifs: [ { label: '1x', prix: '20CHF' } ], img: "https://github.com/Moonclient/telegramminiapp/blob/main/shbottle.jpg?raw=true", indisponible: false },
      { nom: "Zolpidem", desc: "Pills | 10mg", tarifs: [ { label: '1u', prix: '10CHF' } ], img: "https://medicaments-img.passeportsante.net/1200x675/2024-08-30/zolpidem.webp", indisponible: false },
      { nom: "Sevre-long", desc: "Pills | 200mg", tarifs: [ { label: '1u', prix: '50CHF' } ], img: "https://www.myhealthshop.ch/media/2c/4c/19/1649761777/1859049_PICFRONT3D_F.jpg", indisponible: false },
      
    ]
  },
  {
    id: "cbdnice",
    photo: "cbd.svg",
    nom: "CBD Nice Côte d'Azur",
    desc: "Sélection CBD Côte d'Azur, livraison & meetup.",
    open: false,
    departement: "06",
    livraison: true,
    meetup: true,
    telegram: "https://t.me/cbdnice_shop",
    potato: "https://potato.im/plugnidpistyles_v2ce",
    signal: "https://signal.me/#p/+33799887766",
    produits: [
      { nom: "Huile CBD 15%", desc: "Huile de CBD pure 15%", tarifs: [ { label: '10ml', prix: '75€' } ], img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80", indisponible: false },
      { nom: "Fleur Lemon Haze", desc: "Fleur CBD Lemon Haze", tarifs: [ { label: '5g', prix: '42€' }, { label: '10g', prix: '80€' } ], img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80", indisponible: false },
      { nom: "Résine Libanais", desc: "Résine CBD Libanais", tarifs: [ { label: '5g', prix: '52€' } ], img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80", indisponible: false }
    ]
  }
];

// --- Filtres dynamiques ---

// --- Boutique auto via URL paramètre ---
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
window.addEventListener('DOMContentLoaded', function() {
  const boutiqueParam = getQueryParam('boutique');
  if (boutiqueParam) {
    // Recherche par id unique
    const vendeur = vendeurs.find(v => v.id && v.id.toLowerCase() === boutiqueParam.toLowerCase());
    if (vendeur) {
      showBoutiquePage(vendeur);
      document.getElementById('vendeurs-section').style.display = 'none';
      document.getElementById('boutique-section').style.display = '';
    }
  }
});

const departements = [
  "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","2A","2B","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95",
  // Cantons suisses (code à 2 lettres)
  "AG - Argovie", "AI - Appenzell Rhodes-Intérieures", "AR - Appenzell Rhodes-Extérieures", "BE - Berne", "BL - Bâle-Campagne", "BS - Bâle-Ville", "FR - Fribourg", "GE - Genève", "GL - Glaris", "GR - Grisons", "JU - Jura", "LU - Lucerne", "NE - Neuchâtel", "NW - Nidwald", "OW - Obwald", "SG - Saint-Gall", "SH - Schaffhouse", "SO - Soleure", "SZ - Schwytz", "TG - Thurgovie", "TI - Tessin", "UR - Uri", "VD - Vaud", "VS - Valais", "ZG - Zoug", "ZH - Zurich"
];

function fillDepartementFilter() {
  const select = document.getElementById('departement-filter');
  departements.forEach(dep => {
    const opt = document.createElement('option');
    opt.value = dep;
    // Ajouter le drapeau français ou suisse
    if (/^(\d{2}|2A|2B)$/.test(dep)) {
      opt.textContent = '🇫🇷 ' + dep;
    } else if (/^[A-Z]{2} - /.test(dep)) {
      opt.textContent = '🇨🇭 ' + dep;
    } else {
      opt.textContent = dep;
    }
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
    const indispo = v.open === false;

    const card = document.createElement('div');
    card.className = 'vendeur-card' + (indispo ? ' vendeur-card-indispo' : '');
    const photoUrl = v.photo || 'profile-placeholder.jpg';
    card.innerHTML = `
      <img class="vendeur-photo" src="${photoUrl}" alt="Photo de profil" style="width:64px;height:64px;border-radius:50%;object-fit:cover;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;${indispo ? 'filter: grayscale(1) opacity(0.7);' : ''}"/>
      <div class="vendeur-header">
        <span class="vendeur-nom">${v.nom}</span>
        <span class="vendeur-tags">
          <span class="tag departement">${/^[A-Z]{2} - /.test(v.departement) ? v.departement.split(' - ')[0] + ' 🇨🇭' : '🗺️ ' + v.departement}</span>
          ${v.livraison ? '<span class="tag livraison">🛵</span>' : ''}
          ${v.meetup ? '<span class="tag meetup">🏠</span>' : ''}
          ${v.postal ? '<span class="tag postal">✈️</span>' : ''}
        </span>
      </div>
      <div class="vendeur-desc">${v.desc}</div>
      ${indispo ? '<div class="vendeur-indispo-label">Indisponible</div>' : ''}
    `;
    if (!indispo) {
      card.onclick = () => showBoutiquePage(v);
    }
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
    card.className = 'produit-card' + (prod.indisponible ? ' indisponible' : '');
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nom}" ${prod.indisponible ? 'style="filter: grayscale(1); opacity:0.5; pointer-events:none;"' : ''}>
      <div class="nom">${prod.nom}</div>
      <div class="desc">${prod.desc}</div>
      <div class="tarifs">
        ${prod.tarifs.map(t=>`<span class='tarif-tag'>${t.label} ${t.prix}</span>`).join(' ')}
      </div>
      ${prod.indisponible ? '<div class="indisponible-label">Indisponible</div>' : ''}
    `;
    if (!prod.indisponible) {
      card.querySelector('img').style.cursor = 'pointer';
      card.querySelector('img').onclick = function(e) {
        e.stopPropagation();
        const popup = document.getElementById('popup-image');
        const popupImg = document.getElementById('popup-img');
        popupImg.src = prod.img;
        popup.style.display = 'flex';
      };
    }
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
