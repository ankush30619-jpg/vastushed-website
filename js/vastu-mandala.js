/**
 * Interactive 8-Directional Vastu Purusha Mandala & Energy Compass
 * Practical, Non-Superstitious Architectural Guidance
 */

const VASTU_DATA = {
  NE: {
    code: 'NE',
    name: 'North-East (Ishanya)',
    element: 'Water (Jal) • Pure Cosmic Energy',
    deity: 'Lord Shiva • Jupiter (Guru)',
    idealFor: 'Meditation Room, Temple/Pooja, Library, Study, Underground Water Storage, Open Lawn',
    architecturalGuidance: 'Keep this zone the lightest and lowest elevation in the building. Abundant natural morning light and clear open space stimulate intellectual clarity and spiritual peace.',
    vastushedRemedy: 'We incorporate double-height glazing, minimalist Zen water features, and open reading nooks without heavy structural columns.',
    icon: 'droplets',
    accentColor: '#38bdf8'
  },
  N: {
    code: 'N',
    name: 'North (Uttara)',
    element: 'Water / Abundance & Opportunities',
    deity: 'Lord Kuber • Mercury (Budha)',
    idealFor: 'Main Living Hall, Reception, Financial & Accounts Offices, Open Terraces, North Entry',
    architecturalGuidance: 'Zone of incoming prosperity and career growth. Should remain open, spacious, and well-lit with unhindered pathways.',
    vastushedRemedy: 'Floor-to-ceiling glass fenestrations, expansive living lobbies, and subtle water walls that amplify circulation and air movement.',
    icon: 'compass',
    accentColor: '#2dd4bf'
  },
  E: {
    code: 'E',
    name: 'East (Purva)',
    element: 'Solar Light & Vitality (Surya)',
    deity: 'Lord Indra • Sun (Surya)',
    idealFor: 'Main Verandah, Morning Tea Lounge, Health & Yoga Studio, Children Bedroom, Main Entrance',
    architecturalGuidance: 'The gateway of life-giving ultraviolet and morning sunlight. Vital for biological circadian rhythms, immunity, and institutional morale.',
    vastushedRemedy: 'Parametric shading louvers that welcome morning sunlight while buffering harsh afternoon glare, connected to manicured green courtyards.',
    icon: 'sun',
    accentColor: '#f59e0b'
  },
  SE: {
    code: 'SE',
    name: 'South-East (Agneya)',
    element: 'Fire (Agni) • Metabolic Energy',
    deity: 'Lord Agni • Venus (Shukra)',
    idealFor: 'Kitchen, Electrical Substation/Panel Room, Pantry, Restaurant Tandoor/Baking Zone, Boiler',
    architecturalGuidance: 'The primary fire zone. The ideal placement for cooking and electrical systems so thermal energy discharges cleanly without overheating living quarters.',
    vastushedRemedy: 'Optimized chimney drafts, contemporary copper & terracotta interior palettes, and ergonomic kitchen workflows with fire-safe finishes.',
    icon: 'flame',
    accentColor: '#c8633a'
  },
  S: {
    code: 'S',
    name: 'South (Dakshina)',
    element: 'Earth & Fire • Power, Fame & Execution',
    deity: 'Lord Yama • Mars (Mangal)',
    idealFor: 'Conference Rooms, Heavy Offices, Storage, Staircases, Master Guest Suite',
    architecturalGuidance: 'Demands structural weight, thermal mass, and high boundary walls to shield interiors from harsh solar radiation.',
    vastushedRemedy: 'Acoustic-buffered boardrooms, thick stone cladding, and recessed architectural fenestrations for cool, quiet productivity.',
    icon: 'shield',
    accentColor: '#e11d48'
  },
  SW: {
    code: 'SW',
    name: 'South-West (Nairutya)',
    element: 'Earth (Prithvi) • Stability & Leadership',
    deity: 'Lord Nairuta • Rahu / Earth Anchor',
    idealFor: 'Master Bedroom, Director/CEO Cabin, Heavy Equipment, Overhead Water Reservoir',
    architecturalGuidance: 'The highest and heaviest quadrant. Anchors authority, marital harmony, and financial foundation. Never place water bores or toilets here.',
    vastushedRemedy: 'Constructed with solid shear walls, warm hardwood and sandstone cladding, offering supreme acoustic insulation and grounded serenity.',
    icon: 'anchor',
    accentColor: '#d97706'
  },
  W: {
    code: 'W',
    name: 'West (Paschim)',
    element: 'Space & Air (Akasha/Vayu) • Stability & Gains',
    deity: 'Lord Varuna • Saturn (Shani)',
    idealFor: 'Dining Room, Children Study Pods, Corporate Meeting Rooms, Secondary Bedrooms',
    architecturalGuidance: 'Rules sustained profit and intellectual focus. Best balanced with moderate structural mass and calculated window openings.',
    vastushedRemedy: 'Integrated architectural brise-soleil (sun shades) to temper western heat while cultivating intimate family gathering dining spaces.',
    icon: 'scale',
    accentColor: '#8b5cf6'
  },
  NW: {
    code: 'NW',
    name: 'North-West (Vayavya)',
    element: 'Air (Vayu) • Movement, Social Energy & Trade',
    deity: 'Lord Vayu • Moon (Chandra)',
    idealFor: 'Guest Bedroom, Finished Goods Dispatch, Parking/Garage, Dining Area, Staff Quarters',
    architecturalGuidance: 'Governs movement, relationships, logistics, and change. Requires high airflow, cross-ventilation, and dynamic circulation.',
    vastushedRemedy: 'Breezeway corridors, kinetic operable louvers, and flexible hospitality guest suites with soothing pale finishes.',
    icon: 'wind',
    accentColor: '#38bdf8'
  },
  CENTER: {
    code: 'CENTER',
    name: 'Brahma Sthana (Center)',
    element: 'Ether / Space (Akasha) • The Cosmic Heart',
    deity: 'Lord Brahma • The Creator',
    idealFor: 'Open Central Courtyard (Aangan), Double-Height Skylight Atrium, Free Circulation',
    architecturalGuidance: 'The focal point of energy distribution throughout the entire premise. Must remain uncluttered, column-free, and open to the sky or illuminated brightly.',
    vastushedRemedy: 'Signature modern glass atrium courtyards with biophilic planters, circulating natural breeze and cosmic light to all surrounding rooms.',
    icon: 'maximize',
    accentColor: '#e5b95c'
  }
};

window.selectVastuDirection = function(code) {
  const data = VASTU_DATA[code];
  if (!data) return;

  const displayTitle = document.getElementById('vastu-detail-title');
  const displayElement = document.getElementById('vastu-detail-element');
  const displayDeity = document.getElementById('vastu-detail-deity');
  const displayIdeal = document.getElementById('vastu-detail-ideal');
  const displayGuidance = document.getElementById('vastu-detail-guidance');
  const displayRemedy = document.getElementById('vastu-detail-remedy');
  const nodes = document.querySelectorAll('.vastu-node');

  nodes.forEach(n => {
    if (n.dataset.zone === code) {
      n.classList.add('active');
      n.style.borderColor = data.accentColor;
      n.style.backgroundColor = `${data.accentColor}25`;
      n.style.boxShadow = `0 0 16px ${data.accentColor}60`;
    } else {
      n.classList.remove('active');
      n.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      n.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      n.style.boxShadow = 'none';
    }
  });

  if (displayTitle) displayTitle.innerText = data.name;
  if (displayElement) displayElement.innerText = data.element;
  if (displayDeity) displayDeity.innerText = data.deity;
  if (displayIdeal) displayIdeal.innerText = data.idealFor;
  if (displayGuidance) displayGuidance.innerText = data.architecturalGuidance;
  if (displayRemedy) displayRemedy.innerText = data.vastushedRemedy;
};

function initVastuMandala() {
  const container = document.getElementById('vastu-interactive-widget');
  if (!container) return;

  const nodes = document.querySelectorAll('.vastu-node');
  nodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.preventDefault();
      const zone = node.dataset.zone;
      window.selectVastuDirection(zone);
    });
  });

  // Default to North-East (Ishanya)
  window.selectVastuDirection('NE');
}

// =============================================================================
// PANCHA MAHABHUTAS (5 SACRED COSMIC ELEMENTS) INTERACTIVE MATRIX
// =============================================================================
const ELEMENTS_DATA = {
  water: {
    name: 'Jal (Water Element)',
    quadrant: 'North-East (Ishanya)',
    cosmicAttribute: 'Flow, Cognitive Clarity & Spiritual Receptivity',
    palette: 'Deep Indigo, Cyan & Pure Clear Glass',
    architecturalApplication: 'Zen shallow water reflecting pools, double-height morning lightwells, and meditation libraries. Keep this zone at the lowest elevation of the site.',
    nonDestructiveRemedy: 'Install a brass water fountain or crystal bowl with fresh water in the North-East corner to instantly activate tranquil mental vibrations.'
  },
  fire: {
    name: 'Agni (Fire Element)',
    quadrant: 'South-East (Agneya)',
    cosmicAttribute: 'Metabolic Energy, Digestion & Financial Liquidity',
    palette: 'Warm Copper, Terracotta, Coral & Brass',
    architecturalApplication: 'Culinary kitchens, electrical distribution transformers, inverter hubs, and heating infrastructure. Ensures thermal energy vents smoothly without stagnating.',
    nonDestructiveRemedy: 'If the kitchen cannot be moved from an unfavorable direction, install a red jasper stone or copper pyramid strip beneath the cooking burner.'
  },
  earth: {
    name: 'Prithvi (Earth Element)',
    quadrant: 'South-West (Nairutya)',
    cosmicAttribute: 'Grounding Mass, Longevity & Leadership Authority',
    palette: 'Ochre, Earthen Brown, Sandstone & Teak',
    architecturalApplication: 'Master bedroom suites, director cabins, heavy monolithic load-bearing masonry, and overhead storage. This must be the highest elevation on the plot.',
    nonDestructiveRemedy: 'Anchor with heavy natural granite boulders, solid hardwood furniture, or brass lead helices to solidify financial and domestic stability.'
  },
  air: {
    name: 'Vayu (Air Element)',
    quadrant: 'North-West (Vayavya)',
    cosmicAttribute: 'Continuous Movement, Trade & Interpersonal Relations',
    palette: 'Pearl White, Frosted Glass & Sky Blue',
    architecturalApplication: 'Hospitality guest rooms, vehicle garages, finished inventory storage, and operable kinetic louvered windows that promote constant fresh cross-breezes.',
    nonDestructiveRemedy: 'Hang a 6-pipe hollow metal wind chime or diffuse natural eucalyptus aromatherapy oils to clear stagnant social or commercial friction.'
  },
  space: {
    name: 'Akasha (Space / Ether Element)',
    quadrant: 'Brahma Sthana (Center)',
    cosmicAttribute: 'The Cosmic Void, Pure Equilibrium & Creative Expansion',
    palette: 'Luminous Gold, Warm Ambient Daylight',
    architecturalApplication: 'Open central courtyard (Aangan), column-free double-height atrium, and central skylights. Must remain 100% free of toilets, heavy machinery, or staircases.',
    nonDestructiveRemedy: 'Keep the center spotless, well-lit with a warm 2700K ambient chandelier, and remove any clutter or dark heavy furniture.'
  }
};

window.selectPanchaElement = function(key) {
  const item = ELEMENTS_DATA[key];
  if (!item) return;

  const titleEl = document.getElementById('element-display-title');
  const quadrantEl = document.getElementById('element-display-quadrant');
  const attrEl = document.getElementById('element-display-attr');
  const paletteEl = document.getElementById('element-display-palette');
  const archEl = document.getElementById('element-display-arch');
  const remedyEl = document.getElementById('element-display-remedy');
  const buttons = document.querySelectorAll('.element-pill');

  buttons.forEach(b => {
    if (b.dataset.element === key) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (titleEl) titleEl.innerText = item.name;
  if (quadrantEl) quadrantEl.innerText = item.quadrant;
  if (attrEl) attrEl.innerText = item.cosmicAttribute;
  if (paletteEl) paletteEl.innerText = item.palette;
  if (archEl) archEl.innerText = item.architecturalApplication;
  if (remedyEl) remedyEl.innerText = item.nonDestructiveRemedy;
};

function initPanchaMahabhutas() {
  const container = document.getElementById('pancha-mahabhutas-widget');
  if (!container) return;

  const buttons = document.querySelectorAll('.element-pill');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const elKey = btn.dataset.element;
      window.selectPanchaElement(elKey);
    });
  });

  window.selectPanchaElement('water');
}

// =============================================================================
// AI 9x9 VASTU PURUSHA MANDALA (81-CELL PARAMASAYIKA GRID SYSTEM)
// Complete Authentic Vedic Cosmology & Modern Spatial Engineering
// =============================================================================

const VASTU_81_PADAS = [
  // ROW 0: North Border (Col 0=NW to Col 8=NE)
  { id: 0, r: 0, c: 0, name: "Roga", code: "NW-1", deity: "Lord Vayu / Disease Eliminator", quadrant: "NW", element: "Air", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Guest Bedroom, Operable Louver Ventilation, Waste Transition",
    guidance: "Outer air threshold. Prone to fluctuating energy if overweighted. Keep well-ventilated.",
    remedy: "Neutralize with 6-rod metal wind chime or silver wire in the skirting if bedrooms suffer sleep disturbances.",
    suitability: { masterBed: "prohibited", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "auspicious", livingCourtyard: "prohibited" }
  },
  { id: 1, r: 0, c: 1, name: "Naga", code: "NW-2", deity: "Ahi / Serpent of Curiosity", quadrant: "NW", element: "Air", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Dynamic Storage, Guest Restroom, Research Archive",
    guidance: "Governs inquisitiveness and mental agility. High airflow maintains dynamic balance.",
    remedy: "Position a small potted snake plant (Sansevieria) to purify ambient electromagnetic radiation.",
    suitability: { masterBed: "prohibited", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "auspicious", livingCourtyard: "prohibited" }
  },
  { id: 2, r: 0, c: 2, name: "Mukhya", code: "N-1", deity: "Chief Architect / Execution Power", quadrant: "N", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Secondary Entrance (N2), Technical Engineering Cabin, Product Display",
    guidance: "Gateway of intentional action and swift execution. High daylight intake is beneficial.",
    remedy: "Install blue LED illumination or reflective crystal glass sphere if career progress stalls.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "acceptable", temple: "acceptable", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 3, r: 0, c: 3, name: "Bhallata", code: "N-2", deity: "Supreme Moon / Cosmic Treasury", quadrant: "N", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (N3), Cash Vault, High-Net-Worth Accounts Room",
    guidance: "One of the most auspicious entrance gateways in the entire 81-grid. Brings liquid abundance, unearned wealth, and financial expansion.",
    remedy: "Keep completely clear of shoe racks or clutter. Place a green aventurine gemstone threshold strip.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 4, r: 0, c: 4, name: "Soma", code: "N-3", deity: "Lord Kuber / The Cosmic Banker", quadrant: "N", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (N4), Living Room Foyer, Financial Advisory Desk",
    guidance: "The direct northern umbilical conduit of Lord Kuber. Bestows enduring business expansion and liquidity.",
    remedy: "Maintain open polished white marble or glass flooring with subtle 4000K warm daylighting.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 5, r: 0, c: 5, name: "Charaka", code: "N-4", deity: "Bhujanga / Medicinal Prana", quadrant: "N", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Ayurvedic Health Station, Study, Clear Glass Lobby",
    guidance: "Promotes physical healing, cellular regeneration, and cognitive sharpness.",
    remedy: "A shallow copper bowl with fresh floating white flowers invigorates the vitality of occupants.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "acceptable", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 6, r: 0, c: 6, name: "Aditi", code: "NE-1", deity: "Mother of Cosmic Light / Boundless Space", quadrant: "NE", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Pooja Sanctuary, Meditation Alcove, Underground Water Sump",
    guidance: "Zone of infinite abundance and maternal protection. Must remain low and uncluttered.",
    remedy: "If obstructed by structural walls, illuminate with 5000K high-CRI white cove lighting.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 7, r: 0, c: 7, name: "Diti", code: "NE-2", deity: "Visionary Clarity & Insight", quadrant: "NE", element: "Water", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Home Temple, Design Studio, Sacred Library",
    guidance: "Governs macro foresight, broad perspective, and freedom from mental illusions.",
    remedy: "Keep window glazing ultra-transparent without dark tints to allow pure cosmic sunlight.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 8, r: 0, c: 8, name: "Shikhi", code: "NE-3", deity: "Lord Shiva / Crown of Vastu Purusha", quadrant: "NE", element: "Water", isBrahma: false, ring: "Corner Deva",
    idealUse: "SUPREME POOJA ROOM, Zen Water Reflection Pond, Morning Sun Deck",
    guidance: "The head of the Cosmic Being. Demands the lowest ground elevation, absolute cleanliness, and zero structural weight.",
    remedy: "STRICT WARNING: Never place a septic tank, kitchen stove, or heavy staircase here. If violated, install a heavy brass pyramid grid and underground silver wire.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 1
  { id: 9, r: 1, c: 0, name: "Papyakshma", code: "W-NW", deity: "Detoxification & Cleansing", quadrant: "W", element: "Air", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Drainage Raceway, Utility Area, Guest Bath",
    guidance: "Flushes emotional friction and toxic waste from the building footprint.",
    remedy: "Keep drains sealed with one-way stainless steel anti-odor floor traps.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "auspicious", livingCourtyard: "prohibited" }
  },
  { id: 10, r: 1, c: 1, name: "Rudra", code: "IN-NW", deity: "Transformational Dynamic Force", quadrant: "NW", element: "Air", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Breezeway Corridor, Gym / Fitness Studio, Kinetic Louvers",
    guidance: "Dynamic catalytic energy. Supports rapid career evolution and proactive initiative.",
    remedy: "Incorporate brushed chrome metal hardware and neutral sandstone wall finishes.",
    suitability: { masterBed: "prohibited", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "acceptable", livingCourtyard: "prohibited" }
  },
  { id: 11, r: 1, c: 2, name: "Rudrajaya", code: "IN-N1", deity: "Dynamic Willpower & Focus", quadrant: "N", element: "Water-Air", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Analytical Study Cabin, IT Server Rack, Reading Pod",
    guidance: "Bridges intellectual thought with decisive physical execution.",
    remedy: "Place a small brass globe or precision clockwork instrument.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "acceptable", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 12, r: 1, c: 3, name: "Bhudhara", code: "IN-N2", deity: "Prithvidhara / Earth Supporter", quadrant: "N", element: "Earth-Water", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Executive Conference Room, Family Lounge, Wealth Safe",
    guidance: "Provides structural backbone and institutional staying power to the northern sector.",
    remedy: "Use solid beige stone skirting and acoustic oak paneling.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 13, r: 1, c: 4, name: "Bhudhara Core", code: "IN-N3", deity: "Central North Pillar", quadrant: "N", element: "Water-Space", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "North Living Hall, Central Family Promenade",
    guidance: "Direct conduit linking North financial inflow to the Brahma Sthana core.",
    remedy: "Seamless terrazzo flooring and recessed perimeter cove illumination.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 14, r: 1, c: 5, name: "Apavatsa", code: "IN-NE1", deity: "Child of Waters / Cosmic Nectar", quadrant: "NE", element: "Water", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Indoor Water Fountain, Meditation Cushion, Herbal Tea Bar",
    guidance: "Transmits crystalline emotional calmness, clarity of memory, and spiritual joy.",
    remedy: "Keep floor clean with clear crystalline polished marble.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 15, r: 1, c: 6, name: "Apa", code: "IN-NE2", deity: "Pure Primordial Water (Jal)", quadrant: "NE", element: "Water", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Underground Rainwater Harvester, Sacred Water Sanctuary",
    guidance: "The fountain of life. Ensures physical health, mental hydration, and deep intuition.",
    remedy: "Keep free of heavy concrete retaining walls or storage lockers.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 16, r: 1, c: 7, name: "Parjanya Inner", code: "IN-NE3", deity: "Seed Germination & Growth", quadrant: "NE", element: "Water", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Children Study Desk, Creative Ideation Board",
    guidance: "Fosters early-stage ideas and new commercial opportunities.",
    remedy: "A small brass vessel with fresh mint or holy basil (Tulsi).",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 17, r: 1, c: 8, name: "Parjanya", code: "E-1", deity: "Bounteous Rain & Flora", quadrant: "E", element: "Water-Sun", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Morning Sun Verandah, Secondary Entrance (E2), Biophilic Planters",
    guidance: "Converts early dawn sunlight into biological energy and cheerful disposition.",
    remedy: "Glazed ceramic planter with cascading jasmine or ferns.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 2
  { id: 18, r: 2, c: 0, name: "Sosha", code: "W-1", deity: "Analytical Intellect & Drying of Stagnation", quadrant: "W", element: "Air-Space", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Book Library, Mathematics / Tax Workstation, Dry Waste Conduit",
    guidance: "Dries up damp emotional clinging and sharpens critical evaluation.",
    remedy: "Minimalist gray slate tiles and focused task lighting (4000K).",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "auspicious", livingCourtyard: "prohibited" }
  },
  { id: 19, r: 2, c: 1, name: "Rajayakshma", code: "IN-W1", deity: "Endurance & Holding Capacity", quadrant: "W", element: "Earth-Air", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Study Room, Financial Document Vault, Dining Table",
    guidance: "Governs sustained effort and ability to hold onto acquired profits.",
    remedy: "Solid oak study desk and warm brass accent lighting.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "acceptable", livingCourtyard: "acceptable" }
  },
  { id: 20, r: 2, c: 2, name: "Vayavya Inner", code: "IN-NW-C", deity: "Air-Space Gateway", quadrant: "NW", element: "Air", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Internal Breezeway, Guest Wardrobe",
    guidance: "Circulates cool evening drafts across the western facade.",
    remedy: "Double-hung sash windows or louvered acoustic blinds.",
    suitability: { masterBed: "prohibited", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "acceptable", livingCourtyard: "acceptable" }
  },
  { id: 21, r: 2, c: 3, name: "North Gateway", code: "IN-N-C", deity: "Northern Core Threshold", quadrant: "N", element: "Water", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Formal Foyer, Glass Pivot Doorway",
    guidance: "Channels northern magnetic pranic field toward building heart.",
    remedy: "Recessed linear floor accent lights pointing southward.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 22, r: 2, c: 4, name: "Brahma N-Portal", code: "BR-N-EDGE", deity: "Northern Door to Akasha", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma Margin",
    idealUse: "Open Skylight Edge, Aangan North Promenade",
    guidance: "Uncluttered sacred space. No structural columns allowed.",
    remedy: "Flush ceiling architectural detail with concealed perimeter LEDs.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 23, r: 2, c: 5, name: "Ishanya Inner", code: "IN-NE-C", deity: "Water-Ether Nexus", quadrant: "NE", element: "Water-Space", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Meditation Podium, Reading Nook",
    guidance: "Extremely high spiritual vibrational quotient. Ideal for contemplation.",
    remedy: "Natural off-white linen drapes and pure cotton seating.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "auspicious", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 24, r: 2, c: 6, name: "Savitra", code: "IN-E1", deity: "Vital Spark & Morning Catalyst", quadrant: "E", element: "Sun-Ether", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Morning Yoga Studio, Children Activity Room",
    guidance: "Awakens metabolic vitality and stimulates joyful physical movement.",
    remedy: "Incorporate light natural birch wood and pastel saffron accents.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "auspicious", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 25, r: 2, c: 7, name: "Savita", code: "IN-E2", deity: "The Cosmic Illuminator", quadrant: "E", element: "Sun-Fire", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Art Studio, Creative Agency Conference Room",
    guidance: "Governs brilliance of expression, self-confidence, and public speaking.",
    remedy: "Hang warm framed geometric Vedic architectural sketches.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "auspicious", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 26, r: 2, c: 8, name: "Jayanta", code: "E-2", deity: "Lord of Victory & Unstoppable Success", quadrant: "E", element: "Sun", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (E3), Grand Portico, Victory Trophy Lounge",
    guidance: "The legendary E3 gateway. Bestows social acclaim, triumph over obstacles, and aristocratic repute.",
    remedy: "Solid carved Burma teak double doors with polished brass pull handles.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 3
  { id: 27, r: 3, c: 0, name: "Asura", code: "W-2", deity: "Architect of Physical Forms & Logic", quadrant: "W", element: "Space", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Engineering CAD Lab, Corporate Accounts, High-Tech Server Room",
    guidance: "Governs mathematical precision, deep analysis, and structural mechanics.",
    remedy: "Matte black metallic cabinetry and precision cable concealment.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "acceptable", livingCourtyard: "acceptable" }
  },
  { id: 28, r: 3, c: 1, name: "Mitra", code: "IN-W2", deity: "Lord of Alliances & Global Treaties", quadrant: "W", element: "Earth-Space", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Strategic Client Meeting Lounge, Negotiation Suite, Senior Partner Desk",
    guidance: "Secures honorable contracts, trust between commercial partners, and social loyalty.",
    remedy: "Warm tan leather seating and a round walnut negotiation table.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 29, r: 3, c: 2, name: "Mitra Core", code: "IN-W3", deity: "Western Anchor to Brahma", quadrant: "W", element: "Space", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Family Dining Hall, Central Hallway",
    guidance: "Harmonizes evening family meal gatherings and peaceful dialogue.",
    remedy: "Pendant chandelier casting warm 2700K ambient illumination.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 30, r: 3, c: 3, name: "Brahma NW", code: "BR-NW", deity: "Cosmic Creator (NW Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Column-Free Lightwell, Glass Skylight",
    guidance: "The lungs of the residence. Must remain 100% open, luminous, and unobstructed.",
    remedy: "Strictly avoid any structural columns, toilets, or heavy appliances in this cell.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 31, r: 3, c: 4, name: "Brahma N", code: "BR-N", deity: "Cosmic Creator (North Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Column-Free Lightwell",
    guidance: "Circulates vital prana downward and distributes it throughout all perimeter rooms.",
    remedy: "White marble floor border inlaid with subtle gold brass trim.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 32, r: 3, c: 5, name: "Brahma NE", code: "BR-NE", deity: "Cosmic Creator (NE Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Internal Zen Garden",
    guidance: "Sacred ether core. Connects to cosmic north-east magnetic dipole.",
    remedy: "A single shallow bronze bowl with floating white lotus blossoms.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 33, r: 3, c: 6, name: "Aryama Core", code: "IN-E3", deity: "Nobility Channel", quadrant: "E", element: "Sun-Space", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Formal Guest Reception Foyer, Open Living Corridor",
    guidance: "Channels early solar warmth toward inner living spaces.",
    remedy: "Light terrazzo tiles and floor-to-ceiling clear glass partitions.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "auspicious", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 34, r: 3, c: 7, name: "Aryama", code: "IN-E4", deity: "Lord of High Alliances & Nobility", quadrant: "E", element: "Sun", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "VIP Reception, Institutional Boardroom, Prestige Drawing Hall",
    guidance: "Governs elite networking, governmental relationships, and unblemished repute.",
    remedy: "Brass wall sconce and natural beige acoustic wall fabric.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 35, r: 3, c: 8, name: "Indra", code: "E-3", deity: "King of Devas / Supreme Sovereign Power", quadrant: "E", element: "Sun", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (E4), Official Residence Gate, Executive Foyer",
    guidance: "The royal E4 gateway. Attracts political prominence, authority, and commanding influence.",
    remedy: "A prominent brass bell and monumental double-height entrance portal.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 4: Equator (Col 0=West to Col 8=East)
  { id: 36, r: 4, c: 0, name: "Varuna", code: "W-3", deity: "Lord of Waters & Cosmic Contracts", quadrant: "W", element: "Water-Space", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (W3/W4), Formal Dining Hall, Legal Study",
    guidance: "Lord of the West. Oversees sustained career longevity and liquid financial reserves.",
    remedy: "Incorporate blue/cyan glass accents and horizontal cedar sun louvers.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "auspicious", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 37, r: 4, c: 1, name: "Varuna Inner", code: "IN-W4", deity: "Western Liquid Buffer", quadrant: "W", element: "Space", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Family Dining Room, Study Pod, Wine Cellar",
    guidance: "Cultivates satisfaction with life, emotional balance, and culinary nourishment.",
    remedy: "Warm walnut dining furniture and dimmable amber lighting.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 38, r: 4, c: 2, name: "Brahma W-Portal", code: "BR-W-EDGE", deity: "Western Door to Akasha", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma Margin",
    idealUse: "Courtyard West Colonnade, Circulation Arterial",
    guidance: "Keep open to ensure unimpeded cross-ventilation from the western breezeway.",
    remedy: "Polished Kota stone steps with brass safety inlay.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 39, r: 4, c: 3, name: "Brahma W", code: "BR-W", deity: "Cosmic Creator (West Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Central Skylight",
    guidance: "Core cosmic ether. Enhances spiritual synthesis and mental peace for all occupants.",
    remedy: "Clear open floor without partitions, furniture, or fixtures.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 40, r: 4, c: 4, name: "Brahma Nabhi", code: "BR-CENTER", deity: "ABSOLUTE COSMIC NAVEL // LORD BRAHMA", quadrant: "CENTER", element: "Pure Akasha", isBrahma: true, ring: "Cosmic Epicenter",
    idealUse: "THE SACRED HEART (AANGAN) // 100% UNTOUCHED OPEN ATRIUM",
    guidance: "THE MOST SACRED CELL IN VEDIC ARCHITECTURE. The umbilical cosmic center of the building. Must remain completely column-free, toilet-free, kitchen-free, and beam-free.",
    remedy: "If compromised by existing columns, surround column base with copper pyramid tape and install 2700K indirect perimeter cove uplighting.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 41, r: 4, c: 5, name: "Brahma E", code: "BR-E", deity: "Cosmic Creator (East Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Central Skylight",
    guidance: "Intakes direct solar photon energy from the east and disperses it radially.",
    remedy: "Glazed glass roof lanterns with operable motorized solar louvers.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 42, r: 4, c: 6, name: "Brahma E-Portal", code: "BR-E-EDGE", deity: "Eastern Door to Akasha", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma Margin",
    idealUse: "Courtyard East Colonnade, Circulation Arterial",
    guidance: "Unobstructed pathway between the morning sun deck and the central atrium.",
    remedy: "White marble floor border inlaid with subtle gold brass trim.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 43, r: 4, c: 7, name: "Surya Inner", code: "IN-E5", deity: "Solar Heat Buffer", quadrant: "E", element: "Sun", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Family Living Hall, Breakfast Nook",
    guidance: "Absorbs early solar morning spectrum; enhances biological vitamin D synthesis.",
    remedy: "Incorporate light linen sheers to soften intense morning illumination.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "auspicious", directorDesk: "acceptable", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 44, r: 4, c: 8, name: "Surya", code: "E-4", deity: "The Sun / Source of All Vitality", quadrant: "E", element: "Sun", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Morning Tea Lounge, Main Verandah, Health Studio",
    guidance: "The solar heart of the facade. Essential for immune health, clear vision, and vitality.",
    remedy: "Install operable architectural sun-breakers to block glare while keeping light abundant.",
    suitability: { masterBed: "acceptable", kitchen: "prohibited", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 5
  { id: 45, r: 5, c: 0, name: "Pushpadanta", code: "W-4", deity: "Lord of Fulfilled Wishes & Scholarship", quadrant: "W", element: "Space-Air", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PREMIER MAIN ENTRANCE (W4), Children Study Suite, Architectural Library",
    guidance: "The renowned W4 gateway. Cultivates academic genius, literary focus, and smooth sales execution.",
    remedy: "Solid timber doorway flanked by dual warm brass lighting sconces.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "auspicious", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 46, r: 5, c: 1, name: "Pushpa Inner", code: "IN-W5", deity: "Study Buffer", quadrant: "W", element: "Space", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Academic Study Pod, Research Workstation",
    guidance: "Deep concentration zone shielded from distracting household foot-traffic.",
    remedy: "Acoustic oak felt panels and ergonomic reading task chair.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 47, r: 5, c: 2, name: "SW Threshold", code: "IN-SW-C", deity: "Earth-Space Transition", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Master Wardrobe Corridor, Safe Dressing Suite",
    guidance: "Transitions dynamic courtyard vitality into heavy, quiet earth sanctuary.",
    remedy: "Rich smoked oak joinery and solid heavy interior doors.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 48, r: 5, c: 3, name: "Brahma SW", code: "BR-SW", deity: "Cosmic Creator (SW Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Column-Free Lightwell",
    guidance: "Maintains unobstructed spatial breathing room adjacent to heavy southern mass.",
    remedy: "Keep completely level with no sunken pits or elevated masonry.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 49, r: 5, c: 4, name: "Brahma S", code: "BR-S", deity: "Cosmic Creator (South Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Column-Free Lightwell",
    guidance: "Bridges southern solar thermal accumulation with central buoyant air-cooling.",
    remedy: "Continuous seamless flooring without directional breaks.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 50, r: 5, c: 5, name: "Brahma SE", code: "BR-SE", deity: "Cosmic Creator (SE Sector)", quadrant: "CENTER", element: "Space", isBrahma: true, ring: "Brahma 9-Core",
    idealUse: "OPEN CENTRAL ATRIUM (AANGAN), Central Skylight Edge",
    guidance: "Dissolves stagnant thermal energy before it overheats the central residence.",
    remedy: "Concealed perimeter extract registers integrated with ceiling detail.",
    suitability: { masterBed: "prohibited", kitchen: "prohibited", mainDoor: "prohibited", temple: "auspicious", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },
  { id: 51, r: 5, c: 6, name: "SE Threshold", code: "IN-SE-C", deity: "Fire-Space Transition", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Pantry Buffer, Kitchen Foyer, Breakfast Counter",
    guidance: "Prevents cooking odors and excessive heat from entering the central atrium.",
    remedy: "Tempered fluted glass pocket sliding door.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 52, r: 5, c: 7, name: "Savita Fire", code: "IN-E6", deity: "Creative Spark & Warmth", quadrant: "SE", element: "Fire-Sun", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Kitchen Prep Station, High-Speed Dining Counter",
    guidance: "Supports energetic culinary preparation and dynamic conversation.",
    remedy: "Warm terracotta pendant lights and natural copper cookware racks.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "acceptable", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "acceptable" }
  },
  { id: 53, r: 5, c: 8, name: "Satya", code: "E-5", deity: "Lord of Truth & Irrevocable Integrity", quadrant: "E", element: "Sun", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Executive Boardroom, Legal Contract Desk, Study Suite",
    guidance: "Anchors truthfulness in speech, transparent transactions, and lasting corporate goodwill.",
    remedy: "Clean rectilinear lines and solid stone desktop with no chaotic clutter.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "auspicious", temple: "auspicious", directorDesk: "auspicious", waterTankUnderground: "acceptable", septicTank: "prohibited", livingCourtyard: "auspicious" }
  },

  // ROW 6
  { id: 54, r: 6, c: 0, name: "Sugriva", code: "SW-W", deity: "Discipline, Mastery & Deep Scholarship", quadrant: "SW", element: "Earth-Space", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "MASTER BEDROOM SUITE, High-Command Study, Solid Heavy Wardrobe",
    guidance: "Zone of intellectual discipline and deep physical rest. Highly grounded.",
    remedy: "Natural sandstone wall cladding and dark hardwood flooring.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "acceptable", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 55, r: 6, c: 1, name: "Indraraja", code: "IN-SW1", deity: "Longevity & Administrative Grip", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Master Bed Headboard Zone, Private Vault, Safe Locker",
    guidance: "Supreme stability quadrant. Protects earned wealth and family hierarchy.",
    remedy: "Place headboard against South or West; avoid any mirrors facing bed.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 56, r: 6, c: 2, name: "SW Sanctum", code: "IN-SW2", deity: "Bedrock of Power", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Master Walk-in Dressing, Private Document Safe",
    guidance: "Maximum structural load-bearing capacity. Keep walls solid and thick.",
    remedy: "Solid brass lead helices installed under floor screed for rock-solid stability.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 57, r: 6, c: 3, name: "South Core Buffer", code: "IN-S1", deity: "Thermal Barrier Channel", quadrant: "S", element: "Earth-Fire", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Staircase Core, Heavy Masonry Duct",
    guidance: "Buffers fierce southern solar heat; adds beneficial structural deadweight.",
    remedy: "Clad external wall with double cavity insulation and dark granite.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 58, r: 6, c: 4, name: "Vivasvan Core", code: "IN-S2", deity: "Solar Radiance Heart", quadrant: "S", element: "Fire-Earth", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Executive Suite, Private Conference Lounge",
    guidance: "Promotes institutional fame, professional prestige, and recognition.",
    remedy: "Deep crimson or terracotta acoustic art paneling.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 59, r: 6, c: 5, name: "Jaya Inner", code: "IN-SE1", deity: "Victory Fuel Channel", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Kitchen Dry Pantry, Commercial Appliance Hub",
    guidance: "Energetic transition. Powers swift culinary turnaround and metabolic drive.",
    remedy: "Brushed brass joinery trim and non-combustible quartz worktops.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 60, r: 6, c: 6, name: "Jaya", code: "IN-SE2", deity: "Overcoming Impediments & Burning Obstacles", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Cooking Hob Counter, Tandoor / Oven Hub, Inverter Hub",
    guidance: "Vigorous fire energy. Bestows drive to conquer debt and commercial inertia.",
    remedy: "Ensure chef stands facing East while preparing meals.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 61, r: 6, c: 7, name: "Bhrisha Inner", code: "IN-E7", deity: "Contemplative Warmth", quadrant: "SE", element: "Fire-Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Dining Counter, Appliance Tower",
    guidance: "Balances fire heat with calculated mental focus.",
    remedy: "Earthen terracotta pottery accents and natural wood finishes.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "acceptable", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 62, r: 6, c: 8, name: "Bhrisha", code: "E-6", deity: "Gravity, Calculation & Execution", quadrant: "E", element: "Earth-Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Kitchen Prep, Dining Lounge, Secondary East Verandah",
    guidance: "Converts spontaneous creative impulses into pragmatic execution.",
    remedy: "Ensure kitchen sink (water) is kept separated from fire burner by at least 3 feet.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "acceptable", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },

  // ROW 7
  { id: 63, r: 7, c: 0, name: "Dauvarika", code: "SW-1", deity: "The Sacred Guardian & Gatekeeper", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "MASTER BEDROOM SUITE, Chief Executive Desk, Security Vault",
    guidance: "Supreme defensive anchor. Shields the premises from external negative intrusion and financial leakage.",
    remedy: "Heavy solid core teak doors and elevated floor plinth.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 64, r: 7, c: 1, name: "Dauvarika Inner", code: "IN-SW3", deity: "Shielding Bedrock", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Master Bed Sleeping Niche, Cash Safe",
    guidance: "Deep restorative REM sleep; anchors patriarchal and matriarchal authority.",
    remedy: "Warm 2700K ambient bedside illumination; strictly avoid television in front of bed.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 65, r: 7, c: 2, name: "SW Foundation", code: "IN-SW4", deity: "Sub-Earth Pillar", quadrant: "SW", element: "Earth", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Heavy Shear Wall, Structural Column Hub",
    guidance: "Ideal location for heavy structural building cores and highest roof parapet.",
    remedy: "Keep highest elevation of the building roofline in this exact sector.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 66, r: 7, c: 3, name: "Vivasvan S", code: "IN-S3", deity: "Solar Radiance & Worldly Authority", quadrant: "S", element: "Fire-Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Senior Executive Cabin, Heavy Boardroom Table",
    guidance: "Governs recognition from society, legal victories, and personal magnetism.",
    remedy: "Warm ochre wall wash lighting and dark mahogany furniture.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 67, r: 7, c: 4, name: "Vivasvan Center", code: "IN-S4", deity: "Solar Southern Axis", quadrant: "S", element: "Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Heavy Staircase Foundation, Document Archive",
    guidance: "High load-bearing capacity. Supports vertical circulation upwards.",
    remedy: "Clockwise spiral staircase constructed in solid reinforced concrete or steel.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 68, r: 7, c: 5, name: "Indraraja S", code: "IN-S5", deity: "Authority Shield", quadrant: "S", element: "Fire-Earth", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Heavy Storage, Server Tower, Safe Vault",
    guidance: "Maintains strong defensive posture against legal and financial audits.",
    remedy: "Heavy reinforced cabinetry and biometric electronic access.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 69, r: 7, c: 6, name: "Agni Chamber", code: "IN-SE3", deity: "Sacred Fire Threshold", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Inner Ring 2",
    idealUse: "Culinary Hob Zone, Baking Hearth, Electrical Panel",
    guidance: "Vents high-temperature exhaust directly out of building structure.",
    remedy: "High-CFM stainless steel chimney ducted through direct external wall.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 70, r: 7, c: 7, name: "Antariksha Inner", code: "IN-SE4", deity: "Atmospheric Expansion", quadrant: "SE", element: "Fire-Air", isBrahma: false, ring: "Inner Ring 1",
    idealUse: "Microwave / Air Fryer Station, Kitchen Prep",
    guidance: "Thermal exhaust distribution. Keeps cooking environment fresh.",
    remedy: "Operable louvered window with anti-insect stainless steel mesh.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 71, r: 7, c: 8, name: "Antariksha", code: "SE-1", deity: "Cosmic Atmosphere & Fire Exhaust", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Kitchen Utility Balcony, Gas Cylinder Bank, Electrical Inverter Hub",
    guidance: "Outer fire boundary. Ideal for high-temperature appliances and energy storage.",
    remedy: "Terracotta brick jali providing natural heat venting with complete visual privacy.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },

  // ROW 8: South Border (Col 0=SW to Col 8=SE)
  { id: 72, r: 8, c: 0, name: "Pitri", code: "SW-CORNER", deity: "Ancestral Anchor / Lord Nirriti", quadrant: "SW", element: "Earth (Prithvi)", isBrahma: false, ring: "Corner Deva",
    idealUse: "SUPREME MASTER BEDROOM, CEO / Founder Cabin, Heavy Overhead Reservoir",
    guidance: "THE BEDROCK OF THE BUILDING (Feet of Vastu Purusha). Demands maximum physical weight, highest elevation, and thickest load-bearing walls. Guarantees career supremacy, patriarchal authority, and financial permanence.",
    remedy: "STRICT WARNING: Never place a water borewell, main entrance, or sunken toilet here. If afflicted, install solid brass earth helices and 9 lead pyramids under floor.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 73, r: 8, c: 1, name: "Mriga", code: "S-1", deity: "Keen Curiosity & Animal Instincts", quadrant: "S", element: "Earth-Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Master Bedroom Dressing, High-End Wardrobe",
    guidance: "Sharpens professional intuition, instinct for lucrative deals, and stamina.",
    remedy: "Solid smoked oak joinery with concealed LED profile illumination.",
    suitability: { masterBed: "auspicious", kitchen: "prohibited", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 74, r: 8, c: 2, name: "Bhringaraja", code: "S-2", deity: "Immense Physical Strength & Vitality", quadrant: "S", element: "Earth-Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Heavy RCC Staircase, High-Security Vault, Gym Heavy Weights",
    guidance: "Absorbs harsh southern infrared solar heat and converts it into physical endurance.",
    remedy: "Clad external wall with rustic natural slate or fluted travertine stone.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "prohibited", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 75, r: 8, c: 3, name: "Gandharva", code: "S-3", deity: "Master of Fine Arts, Music & Charisma", quadrant: "S", element: "Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Home Theatre, Music Conservatory, Designer Dining Lounge",
    guidance: "Bestows charm, social charisma, artistic flair, and public admiration.",
    remedy: "Fabric acoustic wall panels and warm ambient 2700K indirect cove lighting.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 76, r: 8, c: 4, name: "Yama", code: "S-4", deity: "Lord of Dharma, Justice & Deep Sleep", quadrant: "S", element: "Earth-Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Deep Rest Bedroom, High-Security Document Archive, Central Stair Core",
    guidance: "Lord of the South. Provides deep restorative dreamless sleep and institutional justice.",
    remedy: "Keep window openings deeply recessed with architectural overhangs.",
    suitability: { masterBed: "auspicious", kitchen: "acceptable", mainDoor: "acceptable", temple: "prohibited", directorDesk: "auspicious", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 77, r: 8, c: 5, name: "Brihatkshata", code: "S-5", deity: "Generosity, Vast Mind & Prosperity", quadrant: "S", element: "Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Secondary Entrance (S3), Dining Room, Family Room",
    guidance: "Cultivates broad vision, commercial prosperity, and magnanimity.",
    remedy: "Polished brass handles and sandstone wall niches.",
    suitability: { masterBed: "acceptable", kitchen: "acceptable", mainDoor: "acceptable", temple: "prohibited", directorDesk: "acceptable", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 78, r: 8, c: 6, name: "Vitatha", code: "S-6", deity: "Removal of Illusion & Realization", quadrant: "S", element: "Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "Dry Storage Room, Utility Duct Buffer, Pantry",
    guidance: "Exposes pretense and clarifies realistic commercial expectations.",
    remedy: "Maintain clean, unpretentious functional finishes and bright task lighting.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "acceptable", livingCourtyard: "prohibited" }
  },
  { id: 79, r: 8, c: 7, name: "Pusha", code: "SE-2", deity: "The Cosmic Nourisher & Feast Provider", quadrant: "SE", element: "Fire", isBrahma: false, ring: "Outer Perimeter",
    idealUse: "PRIMARY CULINARY KITCHEN, Baking Oven, Chef Counter",
    guidance: "Blesses household food with health-giving vitality and metabolic fire.",
    remedy: "Granite cooking counter; chef faces East toward rising dawn vitality.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  },
  { id: 80, r: 8, c: 8, name: "Agni", code: "SE-CORNER", deity: "LORD OF THE SACRED COSMIC FIRE", quadrant: "SE", element: "Fire (Agni)", isBrahma: false, ring: "Corner Deva",
    idealUse: "SUPREME KITCHEN FIRE ZONE, Electrical Transformer, Inverter / Solar Panel Battery Hub",
    guidance: "THE METABOLIC ENGINE OF THE PREMISES. Converts solar heat into digestive vitality and liquid financial flow. Must remain free of water sumps, master bedrooms, or toilets.",
    remedy: "STRICT WARNING: Never place a water borehole or temple here (elemental clash). If already afflicted, place a copper pyramid helix and red jasper stone under burner.",
    suitability: { masterBed: "prohibited", kitchen: "auspicious", mainDoor: "prohibited", temple: "prohibited", directorDesk: "prohibited", waterTankUnderground: "prohibited", septicTank: "prohibited", livingCourtyard: "prohibited" }
  }
];

// AI Room Placement Scanner Diagnostic Database
const ROOM_SCANNER_DIAGNOSTICS = {
  masterBed: {
    roomName: "Master Bedroom Suite",
    recommendedZone: "South-West (Nairutya) — Padas: Pitri (#72), Dauvarika (#63), Sugriva (#54)",
    element: "Earth (Prithvi) • Grounding Mass & Authority Anchor",
    reasoning: "The South-West represents the grounding Earth element where diurnal solar heat stabilizes during the evening. Locating the head of household here anchors family leadership, marital harmony, and prevents subconscious anxiety.",
    guidance: "Ensure bed headboard rests towards the South or East. Use thick solid timber joinery (smoked oak or teak), solid shear walls, and keep this room the highest ceiling elevation in the structure.",
    prohibitedIn: "North-East (causes severe cognitive restlessness/insomnia) & Brahma Sthana (creates constant family friction and financial instability).",
    remedy: "If existing bedroom cannot be relocated from an unfavorable quadrant, embed 9 lead/brass pyramids beneath flooring and install 2700K indirect amber perimeter lighting."
  },
  kitchen: {
    roomName: "Culinary Kitchen & Stove",
    recommendedZone: "South-East (Agneya) — Padas: Agni (#80), Pusha (#79), Jaya (#60)",
    element: "Fire (Agni) • Metabolic Energy & Liquidity",
    reasoning: "The South-East is ruled by Lord Agni (Fire) and Venus (Shukra). The morning ultraviolet light transitions into infrared heat here, naturally sanitizing cooking counters and boosting metabolic and financial energy.",
    guidance: "Position the cooking range so the chef faces East while preparing meals. Keep the water sink and dishwasher at least 3 to 4 feet away from the flame stove to avoid Fire-Water elemental clash.",
    prohibitedIn: "North-East (extinguishes financial liquidity and causes chronic gastric issues) & South-West (overheats family relationships).",
    remedy: "If the kitchen is in the North-East or North, install a red jasper natural gemstone slab or a virtual copper dividing strip directly beneath the cooking hob."
  },
  mainDoor: {
    roomName: "Main Entrance (Grand Gateway)",
    recommendedZone: "Auspicious Gates: East (Jayanta #26, Indra #35), North (Bhallata #3, Soma #4), West (Pushpadanta #45)",
    element: "Vedic Cardinal Auspicious Gateways (Deva Padas)",
    reasoning: "The 81-Grid precisely marks 32 perimeter gates, but only 4 specific zones funnel pure sattvic prana: E3/E4 (vitality & political prestige), N3/N4 (liquid wealth & opportunities), and W4 (intellectual success).",
    guidance: "Construct the main door larger than other interior doors using solid hardwood. Ensure it opens inward clockwise, stays well-illuminated, and features an elevated threshold (Dehleez).",
    prohibitedIn: "Corner gateways: E1 Shikhi, E8 Agni, S8 Pitri, W8 Roga, N1 Roga (causes prana leakage, accidents, and financial disputes).",
    remedy: "If an existing door falls on an inauspicious pada, fix brass and copper helix boundary strips into the door frame threshold and hang an authentic brass Gayatri bell."
  },
  temple: {
    roomName: "Pooja Sanctuary & Meditation",
    recommendedZone: "North-East (Ishanya) — Padas: Shikhi (#8), Parjanya (#17), Aditi (#6), Diti (#7)",
    element: "Water (Jal) & Cosmic Ether (Akasha)",
    reasoning: "The North-East is the cosmic receptor where Earth's magnetic flux and morning solar rays converge at a 45-degree angle. This generates zero thermal agitation, facilitating effortless mental stillness and divine connectivity.",
    guidance: "Keep walls light (pure white, eggshell, or light sandstone). Idols must face East or West so the worshipper faces East or North. Never share a common wall with a toilet or kitchen chimney.",
    prohibitedIn: "South-West (Earth quadrant is too heavy/tamasic for spiritual transcendence) & directly under staircases or drainage pipes.",
    remedy: "If built in another room, locate the prayer altar in the North-East corner of that specific room, illuminated with pure white 4000K light."
  },
  directorDesk: {
    roomName: "Director / CEO Executive Cabin",
    recommendedZone: "South-West (Nairutya) — Padas: Pitri (#72), Dauvarika (#63), Mitra (#28)",
    element: "Earth (Prithvi) • Stability & Unquestioned Authority",
    reasoning: "Placing key decision-makers in the South-West anchors organizational authority and stops impulsive, panicky decisions. It provides a subconscious psychological vantage point over the entire workspace.",
    guidance: "Position the executive desk so the Director faces North (towards wealth/Kuber) or East (towards vitality/Surya) with a solid structural wall directly behind their back (never an open window or door).",
    prohibitedIn: "North-West (causes frequent executive turnover, vacillation, and travel fatigue) & North-East (causes founder to feel overwhelmed by micro-details).",
    remedy: "Mount a solid heavy natural mountain landscape artwork behind the chair and install a solid brass earth-helix on the desk."
  },
  waterTankUnderground: {
    roomName: "Underground Water Reservoir / Borewell",
    recommendedZone: "North-East (Ishanya) — Padas: Shikhi (#8), Parjanya (#17), Apa (#15), Apavatsa (#14)",
    element: "Water (Jal) • Magnetic Prana Conductor",
    reasoning: "Vedic hydrology dictates that the North-East must remain the lowest and lightest sector. An underground clean water tank here depresses this quadrant naturally, pulling auspicious magnetic forces inward.",
    guidance: "Ensure the borehole or sump is round or square, constructed in food-grade RCC, and located outside the 45-degree corner diagonal line.",
    prohibitedIn: "South-East (extinguishes culinary fire) & South-West (depressing the SW brings catastrophic financial and health collapse).",
    remedy: "If an underground tank was erroneously built in the SW, seal it immediately and install heavy granite boulders over it, shifting new water storage to the NE."
  },
  septicTank: {
    roomName: "Septic Tank & Waste Drainage",
    recommendedZone: "North-West (Vayavya) — Padas: Roga (#0), Naga (#1), Sosha (#18), Papyakshma (#9)",
    element: "Air (Vayu) • Dynamic Expulsion & Elimination",
    reasoning: "The North-West is governed by Air, making it the canonical sector for waste movement and elimination. Negative gaseous pressure dissipates cleanly without polluting sacred residential zones.",
    guidance: "Construct septic tank flush with or slightly below ground level, decoupled from the main building foundation by at least 2 feet.",
    prohibitedIn: "North-East (poisons the cosmic mind, causing chronic severe illness) & Brahma Sthana (destroys the central energetic heart of the family).",
    remedy: "If septic tank is in an incorrect zone and cannot be excavated, encase perimeter with copper and brass virtual isolating bars and diffuse natural eucalyptus oil."
  },
  livingCourtyard: {
    roomName: "Central Living Courtyard (Aangan)",
    recommendedZone: "Brahma Sthana (Center Core) — 9 Padas: #30, #31, #32, #39, #40, #41, #48, #49, #50",
    element: "Akasha (Cosmic Space / Ether) • Zero-Point Equilibrium",
    reasoning: "The central 9 padas constitute the divine womb of the property. When left open as a courtyard or skylight atrium, it creates a stack effect (convective cooling) pulling fresh air and divine light to all surrounding spaces.",
    guidance: "Keep 100% column-free, beam-free, toilet-free, and uncluttered. Use continuous, level flooring and natural daylight apertures.",
    prohibitedIn: "Never locate heavy structural shear cores, toilets, swimming pools, or kitchens in these 9 central cells.",
    remedy: "If existing columns occupy Brahma Sthana, install mirror claddings to visually open space and encircle columns with brass pyramid strips."
  }
};

let currentSelectedPadaIdx = 72; // Default to Pitri (SW)
let currentSelectedRoomKey = 'masterBed';

function render81Grid() {
  const gridContainer = document.getElementById('vastu-81-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = VASTU_81_PADAS.map(p => {
    let quadClass = '';
    if (p.isBrahma) {
      quadClass = 'pada-brahma';
    } else if (p.quadrant === 'NE') {
      quadClass = 'pada-ne';
    } else if (p.quadrant === 'SE') {
      quadClass = 'pada-se';
    } else if (p.quadrant === 'SW') {
      quadClass = 'pada-sw';
    } else if (p.quadrant === 'NW') {
      quadClass = 'pada-nw';
    }

    return `
      <button 
        type="button"
        class="vastu-81-cell ${quadClass}" 
        data-pada-id="${p.id}"
        onclick="inspect81Pada(${p.id})"
        title="[${p.code}] ${p.name} (${p.quadrant}) • Click to inspect"
      >
        <span class="text-[8px] sm:text-[9px] font-bold text-white leading-tight truncate w-full block">${p.name}</span>
        <span class="text-[6px] sm:text-[7px] text-slate-400 font-mono block">${p.code}</span>
      </button>
    `;
  }).join('');
}

window.inspect81Pada = function(padaId) {
  currentSelectedPadaIdx = padaId;
  const p = VASTU_81_PADAS[padaId];
  if (!p) return;

  // Highlight active cell in the grid
  const cells = document.querySelectorAll('.vastu-81-cell');
  cells.forEach(c => {
    if (parseInt(c.dataset.padaId, 10) === padaId) {
      c.classList.add('pada-active');
    } else {
      c.classList.remove('pada-active');
    }
  });

  // Update Pada Inspector UI elements
  const titleEl = document.getElementById('pada-inspect-title');
  const codeEl = document.getElementById('pada-inspect-code');
  const deityEl = document.getElementById('pada-inspect-deity');
  const quadEl = document.getElementById('pada-inspect-quadrant');
  const elemEl = document.getElementById('pada-inspect-element');
  const ringEl = document.getElementById('pada-inspect-ring');
  const idealEl = document.getElementById('pada-inspect-ideal');
  const guideEl = document.getElementById('pada-inspect-guidance');
  const remedyEl = document.getElementById('pada-inspect-remedy');
  const whatsappLink = document.getElementById('pada-inspect-whatsapp');

  if (titleEl) titleEl.innerText = `${p.name} Pada`;
  if (codeEl) codeEl.innerText = `Cell #${p.id} // Code: ${p.code} (Row ${p.r}, Col ${p.c})`;
  if (deityEl) deityEl.innerText = p.deity;
  if (quadEl) quadEl.innerText = `${p.quadrant} Quadrant`;
  if (elemEl) elemEl.innerText = p.element;
  if (ringEl) ringEl.innerText = p.ring;
  if (idealEl) idealEl.innerText = p.idealUse;
  if (guideEl) guideEl.innerText = p.guidance;
  if (remedyEl) remedyEl.innerText = p.remedy;

  if (whatsappLink) {
    const text = encodeURIComponent(`Hi VASTUSHED, I am checking Pada #${p.id} (${p.name}, ${p.quadrant}) on your AI 9x9 Vastu Grid. I would like to consult about optimizing this zone in my architectural layout.`);
    whatsappLink.href = `https://wa.me/919999999999?text=${text}`;
  }
};

window.scanRoomPlacement = function(roomKey) {
  currentSelectedRoomKey = roomKey;
  const diag = ROOM_SCANNER_DIAGNOSTICS[roomKey];
  if (!diag) return;

  // Update room scanner buttons
  const buttons = document.querySelectorAll('.room-scanner-btn');
  buttons.forEach(btn => {
    if (btn.dataset.room === roomKey) {
      btn.classList.add('active', 'bg-[#e5b95c]', 'text-black', 'border-[#e5b95c]');
      btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
    } else {
      btn.classList.remove('active', 'bg-[#e5b95c]', 'text-black', 'border-[#e5b95c]');
      btn.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
    }
  });

  // Tint grid cells according to room suitability
  const cells = document.querySelectorAll('.vastu-81-cell');
  cells.forEach(c => {
    const pId = parseInt(c.dataset.padaId, 10);
    const p = VASTU_81_PADAS[pId];
    if (!p) return;

    c.classList.remove('pada-highlight-auspicious', 'pada-highlight-acceptable', 'pada-highlight-prohibited');

    const suitability = p.suitability[roomKey];
    if (suitability === 'auspicious') {
      c.classList.add('pada-highlight-auspicious');
    } else if (suitability === 'acceptable') {
      c.classList.add('pada-highlight-acceptable');
    } else if (suitability === 'prohibited') {
      c.classList.add('pada-highlight-prohibited');
    }
  });

  // Update AI Diagnostic Panel
  const roomNameEl = document.getElementById('ai-scanner-room-name');
  const recomEl = document.getElementById('ai-scanner-recom');
  const elementEl = document.getElementById('ai-scanner-element');
  const reasoningEl = document.getElementById('ai-scanner-reasoning');
  const guidanceEl = document.getElementById('ai-scanner-guidance');
  const prohibEl = document.getElementById('ai-scanner-prohib');
  const remedyEl = document.getElementById('ai-scanner-remedy');
  const whatsappEl = document.getElementById('ai-scanner-whatsapp');

  if (roomNameEl) roomNameEl.innerText = diag.roomName;
  if (recomEl) recomEl.innerText = diag.recommendedZone;
  if (elementEl) elementEl.innerText = diag.element;
  if (reasoningEl) reasoningEl.innerText = diag.reasoning;
  if (guidanceEl) guidanceEl.innerText = diag.guidance;
  if (prohibEl) prohibEl.innerText = diag.prohibitedIn;
  if (remedyEl) remedyEl.innerText = diag.remedy;

  if (whatsappEl) {
    const text = encodeURIComponent(`Hi VASTUSHED, I ran the AI Room Scanner for "${diag.roomName}" on your 9x9 Vastu Grid. Please review my house plan for non-destructive energy calibration.`);
    whatsappEl.href = `https://wa.me/919999999999?text=${text}`;
  }
};

window.resetVastu81Highlights = function() {
  const cells = document.querySelectorAll('.vastu-81-cell');
  cells.forEach(c => {
    c.classList.remove('pada-highlight-auspicious', 'pada-highlight-acceptable', 'pada-highlight-prohibited');
  });
  const buttons = document.querySelectorAll('.room-scanner-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-[#e5b95c]', 'text-black', 'border-[#e5b95c]');
    btn.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
  });
};

// =============================================================================
// AI VASTU COMPASS MANDALA ENGINE (SACRED GEOMETRY LIVING ENGINE)
// Integrated with Homepage Hero Sacred Triangles, Dual Rings, Particles & 4 Layers
// =============================================================================

const COMPASS_LAYERS_DATA = {
  directions: {
    title: "16-Directional Cardinal & Ordinal Azimuths",
    badge: "LAYER 01 // CARDINAL GRID",
    summary: "Maps all 8 cardinal quadrants, 8 secondary zones, and precise angular degree coordinates across 360°.",
    quadrants: {
      N: { name: "North (Uttara)", degrees: "348.75° - 11.25°", element: "Water", ruler: "Lord Kuber / Wealth", padaId: 4, detail: "Incoming financial opportunities and liquid cash flow." },
      NE: { name: "North-East (Ishanya)", degrees: "33.75° - 56.25°", element: "Water / Akasha", ruler: "Lord Shiva / Intellect", padaId: 8, detail: "Cognitive clarity, spiritual receptivity, and calm vision." },
      E: { name: "East (Purva)", degrees: "78.75° - 101.25°", element: "Sun / Fire", ruler: "Lord Indra / Vitality", padaId: 35, detail: "Social connections, circadian immunity, and leadership." },
      SE: { name: "South-East (Agneya)", degrees: "123.75° - 146.25°", element: "Fire", ruler: "Lord Agni / Digestion", padaId: 80, detail: "Metabolic vigor, digestive health, and monetary liquidity." },
      S: { name: "South (Dakshina)", degrees: "168.75° - 191.25°", element: "Earth / Fire", ruler: "Lord Yama / Law", padaId: 76, detail: "Deep dreamless rest, legal protection, and public fame." },
      SW: { name: "South-West (Nairutya)", degrees: "213.75° - 236.25°", element: "Earth", ruler: "Lord Nirriti / Anchor", padaId: 72, detail: "Bedrock stability, patriarchy, and financial permanence." },
      W: { name: "West (Paschim)", degrees: "258.75° - 281.25°", element: "Space / Air", ruler: "Lord Varuna / Contracts", padaId: 36, detail: "Sustained career profits, student education, and family bonding." },
      NW: { name: "North-West (Vayavya)", degrees: "303.75° - 326.25°", element: "Air", ruler: "Lord Vayu / Movement", padaId: 0, detail: "Dynamic relationships, sales circulation, and graceful travel." },
      CENTER: { name: "Brahma Sthana (Center)", degrees: "Equilibrium Core", element: "Pure Akasha", ruler: "Lord Brahma / Source", padaId: 40, detail: "Zero-point cosmic heart linking all perimeter rooms." }
    }
  },
  planets: {
    title: "Navagraha Planetary Positions & Cosmic Rulers",
    badge: "LAYER 02 // NAVAGRAHA COSMOS",
    summary: "Visualizes the 9 celestial planetary deities governing each cardinal sector according to Vedic astrology.",
    quadrants: {
      N: { name: "North // Mercury (Budha)", degrees: "Planet of Intellect", element: "Emerald Green Frequency", ruler: "Mercury", padaId: 4, detail: "Governs business strategy, communication, accounting, and liquid wealth." },
      NE: { name: "North-East // Jupiter (Guru)", degrees: "Planet of Wisdom", element: "Golden Yellow Frequency", ruler: "Brihaspati", padaId: 8, detail: "Governs divine wisdom, expansion of consciousness, and spiritual serenity." },
      E: { name: "East // The Sun (Surya)", degrees: "Soul & Sovereign Vitality", element: "Ruby Orange Frequency", ruler: "Surya", padaId: 35, detail: "Governs biological circadian rhythms, eye health, bone density, and authority." },
      SE: { name: "South-East // Venus (Shukra)", degrees: "Planet of Prosperity", element: "Diamond White / Coral", ruler: "Shukra", padaId: 80, detail: "Governs culinary appetite, luxury aesthetics, marriage, and metabolic drive." },
      S: { name: "South // Mars (Mangal)", degrees: "Planet of Physical Power", element: "Red Jasper Frequency", ruler: "Mangal", padaId: 76, detail: "Governs physical courage, structural rebar stamina, and military/legal victory." },
      SW: { name: "South-West // Rahu (Earth Anchor)", degrees: "Ascending Node", element: "Smoky Brown Frequency", ruler: "Rahu", padaId: 72, detail: "Anchors material dominance, prevents sudden misfortune, and establishes authority." },
      W: { name: "West // Saturn (Shani)", degrees: "Planet of Discipline", element: "Deep Indigo Frequency", ruler: "Shani", padaId: 36, detail: "Governs perseverance, sustained financial reserves, and long-term asset building." },
      NW: { name: "North-West // The Moon (Chandra)", degrees: "Planet of Mind & Water", element: "Pearl White Frequency", ruler: "Chandra", padaId: 0, detail: "Governs emotional tranquility, friendly neighbors, hospitality, and quick turnover." },
      CENTER: { name: "Center // Lord Brahma", degrees: "Cosmic Neutral Core", element: "Luminous Ether", ruler: "Brahma", padaId: 40, detail: "The central unified field beyond planetary agitation." }
    }
  },
  sunpath: {
    title: "Diurnal Sun Path, Sunrise & Sunset Solar Arc",
    badge: "LAYER 03 // SOLAR IRRADIANCE",
    summary: "Tracks the sun's trajectory across the building footprint: dawn UV illumination in the East to sunset cooling in the West.",
    quadrants: {
      N: { name: "North // Night Magnetic Regeneration", degrees: "00:00 Midnight Axis", element: "Magnetic Cooling", ruler: "Zero Solar Glare", padaId: 4, detail: "Pulls cool restorative geomagnetic flux; ideal for meditation and financial files." },
      NE: { name: "North-East // Prataha-Kala (Dawn)", degrees: "04:30 AM - 06:00 AM", element: "UV-A / UV-B Photons", ruler: "Brahma Muhurta", padaId: 8, detail: "Infuses the dwelling with bactericidal ultraviolet rays, stimulating pineal gland vitality." },
      E: { name: "East // Surya Udaya (Sunrise)", degrees: "06:00 AM - 09:00 AM", element: "Soft Visible Spectrum", ruler: "Early Solar Intake", padaId: 35, detail: "Maximum biological light intake with low thermal heating. Essential for living spaces." },
      SE: { name: "South-East // Madhyahna Prep", degrees: "09:00 AM - 12:00 PM", element: "Infrared Transition", ruler: "Metabolic Fire", padaId: 80, detail: "Kitchen warms naturally; solar heat sanitizes counters and evaporates morning moisture." },
      S: { name: "South // Solar Noon Zenith", degrees: "12:00 PM Solar Peak", element: "High Solar Radiation", ruler: "Maximum Thermal Load", padaId: 76, detail: "Demands deep window reveals and thick external mass to block blistering heat." },
      SW: { name: "South-West // Aparahna (Heat Peak)", degrees: "02:00 PM - 04:30 PM", element: "Intense Trapped Infrared", ruler: "Thermal Reservoir", padaId: 72, detail: "Requires heavy solid walls; storing heat safely away from active working areas." },
      W: { name: "West // Surya Astama (Sunset)", degrees: "05:00 PM - 07:00 PM", element: "Golden Twilight Hour", ruler: "Sunset Horizon", padaId: 36, detail: "Sunlight dips below horizon; evening breeze begins cooling the Western facade." },
      NW: { name: "North-West // Sandhya (Nightfall)", degrees: "07:00 PM - 10:00 PM", element: "Dynamic Convection", ruler: "Cross-Breeze Vent", padaId: 0, detail: "Dissipates remaining diurnal heat via cross-ventilation before bedtime." },
      CENTER: { name: "Center // Skylight Atrium Stack", degrees: "Vertical Light Shaft", element: "Natural Daylighting", ruler: "Convective Stack", padaId: 40, detail: "Pulls zenith light down while venting warm air through automated ceiling louvers." }
    }
  },
  climatic: {
    title: "Micro-Climatic Vectors & Elemental Energy Matrix",
    badge: "LAYER 04 // CLIMATIC PHYSICS",
    summary: "Scientific engineering of seasonal wind azimuths, thermal mass buffering, and natural pressure differentials.",
    quadrants: {
      N: { name: "North // Low-Pressure Inflow", degrees: "Cool Thermal Balance", element: "Air & Moisture Intake", ruler: "Positive Pressure", padaId: 4, detail: "Allows steady natural illumination without harsh glare, reducing air-conditioning loads." },
      NE: { name: "North-East // Pranic Intake Flume", degrees: "Lowest Elevation Axis", element: "Pure Hydro-Thermal Flow", ruler: "Minimum Thermal Mass", padaId: 8, detail: "Keep low and unblocked so ambient moisture and refreshing morning air circulate inward." },
      E: { name: "East // Biophilic Daylight Envelope", degrees: "Solar Fenestration", element: "Natural Light Intake", ruler: "Circadian Optimization", padaId: 35, detail: "Calculated horizontal louvers capture morning photons while buffering afternoon heat." },
      SE: { name: "South-East // Thermal Exhaust Chimney", degrees: "High Heat Zone", element: "Thermal Dissipation", ruler: "Positive Exhaust Flue", padaId: 80, detail: "Naturally draws chimney fumes and HVAC compressor exhaust outward away from bedrooms." },
      S: { name: "South // High-Mass Thermal Shield", degrees: "Heavy Structural Core", element: "Heat Storage Masonry", ruler: "Solar Radiation Buffer", padaId: 76, detail: "Reinforced concrete shear walls absorb solar energy, releasing it slowly into night sky." },
      SW: { name: "South-West // Windward Bedrock", degrees: "Highest Ground & Mass", element: "Heavy Wind & Earth Buffer", ruler: "Maximum Parapet Elevation", padaId: 72, detail: "Highest parapet wall blocks dominant southwest dust storms and harsh summer squalls." },
      W: { name: "West // Evening Heat Dissipation", degrees: "Brise-Soleil Facade", element: "Solar Shading Louvers", ruler: "Twilight Cooling", padaId: 36, detail: "Vertical terracotta fins block low-angle setting sun rays from penetrating living spaces." },
      NW: { name: "North-West // Cross-Ventilation Axis", degrees: "Natural Airway Flume", element: "Dynamic Pressure Exhaust", ruler: "Operable Louver Axis", padaId: 0, detail: "Operable glass louvers create negative pressure draft, purging stale indoor CO2." },
      CENTER: { name: "Center // Thermal Siphon Core", degrees: "Convective Stack Effect", element: "Buoyant Air Updraft", ruler: "Natural Passive Cooling", padaId: 40, detail: "Warm air naturally rises through central atrium, drawing cooler perimeter air across rooms." }
    }
  }
};

let currentCompassLayer = 'directions';
let currentCompassQuadrant = 'NE';
let compassAngle = 0;
let compassParticles = [];
let compassMouse = { x: null, y: null, targetX: 0, targetY: 0 };
let compassAnimFrameId = null;

function initCompassParticles(width, height) {
  compassParticles = [];
  const count = 28;
  for (let i = 0; i < count; i++) {
    compassParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.6,
      color: Math.random() > 0.4 ? 'rgba(229, 185, 92,' : 'rgba(56, 189, 248,',
      alpha: Math.random() * 0.5 + 0.15
    });
  }
}

function drawAiVastuCompassFrame() {
  const canvas = document.getElementById('vastu-compass-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  if (compassParticles.length === 0) {
    initCompassParticles(w, h);
  }

  // Smooth mouse interpolation for 3D parallax depth
  if (compassMouse.x !== null) {
    compassMouse.targetX += (compassMouse.x - compassMouse.targetX) * 0.05;
    compassMouse.targetY += (compassMouse.y - compassMouse.targetY) * 0.05;
  } else {
    compassMouse.targetX += (w / 2 - compassMouse.targetX) * 0.05;
    compassMouse.targetY += (h / 2 - compassMouse.targetY) * 0.05;
  }

  const shiftX = (compassMouse.targetX - w / 2) * 0.04;
  const shiftY = (compassMouse.targetY - h / 2) * 0.04;
  const cx = w / 2 + shiftX;
  const cy = h / 2 + shiftY;
  const radius = Math.min(w, h) / 2 - 20;

  compassAngle += 0.002;

  ctx.clearRect(0, 0, w, h);

  // 1. Cosmic Dial Radial Gradient Background
  const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
  bgGrad.addColorStop(0, 'rgba(15, 23, 33, 0.96)');
  bgGrad.addColorStop(0.65, 'rgba(8, 12, 18, 0.98)');
  bgGrad.addColorStop(1, 'rgba(4, 7, 10, 1)');
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // 2. Cosmic Energy Prana Particles
  compassParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    const dx = p.x - cx;
    const dy = p.y - cy;
    if (dx * dx + dy * dy < radius * radius) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();
    }
  });

  // 3. Ancient Intersecting Sacred Triangles (Sri Yantra & Vastu Geometries from Homepage Hero)
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(compassAngle);

  const triRadius = radius * 0.68;
  for (let t = 0; t < 4; t++) {
    const offset = (t * Math.PI) / 2 + (t % 2 === 0 ? 0 : Math.PI / 4);
    ctx.beginPath();
    for (let j = 0; j < 3; j++) {
      const theta = offset + (j * 2 * Math.PI) / 3;
      const tx = Math.cos(theta) * triRadius;
      const ty = Math.sin(theta) * triRadius;
      if (j === 0) ctx.moveTo(tx, ty);
      else ctx.lineTo(tx, ty);
    }
    ctx.closePath();
    ctx.strokeStyle = t % 2 === 0 ? 'rgba(229, 185, 92, 0.26)' : 'rgba(200, 99, 58, 0.28)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.restore();

  // 4. Counter-Rotating Inner Dashed Concentric Ring (Cyan - like homepage)
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-compassAngle * 1.5);
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.52, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([4, 6]);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  // 5. Parametric Architectural 9x9 Vastu Grid in Center (like homepage)
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(compassAngle * 0.5);
  const miniGridSize = radius * 0.28;
  const miniStep = (miniGridSize * 2) / 6;
  ctx.strokeStyle = 'rgba(229, 185, 92, 0.18)';
  ctx.lineWidth = 0.8;
  for (let x = -miniGridSize; x <= miniGridSize; x += miniStep) {
    ctx.beginPath();
    ctx.moveTo(x, -miniGridSize);
    ctx.lineTo(x, miniGridSize);
    ctx.stroke();
  }
  for (let y = -miniGridSize; y <= miniGridSize; y += miniStep) {
    ctx.beginPath();
    ctx.moveTo(-miniGridSize, y);
    ctx.lineTo(miniGridSize, y);
    ctx.stroke();
  }
  ctx.restore();

  // 6. Outer Fixed Degree Circle & 360 Ticks
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(229, 185, 92, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  for (let deg = 0; deg < 360; deg += 5) {
    const rad = ((deg - 90) * Math.PI) / 180;
    const isMajor = deg % 45 === 0;
    const isMedium = deg % 15 === 0;
    const tickLen = isMajor ? 12 : (isMedium ? 8 : 4);
    
    const x1 = cx + Math.cos(rad) * (radius - tickLen);
    const y1 = cy + Math.sin(rad) * (radius - tickLen);
    const x2 = cx + Math.cos(rad) * radius;
    const y2 = cy + Math.sin(rad) * radius;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = isMajor ? '#e5b95c' : (isMedium ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.15)');
    ctx.lineWidth = isMajor ? 2 : 1;
    ctx.stroke();

    if (isMajor) {
      const tx = cx + Math.cos(rad) * (radius - 22);
      const ty = cy + Math.sin(rad) * (radius - 22);
      ctx.fillStyle = '#e5b95c';
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${deg}°`, tx, ty);
    }
  }
  ctx.restore();

  // 7. Active Direction Highlight Beam
  const quadAngles = {
    N: -90, NE: -45, E: 0, SE: 45, S: 90, SW: 135, W: 180, NW: 225
  };
  if (currentCompassQuadrant !== 'CENTER' && quadAngles[currentCompassQuadrant] !== undefined) {
    const qRad = (quadAngles[currentCompassQuadrant] * Math.PI) / 180;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(qRad) * (radius * 0.88), cy + Math.sin(qRad) * (radius * 0.88));
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.8)';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 14;
    ctx.shadowColor = '#e5b95c';
    ctx.stroke();
    ctx.restore();
  }

  // 8. Layer-Specific Overlays (Directions, Planets, Sun Path, Climatic)
  if (currentCompassLayer === 'directions') {
    const zones = [
      { name: 'N', sub: 'Uttara', a: -90, col: '#2dd4bf' },
      { name: 'NE', sub: 'Ishanya', a: -45, col: '#38bdf8' },
      { name: 'E', sub: 'Purva', a: 0, col: '#f59e0b' },
      { name: 'SE', sub: 'Agneya', a: 45, col: '#c8633a' },
      { name: 'S', sub: 'Dakshina', a: 90, col: '#ef4444' },
      { name: 'SW', sub: 'Nairutya', a: 135, col: '#d97706' },
      { name: 'W', sub: 'Paschim', a: 180, col: '#8b5cf6' },
      { name: 'NW', sub: 'Vayavya', a: 225, col: '#38bdf8' }
    ];

    zones.forEach(z => {
      const rad = (z.a * Math.PI) / 180;
      const x = cx + Math.cos(rad) * (radius * 0.68);
      const y = cy + Math.sin(rad) * (radius * 0.68);

      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fillStyle = z.name === currentCompassQuadrant ? 'rgba(229, 185, 92, 0.4)' : 'rgba(15, 23, 33, 0.85)';
      ctx.fill();
      ctx.strokeStyle = z.name === currentCompassQuadrant ? '#e5b95c' : z.col;
      ctx.lineWidth = z.name === currentCompassQuadrant ? 2.5 : 1.2;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(z.name, x, y - 2);

      ctx.fillStyle = z.col;
      ctx.font = '7px monospace';
      ctx.fillText(z.sub, x, y + 7);
    });

  } else if (currentCompassLayer === 'planets') {
    const planets = [
      { p: 'Mercury', sym: '☿', a: -90, col: '#2dd4bf', label: 'Budha' },
      { p: 'Jupiter', sym: '♃', a: -45, col: '#38bdf8', label: 'Guru' },
      { p: 'Sun', sym: '☉', a: 0, col: '#f59e0b', label: 'Surya' },
      { p: 'Venus', sym: '♀', a: 45, col: '#ec4899', label: 'Shukra' },
      { p: 'Mars', sym: '♂', a: 90, col: '#ef4444', label: 'Mangal' },
      { p: 'Rahu', sym: '☊', a: 135, col: '#d97706', label: 'Rahu' },
      { p: 'Saturn', sym: '♄', a: 180, col: '#8b5cf6', label: 'Shani' },
      { p: 'Moon', sym: '☽', a: 225, col: '#bae6fd', label: 'Chandra' }
    ];

    planets.forEach(pl => {
      const rad = (pl.a * Math.PI) / 180;
      const x = cx + Math.cos(rad) * (radius * 0.68);
      const y = cy + Math.sin(rad) * (radius * 0.68);

      ctx.beginPath();
      ctx.arc(x, y, 17, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(8, 14, 20, 0.9)';
      ctx.fill();
      ctx.strokeStyle = pl.col;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = pl.col;
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pl.sym, x, y - 3);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '7px monospace';
      ctx.fillText(pl.label, x, y + 8);
    });

  } else if (currentCompassLayer === 'sunpath') {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.68, 0, Math.PI, false);
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.75)';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    const milestones = [
      { name: 'Sunrise 6AM', a: 0, col: '#f59e0b', sub: 'UV Rays' },
      { name: 'Noon 12PM', a: 90, col: '#ef4444', sub: 'Peak Heat' },
      { name: 'Sunset 6PM', a: 180, col: '#c8633a', sub: 'Twilight' },
      { name: 'Night 12AM', a: -90, col: '#38bdf8', sub: 'Magnetic' }
    ];

    milestones.forEach(m => {
      const rad = (m.a * Math.PI) / 180;
      const x = cx + Math.cos(rad) * (radius * 0.68);
      const y = cy + Math.sin(rad) * (radius * 0.68);

      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 33, 0.92)';
      ctx.fill();
      ctx.strokeStyle = m.col;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = m.col;
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(m.name.split(' ')[0], x, y - 2);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '6px monospace';
      ctx.fillText(m.sub, x, y + 6);
    });
    ctx.restore();

  } else if (currentCompassLayer === 'climatic') {
    // Northeast Inflow Vector (Cool Blue)
    const neRad = (-45 * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(neRad) * (radius * 0.8), cy + Math.sin(neRad) * (radius * 0.8));
    ctx.lineTo(cx + Math.cos(neRad) * (radius * 0.35), cy + Math.sin(neRad) * (radius * 0.35));
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Southwest Thermal Mass (Hot Red)
    const swRad = (135 * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(swRad) * (radius * 0.6), cy + Math.sin(swRad) * (radius * 0.6), 22, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
    ctx.fill();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Northwest Breezeway Vector (Teal)
    const nwRad = (225 * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(nwRad) * (radius * 0.35), cy + Math.sin(nwRad) * (radius * 0.35));
    ctx.lineTo(cx + Math.cos(nwRad) * (radius * 0.8), cy + Math.sin(nwRad) * (radius * 0.8));
    ctx.strokeStyle = '#2dd4bf';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('NE Pranic Inflow', cx + Math.cos(neRad) * (radius * 0.88), cy + Math.sin(neRad) * (radius * 0.88));

    ctx.fillStyle = '#ef4444';
    ctx.fillText('SW Thermal Mass', cx + Math.cos(swRad) * (radius * 0.88), cy + Math.sin(swRad) * (radius * 0.88));

    ctx.fillStyle = '#2dd4bf';
    ctx.fillText('NW Cross-Breeze', cx + Math.cos(nwRad) * (radius * 0.88), cy + Math.sin(nwRad) * (radius * 0.88));
  }

  // 9. Central Brahma Sthana Golden Core (Sacred Navel with glowing aura)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.24, 0, Math.PI * 2);
  const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, radius * 0.24);
  coreGrad.addColorStop(0, 'rgba(229, 185, 92, 0.55)');
  coreGrad.addColorStop(1, 'rgba(200, 99, 58, 0.25)');
  ctx.fillStyle = coreGrad;
  ctx.fill();
  ctx.strokeStyle = currentCompassQuadrant === 'CENTER' ? '#ffffff' : '#e5b95c';
  ctx.lineWidth = currentCompassQuadrant === 'CENTER' ? 2.5 : 1.5;
  ctx.shadowBlur = 18;
  ctx.shadowColor = '#e5b95c';
  ctx.stroke();

  ctx.fillStyle = '#e5b95c';
  ctx.font = 'bold 9px cinzel, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('BRAHMA', cx, cy - 4);
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '7px monospace';
  ctx.fillText('Akasha Core', cx, cy + 6);
  ctx.restore();

  // Continue continuous animation loop
  compassAnimFrameId = requestAnimationFrame(drawAiVastuCompassFrame);
}

window.selectCompassQuadrant = function(quadCode) {
  currentCompassQuadrant = quadCode;
  const layerData = COMPASS_LAYERS_DATA[currentCompassLayer];
  if (!layerData) return;
  const qInfo = layerData.quadrants[quadCode];
  if (!qInfo) return;

  // Update Compass chips active status
  const chips = document.querySelectorAll('.compass-node-chip');
  chips.forEach(chip => {
    if (chip.dataset.compassQuad === quadCode) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  // Update Compass Details Panel
  const titleEl = document.getElementById('compass-quad-title');
  const degreesEl = document.getElementById('compass-quad-degrees');
  const elementEl = document.getElementById('compass-quad-element');
  const rulerEl = document.getElementById('compass-quad-ruler');
  const detailEl = document.getElementById('compass-quad-detail');

  if (titleEl) titleEl.innerText = qInfo.name;
  if (degreesEl) degreesEl.innerText = qInfo.degrees;
  if (elementEl) elementEl.innerText = qInfo.element;
  if (rulerEl) rulerEl.innerText = qInfo.ruler;
  if (detailEl) detailEl.innerText = qInfo.detail;

  // Sync with 9x9 Grid & Right-Hand Clicked Cell Inspector
  if (typeof qInfo.padaId !== 'undefined' && typeof inspect81Pada === 'function') {
    inspect81Pada(qInfo.padaId);
  }
};

window.setCompassLayer = function(layerKey) {
  currentCompassLayer = layerKey;
  const data = COMPASS_LAYERS_DATA[layerKey];
  if (!data) return;

  // Update button active state
  const buttons = document.querySelectorAll('.compass-layer-btn');
  buttons.forEach(btn => {
    if (btn.dataset.layer === layerKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update layer headers
  const badgeEl = document.getElementById('compass-layer-badge');
  const titleEl = document.getElementById('compass-layer-title');
  const summaryEl = document.getElementById('compass-layer-summary');

  if (badgeEl) badgeEl.innerText = data.badge;
  if (titleEl) titleEl.innerText = data.title;
  if (summaryEl) summaryEl.innerText = data.summary;

  // Refresh current quadrant details
  selectCompassQuadrant(currentCompassQuadrant);
};

function initAiVastuCompass() {
  const canvas = document.getElementById('vastu-compass-canvas');
  if (!canvas) return;

  // Bind layer switcher buttons
  const buttons = document.querySelectorAll('.compass-layer-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setCompassLayer(btn.dataset.layer);
    });
  });

  // Bind compass node chips
  const chips = document.querySelectorAll('.compass-node-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      selectCompassQuadrant(chip.dataset.compassQuad);
    });
  });

  // Interactive mouse tracking for parallax depth
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    compassMouse.x = e.clientX - rect.left;
    compassMouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    compassMouse.x = null;
    compassMouse.y = null;
  });

  // Handle canvas click to select closest quadrant
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - canvas.width / 2;
    const y = e.clientY - rect.top - canvas.height / 2;
    const dist = Math.sqrt(x * x + y * y);

    // Center click
    if (dist < 45) {
      selectCompassQuadrant('CENTER');
      return;
    }

    let angle = (Math.atan2(y, x) * 180) / Math.PI;
    let compassDeg = (angle + 90 + 360) % 360;

    if (compassDeg >= 337.5 || compassDeg < 22.5) selectCompassQuadrant('N');
    else if (compassDeg >= 22.5 && compassDeg < 67.5) selectCompassQuadrant('NE');
    else if (compassDeg >= 67.5 && compassDeg < 112.5) selectCompassQuadrant('E');
    else if (compassDeg >= 112.5 && compassDeg < 157.5) selectCompassQuadrant('SE');
    else if (compassDeg >= 157.5 && compassDeg < 202.5) selectCompassQuadrant('S');
    else if (compassDeg >= 202.5 && compassDeg < 247.5) selectCompassQuadrant('SW');
    else if (compassDeg >= 247.5 && compassDeg < 292.5) selectCompassQuadrant('W');
    else if (compassDeg >= 292.5 && compassDeg < 337.5) selectCompassQuadrant('NW');
  });

  // Initial draw
  setCompassLayer('directions');
  selectCompassQuadrant('NE');

  // Cancel any existing animation frame and start fresh loop
  if (compassAnimFrameId) {
    cancelAnimationFrame(compassAnimFrameId);
  }
  drawAiVastuCompassFrame();
}

window.initAiVastuCompass = initAiVastuCompass;
window.initGlowingVastuCompass = initAiVastuCompass;
window.drawGlowingVastuCompass = drawAiVastuCompassFrame;

// =============================================================================
// FLOOR PLAN VASTU EQUATION ANALYZER & REPORT GENERATOR
// Upload, North Calibration, Live Scoring & Printable Architectural Dossier
// =============================================================================

const SAMPLE_PLANS = {
  villa: {
    name: "Luxury 3BHK Residential Villa",
    img: "assets/images/blueprint-render.jpg",
    specs: "3,800 sq.ft // G+1 Duplex // Vastu Harmonized Design",
    defaults: {
      masterBed: "SW",
      kitchen: "SE",
      entrance: "E_AUSP",
      temple: "NE",
      waterTank: "NE",
      septic: "NW",
      center: "OPEN"
    }
  },
  office: {
    name: "Corporate Commercial Office Suite",
    img: "assets/images/project-office.jpg",
    specs: "12,400 sq.ft // Aerocity Commercial Suite",
    defaults: {
      masterBed: "SW", // Director Cabin
      kitchen: "SE", // Pantry
      entrance: "N_AUSP",
      temple: "NE",
      waterTank: "N",
      septic: "W",
      center: "OPEN"
    }
  }
};

let currentFloorPlan = {
  name: "Sample 3BHK Residential Villa",
  rotation: 0,
  score: 88,
  breakdown: {},
  remedies: []
};

window.calculateVastuEquation = function() {
  const masterBed = document.getElementById('fp-masterbed')?.value || 'SW';
  const kitchen = document.getElementById('fp-kitchen')?.value || 'SE';
  const entrance = document.getElementById('fp-entrance')?.value || 'E_AUSP';
  const temple = document.getElementById('fp-temple')?.value || 'NE';
  const waterTank = document.getElementById('fp-watertank')?.value || 'NE';
  const septic = document.getElementById('fp-septic')?.value || 'NW';
  const center = document.getElementById('fp-center')?.value || 'OPEN';

  let score = 0;
  const maxScore = 100;
  const positiveNotes = [];
  const defectNotes = [];
  const remedies = [];

  // Master Bed (20 pts)
  if (masterBed === 'SW') {
    score += 20;
    positiveNotes.push("Master Bedroom in South-West (Earth): Anchors authority and deep physical rest (+20).");
  } else if (masterBed === 'W' || masterBed === 'S') {
    score += 14;
    positiveNotes.push("Master Bedroom in West/South: Acceptable stability with minor planetary tuning (+14).");
  } else if (masterBed === 'NE') {
    score += 0;
    defectNotes.push("CRITICAL DEFECT: Master Bedroom in North-East (Water). Causes restless sleep and insomnia (-20).");
    remedies.push("For NE Master Bedroom: Relocate bed to SW corner of the room; install brass pyramid grid and 2700K amber lighting.");
  } else {
    score += 6;
    defectNotes.push(`Master Bedroom in ${masterBed}: Sub-optimal orientation; lacks heavy earth grounding.`);
    remedies.push(`For Master Bedroom in ${masterBed}: Place a solid brass earth-helix in the SW quadrant of the room.`);
  }

  // Kitchen (20 pts)
  if (kitchen === 'SE') {
    score += 20;
    positiveNotes.push("Kitchen in South-East (Agneya): Metabolic digestive fire discharges cleanly (+20).");
  } else if (kitchen === 'NW') {
    score += 15;
    positiveNotes.push("Kitchen in North-West (Vayavya): Auspicious alternative secondary fire quadrant (+15).");
  } else if (kitchen === 'NE') {
    score += 0;
    defectNotes.push("CRITICAL DEFECT: Kitchen in North-East. Fire extinguishes Water prana; causes financial drain (-20).");
    remedies.push("For NE Kitchen: Place a natural red jasper slab or virtual copper barrier strip directly under the stove burners.");
  } else {
    score += 8;
    defectNotes.push(`Kitchen in ${kitchen}: Non-cardinal fire placement; minor metabolic friction.`);
    remedies.push("Install a copper pyramid strip along kitchen baseboard; ensure chef faces East while cooking.");
  }

  // Main Entrance (20 pts)
  if (entrance === 'E_AUSP' || entrance === 'N_AUSP') {
    score += 20;
    positiveNotes.push("Main Entrance in E3/E4 or N3/N4 Deva Pada: Direct conduit for prosperity and social acclaim (+20).");
  } else if (entrance === 'W_AUSP') {
    score += 16;
    positiveNotes.push("Main Entrance in W4 (Pushpadanta): Auspicious gateway for knowledge and academic success (+16).");
  } else {
    score += 6;
    defectNotes.push("Main Entrance in non-auspicious border pada: Energy leakage or friction at threshold.");
    remedies.push("Mount an authentic brass Gayatri bell at the entrance and embed a brass threshold strip.");
  }

  // Pooja / Temple (15 pts)
  if (temple === 'NE') {
    score += 15;
    positiveNotes.push("Pooja Sanctuary in North-East (Ishanya): Pure cosmic receptivity and divine clarity (+15).");
  } else if (temple === 'E' || temple === 'N') {
    score += 11;
    positiveNotes.push("Pooja Sanctuary in East/North: Good spiritual light intake (+11).");
  } else {
    score += 3;
    defectNotes.push(`Pooja room in ${temple}: Heavy energy sector; suboptimal for transcendental stillness.`);
    remedies.push("Relocate prayer altar to the North-East corner of that room; use pure 4000K white daylighting.");
  }

  // Underground Water Sump (10 pts)
  if (waterTank === 'NE' || waterTank === 'N') {
    score += 10;
    positiveNotes.push("Underground Water Tank in North-East/North: Depresses the auspicious zone correctly (+10).");
  } else if (waterTank === 'SW' || waterTank === 'SE') {
    score += 0;
    defectNotes.push("CRITICAL DEFECT: Water sump in SW or SE. Drowns earth stability or conflicts with kitchen fire.");
    remedies.push("If water tank is in SW: Seal sump or counterbalance with heavy granite boulders on the roof.");
  } else {
    score += 5;
  }

  // Septic Tank (10 pts)
  if (septic === 'NW' || septic === 'W') {
    score += 10;
    positiveNotes.push("Septic Tank in North-West / West: Air element vents waste gases safely outward (+10).");
  } else if (septic === 'NE' || septic === 'CENTER') {
    score += 0;
    defectNotes.push("SEVERE DEFECT: Septic tank in NE or Brahma Sthana. Severely poisons spatial life-force.");
    remedies.push("Encase septic tank perimeter with virtual copper/brass isolating strips; diffuse eucalyptus oil.");
  } else {
    score += 5;
  }

  // Center Core / Brahma Sthana (5 pts)
  if (center === 'OPEN') {
    score += 5;
    positiveNotes.push("Brahma Sthana (Center Core) is completely open and uncluttered: Flawless prana circulation (+5).");
  } else {
    score += 0;
    defectNotes.push("Brahma Sthana is obstructed with heavy masonry or pillars: Suppresses central vitality.");
    remedies.push("Clad center pillars with mirror panels to expand visual space; install perimeter 2700K uplighting.");
  }

  // Normalize score
  score = Math.min(100, Math.max(0, score));
  currentFloorPlan.score = score;
  currentFloorPlan.positives = positiveNotes;
  currentFloorPlan.defects = defectNotes;
  currentFloorPlan.remedies = remedies;

  // Update UI Elements
  const scoreNumEl = document.getElementById('fp-score-number');
  const scoreBadgeEl = document.getElementById('fp-score-badge');
  const scoreBarEl = document.getElementById('fp-score-bar');
  const posContainer = document.getElementById('fp-positives-list');
  const defContainer = document.getElementById('fp-defects-list');
  const remContainer = document.getElementById('fp-remedies-list');
  const whatsappCta = document.getElementById('fp-whatsapp-cta');

  if (scoreNumEl) scoreNumEl.innerText = `${score}%`;
  if (scoreBarEl) scoreBarEl.style.width = `${score}%`;

  if (scoreBadgeEl) {
    if (score >= 85) {
      scoreBadgeEl.innerText = "A+ EXCELLENT // HARMONIC SATTVIC ALIGNMENT";
      scoreBadgeEl.className = "px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 text-xs font-mono font-bold";
    } else if (score >= 70) {
      scoreBadgeEl.innerText = "B+ GOOD // MINOR REMEDIAL TUNING RECOMMENDED";
      scoreBadgeEl.className = "px-3 py-1 rounded bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-mono font-bold";
    } else if (score >= 50) {
      scoreBadgeEl.innerText = "C MODERATE // NOTABLE DIRECTIONAL CLASHES DETECTED";
      scoreBadgeEl.className = "px-3 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold";
    } else {
      scoreBadgeEl.innerText = "D CRITICAL // IMMEDIATE NON-DESTRUCTIVE RECTIFICATION REQUIRED";
      scoreBadgeEl.className = "px-3 py-1 rounded bg-rose-500/20 text-rose-400 border border-rose-400/30 text-xs font-mono font-bold";
    }
  }

  // Update lists
  if (posContainer) {
    posContainer.innerHTML = positiveNotes.map(p => `
      <li class="flex items-start gap-2 text-xs text-slate-300 font-light">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
        <span>${p}</span>
      </li>
    `).join('');
  }

  if (defContainer) {
    defContainer.innerHTML = defectNotes.length > 0
      ? defectNotes.map(d => `
        <li class="flex items-start gap-2 text-xs text-rose-300 font-light">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
          <span>${d}</span>
        </li>
      `).join('')
      : `<li class="text-xs text-emerald-400 italic">No critical directional clashes found. Excellent spatial alignment!</li>`;
  }

  if (remContainer) {
    remContainer.innerHTML = remedies.length > 0
      ? remedies.map(r => `
        <div class="p-3 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-200 leading-relaxed font-light">
          <strong class="text-[#e5b95c] block mb-0.5">Non-Destructive Fix:</strong> ${r}
        </div>
      `).join('')
      : `<div class="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-xs text-emerald-300">Your floor plan is harmonically aligned. Standard brass threshold calibration will preserve positive prana.</div>`;
  }

  // Update WhatsApp prefilled link
  if (whatsappCta) {
    const text = encodeURIComponent(`Hi VASTUSHED, I tested my floor plan on your Vastu Equation Analyzer and scored ${score}%. I have some queries regarding my layout and would like to consult your architect.`);
    whatsappCta.href = `https://wa.me/919999999999?text=${text}`;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.loadSamplePlan = function(planKey) {
  const sample = SAMPLE_PLANS[planKey];
  if (!sample) return;

  currentFloorPlan.name = sample.name;
  const previewImg = document.getElementById('plan-preview-img');
  const titleEl = document.getElementById('fp-loaded-title');
  const specsEl = document.getElementById('fp-loaded-specs');

  if (previewImg) previewImg.src = sample.img;
  if (titleEl) titleEl.innerText = sample.name;
  if (specsEl) specsEl.innerText = sample.specs;

  // Set default dropdown values
  if (document.getElementById('fp-masterbed')) document.getElementById('fp-masterbed').value = sample.defaults.masterBed;
  if (document.getElementById('fp-kitchen')) document.getElementById('fp-kitchen').value = sample.defaults.kitchen;
  if (document.getElementById('fp-entrance')) document.getElementById('fp-entrance').value = sample.defaults.entrance;
  if (document.getElementById('fp-temple')) document.getElementById('fp-temple').value = sample.defaults.temple;
  if (document.getElementById('fp-watertank')) document.getElementById('fp-watertank').value = sample.defaults.waterTank;
  if (document.getElementById('fp-septic')) document.getElementById('fp-septic').value = sample.defaults.septic;
  if (document.getElementById('fp-center')) document.getElementById('fp-center').value = sample.defaults.center;

  calculateVastuEquation();
};

window.downloadVastuReport = function() {
  const printableArea = document.getElementById('printable-vastu-dossier');
  if (!printableArea) return;

  const clientName = document.getElementById('fp-client-name')?.value || "Valued Property Owner";
  const projectName = currentFloorPlan.name || "Architectural Residence";
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  printableArea.innerHTML = `
    <div style="font-family: monospace, sans-serif; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
      <!-- Header -->
      <div style="border-bottom: 2px solid #111827; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <h1 style="font-size: 24px; font-weight: 900; letter-spacing: 2px; margin: 0;">VASTUSHED</h1>
          <p style="font-size: 11px; margin: 3px 0 0; color: #4b5563;">DESIGN. BUILD. ALIGN. // ARCHITECTURE & VASTU CONSULTANCY</p>
        </div>
        <div style="text-align: right; font-size: 10px; color: #6b7280;">
          <div>AUDIT REF: VST-${Math.floor(100000 + Math.random() * 900000)}</div>
          <div>DATE: ${dateStr}</div>
        </div>
      </div>

      <!-- Overview -->
      <div style="background: #f3f4f6; border-left: 4px solid #d97706; padding: 14px; margin-bottom: 20px;">
        <div style="font-size: 14px; font-weight: bold; color: #111827; margin-bottom: 4px;">OFFICIAL VASTU EQUATION AUDIT REPORT</div>
        <div style="font-size: 12px; color: #374151;">Project: <strong>${projectName}</strong> | Client: <strong>${clientName}</strong></div>
        <div style="font-size: 11px; color: #4b5563; margin-top: 4px;">North Alignment: <strong>${currentFloorPlan.rotation}° Azimuth Calibrated</strong> | Evaluated on: <strong>9x9 Paramasayika Grid (81 Padas)</strong></div>
      </div>

      <!-- Score Banner -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Composite Vastu Harmonic Score:</div>
          <div style="font-size: 36px; font-weight: 900; color: #d97706; line-height: 1.1;">${currentFloorPlan.score}%</div>
        </div>
        <div style="text-align: right;">
          <span style="display: inline-block; padding: 6px 12px; border-radius: 4px; font-size: 11px; font-weight: bold; background: #fef3c7; color: #92400e; border: 1px solid #fde68a;">
            ${currentFloorPlan.score >= 85 ? 'A+ EXCELLENT ALIGNMENT' : (currentFloorPlan.score >= 70 ? 'B+ GOOD COMPLIANCE' : 'REQUIRES NON-DESTRUCTIVE REMEDY')}
          </span>
        </div>
      </div>

      <!-- Positive Alignments -->
      <div style="margin-bottom: 18px;">
        <h3 style="font-size: 13px; font-weight: bold; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; color: #065f46;">
          &check; HARMONIC VASTU ALIGNMENTS (${currentFloorPlan.positives.length})
        </h3>
        <ul style="font-size: 11px; line-height: 1.6; color: #374151; padding-left: 20px; margin: 0;">
          ${currentFloorPlan.positives.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>

      <!-- Identified Flaws -->
      <div style="margin-bottom: 18px;">
        <h3 style="font-size: 13px; font-weight: bold; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; color: #991b1b;">
          &excl; DIRECTIONAL IMBALANCES & RISK FACTORS (${currentFloorPlan.defects.length})
        </h3>
        <ul style="font-size: 11px; line-height: 1.6; color: #374151; padding-left: 20px; margin: 0;">
          ${currentFloorPlan.defects.length > 0 ? currentFloorPlan.defects.map(d => `<li>${d}</li>`).join('') : '<li>No structural clashes identified.</li>'}
        </ul>
      </div>

      <!-- Prescribed Non-Destructive Remedies -->
      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 13px; font-weight: bold; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; color: #1e40af;">
          &diams; VASTUSHED NON-DESTRUCTIVE RECTIFICATION PROGRAM
        </h3>
        <div style="font-size: 11px; line-height: 1.6; color: #1f2937;">
          ${currentFloorPlan.remedies.map(r => `<div style="margin-bottom: 6px; padding: 6px 10px; background: #f8fafc; border-left: 3px solid #3b82f6;"><strong>Prescription:</strong> ${r}</div>`).join('')}
        </div>
      </div>

      <!-- Certification Footer -->
      <div style="border-top: 1px dashed #d1d5db; padding-top: 14px; font-size: 10px; color: #6b7280; display: flex; justify-content: space-between;">
        <div>Certified by VASTUSHED Technical Architecture & Vastu Directorate</div>
        <div>Patna LAT 25°36'N // Delhi NCR LAT 28°36'N // Contact: +91 99999 99999</div>
      </div>
    </div>
  `;

  // Trigger print dialog
  window.print();
};

function initFloorPlanAnalyzer() {
  const dropzone = document.getElementById('fp-dropzone');
  const fileInput = document.getElementById('fp-file-input');
  const rotSlider = document.getElementById('fp-rot-slider');
  const rotValEl = document.getElementById('fp-rot-value');
  const overlayGrid = document.getElementById('fp-overlay-grid');

  if (!dropzone) return;

  // File Upload Handling
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const previewImg = document.getElementById('plan-preview-img');
          if (previewImg) previewImg.src = evt.target.result;
          const titleEl = document.getElementById('fp-loaded-title');
          if (titleEl) titleEl.innerText = file.name.replace(/\.[^/.]+$/, "");
          currentFloorPlan.name = file.name;
          calculateVastuEquation();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Drag & Drop
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('drag-over');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0 && fileInput) {
      fileInput.files = files;
      const event = new Event('change');
      fileInput.dispatchEvent(event);
    }
  });

  // Rotation slider
  if (rotSlider) {
    rotSlider.addEventListener('input', (e) => {
      const deg = parseInt(e.target.value, 10);
      currentFloorPlan.rotation = deg;
      if (rotValEl) rotValEl.innerText = `${deg}°`;
      if (overlayGrid) {
        overlayGrid.style.transform = `rotate(${deg}deg)`;
      }
    });
  }

  // Room dropdown change listeners
  const selectors = ['fp-masterbed', 'fp-kitchen', 'fp-entrance', 'fp-temple', 'fp-watertank', 'fp-septic', 'fp-center'];
  selectors.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', calculateVastuEquation);
    }
  });

  // Load initial sample plan (Villa)
  loadSamplePlan('villa');
}

function initVastu81GridSystem() {
  const container = document.getElementById('vastu-81-grid');
  if (!container) return;

  render81Grid();
  
  // Bind room scanner buttons
  const buttons = document.querySelectorAll('.room-scanner-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const room = btn.dataset.room;
      scanRoomPlacement(room);
    });
  });

  // Default activation: Master Bed scan & inspect SW Pada #72 (Pitri)
  scanRoomPlacement('masterBed');
  inspect81Pada(72);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initAllVastuEngines() {
  try { initVastuMandala(); } catch (e) { console.error('Error initializing Vastu Mandala:', e); }
  try { initPanchaMahabhutas(); } catch (e) { console.error('Error initializing Pancha Mahabhutas:', e); }
  try { initVastu81GridSystem(); } catch (e) { console.error('Error initializing 9x9 Vastu Grid:', e); }
  try { initAiVastuCompass(); } catch (e) { console.error('Error initializing AI Vastu Compass:', e); }
  try { initFloorPlanAnalyzer(); } catch (e) { console.error('Error initializing Floor Plan Analyzer:', e); }

  if (window.lucide) {
    try { window.lucide.createIcons(); } catch (e) { }
  }
}

window.initAllVastuEngines = initAllVastuEngines;
window.initVastu81GridSystem = initVastu81GridSystem;
window.render81Grid = render81Grid;
window.initFloorPlanAnalyzer = initFloorPlanAnalyzer;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllVastuEngines);
} else {
  initAllVastuEngines();
}


