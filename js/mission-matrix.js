/**
 * VASTUSHED - 9x9 Living Matrix Simulator Engine
 * Hierarchical Multi-Scale Conscious Built Environment from Micro to Macro
 * "Yatha Pinde Tatha Brahmande" - As in the Microcosm, so in the Macrocosm
 */

(function () {
  'use strict';

  // 9 Superimposed Hierarchical Scales
  const MISSION_SCALES = [
    {
      id: 'bedroom',
      index: 0,
      name: 'Master Bedroom',
      shortName: '01 // Room',
      category: 'Micro Personal Space',
      metric: '5m x 5m',
      ratio: '1 : 10',
      frequency: '7.83 Hz (Schumann Delta/Theta)',
      vastuZone: 'Nairutya (South-West)  -  Earth Element',
      entity: 'Breathing Human, Partner, Circadian Dawn Vectors & 0-EMF Shield',
      celestial: 'Prithvi / Rahu (Grounding & Restful Stability)',
      headline: 'The Sanctuary of Human Cellular Regeneration',
      description: 'The fundamental building block of human consciousness. The king bed is oriented with head towards the South to align the human circulatory system with Earth\'s geomagnetic flux. Features a complete luxury CAD layout: walk-in closet, en-suite bathroom with glass shower and vanity, woven carpet, bedside lamps, lounge seating, and biophilic greenery. Circadian morning rays enter from the North-East window across the room, while thick masonry on the South-West prevents thermal and psychic turbulence, allowing deep restorative sleep.',
      benefits: [
        'Optimized Melatonin production via 45° circadian morning light ingress',
        'Bio-electromagnetic grounding preventing chronic sleep fragmentation',
        'Acoustic isolation zone under 28 dB for accelerated nervous system repair',
        'Attached en-suite bathroom & walk-in wardrobe ergonomically zoned away from bed head'
      ]
    },
    {
      id: 'house',
      index: 1,
      name: 'House Layout',
      shortName: '02 // House',
      category: 'Residential Sanctum',
      metric: '25m x 25m',
      ratio: '1 : 50',
      frequency: '13.61 Hz (Om Frequency / Terrestrial)',
      vastuZone: 'Brahmasthana Central Void  -  9 Cardinal Devatas',
      entity: 'Active Family Members, Kitchen Fire, Mandir Meditation & Courtyard Airflow',
      celestial: 'Navagraha Mandala (9 Planetary Influences)',
      headline: 'The Bioclimatic Organism of Family Harmony',
      description: 'A complete residential villa designed as a breathing metabolic organism. The open-to-sky Brahmasthana courtyard serves as the central lung, drawing convective air currents through the house with stepped water pool and ripples. Features detailed furniture in all 9 rooms: Mandir shrine in NE with meditating resident, active kitchen in SE with fire sparks, formal 6-seat dining in West, family living in NW, executive study in North, and children\'s suite in South with family members moving between spaces.',
      benefits: [
        'Passive stack ventilation reducing air conditioning load by 38%',
        'Zero structural columns within the central 1/9th Brahmasthana sanctum',
        'Harmonized acoustic zoning separating active day zones from restful night suites',
        'Dynamic prana circulation channels energizing all 9 functional family rooms'
      ]
    },
    {
      id: 'neighbourhood',
      index: 2,
      name: 'Neighbourhood Masterplan',
      shortName: '03 // Neighbourhood',
      category: 'Community Cluster',
      metric: '150m x 150m',
      ratio: '1 : 300',
      frequency: '21.4 Hz (Social Cohesion Resonance)',
      vastuZone: 'Ishanya Rain Catchment & Central Green Commons',
      entity: 'Pedestrians, Joggers, Playing Children, Bio-Pond Ripples & Canopy Windbreak',
      celestial: 'Chandra / Moon (Community Affinity & Fluid Waters)',
      headline: 'The 9-Parcel Interconnected Social Fabric',
      description: 'Nine family parcel compounds clustered around a shared central biophilic park and water-harvesting catchment. Features private villas with driveways, parked electric vehicles, and rooftop solar arrays. The central commons includes a stepped bio-retention pond with stepping stones, community pavilion gazebo, children\'s playground with swings, and perimeter jogging loop with walking residents and swaying tree canopies.',
      benefits: [
        'Zero vehicle crossings through central children\'s play and elderly walking loops',
        '100% on-site rainwater retention replenishing the sub-surface groundwater aquifer',
        'Micro-climate cooling of 2.8°C compared to surrounding paved developments',
        'Shared community solar battery storage node in the South-East quadrant'
      ]
    },
    {
      id: 'sector',
      index: 3,
      name: 'Block / Sector Masterplan',
      shortName: '04 // Sector',
      category: 'Urban Sector Grid',
      metric: '800m x 800m',
      ratio: '1 : 1,500',
      frequency: '43.2 Hz (Harmonic Urban Pulse)',
      vastuZone: 'Vayavya Mobility Spine  -  Solar Commercial Hub',
      entity: 'Turning Multi-Lane Traffic, Cycling Transit Signals, Civic Hubs & Pedestrians',
      celestial: 'Budha / Mercury (Commerce, Intellect & Flow)',
      headline: 'Harmonic Urban Metabolism & Zero Bottlenecks',
      description: 'The urban sector organized with orthogonal arterial roads, dedicated cycling tracks, and solar-optimized civic amenities. Features a bustling commercial high-street with storefront awnings, a primary school and sports running track, a healthcare dispensary with ambulance bay, a multi-modal transit station, and smart traffic signals dynamically cycling red/yellow/green as vehicles turn corners without bottleneck friction.',
      benefits: [
        'Orthogonal solar street grid reducing building solar heat gain by 24%',
        'Decentralized 15-minute civic radius for all daily essential necessities',
        'Permeable vegetated bioswales preventing urban street flooding',
        'Synchronized smart traffic signals reducing vehicular idling emissions by 31%'
      ]
    },
    {
      id: 'city',
      index: 4,
      name: 'Town / City Masterplan (Patna)',
      shortName: '05 // City',
      category: 'Metropolitan Ecosystem',
      metric: '10km x 10km',
      ratio: '1 : 20,000',
      frequency: '108 Hz (Sacred Matrix Harmonic)',
      vastuZone: 'Northern Ganges Water Axis  -  Eastward Solar Growth',
      entity: 'Flowing Ganges Riverfront, Mahatma Gandhi Setu, Marine Drive & Metro Trains',
      celestial: 'Surya / Sun (Governance, Life-Force & Civil Energy)',
      headline: 'The Sacred Riparian Riverfront Metropolis',
      description: 'The historic urban ecosystem of Patna aligned along the life-giving flow of the holy Ganges. Features iconic landmarks: Mahatma Gandhi Setu spanning to the north, Digha rail-road bridge, JP Ganga Path (Marine Drive) expressway with glowing lampposts, river boats moving along currents, Old Patna City / Pataliputra archaeological core in the East, Bailey Road administrative spine, Eco-Park green lungs, and pulsing metro transit lines.',
      benefits: [
        'Perpetual North-East water orientation honoring ancient Vedic city layouts',
        'Continuous 18km riparian biodiversity corridor cooling the urban heat-island',
        'Multi-modal transit arteries connecting administrative, education, and health hubs',
        'Natural river breeze circulation penetrating inland avenues'
      ]
    },
    {
      id: 'state',
      index: 5,
      name: 'State Level Plan (Bihar Corridor)',
      shortName: '06 // State',
      category: 'Regional Agro-Transit Basin',
      metric: '350km x 250km',
      ratio: '1 : 700,000',
      frequency: '216 Hz (Geographic Node Harmonic)',
      vastuZone: 'Gangetic Central Lifeline  -  Vindhyan Southern Anchor',
      entity: 'Patna Capital Beacon, Bodh Gaya Spiritual Axis, River Confluences & GT Freight Pulses',
      celestial: 'Brihaspati / Jupiter (Expansion, Knowledge & Prosperity)',
      headline: 'The Fertile Gangetic Basin & Knowledge Corridor',
      description: 'The state of Bihar as an interconnected regional macro-system. Features detailed geographic boundary outlines, the Ganges bisecting north and south with major Himalayan tributaries (Gandak, Kosi, Ghaghara) and southern plateau rivers (Son, Punpun, Phalgu). Connects key heritage nodes: Patna capital beacon, Gaya & Bodh Gaya spiritual axis, Rajgir and Nalanda ancient university ruins, Muzaffarpur, Bhagalpur, and the Grand Trunk Road / NH-19 freight spine linking Delhi and Kolkata.',
      benefits: [
        'Inter-regional green food-security corridors nourishing 130 million citizens',
        'Spiritual-heritage energy triangle connecting Patna, Bodh Gaya, and Rajgir',
        'Equitable renewable solar-energy grid distribution across all 38 districts',
        'High-speed freight logistics along the Grand Trunk industrial corridor'
      ]
    },
    {
      id: 'india',
      index: 6,
      name: 'India Country Plan',
      shortName: '07 // Nation',
      category: 'Subcontinental Sacred Geometry',
      metric: '3,200km x 3,000km',
      ratio: '1 : 6,000,000',
      frequency: '432 Hz (Universal Sacred Tuning)',
      vastuZone: 'Himalayan North Shield  -  Indian Ocean Thermal Sink',
      entity: 'National Geomagnetic Grid, Golden Quadrilateral, Tropic of Cancer & Metro Ley-Lines',
      celestial: 'Mangala & Shukra (Vigor, Arts & Monumental Build)',
      headline: 'The Subcontinental Geomagnetic Sanctuary',
      description: 'The Indian subcontinent framed by the monumental snow-capped Himalayan mountain arc in the North and the warm Indian Ocean in the South. Features detailed peninsular coastline contours, the ancient Ujjain prime meridian ($75.8°E$), the sacred North-South Kedarnath-Rameswaram axis, Tropic of Cancer ($23.5°N$), and the Golden Quadrilateral highway network linking Delhi NCR, Patna, Kolkata, Mumbai, and Chennai with pulsing national energy packets.',
      benefits: [
        'Himalayan Northern thermal barrier deflecting polar air masses into benign rainfall',
        'Tropic of Cancer solar belt driving world-leading clean solar energy harvesting',
        'Golden Quadrilateral super-corridors connecting all 4 cardinal sea and land frontiers',
        'Vedic geomagnetic grid alignment connecting ancient sacred temple meridians'
      ]
    },
    {
      id: 'earth',
      index: 7,
      name: 'Earth Globe',
      shortName: '08 // Earth',
      category: 'Planetary Biosphere',
      metric: '12,742km Diameter',
      ratio: '1 : 25,000,000',
      frequency: '528 Hz (Miracle Repair / Biological Field)',
      vastuZone: 'Magnetic Dipole Axis (North-South)  -  Equatorial Spin',
      entity: 'Rotating 3D Continents, Swirling Clouds, Night City Lights, Satellites & Auroras',
      celestial: 'Prithvi Devi (The Ground of All Built Architecture)',
      headline: 'The Living Planetary Biosphere in Rotational Balance',
      description: 'Our living planetary home suspended in space at a 23.4° axial tilt. Features realistic rotating continents, drifting atmospheric cloud bands, glowing night-side urban electrical constellations, twilight terminator rim, polar auroral rings, orbiting space stations (ISS) with solar panels, and toroidal Van Allen geomagnetic flux lines looping from South to North to shield all biological life from cosmic radiation.',
      benefits: [
        'Toroidal magnetic dipole providing uninterrupted biological radiation shielding',
        'Circadian 24-hour rotational cycle dictating cellular circadian sleep/wake cycles',
        'Delicate atmospheric oxygen/nitrogen balance nurtured by global rainforests and oceans',
        'Active satellite communication network synchronizing planetary human consciousness'
      ]
    },
    {
      id: 'cosmos',
      index: 8,
      name: 'Planets & Stars (Cosmic Sphere)',
      shortName: '09 // Cosmos',
      category: 'Solar System & Celestial Matrix',
      metric: '12 Billion km',
      ratio: '1 : 10,000,000,000,000',
      frequency: '963 Hz (Cosmic Unity Consciousness)',
      vastuZone: 'Brahma Cosmic Singularity  -  Navagraha Orbital Harmonic',
      entity: 'Surya Sun Corona, 9 Navagraha Planets, Moons, Asteroid Belt & Cosmic Prana Rays',
      celestial: 'Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu',
      headline: 'The Universal Celestial Matrix & Navagraha Continuum',
      description: 'The cosmic source of all light, gravity, and prana. Features the radiant Sun with solar flares and coronal prominences, all 9 Navagraha planetary orbits (Mercury, Venus, Earth with Moon, Mars with polar caps, main Asteroid Belt, banded Jupiter with Galilean moons, ringed Saturn with Titan, Rahu/Ketu nodes), 27 Vedic Nakshatra constellations, and multi-spectrum cosmic prana rays spiraling directly down into Earth, into Patna, into the house, and directly charging the master bedroom.',
      benefits: [
        'Gravitational tidal and solar radiation rhythms governing all terrestrial life cycles',
        'Navagraha planetary frequency alignments reflected in ancient Vastu orientation ratios',
        'Continuous stream of cosmic prana recharging the atomic lattice of all built matter',
        'Complete harmonic entanglement between personal human sleep and cosmic planetary orbits'
      ]
    }
  ];

  // State Management
  let currentScaleIndex = 0;
  let targetScaleIndex = 0;
  let animZoom = 0;
  let animTime = 0;
  let isPlaying = false;
  let playTimer = null;

  // Viewport & Canvas
  let canvas = null;
  let ctx = null;
  let width = 800;
  let height = 600;
  let dpr = 1;
  let animFrameId = null;

  // Mouse / Pointer Tracking
  let mouseX = -9999;
  let mouseY = -9999;
  let isHovering = false;
  let hoveredCell = null;

  // Active Layer Toggles
  const layers = {
    grid: true,
    vectors: true,
    activity: true,
    cosmicRays: true
  };

  // Click Ripples
  const ripples = [];

  // Deep Space Starfield & Constellations
  const stars = [];
  for (let i = 0; i < 220; i++) {
    stars.push({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 1400,
      r: Math.random() * 1.8 + 0.3,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: ['#ffffff', '#e5b95c', '#38bdf8', '#c8633a', '#e2d9cc', '#a855f7'][Math.floor(Math.random() * 6)]
    });
  }

  // Asteroids for Solar System Belt
  const asteroids = [];
  for (let i = 0; i < 65; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distRatio = 0.58 + Math.random() * 0.06;
    asteroids.push({
      angle: angle,
      distRatio: distRatio,
      speed: (Math.random() * 0.2 + 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.8,
      color: ['#94a3b8', '#64748b', '#d1d5db'][Math.floor(Math.random() * 3)]
    });
  }

  // Living Movement Simulators
  // 1. House Family Walkers
  const houseWalkers = [
    { x: -45, y: -30, targetX: 45, targetY: 40, speed: 0.45, color: '#e5b95c', role: 'Parent' },
    { x: 35, y: -45, targetX: -55, targetY: 55, speed: 0.38, color: '#38bdf8', role: 'Child' },
    { x: -20, y: 30, targetX: 20, targetY: -40, speed: 0.32, color: '#2dd4bf', role: 'Elder' },
    { x: 40, y: 20, targetX: -30, targetY: -20, speed: 0.42, color: '#fef08a', role: 'Family' }
  ];

  // 2. Neighbourhood Pedestrians & Cyclists
  const hoodWalkers = [];
  for (let i = 0; i < 12; i++) {
    hoodWalkers.push({
      angle: (i / 12) * Math.PI * 2,
      radius: 40 + Math.random() * 95,
      speed: 0.005 + Math.random() * 0.006,
      dir: i % 2 === 0 ? 1 : -1,
      isCyclist: i % 4 === 0,
      color: ['#e5b95c', '#38bdf8', '#34d399', '#c8633a', '#fef08a'][i % 5]
    });
  }

  // 3. Sector Turning Vehicles
  const sectorVehicles = [];
  for (let i = 0; i < 22; i++) {
    sectorVehicles.push({
      id: i,
      x: (Math.random() - 0.5) * 360,
      y: (Math.floor(Math.random() * 4) - 1.5) * 80,
      vx: (Math.random() * 1.4 + 0.9) * (Math.random() > 0.5 ? 1 : -1),
      vy: 0,
      type: i % 5 === 0 ? 'bus' : (i % 6 === 0 ? 'van' : 'car'),
      color: ['#e5b95c', '#38bdf8', '#ffffff', '#ef4444', '#34d399'][i % 5]
    });
  }

  // 4. Patna Ganges Boats & Flow
  const riverParticles = [];
  for (let i = 0; i < 50; i++) {
    riverParticles.push({
      t: Math.random(),
      offsetY: (Math.random() - 0.5) * 26,
      speed: Math.random() * 0.0035 + 0.0018,
      size: Math.random() * 2.2 + 1,
      alpha: Math.random() * 0.75 + 0.25
    });
  }

  const riverBoats = [
    { t: 0.25, speed: 0.0012, length: 14, color: '#e5b95c' },
    { t: 0.65, speed: 0.0016, length: 18, color: '#38bdf8' },
    { t: 0.88, speed: 0.0009, length: 12, color: '#e2d9cc' }
  ];

  // 5. Cosmic Prana Beam Rays
  const cosmicBeams = [];
  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    cosmicBeams.push({
      angle: angle,
      dist: 230 + Math.random() * 100,
      speed: Math.random() * 1.6 + 1.2,
      color: ['#e5b95c', '#38bdf8', '#2dd4bf', '#fef08a', '#c8633a'][i % 5]
    });
  }

  // Math Helpers
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  function initMissionMatrix() {
    canvas = document.getElementById('mission-matrix-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    setupUIEventListeners();
    updateScaleUI(0);

    if (animFrameId) cancelAnimationFrame(animFrameId);
    renderLoop();
  }

  function resizeCanvas() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    width = parent.clientWidth;
    height = Math.max(520, Math.min(700, window.innerHeight * 0.68));
    dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  // =========================================================================
  // EVENT LISTENERS & CONTROLS
  // =========================================================================
  function setupUIEventListeners() {
    const slider = document.getElementById('mission-scale-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        setScale(val, false);
      });
    }

    const pills = document.querySelectorAll('.mission-scale-pill');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const idx = parseInt(pill.getAttribute('data-scale'), 10);
        setScale(idx, true);
      });
    });

    const zoomInBtn = document.getElementById('mission-zoom-in-btn');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        if (targetScaleIndex > 0) setScale(targetScaleIndex - 1, true);
      });
    }

    const zoomOutBtn = document.getElementById('mission-zoom-out-btn');
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        if (targetScaleIndex < MISSION_SCALES.length - 1) setScale(targetScaleIndex + 1, true);
      });
    }

    const playBtn = document.getElementById('mission-play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', toggleAutoTour);
    }

    const toggleBtns = document.querySelectorAll('.mission-layer-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const layerKey = btn.getAttribute('data-layer');
        if (layerKey && layers.hasOwnProperty(layerKey)) {
          layers[layerKey] = !layers[layerKey];
          btn.classList.toggle('active', layers[layerKey]);
          btn.classList.toggle('opacity-50', !layers[layerKey]);
          const checkIcon = btn.querySelector('.check-indicator');
          if (checkIcon) checkIcon.style.opacity = layers[layerKey] ? '1' : '0.2';
        }
      });
    });

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
      detectHoveredCell();
    });

    canvas.addEventListener('mouseleave', () => {
      mouseX = -9999;
      mouseY = -9999;
      isHovering = false;
      hoveredCell = null;
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripples.push({
        x: clickX,
        y: clickY,
        r: 5,
        maxR: 95,
        color: ['#e5b95c', '#38bdf8', '#2dd4bf', '#fef08a'][Math.floor(Math.random() * 4)],
        alpha: 1.0
      });

      pulseTelemetry();
    });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        if (targetScaleIndex < MISSION_SCALES.length - 1) setScale(targetScaleIndex + 1, true);
      } else if (e.deltaY < 0) {
        if (targetScaleIndex > 0) setScale(targetScaleIndex - 1, true);
      }
    }, { passive: false });
  }

  function detectHoveredCell() {
    const cx = width / 2;
    const cy = height / 2;
    const gridDim = Math.min(width, height) * 0.72;
    const cellW = gridDim / 9;
    const left = cx - gridDim / 2;
    const top = cy - gridDim / 2;

    if (mouseX >= left && mouseX <= left + gridDim && mouseY >= top && mouseY <= top + gridDim) {
      const col = Math.floor((mouseX - left) / cellW);
      const row = Math.floor((mouseY - top) / cellW);
      hoveredCell = {
        row: clamp(row, 0, 8),
        col: clamp(col, 0, 8),
        index: clamp(row * 9 + col, 0, 80)
      };
    } else {
      hoveredCell = null;
    }
  }

  function pulseTelemetry() {
    const hudBox = document.getElementById('mission-hud-box');
    if (!hudBox) return;
    hudBox.classList.add('scale-102', 'border-[#e5b95c]');
    setTimeout(() => {
      hudBox.classList.remove('scale-102', 'border-[#e5b95c]');
    }, 280);
  }

  function toggleAutoTour() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('mission-play-btn');

    if (isPlaying) {
      if (playBtn) {
        playBtn.classList.add('bg-[#e5b95c]', 'text-black');
        playBtn.classList.remove('bg-white/10', 'text-white');
        const span = playBtn.querySelector('span');
        if (span) span.innerText = 'Pause Tour';
      }
      playTimer = setInterval(() => {
        const next = (targetScaleIndex + 1) % MISSION_SCALES.length;
        setScale(next, true);
      }, 4400);
    } else {
      if (playBtn) {
        playBtn.classList.remove('bg-[#e5b95c]', 'text-black');
        playBtn.classList.add('bg-white/10', 'text-white');
        const span = playBtn.querySelector('span');
        if (span) span.innerText = 'Auto Tour';
      }
      if (playTimer) clearInterval(playTimer);
      playTimer = null;
    }
  }

  function setScale(index, updateSlider) {
    if (index < 0 || index >= MISSION_SCALES.length) return;
    targetScaleIndex = index;
    currentScaleIndex = index;

    if (updateSlider) {
      const slider = document.getElementById('mission-scale-slider');
      if (slider) slider.value = index;
    }

    updateScaleUI(index);
  }

  function updateScaleUI(index) {
    const data = MISSION_SCALES[index];
    if (!data) return;

    const pills = document.querySelectorAll('.mission-scale-pill');
    pills.forEach((pill) => {
      const idx = parseInt(pill.getAttribute('data-scale'), 10);
      if (idx === index) {
        pill.classList.add('active', 'border-[#e5b95c]', 'bg-[#e5b95c]/20', 'text-white');
        pill.classList.remove('border-white/10', 'bg-white/5', 'text-slate-400');
      } else {
        pill.classList.remove('active', 'border-[#e5b95c]', 'bg-[#e5b95c]/20', 'text-white');
        pill.classList.add('border-white/10', 'bg-white/5', 'text-slate-400');
      }
    });

    const hudScaleName = document.getElementById('hud-scale-name');
    const hudScaleRatio = document.getElementById('hud-scale-ratio');
    const hudScaleMetric = document.getElementById('hud-scale-metric');
    const hudVastuZone = document.getElementById('hud-vastu-zone');
    const hudFrequency = document.getElementById('hud-frequency');
    const hudEntity = document.getElementById('hud-entity');

    if (hudScaleName) hudScaleName.innerText = `${data.shortName}  -  ${data.name}`;
    if (hudScaleRatio) hudScaleRatio.innerText = data.ratio;
    if (hudScaleMetric) hudScaleMetric.innerText = data.metric;
    if (hudVastuZone) hudVastuZone.innerText = data.vastuZone;
    if (hudFrequency) hudFrequency.innerText = data.frequency;
    if (hudEntity) hudEntity.innerText = data.entity;

    const cardTitle = document.getElementById('mission-card-title');
    const cardCategory = document.getElementById('mission-card-category');
    const cardMetric = document.getElementById('mission-card-metric');
    const cardRatio = document.getElementById('mission-card-ratio');
    const cardHeadline = document.getElementById('mission-card-headline');
    const cardDesc = document.getElementById('mission-card-desc');
    const cardCelestial = document.getElementById('mission-card-celestial');
    const cardBenefitsList = document.getElementById('mission-card-benefits');

    if (cardTitle) cardTitle.innerText = data.name;
    if (cardCategory) cardCategory.innerText = data.category;
    if (cardMetric) cardMetric.innerText = data.metric;
    if (cardRatio) cardRatio.innerText = data.ratio;
    if (cardHeadline) cardHeadline.innerText = data.headline;
    if (cardDesc) cardDesc.innerText = data.description;
    if (cardCelestial) cardCelestial.innerText = data.celestial;

    if (cardBenefitsList && data.benefits) {
      cardBenefitsList.innerHTML = data.benefits
        .map((b) => `
          <li class="flex items-start gap-2.5 text-xs text-slate-300">
            <span class="w-1.5 h-1.5 rounded-full bg-[#e5b95c] mt-1.5 flex-shrink-0"></span>
            <span>${b}</span>
          </li>
        `)
        .join('');
    }

    const counterEl = document.getElementById('mission-scale-step-badge');
    if (counterEl) {
      counterEl.innerText = `SCALE 0${index + 1} / 09`;
    }
  }

  // =========================================================================
  // MAIN RENDERING LOOP
  // =========================================================================
  function renderLoop() {
    animTime += 0.024;
    animZoom = lerp(animZoom, targetScaleIndex, 0.08);

    ctx.clearRect(0, 0, width, height);
    drawBackground();

    ctx.save();
    const cx = width / 2;
    const cy = height / 2;
    ctx.translate(cx, cy);

    const baseScale = Math.floor(animZoom);
    const nextScale = Math.min(8, baseScale + 1);
    const blend = animZoom - baseScale;

    renderScaleLayer(baseScale, 1.0 - blend);
    if (blend > 0.005 && nextScale !== baseScale) {
      renderScaleLayer(nextScale, blend);
    }

    if (layers.grid) {
      drawInvariantVastuGrid(cx, cy);
    }

    if (layers.vectors) {
      drawPranaVectors(animTime);
    }

    if (layers.cosmicRays) {
      drawCosmicPranaRays(animTime);
    }

    drawInteractivity(cx, cy);

    ctx.restore();
    drawReticleDecorations();

    animFrameId = requestAnimationFrame(renderLoop);
  }

  function drawBackground() {
    const grad = ctx.createRadialGradient(width / 2, height / 2, 40, width / 2, height / 2, Math.max(width, height) * 0.72);
    grad.addColorStop(0, '#0a121b');
    grad.addColorStop(0.55, '#060a0f');
    grad.addColorStop(1, '#020406');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const starAlpha = 0.25 + (animZoom / 8) * 0.75;
    ctx.save();
    ctx.translate(width / 2, height / 2);
    stars.forEach((s) => {
      const twinkle = Math.sin(animTime * 3 * s.twinkleSpeed + s.twinkleOffset) * 0.45 + 0.55;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = starAlpha * twinkle;
      ctx.fill();
    });
    ctx.restore();
  }

  function renderScaleLayer(scaleIdx, alpha) {
    if (alpha <= 0.005) return;
    ctx.save();
    ctx.globalAlpha = alpha;

    switch (scaleIdx) {
      case 0: renderScale1_Bedroom(); break;
      case 1: renderScale2_House(); break;
      case 2: renderScale3_Neighbourhood(); break;
      case 3: renderScale4_Sector(); break;
      case 4: renderScale5_PatnaCity(); break;
      case 5: renderScale6_BiharState(); break;
      case 6: renderScale7_IndiaCountry(); break;
      case 7: renderScale8_EarthGlobe(); break;
      case 8: renderScale9_Cosmos(); break;
    }

    ctx.restore();
  }

  // =========================================================================
  // 1. MASTER BEDROOM (COMPLEX ARCHITECTURAL SUITE)
  // =========================================================================
  function renderScale1_Bedroom() {
    const dim = Math.min(width, height) * 0.62;
    const half = dim / 2;

    // Room Floor Base - Deep Charcoal Translucent
    ctx.fillStyle = 'rgba(15, 23, 32, 0.9)';
    ctx.fillRect(-half, -half, dim, dim);

    // Hardwood Floor Planks (Delicate CAD line hatching)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let y = -half + 16; y < half; y += 18) {
      ctx.beginPath();
      ctx.moveTo(-half, y);
      ctx.lineTo(half, y);
      ctx.stroke();
    }

    // Heavy Exterior Masonry Walls (South and West heavier per Vastu)
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#c8633a';
    ctx.strokeRect(-half, -half, dim, dim);

    // Thermal Mass Shadow along South and West
    ctx.fillStyle = 'rgba(200, 99, 58, 0.22)';
    ctx.fillRect(-half, half - 10, dim, 10);
    ctx.fillRect(-half, -half, 10, dim);

    // -------------------------------------------------------------
    // ZONE A: ATTACHED EN-SUITE LUXURY BATHROOM (Top-Left / NW Corner)
    // -------------------------------------------------------------
    const bathW = dim * 0.36;
    const bathH = dim * 0.32;
    const bathX = -half + 6;
    const bathY = -half + 6;

    // Semi-transparent bathroom boundary & tiles
    ctx.fillStyle = 'rgba(20, 32, 43, 0.45)';
    ctx.fillRect(bathX, bathY, bathW, bathH);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(bathX, bathY, bathW, bathH);

    // Delicate Bathroom Tiles Hatching
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
    ctx.lineWidth = 0.8;
    for (let tx = bathX + 8; tx < bathX + bathW; tx += 12) {
      ctx.beginPath();
      ctx.moveTo(tx, bathY);
      ctx.lineTo(tx, bathY + bathH);
      ctx.stroke();
    }

    // Glass Shower Enclosure (Transparent cyan)
    const showerW = bathW * 0.46;
    const showerH = bathH * 0.58;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.fillRect(bathX + 4, bathY + 4, showerW, showerH);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(bathX + 4, bathY + 4, showerW, showerH);

    // Shower Drain & Head
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.beginPath();
    ctx.arc(bathX + 10, bathY + 10, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bathX + 4 + showerW / 2, bathY + 4 + showerH / 2, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.fill();

    // Vanity Counter & Dual Sinks (Translucent)
    const vanX = bathX + showerW + 8;
    const vanY = bathY + 4;
    const vanW = bathW - showerW - 12;
    const vanH = bathH * 0.42;
    ctx.fillStyle = 'rgba(226, 217, 204, 0.12)';
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.35)';
    ctx.lineWidth = 1;
    ctx.fillRect(vanX, vanY, vanW, vanH);
    ctx.strokeRect(vanX, vanY, vanW, vanH);

    // Basins
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.beginPath();
    ctx.ellipse(vanX + vanW * 0.5, vanY + vanH * 0.5, 5, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Water Closet (WC / Toilet)
    const wcX = bathX + 8;
    const wcY = bathY + bathH - 20;
    ctx.fillStyle = 'rgba(226, 217, 204, 0.35)';
    ctx.fillRect(wcX, wcY, 12, 5); // Tank
    ctx.beginPath();
    ctx.ellipse(wcX + 6, wcY + 10, 4.5, 6, 0, 0, Math.PI * 2); // Bowl
    ctx.fill();

    // Bathroom Door Swing Arc
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(bathX + bathW, bathY + bathH, 14, Math.PI, Math.PI * 1.5);
    ctx.stroke();

    ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.font = '8px monospace';
    ctx.fillText('EN-SUITE', bathX + bathW * 0.35, bathY + bathH - 6);

    // -------------------------------------------------------------
    // ZONE B: WALK-IN WARDROBE & CLOSET (West Wall - Translucent)
    // -------------------------------------------------------------
    const clW = dim * 0.24;
    const clH = dim * 0.48;
    const clX = -half + 6;
    const clY = bathY + bathH + 8;

    ctx.fillStyle = 'rgba(16, 24, 32, 0.38)';
    ctx.fillRect(clX, clY, clW, clH);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(clX, clY, clW, clH);

    // Hanging Rails with Garment Blocks
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(clX + 12, clY + 6);
    ctx.lineTo(clX + 12, clY + clH - 6);
    ctx.stroke();

    const hangerColors = ['rgba(229, 185, 92, 0.4)', 'rgba(56, 189, 248, 0.4)', 'rgba(200, 99, 58, 0.4)', 'rgba(148, 163, 184, 0.4)', 'rgba(52, 211, 153, 0.4)'];
    for (let gy = clY + 10; gy < clY + clH - 10; gy += 8) {
      ctx.fillStyle = hangerColors[(gy % hangerColors.length)];
      ctx.fillRect(clX + 5, gy, 14, 3.5);
    }

    // Vanity Dressing Table with Mirror
    ctx.fillStyle = 'rgba(229, 185, 92, 0.35)';
    ctx.fillRect(clX + clW - 6, clY + clH * 0.3, 4, clH * 0.4);
    // Stool
    ctx.beginPath();
    ctx.arc(clX + clW - 12, clY + clH * 0.5, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(226, 217, 204, 0.35)';
    ctx.fill();

    ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.font = '7.5px monospace';
    ctx.fillText('WARDROBE', clX + 4, clY + 12);

    // -------------------------------------------------------------
    // ZONE C: SEATING LOUNGE & READING NOOK (Top-Right / North-East)
    // -------------------------------------------------------------
    const nookX = half * 0.28;
    const nookY = -half * 0.62;

    // Two Ergonomic Armchairs Angled (Translucent)
    drawArmchair(nookX - 16, nookY, 0.35);
    drawArmchair(nookX + 22, nookY + 14, -0.6);

    // Round Glass Coffee Table with Magazine
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(nookX + 4, nookY + 6, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Magazine & Teacup (Translucent)
    ctx.fillStyle = 'rgba(229, 185, 92, 0.45)';
    ctx.fillRect(nookX + 1, nookY + 3, 5, 4);
    ctx.beginPath();
    ctx.arc(nookX + 7, nookY + 5, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();

    // Biophilic Potted Plant (Translucent green)
    drawPottedPlant(half - 22, -half + 22);

    // Person B: Resting / Reading in Chair
    if (layers.activity) {
      const pBx = nookX - 16;
      const pBy = nookY;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.beginPath();
      ctx.arc(pBx, pBy, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Soft Relaxing Aura
      ctx.fillStyle = 'rgba(45, 212, 191, 0.2)';
      ctx.beginPath();
      ctx.arc(pBx, pBy, 10 + Math.sin(animTime * 2) * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // -------------------------------------------------------------
    // ZONE D: MASTER BED SANCTUARY (Aligned with South Orange Wall)
    // -------------------------------------------------------------
    // South exterior orange wall sits at [half - 10] to [half].
    // Positioning bed such that its bottom/back aligns flush at [half - 10]:
    const bedW = dim * 0.38;
    const bedH = dim * 0.42;
    const bedX = half * 0.05;
    const bedY = half - 10 - bedH; // Bed back sits directly flush against the South wall!

    // Textured Woven Carpet / Rug Under Bed (Translucent)
    const rugX = bedX - 14;
    const rugY = bedY - 10;
    const rugW = bedW + 28;
    const rugH = bedH + 10;

    ctx.fillStyle = 'rgba(30, 41, 59, 0.35)';
    ctx.fillRect(rugX, rugY, rugW, rugH);
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(rugX, rugY, rugW, rugH);

    // Subtle Carpet Stitching Texture
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.12)';
    ctx.setLineDash([3, 3]);
    ctx.strokeRect(rugX + 3, rugY + 3, rugW - 6, rugH - 6);
    ctx.setLineDash([]);

    // Bed Outer Frame (Translucent Charcoal with Golden Outline)
    ctx.fillStyle = 'rgba(20, 30, 42, 0.45)';
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.55)';
    ctx.lineWidth = 1.6;
    ctx.fillRect(bedX, bedY, bedW, bedH);
    ctx.strokeRect(bedX, bedY, bedW, bedH);

    // Cushioned Headboard on South - Aligning flush with orange wall
    ctx.fillStyle = 'rgba(200, 99, 58, 0.55)';
    ctx.fillRect(bedX, bedY + bedH - 8, bedW, 8);
    ctx.strokeStyle = 'rgba(200, 99, 58, 0.8)';
    ctx.lineWidth = 1;
    ctx.strokeRect(bedX, bedY + bedH - 8, bedW, 8);

    // Dual Pillows with Creases (Translucent)
    const pilW = bedW * 0.36;
    const pilH = bedH * 0.16;
    ctx.fillStyle = 'rgba(241, 245, 249, 0.45)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 0.8;
    ctx.fillRect(bedX + 5, bedY + bedH - 22, pilW, pilH);
    ctx.strokeRect(bedX + 5, bedY + bedH - 22, pilW, pilH);
    ctx.fillRect(bedX + bedW - pilW - 5, bedY + bedH - 22, pilW, pilH);
    ctx.strokeRect(bedX + bedW - pilW - 5, bedY + bedH - 22, pilW, pilH);

    // Quilt / Duvet folded (Translucent deep blue)
    ctx.fillStyle = 'rgba(39, 54, 71, 0.4)';
    ctx.fillRect(bedX + 3, bedY + 3, bedW - 6, bedH * 0.65);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 0.8;
    ctx.strokeRect(bedX + 3, bedY + 3, bedW - 6, bedH * 0.65);

    // Dual Bedside Nightstands & Lamps (Translucent)
    drawLamp(bedX - 10, bedY + bedH - 12, 'rgba(229, 185, 92, 0.6)');
    drawLamp(bedX + bedW + 10, bedY + bedH - 12, 'rgba(229, 185, 92, 0.6)');

    // Person A: Sleeping Occupant in Bed (Breathing bio-field & chest pulse)
    if (layers.activity) {
      const breath = Math.sin(animTime * 1.8) * 0.5 + 0.5;
      const occX = bedX + bedW * 0.5;
      const occY = bedY + bedH * 0.5;

      // Bio-Aura Expanding Pulse (Delicate)
      const auraR = 20 + breath * 8;
      const auraGrad = ctx.createRadialGradient(occX, occY, 3, occX, occY, auraR);
      auraGrad.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
      auraGrad.addColorStop(0.5, 'rgba(45, 212, 191, 0.18)');
      auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(occX, occY, auraR, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.beginPath();
      ctx.arc(occX, bedY + bedH - 16, 5.5, 0, Math.PI * 2);
      ctx.fill();

      // Torso expands with breathing
      ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.beginPath();
      ctx.roundRect(occX - 6 - breath * 1.2, occY - 12, 12 + breath * 2.4, 24, 3);
      ctx.fill();

      // Delta REM Brainwave EKG Graphic
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = -18; i <= 18; i += 2) {
        const waveY = occY - 26 + Math.sin(i * 0.4 + animTime * 3.5) * 3;
        if (i === -18) ctx.moveTo(occX + i, waveY);
        else ctx.lineTo(occX + i, waveY);
      }
      ctx.stroke();

      ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('DELTA 7.83Hz REM // BIO-ALIGNED', occX, occY - 32);
    }

    // North-East Window Opening & Circadian Dawn Rays
    const winX = half - 50;
    const winY = -half;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(winX, winY);
    ctx.lineTo(half, winY);
    ctx.stroke();

    if (layers.activity) {
      const rayGrad = ctx.createLinearGradient(half, -half, -10, 30);
      rayGrad.addColorStop(0, 'rgba(229, 185, 92, 0.25)');
      rayGrad.addColorStop(0.5, 'rgba(229, 185, 92, 0.08)');
      rayGrad.addColorStop(1, 'rgba(229, 185, 92, 0)');
      ctx.fillStyle = rayGrad;
      ctx.beginPath();
      ctx.moveTo(winX, winY);
      ctx.lineTo(half, winY + 55);
      ctx.lineTo(bedX + 8, bedY + 8);
      ctx.lineTo(bedX - 16, -10);
      ctx.closePath();
      ctx.fill();
    }

    // Dimension Annotations
    ctx.fillStyle = '#e5b95c';
    ctx.font = 'bold 11px cinzel, serif';
    ctx.textAlign = 'left';
    ctx.fillText('MASTER BEDROOM SUITE // 5.00m x 5.00m', -half + 16, half - 16);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px monospace';
    ctx.fillText('HEAD TO SOUTH // FLUSH MASONRY // 0-EMF', bedX - 10, half - 16);
  }

  function drawArmchair(x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = 'rgba(30, 41, 59, 0.4)';
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(-8, -8, 16, 16, 3);
    ctx.fill();
    ctx.stroke();
    // Armrests
    ctx.fillStyle = 'rgba(229, 185, 92, 0.4)';
    ctx.fillRect(-8, -8, 2.5, 16);
    ctx.fillRect(5.5, -8, 2.5, 16);
    ctx.restore();
  }

  function drawPottedPlant(x, y) {
    // Pot
    ctx.fillStyle = 'rgba(200, 99, 58, 0.45)';
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
    // Leaves
    ctx.fillStyle = 'rgba(52, 211, 153, 0.45)';
    for (let i = 0; i < 6; i++) {
      const lAngle = (i / 6) * Math.PI * 2;
      const lx = x + Math.cos(lAngle) * 7.5;
      const ly = y + Math.sin(lAngle) * 7.5;
      ctx.beginPath();
      ctx.arc(lx, ly, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawLamp(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    const lampGlow = ctx.createRadialGradient(x, y, 2, x, y, 14);
    lampGlow.addColorStop(0, 'rgba(229, 185, 92, 0.35)');
    lampGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = lampGlow;
    ctx.beginPath();
    ctx.arc(x, y, 14, 0, Math.PI * 2);
    ctx.fill();
  }

  // =========================================================================
  // 2. HOUSE LAYOUT (RESIDENTIAL SANCTUM WITH COMPLEX CAD ZONING)
  // =========================================================================
  function renderScale2_House() {
    const dim = Math.min(width, height) * 0.66;
    const cellW = dim / 3;
    const half = dim / 2;

    // Base Floor Slab - Deep Architectural Slate
    ctx.fillStyle = '#0c141d';
    ctx.fillRect(-half, -half, dim, dim);

    // Outer Heavy Masonry Perimeter Wall (Thick Architectural Wall with cavity)
    ctx.strokeStyle = '#c8633a';
    ctx.lineWidth = 5;
    ctx.strokeRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-half + 3, -half + 3, dim - 6, dim - 6);

    // -------------------------------------------------------------
    // 9 ARCHITECTURAL ROOMS WITH DISTINCT FLOORING & CAD FURNITURE
    // -------------------------------------------------------------

    // Room Layout Coordinates:
    // Row 0 (Top): NW Living, N Study, NE Mandir
    // Row 1 (Mid): W Dining, C Brahmasthana, E Verandah
    // Row 2 (Bot): SW Master Suite, S Bedroom 2, SE Kitchen

    // --- 1. NW: LIVING LOUNGE (Samvaad / Air Element) ---
    const nwX = -half, nwY = -half;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.fillRect(nwX + 4, nwY + 4, cellW - 6, cellW - 6);
    // Hardwood plank flooring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 0.8;
    for (let py = nwY + 8; py < nwY + cellW - 6; py += 10) {
      ctx.beginPath();
      ctx.moveTo(nwX + 4, py);
      ctx.lineTo(nwX + cellW - 2, py);
      ctx.stroke();
    }
    // L-Shaped Sectional Sofa
    ctx.fillStyle = 'rgba(45, 65, 88, 0.65)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.lineWidth = 1;
    // Sofa Horizontal Back & Cushion
    ctx.fillRect(nwX + 12, nwY + 12, cellW * 0.55, 14);
    ctx.strokeRect(nwX + 12, nwY + 12, cellW * 0.55, 14);
    // Sofa L-Return on West wall
    ctx.fillRect(nwX + 12, nwY + 26, 14, cellW * 0.4);
    ctx.strokeRect(nwX + 12, nwY + 26, 14, cellW * 0.4);
    // Coffee Table in front of sofa
    ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(nwX + 32, nwY + 32, 22, 14);
    ctx.strokeRect(nwX + 32, nwY + 32, 22, 14);
    // TV Media Credenza on East partition
    ctx.fillStyle = 'rgba(226, 217, 204, 0.35)';
    ctx.fillRect(nwX + cellW - 14, nwY + 16, 6, cellW * 0.48);
    // Living Room Rug
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.25)';
    ctx.setLineDash([2, 2]);
    ctx.strokeRect(nwX + 28, nwY + 26, 32, 26);
    ctx.setLineDash([]);

    // --- 2. N: EXECUTIVE STUDY / HOME OFFICE (Kubera / Wealth) ---
    const nX = -half + cellW, nY = -half;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.05)';
    ctx.fillRect(nX + 2, nY + 4, cellW - 4, cellW - 6);
    // Executive Work Desk
    ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.5)';
    ctx.lineWidth = 1;
    ctx.fillRect(nX + 16, nY + 16, cellW - 32, 16);
    ctx.strokeRect(nX + 16, nY + 16, cellW - 32, 16);
    // Dual Monitors on Desk
    ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.fillRect(nX + cellW * 0.35, nY + 18, 12, 3);
    ctx.fillRect(nX + cellW * 0.52, nY + 18, 12, 3);
    // Ergonomic Executive Chair
    ctx.beginPath();
    ctx.arc(nX + cellW * 0.5, nY + 40, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(229, 185, 92, 0.6)';
    ctx.fill();
    // Pair of Guest Chairs
    ctx.beginPath();
    ctx.arc(nX + cellW * 0.32, nY + 8, 4.5, 0, Math.PI * 2);
    ctx.arc(nX + cellW * 0.68, nY + 8, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.fill();
    // Bookshelf along North wall
    ctx.fillStyle = 'rgba(200, 99, 58, 0.35)';
    ctx.fillRect(nX + 12, nY + 5, cellW - 24, 4);

    // --- 3. NE: MANDIR SANCTUARY (Ishanya / Water & Sacred Mind) ---
    const neX = -half + cellW * 2, neY = -half;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(neX + 2, neY + 4, cellW - 6, cellW - 6);
    // Marble floor subtle crosshatch
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 0.8;
    for (let my = neY + 10; my < neY + cellW - 6; my += 12) {
      ctx.beginPath();
      ctx.moveTo(neX + 4, my);
      ctx.lineTo(neX + cellW - 4, my);
      ctx.stroke();
    }
    // Elevated Altar Shrine / Mandir Sanctum in NE corner
    const altarW = cellW * 0.44;
    const altarH = cellW * 0.38;
    ctx.fillStyle = 'rgba(229, 185, 92, 0.45)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.fillRect(neX + cellW - altarW - 8, neY + 8, altarW, altarH);
    ctx.strokeRect(neX + cellW - altarW - 8, neY + 8, altarW, altarH);
    // Diya oil lamp flame in altar
    const diyaX = neX + cellW - 8 - altarW * 0.5;
    const diyaY = neY + 8 + altarH * 0.5;
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(diyaX, diyaY, 3, 0, Math.PI * 2);
    ctx.fill();
    const diyaGlow = ctx.createRadialGradient(diyaX, diyaY, 1, diyaX, diyaY, 14);
    diyaGlow.addColorStop(0, 'rgba(245, 158, 11, 0.6)');
    diyaGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = diyaGlow;
    ctx.beginPath();
    ctx.arc(diyaX, diyaY, 14, 0, Math.PI * 2);
    ctx.fill();
    // Meditating figure in center of room
    const yogiX = neX + cellW * 0.38;
    const yogiY = neY + cellW * 0.62;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(yogiX, yogiY, 4.5, 0, Math.PI * 2);
    ctx.fill();
    // Meditating Aura (Gentle breathing pulse)
    const yAura = 12 + Math.sin(animTime * 2.5) * 3;
    const yGrad = ctx.createRadialGradient(yogiX, yogiY, 2, yogiX, yogiY, yAura);
    yGrad.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
    yGrad.addColorStop(0.6, 'rgba(45, 212, 191, 0.2)');
    yGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = yGrad;
    ctx.beginPath();
    ctx.arc(yogiX, yogiY, yAura, 0, Math.PI * 2);
    ctx.fill();

    // --- 4. W: FORMAL DINING HALL (Varuna / Nourishment) ---
    const wX = -half, wY = -half + cellW;
    ctx.fillStyle = 'rgba(226, 217, 204, 0.06)';
    ctx.fillRect(wX + 4, wY + 2, cellW - 6, cellW - 4);
    // 6-Seater Formal Dining Table
    const dTabW = cellW * 0.48;
    const dTabH = cellW * 0.28;
    const dTabX = wX + (cellW - dTabW) / 2;
    const dTabY = wY + (cellW - dTabH) / 2;
    ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.5)';
    ctx.lineWidth = 1.2;
    ctx.fillRect(dTabX, dTabY, dTabW, dTabH);
    ctx.strokeRect(dTabX, dTabY, dTabW, dTabH);
    // Table Runner
    ctx.fillStyle = 'rgba(229, 185, 92, 0.3)';
    ctx.fillRect(dTabX + 4, dTabY + dTabH * 0.3, dTabW - 8, dTabH * 0.4);
    // 6 Chairs
    ctx.fillStyle = 'rgba(226, 217, 204, 0.45)';
    for (let i = 0; i < 3; i++) {
      const cxPos = dTabX + (i + 0.5) * (dTabW / 3);
      // Top chairs
      ctx.fillRect(cxPos - 4, dTabY - 5, 8, 4);
      // Bottom chairs
      ctx.fillRect(cxPos - 4, dTabY + dTabH + 1, 8, 4);
    }
    // Buffet Sideboard Credenza along West wall
    ctx.fillStyle = 'rgba(200, 99, 58, 0.3)';
    ctx.fillRect(wX + 5, wY + 12, 6, cellW - 24);

    // --- 5. CENTER: BRAHMASTHANA (Open Sky Courtyard Lungs) ---
    const cX = -half + cellW, cY = -half + cellW;
    // Stepped Marble Courtyard Floor
    ctx.fillStyle = 'rgba(229, 185, 92, 0.12)';
    ctx.fillRect(cX + 2, cY + 2, cellW - 4, cellW - 4);
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(cX + 6, cY + 6, cellW - 12, cellW - 12);
    // Stepped Recessed Water Kund Pool
    const kundDim = cellW * 0.52;
    const kundX = -kundDim / 2;
    const kundY = -kundDim / 2;
    ctx.fillStyle = 'rgba(2, 132, 199, 0.35)';
    ctx.fillRect(kundX, kundY, kundDim, kundDim);
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.6)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(kundX, kundY, kundDim, kundDim);
    // Central Fountain & Water Ripples
    if (layers.activity) {
      const r1 = 6 + (animTime * 14) % 24;
      const r2 = 6 + ((animTime * 14) + 12) % 24;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, r1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r2, 0, Math.PI * 2);
      ctx.stroke();
      // Bubbler Jet Core
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    // Potted palms in 4 corners of courtyard
    drawPottedPlant(cX + 12, cY + 12);
    drawPottedPlant(cX + cellW - 12, cY + 12);
    drawPottedPlant(cX + 12, cY + cellW - 12);
    drawPottedPlant(cX + cellW - 12, cY + cellW - 12);

    // --- 6. E: SUNRISE VERANDAH & SOLAR SOLARIUM (Surya / Vitality) ---
    const eX = -half + cellW * 2, eY = -half + cellW;
    ctx.fillStyle = 'rgba(229, 185, 92, 0.08)';
    ctx.fillRect(eX + 2, eY + 2, cellW - 6, cellW - 4);
    // Teak Wood Decking Slats (Vertical planks)
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.12)';
    ctx.lineWidth = 0.8;
    for (let px = eX + 8; px < eX + cellW - 6; px += 8) {
      ctx.beginPath();
      ctx.moveTo(px, eY + 4);
      ctx.lineTo(px, eY + cellW - 4);
      ctx.stroke();
    }
    // Pair of Outdoor Rattan Armchairs & Table
    drawArmchair(eX + cellW * 0.45, eY + cellW * 0.32, 0.4);
    drawArmchair(eX + cellW * 0.45, eY + cellW * 0.68, -0.4);
    // Small Round Table
    ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.beginPath();
    ctx.arc(eX + cellW * 0.45, eY + cellW * 0.5, 7, 0, Math.PI * 2);
    ctx.fill();
    // East-facing Planter boxes along window
    ctx.fillStyle = 'rgba(52, 211, 153, 0.35)';
    ctx.fillRect(eX + cellW - 10, eY + 10, 5, cellW - 20);

    // --- 7. SW: MASTER BEDROOM SUITE (Nairutya / Earth Grounding) ---
    const swX = -half, swY = -half + cellW * 2;
    ctx.fillStyle = 'rgba(200, 99, 58, 0.16)';
    ctx.fillRect(swX + 4, swY + 2, cellW - 6, cellW - 6);
    // King Bed with headboard against South wall
    const mbW = cellW * 0.48;
    const mbH = cellW * 0.52;
    const mbX = swX + 16;
    const mbY = swY + cellW - mbH - 6;
    ctx.fillStyle = 'rgba(20, 30, 42, 0.6)';
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.55)';
    ctx.lineWidth = 1.2;
    ctx.fillRect(mbX, mbY, mbW, mbH);
    ctx.strokeRect(mbX, mbY, mbW, mbH);
    // Headboard on South
    ctx.fillStyle = 'rgba(200, 99, 58, 0.6)';
    ctx.fillRect(mbX, mbY + mbH - 6, mbW, 6);
    // Dual Pillows
    ctx.fillStyle = 'rgba(241, 245, 249, 0.5)';
    ctx.fillRect(mbX + 4, mbY + mbH - 16, mbW * 0.4, 8);
    ctx.fillRect(mbX + mbW * 0.55, mbY + mbH - 16, mbW * 0.4, 8);
    // Bedside Nightstands
    ctx.fillStyle = 'rgba(229, 185, 92, 0.5)';
    ctx.fillRect(mbX - 6, mbY + mbH - 12, 5, 8);
    ctx.fillRect(mbX + mbW + 1, mbY + mbH - 12, 5, 8);
    // Wardrobe along West wall
    ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
    ctx.fillRect(swX + 5, swY + 8, 6, cellW * 0.45);

    // --- 8. S: BEDROOM 02 / MULTI-PURPOSE SUITE (Yama / Rest) ---
    const sX = -half + cellW, sY = -half + cellW * 2;
    ctx.fillStyle = 'rgba(200, 99, 58, 0.1)';
    ctx.fillRect(sX + 2, sY + 2, cellW - 4, cellW - 6);
    // Queen Bed against South wall
    const b2W = cellW * 0.42;
    const b2H = cellW * 0.48;
    const b2X = sX + (cellW - b2W) / 2;
    const b2Y = sY + cellW - b2H - 6;
    ctx.fillStyle = 'rgba(20, 30, 42, 0.55)';
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.45)';
    ctx.lineWidth = 1;
    ctx.fillRect(b2X, b2Y, b2W, b2H);
    ctx.strokeRect(b2X, b2Y, b2W, b2H);
    // Study desk on corner
    ctx.fillStyle = 'rgba(229, 185, 92, 0.35)';
    ctx.fillRect(sX + 8, sY + 8, 18, 10);

    // --- 9. SE: CULINARY MODULAR KITCHEN (Agneya / Sacred Fire) ---
    const seX = -half + cellW * 2, seY = -half + cellW * 2;
    ctx.fillStyle = 'rgba(200, 99, 58, 0.22)';
    ctx.fillRect(seX + 2, seY + 2, cellW - 6, cellW - 6);
    // Kitchen Floor Tile Hatching
    ctx.strokeStyle = 'rgba(200, 99, 58, 0.15)';
    ctx.lineWidth = 0.8;
    for (let kx = seX + 8; kx < seX + cellW - 6; kx += 12) {
      ctx.beginPath();
      ctx.moveTo(kx, seY + 4);
      ctx.lineTo(kx, seY + cellW - 6);
      ctx.stroke();
    }
    // L-Shaped Granite Countertop along East and South walls
    ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
    ctx.strokeStyle = 'rgba(200, 99, 58, 0.6)';
    ctx.lineWidth = 1.2;
    // East counter
    ctx.fillRect(seX + cellW - 18, seY + 8, 12, cellW - 16);
    ctx.strokeRect(seX + cellW - 18, seY + 8, 12, cellW - 16);
    // South counter return
    ctx.fillRect(seX + 10, seY + cellW - 18, cellW - 20, 12);
    ctx.strokeRect(seX + 10, seY + cellW - 18, cellW - 20, 12);
    // 4-Burner Gas Cooktop / Hob in SE corner
    const cookX = seX + cellW - 16;
    const cookY = seY + cellW - 16;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cookX - 10, cookY - 10, 18, 14);
    // Animated Stove Burner Flame Glow
    if (layers.activity) {
      const fGlow = 10 + Math.sin(animTime * 6) * 3.5;
      const fGrad = ctx.createRadialGradient(cookX - 1, cookY - 3, 1, cookX - 1, cookY - 3, fGlow);
      fGrad.addColorStop(0, 'rgba(239, 68, 68, 0.9)');
      fGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.45)');
      fGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = fGrad;
      ctx.beginPath();
      ctx.arc(cookX - 1, cookY - 3, fGlow, 0, Math.PI * 2);
      ctx.fill();
    }
    // Dual Basin Sink with Chrome Faucet on East counter
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.fillRect(seX + cellW - 16, seY + 16, 8, 14);
    // Refrigerator Block
    ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.fillRect(seX + 8, seY + 8, 14, 14);

    // -------------------------------------------------------------
    // DOUBLE-LINE INTERNAL PARTITION WALLS & DOOR OPENINGS WITH SWINGS
    // -------------------------------------------------------------
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.5)';
    ctx.lineWidth = 2.5;

    // Vertical Partition 1 (Between West & Center columns)
    const vp1X = -half + cellW;
    ctx.beginPath();
    ctx.moveTo(vp1X, -half);
    ctx.lineTo(vp1X, -half + cellW * 0.35); // top segment
    ctx.moveTo(vp1X, -half + cellW * 0.65);
    ctx.lineTo(vp1X, half - cellW * 0.65);  // mid segment
    ctx.moveTo(vp1X, half - cellW * 0.35);
    ctx.lineTo(vp1X, half);                // bot segment
    ctx.stroke();

    // Vertical Partition 2 (Between Center & East columns)
    const vp2X = -half + cellW * 2;
    ctx.beginPath();
    ctx.moveTo(vp2X, -half);
    ctx.lineTo(vp2X, -half + cellW * 0.35);
    ctx.moveTo(vp2X, -half + cellW * 0.65);
    ctx.lineTo(vp2X, half - cellW * 0.65);
    ctx.moveTo(vp2X, half - cellW * 0.35);
    ctx.lineTo(vp2X, half);
    ctx.stroke();

    // Horizontal Partition 1 (Between Top & Center rows)
    const hp1Y = -half + cellW;
    ctx.beginPath();
    ctx.moveTo(-half, hp1Y);
    ctx.lineTo(-half + cellW * 0.35, hp1Y);
    ctx.moveTo(-half + cellW * 0.65, hp1Y);
    ctx.lineTo(half - cellW * 0.65, hp1Y);
    ctx.moveTo(half - cellW * 0.35, hp1Y);
    ctx.lineTo(half, hp1Y);
    ctx.stroke();

    // Horizontal Partition 2 (Between Center & Bottom rows)
    const hp2Y = -half + cellW * 2;
    ctx.beginPath();
    ctx.moveTo(-half, hp2Y);
    ctx.lineTo(-half + cellW * 0.35, hp2Y);
    ctx.moveTo(-half + cellW * 0.65, hp2Y);
    ctx.lineTo(half - cellW * 0.65, hp2Y);
    ctx.moveTo(half - cellW * 0.35, hp2Y);
    ctx.lineTo(half, hp2Y);
    ctx.stroke();

    // Door Swing Arcs (Delicate architectural 90-degree swings)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 0.8;
    // Door 1: NW Living to Center
    ctx.beginPath();
    ctx.arc(vp1X, -half + cellW * 0.35, 12, Math.PI * 0.5, Math.PI);
    ctx.stroke();
    // Door 2: NE Mandir to Center
    ctx.beginPath();
    ctx.arc(vp2X, -half + cellW * 0.35, 12, 0, Math.PI * 0.5);
    ctx.stroke();
    // Door 3: SW Master to Center
    ctx.beginPath();
    ctx.arc(vp1X, half - cellW * 0.35, 12, Math.PI, Math.PI * 1.5);
    ctx.stroke();
    // Door 4: SE Kitchen to Center
    ctx.beginPath();
    ctx.arc(vp2X, half - cellW * 0.35, 12, Math.PI * 1.5, Math.PI * 2);
    ctx.stroke();

    // -------------------------------------------------------------
    // ROOM TITLES & ARCHITECTURAL LABELS
    // -------------------------------------------------------------
    const roomLabels = [
      { name: 'LIVING LOUNGE', sub: 'NW // Vayavya (Air)', x: nwX + cellW / 2, y: nwY + cellW - 10 },
      { name: 'EXECUTIVE STUDY', sub: 'N // Kubera (Wealth)', x: nX + cellW / 2, y: nY + cellW - 10 },
      { name: 'MANDIR SANCTUARY', sub: 'NE // Ishanya (Water)', x: neX + cellW / 2, y: neY + cellW - 10 },
      { name: 'DINING HALL', sub: 'W // Varuna (Nourish)', x: wX + cellW / 2, y: wY + cellW - 10 },
      { name: 'BRAHMASTHANA', sub: 'OPEN COURTYARD LUNG', x: 0, y: cellW * 0.36 },
      { name: 'SUNRISE VERANDAH', sub: 'E // Surya (Solar)', x: eX + cellW / 2, y: eY + cellW - 10 },
      { name: 'MASTER SUITE', sub: 'SW // Nairutya (Earth)', x: swX + cellW / 2, y: swY + 14 },
      { name: 'BEDROOM 02', sub: 'S // Yama (Rest)', x: sX + cellW / 2, y: sY + 14 },
      { name: 'CULINARY KITCHEN', sub: 'SE // Agneya (Fire)', x: seX + cellW / 2, y: seY + 14 }
    ];

    roomLabels.forEach((rl) => {
      ctx.fillStyle = 'rgba(6, 11, 16, 0.75)';
      ctx.fillRect(rl.x - 44, rl.y - 8, 88, 18);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.25)';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(rl.x - 44, rl.y - 8, 88, 18);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 7.5px cinzel, serif';
      ctx.textAlign = 'center';
      ctx.fillText(rl.name, rl.x, rl.y);

      ctx.fillStyle = '#e5b95c';
      ctx.font = '6.5px monospace';
      ctx.fillText(rl.sub, rl.x, rl.y + 7);
    });

    // -------------------------------------------------------------
    // FAMILY WALKERS CIRCULATING BETWEEN ROOMS
    // -------------------------------------------------------------
    if (layers.activity) {
      houseWalkers.forEach((hw, idx) => {
        const progress = Math.sin(animTime * hw.speed + idx * 1.6) * 0.5 + 0.5;
        const curX = lerp(hw.x, hw.targetX, progress);
        const curY = lerp(hw.y, hw.targetY, progress);

        ctx.beginPath();
        ctx.arc(curX, curY, 4, 0, Math.PI * 2);
        ctx.fillStyle = hw.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(curX, curY, 8, 0, Math.PI * 2);
        ctx.strokeStyle = hw.color;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.4;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Trace Trail
        ctx.strokeStyle = hw.color;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(hw.x, hw.y);
        ctx.lineTo(hw.targetX, hw.targetY);
        ctx.globalAlpha = 0.2;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1.0;
      });
    }

    ctx.fillStyle = '#e5b95c';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('9-ZONE BIOCLIMATIC RESIDENTIAL SANCTUM // 25m x 25m CAD REALISM', -half + 8, half + 18);
  }

  // =========================================================================
  // 3. NEIGHBOURHOOD MASTERPLAN (ENRICHED FABRIC & COMMUNITY COMMONS)
  // =========================================================================
  function renderScale3_Neighbourhood() {
    const dim = Math.min(width, height) * 0.68;
    const half = dim / 2;
    const parcelW = dim / 3.35;
    const offsetDist = dim * 0.33;

    // Base Landscape Fabric
    ctx.fillStyle = 'rgba(6, 20, 16, 0.94)';
    ctx.fillRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-half, -half, dim, dim);

    // Peripheral Access Road Loop (Curving Asphalt Loop with Lane Markings)
    ctx.strokeStyle = 'rgba(30, 41, 59, 0.8)';
    ctx.lineWidth = 20;
    ctx.strokeRect(-half + 16, -half + 16, dim - 32, dim - 32);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.strokeRect(-half + 16, -half + 16, dim - 32, dim - 32);
    ctx.setLineDash([]);

    // -------------------------------------------------------------
    // 8 DISTINCT VILLA PARCELS + 1 CENTRAL BIOPHILIC COMMONS
    // -------------------------------------------------------------

    // Helper to draw parcel base boundary
    function drawParcelPlot(px, py, title, code) {
      ctx.fillStyle = 'rgba(18, 28, 38, 0.9)';
      ctx.fillRect(px - parcelW / 2, py - parcelW / 2, parcelW, parcelW);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px - parcelW / 2, py - parcelW / 2, parcelW, parcelW);

      // Boundary plot code
      ctx.fillStyle = 'rgba(229, 185, 92, 0.7)';
      ctx.font = '7px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(code, px - parcelW / 2 + 4, py - parcelW / 2 + 10);
    }

    // 1. NW PARCEL: L-SHAPED CONTEMPORARY VILLA WITH PLUNGE POOL
    const p1X = -offsetDist, p1Y = -offsetDist;
    drawParcelPlot(p1X, p1Y, 'NW Villa', 'PLOT 01 // NW');
    // L-Shaped Building Footprint
    ctx.fillStyle = 'rgba(45, 65, 85, 0.85)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(p1X - parcelW * 0.4, p1Y - parcelW * 0.4);
    ctx.lineTo(p1X + parcelW * 0.35, p1Y - parcelW * 0.4);
    ctx.lineTo(p1X + parcelW * 0.35, p1Y - parcelW * 0.05);
    ctx.lineTo(p1X - parcelW * 0.05, p1Y - parcelW * 0.05);
    ctx.lineTo(p1X - parcelW * 0.05, p1Y + parcelW * 0.35);
    ctx.lineTo(p1X - parcelW * 0.4, p1Y + parcelW * 0.35);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Turquoise Private Plunge Pool
    ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.fillRect(p1X + 4, p1Y + 6, parcelW * 0.36, parcelW * 0.22);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(p1X + 4, p1Y + 6, parcelW * 0.36, parcelW * 0.22);
    // Timber Pool Deck
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.3)';
    ctx.lineWidth = 0.8;
    for (let lx = p1X + 6; lx < p1X + parcelW * 0.38; lx += 4) {
      ctx.beginPath();
      ctx.moveTo(lx, p1Y + 2);
      ctx.lineTo(lx, p1Y + 6);
      ctx.stroke();
    }
    // Pergola shade
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(p1X - parcelW * 0.35, p1Y - parcelW * 0.35, 14, 14);

    // 2. N PARCEL: STEPPED CUBIC VILLA WITH ROOFTOP LAWN GARDEN
    const p2X = 0, p2Y = -offsetDist;
    drawParcelPlot(p2X, p2Y, 'N Villa', 'PLOT 02 // N');
    // Multi-tier Stepped Cubic Villa
    ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.fillRect(p2X - parcelW * 0.35, p2Y - parcelW * 0.3, parcelW * 0.7, parcelW * 0.42);
    ctx.strokeRect(p2X - parcelW * 0.35, p2Y - parcelW * 0.3, parcelW * 0.7, parcelW * 0.42);
    // Green Rooftop Garden Terrace
    ctx.fillStyle = 'rgba(52, 211, 153, 0.45)';
    ctx.fillRect(p2X - parcelW * 0.25, p2Y - parcelW * 0.24, parcelW * 0.5, parcelW * 0.2);
    // Skylight Glass Dome
    ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.beginPath();
    ctx.arc(p2X, p2Y - parcelW * 0.14, 5, 0, Math.PI * 2);
    ctx.fill();
    // Circular Front Entry Driveway with fountain
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(p2X, p2Y + parcelW * 0.24, 10, 0, Math.PI * 2);
    ctx.stroke();
    drawPottedPlant(p2X - 12, p2Y + parcelW * 0.24);
    drawPottedPlant(p2X + 12, p2Y + parcelW * 0.24);

    // 3. NE PARCEL: ISHANYA WATER PAVILION VILLA (CLAY TILE HIP ROOF)
    const p3X = offsetDist, p3Y = -offsetDist;
    drawParcelPlot(p3X, p3Y, 'NE Villa', 'PLOT 03 // NE');
    // Pitched Hip Roof with Terracotta Hue
    ctx.fillStyle = 'rgba(180, 83, 9, 0.6)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(p3X, p3Y - parcelW * 0.38);
    ctx.lineTo(p3X + parcelW * 0.36, p3Y - parcelW * 0.1);
    ctx.lineTo(p3X, p3Y + parcelW * 0.18);
    ctx.lineTo(p3X - parcelW * 0.36, p3Y - parcelW * 0.1);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Ridge lines
    ctx.beginPath();
    ctx.moveTo(p3X, p3Y - parcelW * 0.38);
    ctx.lineTo(p3X, p3Y + parcelW * 0.18);
    ctx.moveTo(p3X - parcelW * 0.36, p3Y - parcelW * 0.1);
    ctx.lineTo(p3X + parcelW * 0.36, p3Y - parcelW * 0.1);
    ctx.stroke();
    // Private Koi Pond in North-East corner of plot
    ctx.fillStyle = 'rgba(2, 132, 199, 0.65)';
    ctx.beginPath();
    ctx.arc(p3X + parcelW * 0.26, p3Y - parcelW * 0.24, 9, 0, Math.PI * 2);
    ctx.fill();
    // Small Pagoda Gazebo
    ctx.fillStyle = '#e5b95c';
    ctx.fillRect(p3X + parcelW * 0.16, p3Y + parcelW * 0.2, 10, 10);
    // Bamboo boundary windbreak
    for (let b = 0; b < 5; b++) {
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(p3X + parcelW * 0.4 - b * 5, p3Y - parcelW * 0.4 + 4, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. E PARCEL: SURYA SOLAR GLASS PAVILION (HIGH SOLAR GAIN)
    const p4X = offsetDist, p4Y = 0;
    drawParcelPlot(p4X, p4Y, 'E Villa', 'PLOT 04 // E');
    // Linear Open-Plan Glass Pavilion
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.fillRect(p4X - parcelW * 0.38, p4Y - parcelW * 0.28, parcelW * 0.52, parcelW * 0.56);
    ctx.strokeRect(p4X - parcelW * 0.38, p4Y - parcelW * 0.28, parcelW * 0.52, parcelW * 0.56);
    // High-Efficiency Solar PV Rooftop Array (Blue Grid)
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.fillRect(p4X - parcelW * 0.32, p4Y - parcelW * 0.22, parcelW * 0.4, parcelW * 0.26);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 0.8;
    ctx.strokeRect(p4X - parcelW * 0.32, p4Y - parcelW * 0.22, parcelW * 0.4, parcelW * 0.26);
    // Timber morning sun louver trellis
    ctx.fillStyle = 'rgba(229, 185, 92, 0.35)';
    ctx.fillRect(p4X + parcelW * 0.18, p4Y - parcelW * 0.24, 6, parcelW * 0.48);
    // Outdoor dining terrace with parasol
    ctx.beginPath();
    ctx.arc(p4X + parcelW * 0.25, p4Y + parcelW * 0.22, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.fill();

    // 5. SE PARCEL: AGNEYA MICRO-GRID ECO-VILLA
    const p5X = offsetDist, p5Y = offsetDist;
    drawParcelPlot(p5X, p5Y, 'SE Villa', 'PLOT 05 // SE');
    // Angled Solar Architecture Footprint
    ctx.fillStyle = 'rgba(40, 30, 45, 0.85)';
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(p5X - parcelW * 0.35, p5Y - parcelW * 0.3);
    ctx.lineTo(p5X + parcelW * 0.25, p5Y - parcelW * 0.3);
    ctx.lineTo(p5X + parcelW * 0.35, p5Y + parcelW * 0.15);
    ctx.lineTo(p5X - parcelW * 0.25, p5Y + parcelW * 0.32);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Community Microgrid Battery Storage Node (BATT 25kWh)
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(p5X - parcelW * 0.4, p5Y + parcelW * 0.16, 12, 10);
    ctx.fillStyle = '#ffffff';
    ctx.font = '6px monospace';
    ctx.fillText('BATT', p5X - parcelW * 0.4 + 1, p5Y + parcelW * 0.16 + 7);
    // Outdoor Fire-Pit Hearth Terrace
    ctx.fillStyle = 'rgba(239, 68, 68, 0.5)';
    ctx.beginPath();
    ctx.arc(p5X + parcelW * 0.2, p5Y - parcelW * 0.15, 6, 0, Math.PI * 2);
    ctx.fill();
    // EV Fast Charger & Parked Vehicle
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(p5X - parcelW * 0.35, p5Y - parcelW * 0.42, 8, 12);

    // 6. S PARCEL: TRADITIONAL COURTYARD ATRIUM BUNGALOW
    const p6X = 0, p6Y = offsetDist;
    drawParcelPlot(p6X, p6Y, 'S Villa', 'PLOT 06 // S');
    // Square Villa with Central Internal Open Atrium
    ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.fillRect(p6X - parcelW * 0.36, p6Y - parcelW * 0.34, parcelW * 0.72, parcelW * 0.68);
    ctx.strokeRect(p6X - parcelW * 0.36, p6Y - parcelW * 0.34, parcelW * 0.72, parcelW * 0.68);
    // Central Internal Sky Atrium Cutout
    ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
    ctx.fillRect(p6X - 8, p6Y - 8, 16, 16);
    ctx.strokeStyle = '#34d399';
    ctx.strokeRect(p6X - 8, p6Y - 8, 16, 16);
    // Wraparound Verandah Colonnade
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.3)';
    ctx.strokeRect(p6X - parcelW * 0.32, p6Y - parcelW * 0.3, parcelW * 0.64, parcelW * 0.6);
    // Driveway with Cobblestone Paving
    ctx.fillStyle = 'rgba(229, 185, 92, 0.25)';
    ctx.fillRect(p6X - 6, p6Y + parcelW * 0.34, 12, parcelW * 0.16);

    // 7. SW PARCEL: NAIRUTYA HEAVY STONE MONOLITH FORTRESS VILLA
    const p7X = -offsetDist, p7Y = offsetDist;
    drawParcelPlot(p7X, p7Y, 'SW Villa', 'PLOT 07 // SW');
    // Massive Sandstone Monolithic Footprint (High thermal mass)
    ctx.fillStyle = 'rgba(45, 35, 30, 0.9)';
    ctx.strokeStyle = '#c8633a';
    ctx.lineWidth = 1.8;
    ctx.fillRect(p7X - parcelW * 0.38, p7Y - parcelW * 0.36, parcelW * 0.58, parcelW * 0.6);
    ctx.strokeRect(p7X - parcelW * 0.38, p7Y - parcelW * 0.36, parcelW * 0.58, parcelW * 0.6);
    // Private Swimming Pool with Sun Loungers
    ctx.fillStyle = 'rgba(2, 132, 199, 0.55)';
    ctx.fillRect(p7X + parcelW * 0.08, p7Y - parcelW * 0.2, parcelW * 0.34, parcelW * 0.44);
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(p7X + parcelW * 0.08, p7Y - parcelW * 0.2, parcelW * 0.34, parcelW * 0.44);
    // Thick Stone Privacy Boundary
    ctx.strokeStyle = '#c8633a';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(p7X - parcelW * 0.42, p7Y - parcelW * 0.42, parcelW * 0.84, parcelW * 0.84);
    // Large Neem Shade Canopy
    ctx.fillStyle = 'rgba(34, 197, 94, 0.45)';
    ctx.beginPath();
    ctx.arc(p7X - parcelW * 0.26, p7Y + parcelW * 0.26, 9, 0, Math.PI * 2);
    ctx.fill();

    // 8. W PARCEL: VARUNA U-SHAPED FOUNTAIN VILLA
    const p8X = -offsetDist, p8Y = 0;
    drawParcelPlot(p8X, p8Y, 'W Villa', 'PLOT 08 // W');
    // U-Shaped Footprint embracing courtyard
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(p8X - parcelW * 0.36, p8Y - parcelW * 0.32);
    ctx.lineTo(p8X + parcelW * 0.32, p8Y - parcelW * 0.32);
    ctx.lineTo(p8X + parcelW * 0.32, p8Y - parcelW * 0.08);
    ctx.lineTo(p8X - parcelW * 0.05, p8Y - parcelW * 0.08);
    ctx.lineTo(p8X - parcelW * 0.05, p8Y + parcelW * 0.08);
    ctx.lineTo(p8X + parcelW * 0.32, p8Y + parcelW * 0.08);
    ctx.lineTo(p8X + parcelW * 0.32, p8Y + parcelW * 0.32);
    ctx.lineTo(p8X - parcelW * 0.36, p8Y + parcelW * 0.32);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Central Courtyard Water Fountain
    ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.beginPath();
    ctx.arc(p8X + parcelW * 0.14, p8Y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();

    // -------------------------------------------------------------
    // CENTER: SHARED BIOPHILIC COMMONS PARK (Water, Pavilion & Paths)
    // -------------------------------------------------------------
    ctx.fillStyle = 'rgba(16, 185, 129, 0.24)';
    ctx.fillRect(-parcelW / 2, -parcelW / 2, parcelW, parcelW);
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-parcelW / 2, -parcelW / 2, parcelW, parcelW);

    // Winding Organic Pedestrian Walking Loop
    ctx.strokeStyle = 'rgba(226, 217, 204, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, parcelW * 0.38, 0, Math.PI * 2);
    ctx.stroke();

    // Central Stepped Rainwater Bio-Retention Pond
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(parcelW * 0.12, -parcelW * 0.12, parcelW * 0.22, 0, Math.PI * 2);
    ctx.fill();

    // Stepping Stones
    ctx.fillStyle = '#e2d9cc';
    for (let s = -2; s <= 2; s++) {
      ctx.beginPath();
      ctx.arc(parcelW * 0.12 + s * 6, -parcelW * 0.12, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Community Pavilion Gazebo
    ctx.fillStyle = '#e5b95c';
    ctx.fillRect(-parcelW * 0.28, parcelW * 0.12, 16, 16);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.strokeRect(-parcelW * 0.28, parcelW * 0.12, 16, 16);

    // Children's Playground Swing Set
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-parcelW * 0.28, -parcelW * 0.28);
    ctx.lineTo(-parcelW * 0.12, -parcelW * 0.28);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 8px cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('COMMONS PARK', 0, parcelW * 0.42);

    // -------------------------------------------------------------
    // DYNAMIC PEDESTRIANS, CYCLISTS & SWAYING TREES
    // -------------------------------------------------------------
    if (layers.activity) {
      hoodWalkers.forEach((hw) => {
        hw.angle += hw.speed * hw.dir;
        const px = Math.cos(hw.angle) * hw.radius;
        const py = Math.sin(hw.angle) * hw.radius;

        ctx.beginPath();
        ctx.arc(px, py, hw.isCyclist ? 4.5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = hw.color;
        ctx.fill();

        if (hw.isCyclist) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Swaying Green Tree Canopies
      for (let i = 0; i < 20; i++) {
        const tAngle = (i / 20) * Math.PI * 2;
        const tDist = half * 0.86;
        const tx = Math.cos(tAngle) * tDist;
        const ty = Math.sin(tAngle) * tDist;
        ctx.fillStyle = 'rgba(52, 211, 153, 0.45)';
        ctx.beginPath();
        ctx.arc(tx, ty, 8 + Math.sin(animTime + i) * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pond Ripples
      const pR = 8 + (animTime * 14) % 24;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(parcelW * 0.12, -parcelW * 0.12, pR, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = '#34d399';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('NEIGHBOURHOOD MASTERPLAN // 150m x 150m // 8 DISTINCT VILLAS + COMMONS', -half + 8, half + 18);
  }

  // =========================================================================
  // 4. BLOCK / SECTOR MASTERPLAN (DYNAMIC URBAN SECTOR)
  // =========================================================================
  function renderScale4_Sector() {
    const dim = Math.min(width, height) * 0.7;
    const half = dim / 2;

    ctx.fillStyle = '#080e15';
    ctx.fillRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(-half, -half, dim, dim);

    const roadW = 20;
    const blockDim = (dim - roadW * 4) / 3;

    // Helper to draw block base
    function drawBlockBase(bx, by, isCenter) {
      ctx.fillStyle = isCenter ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 26, 36, 0.92)';
      ctx.fillRect(bx, by, blockDim, blockDim);
      ctx.strokeStyle = isCenter ? 'rgba(52, 211, 153, 0.6)' : 'rgba(255, 255, 255, 0.14)';
      ctx.lineWidth = 1;
      ctx.strokeRect(bx, by, blockDim, blockDim);
    }

    function drawBlockLabel(bx, by, title, sub) {
      ctx.fillStyle = 'rgba(6, 12, 18, 0.85)';
      ctx.fillRect(bx + 4, by + blockDim - 18, blockDim - 8, 15);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.3)';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(bx + 4, by + blockDim - 18, blockDim - 8, 15);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 7px cinzel, serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, bx + blockDim / 2, by + blockDim - 9);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '6px monospace';
      ctx.fillText(sub, bx + blockDim / 2, by + blockDim - 4);
    }

    // Coordinates for the 3x3 block grid
    const getBX = (c) => -half + roadW + c * (blockDim + roadW);
    const getBY = (r) => -half + roadW + r * (blockDim + roadW);

    // --- BLOCK 0: NW (r=0, c=0) - TECH INNOVATION & DATA CAMPUS ---
    const b0X = getBX(0), b0Y = getBY(0);
    drawBlockBase(b0X, b0Y, false);
    // 3 Glass Office Buildings around Tech Quad
    ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.fillRect(b0X + 8, b0Y + 8, blockDim * 0.45, 14);
    ctx.strokeRect(b0X + 8, b0Y + 8, blockDim * 0.45, 14);
    ctx.fillRect(b0X + 8, b0Y + 26, 14, blockDim * 0.42);
    ctx.strokeRect(b0X + 8, b0Y + 26, 14, blockDim * 0.42);
    ctx.fillRect(b0X + blockDim * 0.45, b0Y + 26, blockDim * 0.45, 16);
    ctx.strokeRect(b0X + blockDim * 0.45, b0Y + 26, blockDim * 0.45, 16);
    // Circular Satellite Data Uplink Dish
    ctx.strokeStyle = '#e5b95c';
    ctx.beginPath();
    ctx.arc(b0X + blockDim * 0.72, b0Y + blockDim * 0.58, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#e5b95c';
    ctx.beginPath();
    ctx.arc(b0X + blockDim * 0.72, b0Y + blockDim * 0.58, 2, 0, Math.PI * 2);
    ctx.fill();
    drawBlockLabel(b0X, b0Y, 'TECH INNOVATION HUB', 'AI & CYBER CAMPUS');

    // --- BLOCK 1: N (r=0, c=1) - MULTI-MODAL METRO INTERCHANGE ---
    const b1X = getBX(1), b1Y = getBY(1);
    drawBlockBase(b1X, b1Y, false);
    // Elevated Light-Rail / Metro Tracks
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(b1X + 8, b1Y + 14);
    ctx.lineTo(b1X + blockDim - 8, b1Y + 14);
    ctx.moveTo(b1X + 8, b1Y + 22);
    ctx.lineTo(b1X + blockDim - 8, b1Y + 22);
    ctx.stroke();
    // Parked Metro Train
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(b1X + 16, b1Y + 12, 34, 5);
    // 4 Bus Transit Bays
    for (let b = 0; b < 4; b++) {
      ctx.fillStyle = 'rgba(229, 185, 92, 0.4)';
      ctx.fillRect(b1X + 10 + b * 16, b1Y + 32, 12, 18);
      ctx.strokeStyle = '#e5b95c';
      ctx.strokeRect(b1X + 10 + b * 16, b1Y + 32, 12, 18);
    }
    drawBlockLabel(b1X, b1Y, 'TRANSIT INTERCHANGE', 'METRO & BUS TERMINAL');

    // --- BLOCK 2: NE (r=0, c=2) - HEALTHCARE & HOSPITAL CAMPUS ---
    const b2X = getBX(2), b2Y = getBY(2);
    drawBlockBase(b2X, b2Y, false);
    // Cross-Shaped Main Hospital Wing
    const hcW = blockDim * 0.28;
    const hcX = b2X + (blockDim - hcW) / 2;
    const hcY = b2Y + 12;
    ctx.fillStyle = 'rgba(241, 245, 249, 0.75)';
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.2;
    ctx.fillRect(hcX, hcY, hcW, blockDim * 0.48);
    ctx.fillRect(hcX - 12, hcY + 10, hcW + 24, 14);
    // Rooftop Emergency Helipad with Red [ H ]
    const hpX = b2X + blockDim * 0.75;
    const hpY = b2Y + blockDim * 0.35;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(hpX, hpY, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('H', hpX, hpY + 2.5);
    // Emergency Ambulance
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(b2X + 10, b2Y + blockDim * 0.52, 10, 6);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(b2X + 13, b2Y + blockDim * 0.52, 4, 6);
    drawBlockLabel(b2X, b2Y, 'HOSPITAL CAMPUS', 'EMERGENCY & HELIPAD');

    // --- BLOCK 3: W (r=1, c=0) - RESIDENTIAL TOWERS A (HIGH-DENSITY) ---
    const b3X = getBX(0), b3Y = getBY(1);
    drawBlockBase(b3X, b3Y, false);
    // 4 Staggered High-Rise Residential Towers with Cast Shadows
    const tW = 16, tH = 20;
    const towerCoords = [
      { x: b3X + 12, y: b3Y + 10 },
      { x: b3X + blockDim - 28, y: b3Y + 10 },
      { x: b3X + 12, y: b3Y + 36 },
      { x: b3X + blockDim - 28, y: b3Y + 36 }
    ];
    towerCoords.forEach((tc) => {
      // Cast shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(tc.x + 3, tc.y + 3, tW, tH);
      // Tower Body
      ctx.fillStyle = 'rgba(45, 65, 85, 0.9)';
      ctx.strokeStyle = '#e5b95c';
      ctx.lineWidth = 1;
      ctx.fillRect(tc.x, tc.y, tW, tH);
      ctx.strokeRect(tc.x, tc.y, tW, tH);
      // Rooftop Sky-Garden
      ctx.fillStyle = '#34d399';
      ctx.fillRect(tc.x + 3, tc.y + 3, tW - 6, tH - 6);
    });
    // Central Tennis Court / Playground
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(b3X + blockDim * 0.38, b3Y + blockDim * 0.35, 16, 10);
    ctx.strokeStyle = '#ffffff';
    ctx.strokeRect(b3X + blockDim * 0.38, b3Y + blockDim * 0.35, 16, 10);
    drawBlockLabel(b3X, b3Y, 'RESIDENTIAL TOWERS A', 'HIGH-RISE APARTMENTS');

    // --- BLOCK 4: CENTER (r=1, c=1) - SECTOR CENTRAL PARK & BIOSWALE LAKE ---
    const b4X = getBX(1), b4Y = getBY(1);
    drawBlockBase(b4X, b4Y, true);
    // Organic Retention Lake
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.ellipse(b4X + blockDim * 0.5, b4Y + blockDim * 0.42, blockDim * 0.34, blockDim * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Civic Semicircular Amphitheater
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1.2;
    for (let a = 1; a <= 3; a++) {
      ctx.beginPath();
      ctx.arc(b4X + blockDim * 0.5, b4Y + 12, a * 6, 0, Math.PI);
      ctx.stroke();
    }
    // Lake Footbridge
    ctx.strokeStyle = '#e2d9cc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(b4X + blockDim * 0.25, b4Y + blockDim * 0.42);
    ctx.lineTo(b4X + blockDim * 0.75, b4Y + blockDim * 0.42);
    ctx.stroke();
    drawBlockLabel(b4X, b4Y, 'SECTOR CENTRAL PARK', 'BIOSWALE & LAKE');

    // --- BLOCK 5: E (r=1, c=2) - COMMERCIAL HIGH-STREET & RETAIL MALL ---
    const b5X = getBX(2), b5Y = getBY(1);
    drawBlockBase(b5X, b5Y, false);
    // Pedestrian Shopping Promenade Spine
    ctx.fillStyle = 'rgba(229, 185, 92, 0.25)';
    ctx.fillRect(b5X + blockDim * 0.38, b5Y + 6, blockDim * 0.24, blockDim * 0.65);
    // Retail Storefronts with Striped Fabric Awnings
    const shopColors = ['#ef4444', '#38bdf8', '#e5b95c', '#34d399'];
    for (let s = 0; s < 4; s++) {
      // West shops
      ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
      ctx.fillRect(b5X + 8, b5Y + 8 + s * 14, 18, 10);
      ctx.fillStyle = shopColors[s % shopColors.length];
      ctx.fillRect(b5X + 22, b5Y + 8 + s * 14, 4, 10);
      // East shops
      ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
      ctx.fillRect(b5X + blockDim - 26, b5Y + 8 + s * 14, 18, 10);
      ctx.fillStyle = shopColors[(s + 1) % shopColors.length];
      ctx.fillRect(b5X + blockDim - 30, b5Y + 8 + s * 14, 4, 10);
    }
    // Plaza Center Fountain
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(b5X + blockDim * 0.5, b5Y + blockDim * 0.38, 4, 0, Math.PI * 2);
    ctx.fill();
    drawBlockLabel(b5X, b5Y, 'COMMERCIAL HIGH-STREET', 'RETAIL MALL & PROMENADE');

    // --- BLOCK 6: SW (r=2, c=0) - CIVIC DEPOT & CLEAN ENERGY SUBSTATION ---
    const b6X = getBX(0), b6Y = getBY(2);
    drawBlockBase(b6X, b6Y, false);
    // Electrical Transformer Coils & Substation
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1;
    for (let t = 0; t < 3; t++) {
      ctx.fillStyle = 'rgba(40, 30, 20, 0.8)';
      ctx.fillRect(b6X + 10 + t * 20, b6Y + 10, 14, 14);
      ctx.strokeRect(b6X + 10 + t * 20, b6Y + 10, 14, 14);
      // Coils
      ctx.beginPath();
      ctx.arc(b6X + 17 + t * 20, b6Y + 17, 4, 0, Math.PI * 2);
      ctx.stroke();
    }
    // Cylindrical Elevated Water Reservoir Tower
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.beginPath();
    ctx.arc(b6X + blockDim * 0.35, b6Y + blockDim * 0.52, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();
    // Municipal Depot Warehouse
    ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.fillRect(b6X + blockDim * 0.55, b6Y + blockDim * 0.42, 22, 16);
    drawBlockLabel(b6X, b6Y, 'CIVIC MUNICIPAL DEPOT', 'ENERGY & WATER UTILITY');

    // --- BLOCK 7: S (r=2, c=1) - EDUCATIONAL CAMPUS & ATHLETIC STADIUM ---
    const b7X = getBX(1), b7Y = getBY(2);
    drawBlockBase(b7X, b7Y, false);
    // 400m Running Track with Inner Green Soccer Pitch
    const trW = blockDim * 0.72;
    const trH = blockDim * 0.42;
    const trX = b7X + (blockDim - trW) / 2;
    const trY = b7Y + 8;
    // Red Tartan Running Track Ring
    ctx.fillStyle = 'rgba(239, 68, 68, 0.65)';
    ctx.beginPath();
    ctx.roundRect(trX, trY, trW, trH, trH / 2);
    ctx.fill();
    // Inner Green Football Field
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.roundRect(trX + 4, trY + 4, trW - 8, trH - 8, (trH - 8) / 2);
    ctx.fill();
    // Field White Lines (Center line & circle)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(trX + trW / 2, trY + 4);
    ctx.lineTo(trX + trW / 2, trY + trH - 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(trX + trW / 2, trY + trH / 2, 4, 0, Math.PI * 2);
    ctx.stroke();
    // School Academic Building Block
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.fillRect(b7X + 10, b7Y + blockDim * 0.55, blockDim - 20, 9);
    drawBlockLabel(b7X, b7Y, 'ATHLETIC STADIUM', 'SCHOOL & SPORTS COMPLEX');

    // --- BLOCK 8: SE (r=2, c=2) - CULTURAL ARTS & ARTISAN BAZAAR ---
    const b8X = getBX(2), b8Y = getBY(2);
    drawBlockBase(b8X, b8Y, false);
    // Circular Geodesic Dome Performing Arts Hall
    ctx.fillStyle = 'rgba(168, 85, 247, 0.4)';
    ctx.beginPath();
    ctx.arc(b8X + blockDim * 0.35, b8Y + blockDim * 0.35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    // Geodesic Facets
    ctx.beginPath();
    ctx.moveTo(b8X + blockDim * 0.35 - 14, b8Y + blockDim * 0.35);
    ctx.lineTo(b8X + blockDim * 0.35 + 14, b8Y + blockDim * 0.35);
    ctx.moveTo(b8X + blockDim * 0.35, b8Y + blockDim * 0.35 - 14);
    ctx.lineTo(b8X + blockDim * 0.35, b8Y + blockDim * 0.35 + 14);
    ctx.stroke();
    // Open-Air Artisan Bazaar Stalls (Colorful clusters)
    const stallColors = ['#f59e0b', '#ec4899', '#06b6d4', '#10b981'];
    for (let st = 0; st < 4; st++) {
      ctx.fillStyle = stallColors[st];
      ctx.fillRect(b8X + blockDim * 0.65 + (st % 2) * 8, b8Y + 12 + Math.floor(st / 2) * 10, 6, 6);
    }
    drawBlockLabel(b8X, b8Y, 'CULTURAL ARTS DISTRICT', 'DOME & ARTISAN BAZAAR');

    // -------------------------------------------------------------
    // ARTERIAL BOULEVARDS WITH MEDIANS & DYNAMIC VEHICLES
    // -------------------------------------------------------------
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 6]);
    // Horizontal center lane
    ctx.beginPath();
    ctx.moveTo(-half, 0);
    ctx.lineTo(half, 0);
    ctx.stroke();
    // Vertical center lane
    ctx.beginPath();
    ctx.moveTo(0, -half);
    ctx.lineTo(0, half);
    ctx.stroke();
    ctx.setLineDash([]);

    // Dynamic Turning Vehicles & Traffic Simulation
    if (layers.activity) {
      sectorVehicles.forEach((v) => {
        v.x += v.vx;
        if (v.x > half) v.x = -half;
        if (v.x < -half) v.x = half;

        ctx.fillStyle = v.color;
        ctx.fillRect(v.x, v.y - 3, v.type === 'bus' ? 14 : 9, 6);

        // Headlights
        ctx.fillStyle = v.vx > 0 ? '#fef08a' : '#ef4444';
        ctx.beginPath();
        ctx.arc(v.vx > 0 ? v.x + 10 : v.x - 2, v.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Smart Traffic Signals at Core Intersections
      const sigState = Math.floor(animTime * 1.4) % 3;
      const sigCol = sigState === 0 ? '#ef4444' : (sigState === 1 ? '#eab308' : '#22c55e');

      const intersections = [
        { x: -blockDim / 2, y: 0 },
        { x: blockDim / 2, y: 0 },
        { x: 0, y: -blockDim / 2 },
        { x: 0, y: blockDim / 2 }
      ];

      intersections.forEach((pt) => {
        ctx.fillStyle = sigCol;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = sigCol;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
    }

    ctx.fillStyle = '#38bdf8';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('URBAN SECTOR GRID // 800m x 800m // 8 SPECIALIZED URBAN TYPOLOGIES', -half + 8, half + 18);
  }

  // =========================================================================
  // 5. TOWN / CITY MASTERPLAN (COMPLEX PATNA RIPARIAN METROPOLIS)
  // =========================================================================
  function renderScale5_PatnaCity() {
    const dim = Math.min(width, height) * 0.72;
    const half = dim / 2;

    ctx.fillStyle = '#060d15';
    ctx.fillRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-half, -half, dim, dim);

    // Orthogonal Urban Grid Textures (Kankarbagh, Rajendra Nagar, Danapur)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 0.8;
    for (let gx = -half + 20; gx < half; gx += 28) {
      ctx.beginPath();
      ctx.moveTo(gx, -half * 0.15);
      ctx.lineTo(gx, half);
      ctx.stroke();
    }
    for (let gy = -half * 0.15; gy < half; gy += 28) {
      ctx.beginPath();
      ctx.moveTo(-half, gy);
      ctx.lineTo(half, gy);
      ctx.stroke();
    }

    // -------------------------------------------------------------
    // THE HOLY GANGES RIVERFRONT (NORTHERN SACRED WATER AXIS)
    // -------------------------------------------------------------
    const riverY = -half * 0.48;
    ctx.fillStyle = 'rgba(2, 132, 199, 0.52)';
    ctx.beginPath();
    ctx.moveTo(-half, riverY - 26);
    ctx.bezierCurveTo(-half * 0.4, riverY - 48, half * 0.15, riverY + 32, half, riverY - 14);
    ctx.lineTo(half, riverY + 52);
    ctx.bezierCurveTo(half * 0.15, riverY + 88, -half * 0.4, riverY + 22, -half, riverY + 44);
    ctx.closePath();
    ctx.fill();

    // River Sandbar / Diara Island
    ctx.fillStyle = 'rgba(229, 185, 92, 0.35)';
    ctx.beginPath();
    ctx.ellipse(half * 0.05, riverY + 8, 38, 12, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Shimmering River Currents & Floating Particles
    if (layers.activity) {
      riverParticles.forEach((rp) => {
        rp.t = (rp.t + rp.speed) % 1.0;
        const rx = lerp(-half, half, rp.t);
        const baseY = riverY + Math.sin(rp.t * Math.PI) * 22;
        const ry = baseY + rp.offsetY;

        ctx.fillStyle = '#7dd3fc';
        ctx.globalAlpha = rp.alpha;
        ctx.beginPath();
        ctx.arc(rx, ry, rp.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Moving River Cargo Barges & Ferries
      riverBoats.forEach((rb) => {
        rb.t = (rb.t + rb.speed) % 1.0;
        const bx = lerp(-half, half, rb.t);
        const by = riverY + Math.sin(rb.t * Math.PI) * 22;
        ctx.fillStyle = rb.color;
        ctx.fillRect(bx - rb.length / 2, by - 3, rb.length, 6);
        // Cabin
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(bx - 2, by - 5, 6, 3);
        // Water wake trail
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx - rb.length / 2, by);
        ctx.lineTo(bx - rb.length / 2 - 14, by - 3);
        ctx.moveTo(bx - rb.length / 2, by);
        ctx.lineTo(bx - rb.length / 2 - 14, by + 3);
        ctx.stroke();
      });
    }

    // -------------------------------------------------------------
    // RIVER BRIDGES & MARINE DRIVE EXPRESSWAY
    // -------------------------------------------------------------

    // 1. Mahatma Gandhi Setu (5.75km Iconic Bridge Spanning North to Hajipur)
    const mgX = half * 0.38;
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(mgX, riverY + 58);
    ctx.lineTo(mgX + 16, riverY - 34);
    ctx.stroke();
    // Bridge piers
    ctx.fillStyle = '#ffffff';
    for (let p = 0; p < 5; p++) {
      const px = mgX + p * 3.5;
      const py = riverY + 50 - p * 18;
      ctx.fillRect(px - 1, py, 3, 3);
    }

    // 2. Digha-Sonpur Rail-Road Bridge (North-West)
    const dighaX = -half * 0.68;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(dighaX, riverY + 32);
    ctx.lineTo(dighaX + 10, riverY - 38);
    ctx.stroke();

    // 3. JP Ganga Path (Patna Marine Drive Expressway along river bank)
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-half, riverY + 44);
    ctx.bezierCurveTo(-half * 0.4, riverY + 22, half * 0.15, riverY + 90, half, riverY + 54);
    ctx.stroke();

    // -------------------------------------------------------------
    // CIVIC ARTERIES & TRANSIT CORRIDORS
    // -------------------------------------------------------------

    // 4. Bailey Road / Nehru Path Central Civic Boulevard
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-half, half * 0.14);
    ctx.lineTo(half * 0.88, half * 0.2);
    ctx.stroke();

    // 5. Patna Junction Main Railway Lines (East-West Trunk Line)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(-half, half * 0.32);
    ctx.lineTo(half, half * 0.36);
    ctx.stroke();
    ctx.setLineDash([]);

    // Moving Railway Train along tracks
    if (layers.activity) {
      const trT = (animTime * 0.45) % 1.0;
      const trX = lerp(-half, half, trT);
      const trY = lerp(half * 0.32, half * 0.36, trT);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(trX - 14, trY - 3, 28, 6);
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(trX + 12, trY - 2, 4, 4);
    }

    // 6. Patna Metro Line 1 & Line 2 Corridor
    if (layers.activity) {
      const trainT = (animTime * 0.55) % 1.0;
      const trainX = lerp(-half, half * 0.88, trainT);
      const trainY = lerp(half * 0.14, half * 0.2, trainT);

      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(trainX - 12, trainY - 3.5, 24, 7);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(trainX + 12, trainY, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // -------------------------------------------------------------
    // CITY LANDMARKS WITH ELEVATED VISIBILITY & INCREASED TEXT HEIGHT
    // -------------------------------------------------------------

    // A. GANDHI MAIDAN (Iconic Oval Green Esplanade)
    const gmX = half * 0.12;
    const gmY = half * 0.02;
    ctx.fillStyle = 'rgba(34, 197, 94, 0.45)';
    ctx.beginPath();
    ctx.ellipse(gmX, gmY, 26, 16, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // B. GOLGHAR (Historic 1786 Beehive Granary Dome)
    const golX = half * 0.02;
    const golY = riverY + 62;
    ctx.fillStyle = '#e5b95c';
    ctx.beginPath();
    ctx.arc(golX, golY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // C. BIHAR MUSEUM (Contemporary Bailey Road Campus)
    const bmX = -half * 0.32;
    const bmY = half * 0.14;
    ctx.fillStyle = '#c8633a';
    ctx.fillRect(bmX - 10, bmY - 7, 20, 14);
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 1;
    ctx.strokeRect(bmX - 10, bmY - 7, 20, 14);

    // D. PATNA SECRETARIAT & CLOCK TOWER
    const secX = -half * 0.12;
    const secY = half * 0.14;
    ctx.fillStyle = 'rgba(241, 245, 249, 0.8)';
    ctx.fillRect(secX - 8, secY - 9, 16, 18);
    ctx.fillStyle = '#e5b95c';
    ctx.fillRect(secX - 2, secY - 14, 4, 6); // Clock tower spire

    // E. NIT GHAT & DIGHA GHAT (Ceremonial River Steps)
    const nitX = half * 0.46;
    const nitY = riverY + 54;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    for (let s = 0; s < 4; s++) {
      ctx.strokeRect(nitX - 8, nitY + s * 2, 16, 1.5);
    }

    // -------------------------------------------------------------
    // KEY METROPOLITAN NODES & HIGH-CONTRAST LABELS (LARGER TEXT)
    // -------------------------------------------------------------
    const cityLandmarks = [
      { name: 'MAHATMA GANDHI SETU (5.75km)', x: mgX + 10, y: riverY - 38, col: '#e5b95c', isBridge: true },
      { name: 'DIGHA-SONPUR RAIL-ROAD', x: dighaX - 14, y: riverY - 42, col: '#94a3b8', isBridge: true },
      { name: 'GANDHI MAIDAN ESPLANADE', x: gmX, y: gmY + 22, col: '#22c55e' },
      { name: 'GOLGHAR (1786)', x: golX + 10, y: golY - 8, col: '#e5b95c' },
      { name: 'BIHAR MUSEUM (BAILEY RD)', x: bmX - 8, y: bmY - 12, col: '#c8633a' },
      { name: 'PATNA SECRETARIAT TOWER', x: secX - 10, y: secY + 16, col: '#ffffff' },
      { name: 'NIT SACRED GHAT', x: nitX + 12, y: nitY + 6, col: '#38bdf8' },
      { name: 'PATNA JUNCTION HUB', x: -14, y: half * 0.35, col: '#e5b95c', isHub: true },
      { name: 'OLD PATNA CITY / PATALIPUTRA', x: half * 0.55, y: half * 0.28, col: '#c8633a' },
      { name: 'AIIMS / BIHTA GROWTH AXIS', x: -half * 0.65, y: half * 0.55, col: '#38bdf8' },
      { name: 'ECO-PARK GREEN LUNGS', x: -half * 0.22, y: -half * 0.05, col: '#34d399' }
    ];

    cityLandmarks.forEach((cn) => {
      // Beacon dot
      ctx.beginPath();
      ctx.arc(cn.x, cn.y, cn.isHub ? 6.5 : 4, 0, Math.PI * 2);
      ctx.fillStyle = cn.col;
      ctx.fill();

      // Pulsing hub beacon
      if (cn.isHub && layers.activity) {
        const hR = 14 + Math.sin(animTime * 4) * 6;
        ctx.strokeStyle = cn.col;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cn.x, cn.y, hR, 0, Math.PI * 2);
        ctx.stroke();
      }

      // HIGH CONTRAST BADGE WITH INCREASED TEXT HEIGHT (10px / 9.5px)
      ctx.font = 'bold 9.5px monospace';
      const textMetrics = ctx.measureText(cn.name);
      const textW = textMetrics.width;

      const labelX = cn.x + 8;
      const labelY = cn.y - 4;

      // Dark translucent backplate badge
      ctx.fillStyle = 'rgba(6, 12, 18, 0.88)';
      ctx.fillRect(labelX - 3, labelY - 10, textW + 6, 14);
      ctx.strokeStyle = cn.col;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(labelX - 3, labelY - 10, textW + 6, 14);

      // Elevated sharp text
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(cn.name, labelX, labelY);
    });

    // Elevated Section Header (Cinzel 12px)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px cinzel, serif';
    ctx.textAlign = 'left';
    ctx.fillText('PATNA METROPOLIS // 10km x 10km // SACRED WATER AXIS', -half + 12, -half + 22);
  }

  // =========================================================================
  // 6. STATE LEVEL PLAN (COMPLEX BIHAR REGIONAL CORRIDOR)
  // =========================================================================
  function renderScale6_BiharState() {
    const dim = Math.min(width, height) * 0.74;
    const half = dim / 2;

    ctx.fillStyle = '#050b12';
    ctx.fillRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#c8633a';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-half, -half, dim, dim);

    // Detailed Silhouette of Bihar Sub-Plateau & Plains
    ctx.beginPath();
    ctx.moveTo(-half * 0.85, -half * 0.65); // Champaran NW
    ctx.lineTo(-half * 0.35, -half * 0.78);
    ctx.lineTo(half * 0.35, -half * 0.72);
    ctx.lineTo(half * 0.8, -half * 0.6);   // Kishanganj NE
    ctx.lineTo(half * 0.9, -half * 0.1);
    ctx.lineTo(half * 0.75, half * 0.7);   // Bhagalpur / Banka SE
    ctx.lineTo(0, half * 0.85);            // Jamui / Gaya South
    ctx.lineTo(-half * 0.45, half * 0.82);
    ctx.lineTo(-half * 0.9, half * 0.35);  // Kaimur / Rohtas SW
    ctx.closePath();

    ctx.fillStyle = 'rgba(200, 99, 58, 0.16)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(200, 99, 58, 0.85)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Agro-Climatic Zones Hatching
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
    ctx.lineWidth = 0.8;
    for (let l = -half * 0.8; l < half * 0.8; l += 24) {
      ctx.beginPath();
      ctx.moveTo(l, -half * 0.7);
      ctx.lineTo(l + 40, half * 0.7);
      ctx.stroke();
    }

    // -------------------------------------------------------------
    // RIVER NETWORK: GANGES & MAJOR TRIBUTARIES
    // -------------------------------------------------------------
    // Central Ganges River (Bisecting Bihar West to East)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(-half * 0.85, -5);
    ctx.bezierCurveTo(-half * 0.4, -22, 0, 18, half * 0.85, 8);
    ctx.stroke();

    // Gandak River (North-West from Himalayas)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-half * 0.6, -half * 0.7);
    ctx.lineTo(-25, -12);
    ctx.stroke();

    // Kosi River (North-East - Sorrow turned Energy)
    ctx.beginPath();
    ctx.moveTo(half * 0.45, -half * 0.68);
    ctx.lineTo(half * 0.42, 10);
    ctx.stroke();

    // Son River (South-West from Amarkantak)
    ctx.beginPath();
    ctx.moveTo(-half * 0.65, half * 0.75);
    ctx.lineTo(-40, 2);
    ctx.stroke();

    // Animated Inland River Vessels on Ganges (NW-1 Navigation)
    if (layers.activity) {
      for (let b = 0; b < 3; b++) {
        const boatT = ((animTime * 0.15) + b * 0.33) % 1.0;
        const boatX = lerp(-half * 0.8, half * 0.8, boatT);
        const boatY = -5 + Math.sin(boatT * Math.PI) * 16;

        ctx.fillStyle = '#fef08a';
        ctx.fillRect(boatX - 3, boatY - 1.5, 6, 3);
        // Wake trail
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(boatX - 3, boatY);
        ctx.lineTo(boatX - 10, boatY - 2);
        ctx.moveTo(boatX - 3, boatY);
        ctx.lineTo(boatX - 10, boatY + 2);
        ctx.stroke();
      }
    }

    // -------------------------------------------------------------
    // TRANSIT CORRIDORS & HIGH-SPEED MOVING FREIGHT CONVOYS
    // -------------------------------------------------------------

    // 1. Grand Trunk Industrial Freight Corridor (NH-19 / NH-2)
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.75)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(-half * 0.92, -half * 0.08); // Sasaram
    ctx.lineTo(-28, half * 0.52);            // Dobhi / Gaya
    ctx.lineTo(half * 0.88, half * 0.45);   // Barhi / Kolkata
    ctx.stroke();

    // 2. Patna - Gaya - Bodh Gaya Buddhist Corridor (NH-22)
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.7)';
    ctx.beginPath();
    ctx.moveTo(-22, -4);
    ctx.lineTo(-28, half * 0.52);
    ctx.stroke();

    // 3. Patna - Muzaffarpur - Darbhanga Corridor (North Bihar)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.beginPath();
    ctx.moveTo(-22, -4);
    ctx.lineTo(-18, -half * 0.38);
    ctx.lineTo(half * 0.22, -half * 0.42);
    ctx.stroke();

    // 4. Patna - Bhagalpur Silk Corridor
    ctx.strokeStyle = 'rgba(200, 99, 58, 0.7)';
    ctx.beginPath();
    ctx.moveTo(-22, -4);
    ctx.lineTo(18, half * 0.4);
    ctx.lineTo(half * 0.58, 18);
    ctx.stroke();
    ctx.setLineDash([]);

    // DYNAMIC TRANSIT PACKETS (Multiple moving pulses)
    if (layers.activity) {
      // Packet A: GT Road Freight Convoy
      const gtT1 = (animTime * 0.65) % 1.0;
      const gtT2 = ((animTime * 0.65) + 0.5) % 1.0;
      [gtT1, gtT2].forEach((t) => {
        const gtx = lerp(-half * 0.92, half * 0.88, t);
        const gty = lerp(-half * 0.08, half * 0.45, t);
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(gtx, gty, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(gtx, gty, 6, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Packet B: Patna <-> Gaya Buddhist Transit Pulse
      const bgT = (animTime * 0.8) % 1.0;
      const bgX = lerp(-22, -28, bgT);
      const bgY = lerp(-4, half * 0.52, bgT);
      ctx.fillStyle = '#2dd4bf';
      ctx.beginPath();
      ctx.arc(bgX, bgY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Packet C: Patna -> Muzaffarpur North Transit Pulse
      const mzT = (animTime * 0.75) % 1.0;
      const mzX = lerp(-22, -18, mzT);
      const mzY = lerp(-4, -half * 0.38, mzT);
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(mzX, mzY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Packet D: Patna -> Bhagalpur East Transit Pulse
      const bhT = (animTime * 0.55) % 1.0;
      const bhX = lerp(-22, half * 0.58, bhT);
      const bhY = lerp(-4, 18, bhT);
      ctx.fillStyle = '#fb923c';
      ctx.beginPath();
      ctx.arc(bhX, bhY, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // -------------------------------------------------------------
    // REGIONAL DISTRICT NODES WITH PULSING BEACON AURAS
    // -------------------------------------------------------------
    const biharNodes = [
      { name: 'PATNA (CAPITAL BEACON)', x: -22, y: -4, color: '#e5b95c', isCapital: true },
      { name: 'GAYA & BODH GAYA (MAHABODHI)', x: -28, y: half * 0.52, color: '#2dd4bf', isSpiritual: true },
      { name: 'RAJGIR & NALANDA (ANCIENT UNIV)', x: 18, y: half * 0.4, color: '#34d399', isSpiritual: true },
      { name: 'MUZAFFARPUR (MITHILA NORTH)', x: -18, y: -half * 0.38, color: '#38bdf8' },
      { name: 'DARBHANGA (CULTURAL HUB)', x: half * 0.22, y: -half * 0.42, color: '#94a3b8' },
      { name: 'BHAGALPUR (SILK CITY)', x: half * 0.58, y: 18, color: '#fb923c' },
      { name: 'BUXAR (WESTERN GATEWAY)', x: -half * 0.72, y: 12, color: '#94a3b8' },
      { name: 'SASARAM (SHER SHAH AXIS)', x: -half * 0.65, y: half * 0.38, color: '#94a3b8' }
    ];

    biharNodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.isCapital ? 7 : (n.isSpiritual ? 5.5 : 4), 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();

      // Multi-Ring Concentric Pulsing Waves
      if (layers.activity) {
        if (n.isCapital) {
          const cR1 = 12 + Math.sin(animTime * 3.5) * 6;
          const cR2 = 18 + Math.sin(animTime * 3.5 + 1) * 8;
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(n.x, n.y, cR1, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(n.x, n.y, cR2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (n.isSpiritual) {
          const sR = 10 + Math.sin(animTime * 3) * 5;
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, sR, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // High-Contrast District Label Plate
      ctx.font = 'bold 8.5px monospace';
      const tMetrics = ctx.measureText(n.name);
      const tw = tMetrics.width;

      ctx.fillStyle = 'rgba(5, 11, 18, 0.85)';
      ctx.fillRect(n.x + 8, n.y - 9, tw + 6, 13);
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(n.x + 8, n.y - 9, tw + 6, 13);

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(n.name, n.x + 11, n.y + 1);
    });

    ctx.fillStyle = '#c8633a';
    ctx.font = 'bold 11px cinzel, serif';
    ctx.textAlign = 'left';
    ctx.fillText('BIHAR REGIONAL CORRIDOR // 350km x 250km // GANGETIC KNOWLEDGE AXIS', -half + 12, half - 12);
  }

  // =========================================================================
  // 7. INDIA COUNTRY PLAN (NATIONAL GEOMAGNETIC SHIELD & SUPER-GRID)
  // =========================================================================
  function renderScale7_IndiaCountry() {
    const dim = Math.min(width, height) * 0.76;
    const half = dim / 2;

    ctx.fillStyle = '#04080e';
    ctx.fillRect(-half, -half, dim, dim);
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 2;
    ctx.strokeRect(-half, -half, dim, dim);

    ctx.save();
    ctx.scale(0.84, 0.84);

    // High-Fidelity Peninsular & Himalayan Silhouette
    ctx.beginPath();
    // Northern Crown (Kashmir / Ladakh)
    ctx.moveTo(0, -half * 0.96);
    ctx.lineTo(half * 0.22, -half * 0.84);
    // Himalayan Northern Ridge Shield
    ctx.lineTo(half * 0.65, -half * 0.6);
    // North-East Seven Sisters Corridor
    ctx.lineTo(half * 0.92, -half * 0.52);
    ctx.lineTo(half * 0.82, -half * 0.28);
    // Bay of Bengal Coastline
    ctx.lineTo(half * 0.48, 0);
    ctx.lineTo(half * 0.28, half * 0.5);
    // Southern Peninsular Tip (Kanyakumari)
    ctx.lineTo(0, half * 0.94);
    // Arabian Sea Coastline
    ctx.lineTo(-half * 0.28, half * 0.46);
    ctx.lineTo(-half * 0.46, 0);
    // Gujarat Rann of Kutch & Saurashtra Peninsula
    ctx.lineTo(-half * 0.72, -half * 0.16);
    ctx.lineTo(-half * 0.56, -half * 0.4);
    ctx.lineTo(-half * 0.28, -half * 0.72);
    ctx.closePath();

    ctx.fillStyle = 'rgba(229, 185, 92, 0.12)';
    ctx.fill();
    ctx.strokeStyle = '#e5b95c';
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // -------------------------------------------------------------
    // HIMALAYAN SHIELD: MOUNTAIN RIDGE & SOLAR WIND DEFLECTION
    // -------------------------------------------------------------
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(-half * 0.15, -half * 0.82);
    ctx.lineTo(half * 0.22, -half * 0.84);
    ctx.lineTo(half * 0.65, -half * 0.6);
    ctx.stroke();

    // Himalayan Prana Deflection Waves (Shimmering northern cosmic shield)
    if (layers.vectors) {
      const himWave = Math.sin(animTime * 3) * 4;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-half * 0.15, -half * 0.82 - 8 + himWave);
      ctx.lineTo(half * 0.22, -half * 0.84 - 8 + himWave);
      ctx.lineTo(half * 0.65, -half * 0.6 - 8 + himWave);
      ctx.stroke();
    }

    // Tropic of Cancer Solar Belt (23.5°N)
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.75)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(-half * 0.7, -half * 0.12);
    ctx.lineTo(half * 0.7, -half * 0.12);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#ef4444';
    ctx.font = '8px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('TROPIC OF CANCER (23.5\u00B0N SOLAR BELT)', half * 0.7, -half * 0.16);

    // Ancient Sacred Meridian of Ujjain (75.8°E)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.setLineDash([3, 5]);
    ctx.beginPath();
    ctx.moveTo(-half * 0.15, -half * 0.9);
    ctx.lineTo(-half * 0.05, half * 0.9);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '7.5px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('UJJAIN MERIDIAN 75.8\u00B0E', -half * 0.14, half * 0.88);

    // -------------------------------------------------------------
    // NATIONAL METROS & HIGHWAY SUPER-GRID
    // -------------------------------------------------------------
    const metros = [
      { name: 'DELHI NCR', x: -half * 0.14, y: -half * 0.46, c: '#38bdf8' },
      { name: 'PATNA HUB', x: half * 0.28, y: -half * 0.28, c: '#e5b95c', isHub: true },
      { name: 'KOLKATA', x: half * 0.5, y: -half * 0.16, c: '#38bdf8' },
      { name: 'MUMBAI', x: -half * 0.36, y: half * 0.16, c: '#38bdf8' },
      { name: 'CHENNAI', x: half * 0.15, y: half * 0.56, c: '#38bdf8' },
      { name: 'BENGALURU', x: -half * 0.04, y: half * 0.62, c: '#38bdf8' }
    ];

    // Golden Quadrilateral Highway Super-Grid Lines
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(metros[0].x, metros[0].y); // Delhi
    ctx.lineTo(metros[1].x, metros[1].y); // Patna
    ctx.lineTo(metros[2].x, metros[2].y); // Kolkata
    ctx.lineTo(metros[4].x, metros[4].y); // Chennai
    ctx.lineTo(metros[5].x, metros[5].y); // Bengaluru
    ctx.lineTo(metros[3].x, metros[3].y); // Mumbai
    ctx.closePath();
    ctx.stroke();

    // -------------------------------------------------------------
    // DYNAMIC NATIONAL MOVEMENTS: ENERGY PACKETS, FLIGHTS & SHIPPING
    // -------------------------------------------------------------
    if (layers.activity) {
      // 1. Golden Quadrilateral Traveling Energy Packets
      const gqNodes = [
        metros[0], metros[1], metros[2], metros[4], metros[5], metros[3], metros[0]
      ];
      for (let p = 0; p < 4; p++) {
        const segT = ((animTime * 0.5) + p * 0.25) % 1.0;
        const totalSegs = gqNodes.length - 1;
        const currentSeg = Math.floor(segT * totalSegs);
        const subT = (segT * totalSegs) - currentSeg;

        const fromNode = gqNodes[currentSeg];
        const toNode = gqNodes[currentSeg + 1];

        const gx = lerp(fromNode.x, toNode.x, subT);
        const gy = lerp(fromNode.y, toNode.y, subT);

        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(gx, gy, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(254, 240, 138, 0.5)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(gx, gy, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 2. Domestic Flight Path Corridors (Aviation Vectors with Moving Aircraft)
      const flights = [
        { from: metros[0], to: metros[1], arc: -20 }, // Delhi - Patna
        { from: metros[0], to: metros[3], arc: -30 }, // Delhi - Mumbai
        { from: metros[3], to: metros[5], arc: -18 }, // Mumbai - Bengaluru
        { from: metros[2], to: metros[0], arc: -25 }  // Kolkata - Delhi
      ];

      flights.forEach((fl, fIdx) => {
        // Curved dashed flight route
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]);

        const midX = (fl.from.x + fl.to.x) / 2 + fl.arc;
        const midY = (fl.from.y + fl.to.y) / 2 - Math.abs(fl.arc) * 0.5;

        ctx.beginPath();
        ctx.moveTo(fl.from.x, fl.from.y);
        ctx.quadraticCurveTo(midX, midY, fl.to.x, fl.to.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Moving aircraft along bezier curve
        const fT = ((animTime * 0.4) + fIdx * 0.28) % 1.0;
        const ax = (1 - fT) * (1 - fT) * fl.from.x + 2 * (1 - fT) * fT * midX + fT * fT * fl.to.x;
        const ay = (1 - fT) * (1 - fT) * fl.from.y + 2 * (1 - fT) * fT * midY + fT * fT * fl.to.y;

        // Aircraft glyph (White / cyan triangle)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(ax, ay, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ax, ay, 5, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 3. Coastal Maritime Shipping Vessels
      // Arabian Sea Route (Kandla -> Mumbai -> Kochi)
      const seaT1 = (animTime * 0.12) % 1.0;
      const asX = lerp(-half * 0.65, -half * 0.18, seaT1);
      const asY = lerp(-half * 0.1, half * 0.75, seaT1);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(asX - 2, asY - 2, 5, 4);

      // Bay of Bengal Route (Kolkata -> Paradip -> Chennai)
      const seaT2 = ((animTime * 0.12) + 0.5) % 1.0;
      const bbX = lerp(half * 0.55, half * 0.25, seaT2);
      const bbY = lerp(-half * 0.1, half * 0.65, seaT2);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(bbX - 2, bbY - 2, 5, 4);
    }

    // -------------------------------------------------------------
    // METRO BEACONS & LABELS
    // -------------------------------------------------------------
    metros.forEach((m) => {
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.isHub ? 6.5 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = m.c;
      ctx.fill();

      if (layers.activity) {
        if (m.isHub) {
          const hubPulse1 = 12 + Math.sin(animTime * 4) * 6;
          const hubPulse2 = 18 + Math.sin(animTime * 4 + 1) * 8;
          ctx.strokeStyle = m.c;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(m.x, m.y, hubPulse1, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(m.x, m.y, hubPulse2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          const nodePulse = 8 + Math.sin(animTime * 3 + m.x) * 3;
          ctx.strokeStyle = m.c;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(m.x, m.y, nodePulse, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // High-Contrast Metro Label
      ctx.font = 'bold 8.5px monospace';
      const mMetrics = ctx.measureText(m.name);
      const mw = mMetrics.width;

      ctx.fillStyle = 'rgba(4, 8, 14, 0.88)';
      ctx.fillRect(m.x + 8, m.y - 8, mw + 6, 13);
      ctx.strokeStyle = m.c;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(m.x + 8, m.y - 8, mw + 6, 13);

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(m.name, m.x + 11, m.y + 2);
    });

    ctx.restore();

    ctx.fillStyle = '#e5b95c';
    ctx.font = 'bold 11px cinzel, serif';
    ctx.textAlign = 'left';
    ctx.fillText('INDIA GEOMAGNETIC SHIELD // 3,200km x 3,000km // GOLDEN SUPER-GRID', -half + 12, half - 12);
  }

  // =========================================================================
  // 8. EARTH GLOBE (DETAILED ROTATING PLANETARY BIOSPHERE)
  // =========================================================================
  function renderScale8_EarthGlobe() {
    const radius = Math.min(width, height) * 0.28;

    // Atmospheric Blue Scattering Halo (Rayleigh scattering)
    const haloGrad = ctx.createRadialGradient(0, 0, radius * 0.92, 0, 0, radius * 1.38);
    haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.55)');
    haloGrad.addColorStop(0.4, 'rgba(14, 165, 233, 0.25)');
    haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.38, 0, Math.PI * 2);
    ctx.fill();

    // Ocean Base Gradient
    const oceanGrad = ctx.createRadialGradient(-radius * 0.35, -radius * 0.35, radius * 0.1, 0, 0, radius);
    oceanGrad.addColorStop(0, '#0284c7');
    oceanGrad.addColorStop(0.65, '#0369a1');
    oceanGrad.addColorStop(1, '#082f49');
    ctx.fillStyle = oceanGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.rotate((23.4 * Math.PI) / 180); // 23.4° Axial Tilt
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.clip();

    const rotOffset = (animTime * 0.14) % (Math.PI * 2);

    // Procedural Rotating Continents
    for (let c = 0; c < 6; c++) {
      const lon = rotOffset + (c / 6) * Math.PI * 2;
      const sx = Math.cos(lon) * radius * 0.92;
      const sy = (c % 2 === 0 ? -1 : 1) * radius * 0.26;

      if (Math.sin(lon) > -0.25) {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.75)';
        ctx.beginPath();
        ctx.ellipse(sx, sy, radius * 0.38 * Math.abs(Math.sin(lon) + 0.3), radius * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();

        // High Mountain Ridges (Brownish)
        ctx.fillStyle = 'rgba(180, 83, 9, 0.6)';
        ctx.beginPath();
        ctx.ellipse(sx, sy, radius * 0.2 * Math.abs(Math.sin(lon) + 0.3), radius * 0.14, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Drifting White Atmospheric Cloud Swirls
    const cloudOffset = (animTime * 0.19) % (Math.PI * 2);
    for (let cl = 0; cl < 4; cl++) {
      const cLon = cloudOffset + (cl / 4) * Math.PI * 2;
      const cxPos = Math.cos(cLon) * radius * 0.9;
      const cyPos = (cl % 2 === 0 ? 0.35 : -0.35) * radius;

      if (Math.sin(cLon) > -0.2) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.ellipse(cxPos, cyPos, radius * 0.45 * Math.abs(Math.sin(cLon) + 0.25), radius * 0.12, 0.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Night-Side Shadow & Golden City Lights
    const shadowGrad = ctx.createLinearGradient(-radius, 0, radius, 0);
    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    shadowGrad.addColorStop(0.52, 'rgba(0, 0, 0, 0.4)');
    shadowGrad.addColorStop(1, 'rgba(2, 6, 12, 0.92)');
    ctx.fillStyle = shadowGrad;
    ctx.fillRect(-radius, -radius, radius * 2, radius * 2);

    // Glowing Night City Constellations on Dark Hemisphere
    ctx.fillStyle = '#fef08a';
    for (let nl = 0; nl < 18; nl++) {
      const nLon = rotOffset + (nl / 18) * Math.PI * 2;
      if (Math.cos(nLon) > 0.15) { // on dark side
        const nx = Math.cos(nLon) * radius * 0.85;
        const ny = (Math.sin(nl * 2) * 0.6) * radius;
        ctx.beginPath();
        ctx.arc(nx, ny, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();

    // Toroidal Geomagnetic Dipole Lines (Van Allen Belts)
    if (layers.vectors) {
      ctx.save();
      ctx.rotate((23.4 * Math.PI) / 180);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1.2;
      for (let f = 1; f <= 3; f++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * (1.12 + f * 0.24), radius * (0.82 + f * 0.16), 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    // Orbiting Satellites (ISS & Geostationary)
    if (layers.activity) {
      // 1. ISS in LEO
      const satAngle = animTime * 0.75;
      const satDist = radius * 1.26;
      const satX = Math.cos(satAngle) * satDist;
      const satY = Math.sin(satAngle) * satDist * 0.6;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(satX, satY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Solar Panels
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(satX - 7, satY);
      ctx.lineTo(satX + 7, satY);
      ctx.stroke();

      // 2. High Geostationary Satellite with Pulse
      const geoAngle = animTime * 0.35;
      const geoDist = radius * 1.55;
      const gx = Math.cos(geoAngle) * geoDist;
      const gy = Math.sin(geoAngle) * geoDist * 0.55;

      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(gx, gy, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#38bdf8';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('EARTH GLOBE // 12,742km DIA // 23.4° AXIAL TILT // BIOSPHERE', 0, radius + 28);
  }

  // =========================================================================
  // 9. ALL PLANETS & STARS (COMPLEX NAVAGRAHA COSMIC CONTINUUM)
  // =========================================================================
  function renderScale9_Cosmos() {
    const maxR = Math.min(width, height) * 0.44;

    // Radiant Central Sun (Surya) with Corona Prominences
    const sunR = 20;
    const sunGlow = ctx.createRadialGradient(0, 0, sunR * 0.3, 0, 0, sunR * 3.8);
    sunGlow.addColorStop(0, '#ffffff');
    sunGlow.addColorStop(0.2, '#fef08a');
    sunGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.55)');
    sunGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = sunGlow;
    ctx.beginPath();
    ctx.arc(0, 0, sunR * 3.8, 0, Math.PI * 2);
    ctx.fill();

    // Solar Corona Flaring Rays
    if (layers.activity) {
      for (let f = 0; f < 12; f++) {
        const fAngle = (f / 12) * Math.PI * 2 + animTime * 0.2;
        const fLen = sunR + 8 + Math.sin(animTime * 4 + f) * 6;
        ctx.strokeStyle = 'rgba(254, 240, 138, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(Math.cos(fAngle) * sunR, Math.sin(fAngle) * sunR);
        ctx.lineTo(Math.cos(fAngle) * fLen, Math.sin(fAngle) * fLen);
        ctx.stroke();
      }
    }

    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(0, 0, sunR, 0, Math.PI * 2);
    ctx.fill();

    // Navagraha 9 Planetary Bodies
    const planets = [
      { name: 'Budha (Mercury)', r: maxR * 0.18, speed: 1.8, size: 3, color: '#94a3b8' },
      { name: 'Shukra (Venus)', r: maxR * 0.28, speed: 1.3, size: 4.5, color: '#fef08a' },
      { name: 'Prithvi (Earth)', r: maxR * 0.4, speed: 1.0, size: 5, color: '#38bdf8', hasMoon: true },
      { name: 'Mangala (Mars)', r: maxR * 0.52, speed: 0.8, size: 4, color: '#ef4444' },
      { name: 'Brihaspati (Jupiter)', r: maxR * 0.7, speed: 0.5, size: 10, color: '#fb923c', hasBands: true },
      { name: 'Shani (Saturn)', r: maxR * 0.86, speed: 0.35, size: 8, color: '#e5b95c', hasSaturnRings: true },
      { name: 'Rahu & Ketu (Lunar Nodes)', r: maxR * 0.98, speed: 0.22, size: 3.5, color: '#a855f7' }
    ];

    // Main Asteroid Belt between Mars and Jupiter
    if (layers.activity) {
      asteroids.forEach((ast) => {
        ast.angle += ast.speed * 0.01;
        const ar = maxR * ast.distRatio;
        const ax = Math.cos(ast.angle) * ar;
        const ay = Math.sin(ast.angle) * (ar * 0.82);

        ctx.fillStyle = ast.color;
        ctx.beginPath();
        ctx.arc(ax, ay, ast.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    planets.forEach((p) => {
      // Elliptical Orbit Track
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.82, (15 * Math.PI) / 180, 0, Math.PI * 2);
      ctx.stroke();

      if (layers.activity) {
        const pAngle = animTime * p.speed * 0.4;
        const px = Math.cos(pAngle) * p.r;
        const py = Math.sin(pAngle) * (p.r * 0.82);

        // Planet Sphere
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Saturn Double Rings
        if (p.hasSaturnRings) {
          ctx.strokeStyle = 'rgba(229, 185, 92, 0.85)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 2.4, p.size * 0.75, (30 * Math.PI) / 180, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 2.8, p.size * 0.9, (30 * Math.PI) / 180, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Jupiter Storm Bands
        if (p.hasBands) {
          ctx.strokeStyle = 'rgba(124, 45, 18, 0.7)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(px - p.size * 0.8, py);
          ctx.lineTo(px + p.size * 0.8, py);
          ctx.stroke();
        }

        // Earth & Orbiting Chandra (Moon)
        if (p.hasMoon) {
          const mAngle = animTime * 3.8;
          const mx = px + Math.cos(mAngle) * 11;
          const my = py + Math.sin(mAngle) * 11;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(mx, my, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    // Constellations in Background (27 Vedic Nakshatras)
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.2)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([2, 4]);
    for (let c = 0; c < 8; c++) {
      const cA1 = (c / 8) * Math.PI * 2;
      const cA2 = ((c + 1) / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(cA1) * maxR * 1.1, Math.sin(cA1) * maxR * 0.9);
      ctx.lineTo(Math.cos(cA2) * maxR * 1.1, Math.sin(cA2) * maxR * 0.9);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    ctx.fillStyle = '#e5b95c';
    ctx.font = 'bold 11px cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('NAVAGRAHA CELESTIAL MATRIX // YATHA PINDE TATHA BRAHMANDE', 0, maxR + 26);
  }

  // =========================================================================
  // THE INVARIANT 9x9 VASTU MATRIX GRID (WITH TRANSPARENT BRAHMASTHANA)
  // =========================================================================
  function drawInvariantVastuGrid(cx, cy) {
    const gridDim = Math.min(width, height) * 0.72;
    const cellW = gridDim / 9;
    const left = -gridDim / 2;
    const top = -gridDim / 2;

    // Outer Boundary
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.65)';
    ctx.lineWidth = 2;
    ctx.strokeRect(left, top, gridDim, gridDim);

    // 81 Cells Lines
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.22)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 9; i++) {
      ctx.beginPath();
      ctx.moveTo(left + i * cellW, top);
      ctx.lineTo(left + i * cellW, top + gridDim);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(left, top + i * cellW);
      ctx.lineTo(left + gridDim, top + i * cellW);
      ctx.stroke();
    }

    // Central 3x3 Brahmasthana (Core 9 cells - DELICATE & TRANSPARENT)
    ctx.fillStyle = 'rgba(45, 212, 191, 0.04)';
    ctx.fillRect(left + cellW * 3, top + cellW * 3, cellW * 3, cellW * 3);

    ctx.strokeStyle = 'rgba(45, 212, 191, 0.28)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(left + cellW * 3, top + cellW * 3, cellW * 3, cellW * 3);
    ctx.setLineDash([]);

    // Cardinal Direction Labels
    ctx.fillStyle = '#e5b95c';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('NW // VAYAVYA', left + cellW * 1.5, top - 8);
    ctx.fillText('N // KUBERA', 0, top - 8);
    ctx.fillText('NE // ISHANYA', left + cellW * 7.5, top - 8);
    ctx.fillText('SW // NAIRUTYA', left + cellW * 1.5, top + gridDim + 16);
    ctx.fillText('S // YAMA', 0, top + gridDim + 16);
    ctx.fillText('SE // AGNEYA', left + cellW * 7.5, top + gridDim + 16);
  }

  // =========================================================================
  // PRANA FLOW VECTORS
  // =========================================================================
  function drawPranaVectors(t) {
    const gridDim = Math.min(width, height) * 0.72;
    const half = gridDim / 2;

    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([8, 8]);
    ctx.lineDashOffset = -t * 30;

    for (let i = -2; i <= 2; i++) {
      const offset = i * 36;
      ctx.beginPath();
      ctx.moveTo(half - 20 + offset, -half + 20 - offset);
      ctx.lineTo(-half + 20 + offset, half - 20 - offset);
      ctx.stroke();
    }

    ctx.restore();
  }

  // =========================================================================
  // COSMIC PRANA RAYS CONVERGING INTO CENTER
  // =========================================================================
  function drawCosmicPranaRays(t) {
    ctx.save();
    cosmicBeams.forEach((cb) => {
      const beamR = ((t * cb.speed * 42 + cb.dist) % 290) + 20;
      const bx = Math.cos(cb.angle) * beamR;
      const by = Math.sin(cb.angle) * beamR;

      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx * 0.68, by * 0.68);
      ctx.strokeStyle = cb.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.45;
      ctx.stroke();
    });
    ctx.restore();
  }

  // =========================================================================
  // INTERACTIVITY & RIPPLES
  // =========================================================================
  function drawInteractivity(cx, cy) {
    const gridDim = Math.min(width, height) * 0.72;
    const cellW = gridDim / 9;
    const left = -gridDim / 2;
    const top = -gridDim / 2;

    if (hoveredCell) {
      const hx = left + hoveredCell.col * cellW;
      const hy = top + hoveredCell.row * cellW;

      ctx.fillStyle = 'rgba(229, 185, 92, 0.28)';
      ctx.fillRect(hx, hy, cellW, cellW);
      ctx.strokeStyle = '#e5b95c';
      ctx.lineWidth = 2;
      ctx.strokeRect(hx, hy, cellW, cellW);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`PADA [${hoveredCell.row}, ${hoveredCell.col}]`, hx + cellW / 2, hy + cellW / 2 + 3);
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const rip = ripples[i];
      rip.r += 2.8;
      rip.alpha -= 0.03;

      if (rip.alpha <= 0 || rip.r >= rip.maxR) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(rip.x - cx, rip.y - cy, rip.r, 0, Math.PI * 2);
      ctx.strokeStyle = rip.color;
      ctx.globalAlpha = rip.alpha;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawReticleDecorations() {
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.4)';
    ctx.lineWidth = 1;

    const cornerSize = 14;
    ctx.beginPath();
    ctx.moveTo(14, 14 + cornerSize);
    ctx.lineTo(14, 14);
    ctx.lineTo(14 + cornerSize, 14);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - 14, 14 + cornerSize);
    ctx.lineTo(width - 14, 14);
    ctx.lineTo(width - 14 - cornerSize, 14);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(14, height - 14 - cornerSize);
    ctx.lineTo(14, height - 14);
    ctx.lineTo(14 + cornerSize, height - 14);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - 14, height - 14 - cornerSize);
    ctx.lineTo(width - 14, height - 14);
    ctx.lineTo(width - 14 - cornerSize, height - 14);
    ctx.stroke();
  }

  // =========================================================================
  // SPACE TYPOLOGY DIAGNOSTIC SIMULATOR
  // =========================================================================
  const DIAGNOSTIC_DATA = {
    bedroom: {
      name: '01 // Master Bedroom Suite (Micro Personal Sanctuary)',
      scale: '5m x 5m // 1:10 Ratio',
      orientation: 'South-West (Nairutya Zone) with Bed Head oriented South',
      vectors: 'Circadian dawn light (45° NE ingress), 0-EMF bio-grounding zone, acoustic threshold < 28 dB',
      cosmic: 'Prithvi / Rahu â€” Grounding Earth frequency stabilizing human deep-sleep Delta brainwaves',
      score: '98% Bio-Magnetic Resonance',
      scoreWidth: '98%',
      recommendations: [
        'Use 9-inch solid masonry on South and West walls to absorb daytime thermal radiation and anchor security.',
        'Orient bed head strictly towards South or East to align circulatory blood iron with Earth\'s magnetic dipole.',
        'Install 2700K circadian warm indirect cove illumination to stimulate melatonin secretion 45 minutes before sleep.'
      ]
    },
    villa: {
      name: '02 // Private Residence / Duplex Villa',
      scale: '25m x 25m // 1:50 Ratio',
      orientation: 'True Cardinal Orthogonal (Zero Deviation from True North)',
      vectors: 'Central Brahmasthana open courtyard stack ventilation, Agneya (SE) kitchen fire ventilation, Ishanya (NE) morning water atrium',
      cosmic: 'Navagraha Mandala â€” Balances all 9 elemental deities and planetary vectors across private family life',
      score: '96% Bio-Climatic Equilibrium',
      scoreWidth: '96%',
      recommendations: [
        'Ensure the central 1/9th Brahmasthana zone is completely column-free and open to sky to maintain building respiration.',
        'Locate the primary kitchen in Agneya (SE) so cooking fires face East towards the morning solar spectrum.',
        'Elevate the South-West plinth level by 2 to 3 inches above the North-East to prevent energetic leakage.'
      ]
    },
    colony: {
      name: '03 // Living Neighbourhood Cluster / 9-Parcel Commons',
      scale: '150m x 150m // 1:300 Ratio',
      orientation: 'Peripheral Ring Access Road with Central Green Commons & North-East Water Harvesting',
      vectors: 'Pedestrian-first arterial loops, shaded wind channels flowing SW to NE, biophilic tree buffers',
      cosmic: 'Chandra / Varuna (Water & Community Affinity) â€” Fosters social warmth, mutual safety, and fluid prosperity',
      score: '94% Community Cohesion',
      scoreWidth: '94%',
      recommendations: [
        'Eliminate all vehicular through-traffic from the central children\'s park and walking loops.',
        'Place the community rainwater percolation catchment in the North-East to cool oncoming seasonal summer winds.',
        'Orient residential parcel entrances toward the central green commons to foster organic neighborly interaction.'
      ]
    },
    corporate: {
      name: '04 // Corporate Headquarters & Industrial Campus',
      scale: '800m x 800m // 1:1,500 Ratio',
      orientation: 'Director Chambers in South-West, Collaborative Open Bays in North-West, Heavy MEP in South-East',
      vectors: 'Biophilic circadian office lighting, acoustic felt baffles, non-bottlenecked double-loaded circulation corridors',
      cosmic: 'Budha & Surya (Intellect, Governance & Commerce) â€” Stimulates agile decision-making and sustainable profitability',
      score: '97% Operational Ergonomics',
      scoreWidth: '97%',
      recommendations: [
        'Position boardrooms and executive suites in Nairutya (SW) facing North/East during commercial negotiations.',
        'Place all electrical substations, generators, and transformer yards in Agneya (SE) to isolate high EMF.',
        'Maximize North-facing glazing on collaborative workbays to provide glare-free 500-lux ambient daylight all day.'
      ]
    },
    urban: {
      name: '05 // Smart City District / Institutional Masterplan (Patna Hub)',
      scale: '10km x 10km // 1:20,000 Ratio',
      orientation: 'Riparian Riverfront Axis along Ganges (North-East), Transit Spines along South-West Ring Roads',
      vectors: 'Ecological riverfront wind corridors cooling urban heat-islands, multi-modal transport interchanges',
      cosmic: 'Surya & Brihaspati (Civilizational Vitality & Regional Knowledge) â€” Anchors regional prosperity and ecological resilience',
      score: '95% Macro Metabolism',
      scoreWidth: '95%',
      recommendations: [
        'Preserve continuous natural riparian buffers along the Ganges North-East riverfront to protect civic biodiversity.',
        'Align major arterial boulevards with prevailing seasonal winds to dissipate urban heat-island concentrations.',
        'Cluster regional administrative and educational hubs along rapid transit spines connecting Patna to Delhi and Kolkata.'
      ]
    }
  };

  function initSpaceDiagnostic() {
    const cardEl = document.getElementById('diag-result-card');
    if (!cardEl) return;

    const buttons = document.querySelectorAll('.diag-type-btn');

    function renderDiagnostic(typeKey) {
      const data = DIAGNOSTIC_DATA[typeKey] || DIAGNOSTIC_DATA.bedroom;

      buttons.forEach(btn => {
        const isMatch = btn.getAttribute('data-type') === typeKey;
        if (isMatch) {
          btn.classList.add('border-[#e5b95c]', 'bg-[#e5b95c]/20', 'text-white', 'shadow-gold');
          btn.classList.remove('border-white/10', 'bg-white/5', 'text-slate-300');
        } else {
          btn.classList.remove('border-[#e5b95c]', 'bg-[#e5b95c]/20', 'text-white', 'shadow-gold');
          btn.classList.add('border-white/10', 'bg-white/5', 'text-slate-300');
        }
      });

      cardEl.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span class="text-xs font-mono text-[#e5b95c] font-bold uppercase tracking-wider">DIAGNOSED TYPOLOGY</span>
            <h3 class="text-2xl font-black font-cinzel text-white mt-1">${data.name}</h3>
            <span class="text-xs font-mono text-slate-400">${data.scale}</span>
          </div>
          <div class="glass-panel px-5 py-3 rounded-xl border border-emerald-400/40 text-right">
            <div class="text-[10px] font-mono text-emerald-400 uppercase">HARMONIC ALIGNMENT INDEX</div>
            <div class="text-xl font-black font-tech text-white">${data.score}</div>
            <div class="w-28 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-emerald-400 to-[#38bdf8] rounded-full" style="width: ${data.scoreWidth}"></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <div class="text-xs font-mono text-[#e5b95c] uppercase font-bold flex items-center gap-1.5">
              <i data-lucide="compass" class="w-4 h-4"></i>
              <span>RECOMMENDED CARDINAL ORIENTATION</span>
            </div>
            <p class="text-xs text-slate-300 font-light leading-relaxed">${data.orientation}</p>
          </div>

          <div class="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <div class="text-xs font-mono text-[#38bdf8] uppercase font-bold flex items-center gap-1.5">
              <i data-lucide="activity" class="w-4 h-4"></i>
              <span>ACTIVE LIVING VECTOR FOCUS</span>
            </div>
            <p class="text-xs text-slate-300 font-light leading-relaxed">${data.vectors}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl bg-gradient-to-r from-[#e5b95c]/10 to-[#c8633a]/10 border border-[#e5b95c]/20 space-y-2">
          <div class="text-xs font-mono text-[#fef08a] uppercase font-bold flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
            <span>COSMIC RESONANCE & CELESTIAL EQUATION</span>
          </div>
          <p class="text-xs text-slate-200 font-light leading-relaxed">${data.cosmic}</p>
        </div>

        <div class="space-y-3">
          <div class="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-bold">
            KEY ARCHITECTURAL & ENGINEERING DIRECTIVES:
          </div>
          <div class="space-y-2">
            ${data.recommendations.map(r => `
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <span class="w-2 h-2 rounded-full bg-[#e5b95c] mt-1 flex-shrink-0"></span>
                <span>${r}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs font-mono text-slate-400">
            Have a project in this category? Get a customized multi-scale Vastu audit.
          </div>
          <a href="contact.html" class="btn-chamfer px-6 py-2.5 bg-gradient-to-r from-[#e5b95c] to-[#c8633a] text-black font-bold font-tech text-xs uppercase tracking-wider">
            Audit Your Project &rarr;
          </a>
        </div>
      `;

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        renderDiagnostic(type);
      });
    });

    renderDiagnostic('bedroom');
  }

  // Expose to window for external integration
  window.initMissionMatrix = initMissionMatrix;
  window.setMissionScale = setScale;
  window.initSpaceDiagnostic = initSpaceDiagnostic;

  function initAll() {
    initMissionMatrix();
    initSpaceDiagnostic();
    if (window.lucide) {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();