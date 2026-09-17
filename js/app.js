/**
 * VASTUSHED Master Application Logic (Multi-Page Architecture)
 * Local High-Resolution Project Photography, Animated Numbers, Client Testimonials & Vastu Tips Hub
 */

// Local Realistic Project Database with Multiple High-Res Pictures
const PROJECTS = [
  {
    id: 1,
    title: 'The Mandala Sanctum Villa',
    category: 'residential',
    location: 'Bailey Road Corridor, Patna',
    area: '7,400 sq.ft',
    scope: 'Architecture, Interior & Turnkey Build',
    vastuFocus: 'Ishanya (NE) Water Atrium with Nairutya (SW) Elevated Master Suite',
    description: 'A monolithic residence synthesizing ancient Vedic spatial proportions with exposed board-marked concrete, natural Kota stone, and parametric copper window brise-soleil.',
    image: 'assets/images/project-villa.jpg',
    images: [
      'assets/images/project-villa.jpg',
      'assets/images/project-villa-interior.jpg',
      'assets/images/blueprint-render.jpg'
    ],
    imageLabels: ['01 // 3D Exterior Elevation', '02 // Biophilic Courtyard Living', '03 // CAD Drafting & Vastu Grid'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Residential', 'Turnkey', 'Patna', 'Vastu-Harmonized']
  },
  {
    id: 2,
    title: 'Aura Horizon Boutique Resort',
    category: 'hospitality',
    location: 'Rajgir / Bodh Gaya Foothills',
    area: '42,000 sq.ft',
    scope: 'Master Planning, Architecture & Landscape',
    vastuFocus: 'Sacred Water Axis flowing North-to-East with Central Sunken Courtyard',
    description: 'Eco-conscious luxury retreat featuring 32 villas, banquet lawns, and an Ayurvedic wellness pavilion harmonized according to cosmic sun paths and earthen thermal mass.',
    image: 'assets/images/project-resort.jpg',
    images: [
      'assets/images/project-resort.jpg',
      'assets/images/project-resort-interior.jpg',
      'assets/images/project-banquet.jpg'
    ],
    imageLabels: ['01 // Resort Panoramic Grounds', '02 // Eco-Luxury Chalet Suite', '03 // Celebration Banquet Lawns'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Hospitality', 'Resort', 'Eco-Luxury', 'Landscape']
  },
  {
    id: 3,
    title: 'Sovereign Nexus Corporate HQ',
    category: 'commercial',
    location: 'Aerocity, Delhi NCR',
    area: '18,500 sq.ft',
    scope: 'Interior Architecture & MEP Construction',
    vastuFocus: 'South-West Director Chamber with North-West Dynamic Collaborative Pods',
    description: 'A biophilic high-tech corporate office featuring smart acoustic wooden baffles, dynamic circadian lighting, and non-destructive Vastu energetic alignment for 200+ team members.',
    image: 'assets/images/project-office.jpg',
    images: [
      'assets/images/project-office.jpg',
      'assets/images/project-office-meeting.jpg',
      'assets/images/site-laser.jpg'
    ],
    imageLabels: ['01 // Biophilic Open Workbay', '02 // Executive Boardroom & Pods', '03 // Laser MEP Alignment QA'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Commercial', 'Delhi NCR', 'Interiors', 'Workplace']
  },
  {
    id: 4,
    title: 'Terra Veda Botanical Cafe & Lounge',
    category: 'commercial',
    location: 'Boring Road, Patna',
    area: '3,800 sq.ft',
    scope: 'Concept Design, Interior Architecture & Fitout',
    vastuFocus: 'Agneya (SE) Open Artisan Kitchen & Vayavya (NW) Social Verandah',
    description: 'An earthy sensory sanctuary blending handcrafted terracotta jaali, reclaimed teakwood, cascading indoor flora, and micro-cement textures for urban coffee connoisseurs.',
    image: 'assets/images/project-cafe.jpg',
    images: [
      'assets/images/project-cafe.jpg',
      'assets/images/project-cafe-patio.jpg',
      'assets/images/site-handover.jpg'
    ],
    imageLabels: ['01 // Terracotta Jaali Hall', '02 // Alfresco Garden Verandah', '03 // Custom Teak Joinery'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Cafe & Restaurant', 'Hospitality', 'Patna', 'Interiors']
  },
  {
    id: 5,
    title: 'Prana Grand Banquet & Celebration Pavilion',
    category: 'hospitality',
    location: 'Greater Noida / Delhi NCR',
    area: '55,000 sq.ft',
    scope: 'Full Structural Build, Landscaping & Interiors',
    vastuFocus: 'Brahma Sthana Column-Free Grand Ballroom with Ishanya Entrance Canopy',
    description: 'Monumental banquet architecture featuring a 24-foot soaring ceiling, column-free cosmic acoustics, landscaped water fountains, and luxury bridal suites.',
    image: 'assets/images/project-banquet.jpg',
    images: [
      'assets/images/project-banquet.jpg',
      'assets/images/project-resort.jpg',
      'assets/images/site-concrete.jpg'
    ],
    imageLabels: ['01 // 24-Ft Grand Ballroom', '02 // Landscaped Water Lagoon', '03 // Superstructure Concrete Pour'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Hospitality', 'Banquet', 'Delhi NCR', 'Structural Build']
  },
  {
    id: 6,
    title: 'Vedic Ridge Urban Enclave & Master Plotting',
    category: 'urban-landscape',
    location: 'Bihta Growth Corridor, Patna Outer',
    area: '18 Acres',
    scope: 'Urban Planning, Sector Plotting & Infrastructure',
    vastuFocus: 'Master Grid Aligned to True Cardinal North with Sacred Green Spine',
    description: 'Gated master-planned township designed with ancient Vedic urban plotting (Vastu Purusha 9-Sector Grid), integrated solar drainage, wide boulevards, and biophilic parks.',
    image: 'assets/images/project-urban.jpg',
    images: [
      'assets/images/project-urban.jpg',
      'assets/images/blueprint-render.jpg',
      'assets/images/site-rebar.jpg'
    ],
    imageLabels: ['01 // 18-Acre Master Layout', '02 // 9-Sector Cardinal Grid CAD', '03 // Infrastructure Road Core'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Urban Design', 'Master Plotting', 'Landscaping', '10 Years Experience']
  },
  {
    id: 7,
    title: 'Precision Rebar Fabrication & Seismic Shear Core',
    category: 'construction',
    location: 'South Extension, New Delhi',
    area: '12,000 sq.ft',
    scope: 'Sub-structure, Post-Tensioned Slabs & Turnkey Execution',
    vastuFocus: 'Vibration & Seismic Damping aligned with Nairutya Foundation Anchor',
    description: 'On-ground construction demonstrating certified Fe-550 TMT rebar fabrication, seismic shear walls, and self-compacting concrete execution with zero architectural design compromise.',
    image: 'assets/images/site-rebar.jpg',
    images: [
      'assets/images/site-rebar.jpg',
      'assets/images/site-concrete.jpg',
      'assets/images/site-laser.jpg'
    ],
    imageLabels: ['01 // Fe-550D Rebar Framework', '02 // Formwork Concrete Pour', '03 // Laser Inspection QA'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Construction', 'Structural Engineering', 'Delhi', 'Quality Control']
  },
  {
    id: 8,
    title: 'Sky Sanctum Penthouse Renovation',
    category: 'residential',
    location: 'Golf Course Road, Gurgaon',
    area: '5,200 sq.ft',
    scope: 'High-End Interior Execution & Non-Destructive Vastu',
    vastuFocus: 'Directional Color Balancing & Elemental Energy Activation without breaking walls',
    description: 'A bespoke duplex transformation incorporating acoustic smoked oak, brushed brass finishes, custom Italian stone bathrooms, and subtle energetic alignment.',
    image: 'assets/images/site-handover.jpg',
    images: [
      'assets/images/site-handover.jpg',
      'assets/images/project-villa-interior.jpg',
      'assets/images/site-laser.jpg'
    ],
    imageLabels: ['01 // Finished Luxury Handover', '02 // Smoked Oak Master Suite', '03 // Non-Destructive Vastu QA'],
    blueprint: 'assets/images/blueprint-render.jpg',
    tags: ['Residential', 'Interior Execution', 'Gurgaon', 'Vastu Audit']
  }
];

// Client Testimonials Database
const TESTIMONIALS = [
  {
    name: 'Dr. Alok Ranjan',
    role: 'Villa Owner',
    location: 'Bailey Road, Patna',
    project: '7,400 sq.ft Turnkey Private Villa',
    rating: 5,
    text: 'VASTUSHED executed our villa from soil excavation to the final teakwood joinery under one contract. The central courtyard and North-East water lounge bring an incredible sense of calm. No cost escalation and zero delays.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Vikramaditya Singhania',
    role: 'Managing Director',
    location: 'Rajgir / Bodh Gaya Foothills',
    project: 'Aura Horizon Resort (42,000 sq.ft)',
    rating: 5,
    text: 'Finding an architecture team that also understands commercial construction and genuine non-superstitious Vastu is rare. Their team designed and built our column-free banquet and chalets flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Priya & Sameer Malhotra',
    role: 'Homeowners',
    location: 'Golf Course Road, Gurgaon',
    project: 'Duplex Penthouse Vastu Rectification',
    rating: 5,
    text: 'We bought a luxury duplex with several directional flaws. Traditional consultants suggested breaking our walls. VASTUSHED provided scientific elemental corrections and lighting realignment without a single hammer strike.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Aniket Verma',
    role: 'Founder & Restaurateur',
    location: 'Boring Road, Patna',
    project: 'Terra Veda Botanical Cafe',
    rating: 5,
    text: 'The combination of raw terracotta jaalis, micro-cement, and correct Agneya kitchen orientation made our cafe an instant architectural talking point in Patna. Delivered 2 weeks ahead of our launch schedule!',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
  }
];

// Practical Vastu Tips Database
const VASTU_TIPS = [
  {
    direction: 'SE (Agneya)',
    title: 'Kitchen & Metabolic Fire Balancing',
    category: 'kitchen',
    summary: 'The South-East governs the digestive and financial fire of the household.',
    tip: 'Place the cooking hob so the chef faces East while preparing meals, receiving morning ultraviolet vitality. Avoid placing water sinks directly beside the fire stove to prevent elemental conflict.',
    icon: 'flame',
    color: '#c8633a'
  },
  {
    direction: 'SW (Nairutya)',
    title: 'Master Bedroom & Grounding Stability',
    category: 'bedroom',
    summary: 'The Earth quadrant anchors authority, career longevity, and emotional serenity.',
    tip: 'Ensure the master bed headboard rests towards the South or East. Use grounding materials like solid hardwood, natural stone, or warm earth tones, and keep this room the highest elevation in the residence.',
    icon: 'anchor',
    color: '#d97706'
  },
  {
    direction: 'NE (Ishanya)',
    title: 'Pure Prana & Meditation Sanctuary',
    category: 'residential',
    summary: 'The cosmic receptor zone governing wisdom, spiritual peace, and clear intellect.',
    tip: 'Keep the North-East zone uncluttered, column-free, and well-illuminated with morning sunlight. Ideal for home temples, libraries, or shallow Zen water bowls. Never locate heavy staircases or septic tanks here.',
    icon: 'droplets',
    color: '#38bdf8'
  },
  {
    direction: 'Center (Brahma Sthana)',
    title: 'The Open Cosmic Heart (Aangan)',
    category: 'residential',
    summary: 'The navel of the property where vital life energy (Prana) circulates to all rooms.',
    tip: 'Maintain the center as an open courtyard, skylight atrium, or free circulation corridor. Keeping this core light and column-free fosters open communication and harmonious family relations.',
    icon: 'maximize',
    color: '#e5b95c'
  },
  {
    direction: 'All Zones',
    title: 'Non-Destructive Vastu Rectification',
    category: 'remedies',
    summary: 'Correcting directional defects in completed buildings without breaking walls.',
    tip: 'If an existing room cannot be relocated, use elemental harmonizers: warm amber lighting to boost sluggish energy, brass metallic dividing strips to seal toilet cutouts, and acoustic plants to filter negative airflow.',
    icon: 'shield-check',
    color: '#10b981'
  },
  {
    direction: 'NW (Vayavya)',
    title: 'Dynamic Airflow & Guest Hospitality',
    category: 'residential',
    summary: 'The Air element governs movement, trade, and interpersonal relationships.',
    tip: 'Ideal for guest rooms, social dining lounges, or finished goods inventory. Operable louvered windows that promote cross-ventilation prevent stagnant energy and maintain a welcoming social atmosphere.',
    icon: 'wind',
    color: '#38bdf8'
  }
];

function initMasterApp() {
  initNavbar();
  renderProjects('all');
  renderFeaturedProjects();
  initProjectFilters();
  initModal();
  initEstimator();
  initNumberCounters();
  renderTestimonials();
  renderVastuTips('all');
  initVastuTipFilters();
  initHeroSlider();
  initNamingSection();
  
  if (window.lucide) {
    try { window.lucide.createIcons(); } catch (e) {}
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMasterApp);
} else {
  initMasterApp();
}

// Navigation Bar
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('bg-opacity-95', 'shadow-2xl', 'backdrop-blur-md');
      navbar.style.backgroundColor = 'rgba(7, 10, 13, 0.96)';
    } else {
      navbar.style.backgroundColor = 'rgba(7, 10, 13, 0.85)';
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Animated Numbers / Counters
function initNumberCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
        let start = 0;
        const duration = 1800;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.innerText = decimals > 0 ? target.toFixed(decimals) + suffix : Math.round(target) + suffix;
            clearInterval(timer);
          } else {
            el.innerText = decimals > 0 ? start.toFixed(decimals) + suffix : Math.round(start) + suffix;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

// Render Client Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="glass-panel testimonial-card p-6 sm:p-8 rounded-2xl cad-corner flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1 text-amber-400">
            ${Array(t.rating).fill(0).map(() => `
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            `).join('')}
          </div>
          <span class="text-[10px] font-mono text-[#e5b95c] border border-[#e5b95c]/30 px-2 py-0.5 rounded">VERIFIED CLIENT</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
          "${t.text}"
        </p>
      </div>

      <div class="pt-4 border-t border-white/10 flex items-center gap-3">
        <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-[#e5b95c]/40" />
        <div>
          <h4 class="text-sm font-bold font-tech text-white">${t.name}</h4>
          <span class="text-[11px] font-mono text-slate-400 block">${t.role} • ${t.location}</span>
          <span class="text-[10px] font-mono text-[#c8633a]">${t.project}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Vastu Tips Hub
function renderVastuTips(filter = 'all') {
  const container = document.getElementById('vastu-tips-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? VASTU_TIPS 
    : VASTU_TIPS.filter(t => t.category === filter);

  container.innerHTML = filtered.map(tip => `
    <div class="glass-panel vastu-tip-card p-6 rounded-xl cad-corner border-l-4" style="border-left-color: ${tip.color}">
      <div class="flex items-center justify-between mb-3">
        <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5" style="color: ${tip.color}">
          ${tip.direction}
        </span>
        <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5" style="color: ${tip.color}">
          <i data-lucide="${tip.icon}" class="w-4 h-4"></i>
        </div>
      </div>
      <h4 class="text-base font-bold font-tech text-white mb-1">${tip.title}</h4>
      <p class="text-xs text-[#94a3b8] mb-3 font-mono">${tip.summary}</p>
      <div class="p-3 bg-white/[0.03] border border-white/5 rounded-lg text-xs text-slate-300 leading-relaxed font-light">
        <strong>VASTUSHED Rule:</strong> ${tip.tip}
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.filterVastuTips = function(filter, clickedBtn) {
  const buttons = document.querySelectorAll('.vastu-tip-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const btn = Array.from(buttons).find(b => b.dataset.filter === filter);
    if (btn) btn.classList.add('active');
  }
  renderVastuTips(filter);
};

function initVastuTipFilters() {
  const buttons = document.querySelectorAll('.vastu-tip-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.filterVastuTips(btn.dataset.filter, btn);
    });
  });
}

// =============================================================================
// PROJECT CARD MULTI-IMAGE SLIDER NAVIGATION
// =============================================================================
window.projectCardIndices = {};

window.navigateProjectCard = function(projectId, direction, event) {
  if (event) {
    event.stopPropagation();
  }
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project || !project.images || project.images.length === 0) return;

  if (typeof projectCardIndices[projectId] === 'undefined') {
    projectCardIndices[projectId] = 0;
  }

  let idx = projectCardIndices[projectId] + direction;
  if (idx < 0) idx = project.images.length - 1;
  if (idx >= project.images.length) idx = 0;
  projectCardIndices[projectId] = idx;

  // Update card image and dots across all instances of this project card
  const imgEls = document.querySelectorAll(`[data-project-img="${projectId}"]`);
  imgEls.forEach(img => {
    img.src = project.images[idx];
  });

  const labelEls = document.querySelectorAll(`[data-project-label="${projectId}"]`);
  labelEls.forEach(lbl => {
    lbl.innerText = `${idx + 1} / ${project.images.length}`;
  });

  const dotsContainers = document.querySelectorAll(`[data-project-dots="${projectId}"]`);
  dotsContainers.forEach(container => {
    const dots = container.querySelectorAll('.slider-dot');
    dots.forEach((dot, dIdx) => {
      if (dIdx === idx) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });
};

// Project Showcase Rendering (Used on architecture.html)
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    const images = p.images || [p.image];
    return `
    <div class="glass-panel group rounded-xl overflow-hidden cursor-pointer cad-corner transition-all duration-300" onclick="openProjectModal(${p.id})">
      <div class="relative h-64 overflow-hidden bg-slate-900 card-slider-wrap">
        <img 
          data-project-img="${p.id}"
          src="${images[0]}" 
          alt="${p.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#070a0d] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <!-- Multi-Image Slider Arrows -->
        <button class="slider-arrow-btn prev" onclick="navigateProjectCard(${p.id}, -1, event)" aria-label="Previous Photo" title="Previous Image">
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="slider-arrow-btn next" onclick="navigateProjectCard(${p.id}, 1, event)" aria-label="Next Photo" title="Next Image">
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>

        <!-- Slide Dots Indicator -->
        <div class="slider-dots" data-project-dots="${p.id}">
          ${images.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
        </div>

        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          ${p.tags.slice(0, 2).map(tag => `
            <span class="tech-tag">${tag}</span>
          `).join('')}
        </div>

        <!-- Image Index Badge -->
        <div class="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-[#e5b95c] border border-white/10" data-project-label="${p.id}">
          1 / ${images.length}
        </div>

        <div class="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#e5b95c] border border-[#e5b95c]/30 pointer-events-none">
          ${p.area}
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-2">
          <span class="flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#e5b95c]"></i> ${p.location}
          </span>
          <span class="text-[#c8633a] font-semibold">${p.scope.split(',')[0]}</span>
        </div>
        <h3 class="text-xl font-bold font-tech text-white mb-2 group-hover:text-[#e5b95c] transition-colors">
          ${p.title}
        </h3>
        <p class="text-sm text-[#94a3b8] line-clamp-2 mb-4 font-light">
          ${p.description}
        </p>
        <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
          <span class="text-[#e2d9cc]/70 flex items-center gap-1">
            <i data-lucide="compass" class="w-3.5 h-3.5 text-[#38bdf8]"></i> Vastu Aligned
          </span>
          <span class="text-[#e5b95c] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Blueprint & Specs &rarr;
          </span>
        </div>
      </div>
    </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Featured Projects Preview (Used on index.html)
function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects-preview');
  if (!container) return;

  const featured = PROJECTS.slice(0, 3);
  container.innerHTML = featured.map(p => {
    const images = p.images || [p.image];
    return `
    <div class="glass-panel group rounded-xl overflow-hidden cursor-pointer cad-corner transition-all duration-300" onclick="openProjectModal(${p.id})">
      <div class="relative h-60 overflow-hidden bg-slate-900 card-slider-wrap">
        <img 
          data-project-img="${p.id}"
          src="${images[0]}" 
          alt="${p.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#070a0d] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <!-- Multi-Image Slider Arrows -->
        <button class="slider-arrow-btn prev" onclick="navigateProjectCard(${p.id}, -1, event)" aria-label="Previous Photo">
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="slider-arrow-btn next" onclick="navigateProjectCard(${p.id}, 1, event)" aria-label="Next Photo">
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>

        <!-- Slide Dots Indicator -->
        <div class="slider-dots" data-project-dots="${p.id}">
          ${images.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
        </div>

        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          <span class="tech-tag">${p.tags[0]}</span>
        </div>

        <div class="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-[#e5b95c] border border-white/10" data-project-label="${p.id}">
          1 / ${images.length}
        </div>

        <div class="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-[#e5b95c] border border-[#e5b95c]/30 pointer-events-none">
          ${p.area}
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-1.5">
          <span>${p.location}</span>
          <span class="text-[#e5b95c]">${p.category.toUpperCase()}</span>
        </div>
        <h4 class="text-lg font-bold font-tech text-white group-hover:text-[#e5b95c] transition-colors mb-2">
          ${p.title}
        </h4>
        <p class="text-xs text-[#94a3b8] line-clamp-2 mb-3 font-light">
          ${p.description}
        </p>
        <span class="text-xs font-mono text-[#e5b95c] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Inspect Architecture & Vastu &rarr;
        </span>
      </div>
    </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });
}

// Modal Inspector with Full Carousel
let currentModalProject = null;
let currentModalSlideIdx = 0;

function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') navigateModalSlide(-1);
    if (e.key === 'ArrowRight') navigateModalSlide(1);
  });
}

window.navigateModalSlide = function(direction) {
  if (!currentModalProject || !currentModalProject.images) return;
  const images = currentModalProject.images;
  currentModalSlideIdx = (currentModalSlideIdx + direction + images.length) % images.length;
  updateModalImage();
};

function updateModalImage() {
  if (!currentModalProject) return;
  const images = currentModalProject.images || [currentModalProject.image];
  const labels = currentModalProject.imageLabels || [];
  const modalImg = document.getElementById('modal-project-img');
  const labelEl = document.getElementById('modal-slide-label');
  const thumbsContainer = document.getElementById('modal-thumbnails');

  if (modalImg) {
    modalImg.src = images[currentModalSlideIdx];
  }
  if (labelEl) {
    labelEl.innerText = labels[currentModalSlideIdx] || `Photo ${currentModalSlideIdx + 1} of ${images.length}`;
  }

  if (thumbsContainer) {
    const thumbs = thumbsContainer.querySelectorAll('.modal-thumb');
    thumbs.forEach((thumb, idx) => {
      if (idx === currentModalSlideIdx) {
        thumb.classList.add('border-[#e5b95c]', 'opacity-100');
        thumb.classList.remove('border-white/10', 'opacity-50');
      } else {
        thumb.classList.remove('border-[#e5b95c]', 'opacity-100');
        thumb.classList.add('border-white/10', 'opacity-50');
      }
    });
  }
}

window.openProjectModal = function(id, slideIdx = 0) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  currentModalProject = project;
  currentModalSlideIdx = slideIdx;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalLocation = document.getElementById('modal-project-location');
  const modalArea = document.getElementById('modal-project-area');
  const modalScope = document.getElementById('modal-project-scope');
  const modalVastu = document.getElementById('modal-project-vastu');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalTags = document.getElementById('modal-project-tags');
  const whatsappBtn = document.getElementById('modal-whatsapp-btn');
  const thumbsContainer = document.getElementById('modal-thumbnails');

  if (modalTitle) modalTitle.innerText = project.title;
  if (modalLocation) modalLocation.innerText = project.location;
  if (modalArea) modalArea.innerText = project.area;
  if (modalScope) modalScope.innerText = project.scope;
  if (modalVastu) modalVastu.innerText = project.vastuFocus;
  if (modalDesc) modalDesc.innerText = project.description;

  const images = project.images || [project.image];
  if (thumbsContainer) {
    thumbsContainer.innerHTML = images.map((img, idx) => `
      <div class="modal-thumb w-16 h-12 rounded-lg overflow-hidden border cursor-pointer transition-all ${idx === currentModalSlideIdx ? 'border-[#e5b95c] opacity-100' : 'border-white/10 opacity-50'}" onclick="currentModalSlideIdx = ${idx}; updateModalImage();">
        <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover" />
      </div>
    `).join('');
  }

  updateModalImage();

  if (modalTags) {
    modalTags.innerHTML = project.tags.map(tag => `
      <span class="tech-tag">${tag}</span>
    `).join('');
  }

  if (whatsappBtn) {
    const text = encodeURIComponent(`Hello VASTUSHED Team, I am interested in learning more about your project: "${project.title}" (${project.location}). Please share consultation details.`);
    whatsappBtn.href = `https://wa.me/919999999999?text=${text}`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
};

// =============================================================================
// HOMEPAGE HERO INTERACTIVE PROJECT SLIDER
// =============================================================================
let currentHeroSlideIndex = 0;
let heroSliderAutoTimer = null;

window.showHeroSlide = function(index) {
  const slides = document.querySelectorAll('.hero-project-slide');
  if (!slides.length) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentHeroSlideIndex = index;

  slides.forEach((slide, idx) => {
    if (idx === currentHeroSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  const counter = document.getElementById('hero-slider-counter');
  if (counter) {
    counter.innerText = `0${currentHeroSlideIndex + 1} / 0${slides.length}`;
  }

  const dots = document.querySelectorAll('.hero-slider-dot');
  dots.forEach((dot, idx) => {
    if (idx === currentHeroSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

window.navigateHeroSlide = function(direction, event) {
  if (event) {
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
  }
  const slides = document.querySelectorAll('.hero-project-slide');
  if (!slides.length) return;
  window.showHeroSlide(currentHeroSlideIndex + direction);
  resetHeroSliderTimer();
};

window.goToHeroSlide = function(index, event) {
  if (event) {
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
  }
  window.showHeroSlide(index);
  resetHeroSliderTimer();
};

function startHeroSliderTimer() {
  clearInterval(heroSliderAutoTimer);
  heroSliderAutoTimer = setInterval(() => {
    window.showHeroSlide(currentHeroSlideIndex + 1);
  }, 5000);
}

function resetHeroSliderTimer() {
  clearInterval(heroSliderAutoTimer);
  startHeroSliderTimer();
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-project-slide');
  if (!slides.length) return;

  const prevBtn = document.getElementById('hero-slider-prev');
  const nextBtn = document.getElementById('hero-slider-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => window.navigateHeroSlide(-1, e));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => window.navigateHeroSlide(1, e));
  }

  const dots = document.querySelectorAll('.hero-slider-dot');
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => window.goToHeroSlide(idx, e));
  });

  const box = document.getElementById('hero-slider-box');
  if (box) {
    box.addEventListener('mouseenter', () => clearInterval(heroSliderAutoTimer));
    box.addEventListener('mouseleave', () => startHeroSliderTimer());
  }

  window.showHeroSlide(0);
  startHeroSliderTimer();
}

window.initHeroSlider = initHeroSlider;

// Estimator
function initEstimator() {
  const form = document.getElementById('consultation-estimator-form');
  const serviceSelect = document.getElementById('estimator-service');
  const scaleSelect = document.getElementById('estimator-scale');
  const areaInput = document.getElementById('estimator-area');
  const citySelect = document.getElementById('estimator-city');
  const outputScope = document.getElementById('estimator-result-scope');
  const outputTurnaround = document.getElementById('estimator-result-turnaround');
  const sendWhatsAppBtn = document.getElementById('estimator-whatsapp-action');

  if (!form || !serviceSelect || !scaleSelect || !areaInput || !citySelect) return;

  function calculateEstimate() {
    const service = serviceSelect.value;
    const scale = scaleSelect.value;
    const area = parseFloat(areaInput.value) || 2500;
    const city = citySelect.value;

    let scopeDetails = '';
    let turnaround = '';

    if (service === 'turnkey') {
      scopeDetails = `Full Architectural Design + 3D Working Drawings + Structural Build & Materials + Vastu Integration (${area.toLocaleString()} sq.ft)`;
      turnaround = area > 5000 ? '12 - 16 Months' : '8 - 12 Months';
    } else if (service === 'architecture') {
      scopeDetails = `Architectural Space Planning, Conceptual Facade & 3D Renderings, Municipal Submissions & Vastu Alignment (${area.toLocaleString()} sq.ft)`;
      turnaround = '6 - 8 Weeks';
    } else if (service === 'interiors') {
      scopeDetails = `Bespoke Interior Architecture, Joinery Detailing, Lighting & Material Moodboards, Vastu Balancing (${area.toLocaleString()} sq.ft)`;
      turnaround = '6 - 10 Weeks';
    } else if (service === 'vastu') {
      scopeDetails = `Non-Destructive Directional Audit, Energy Grid Analysis, Elemental Corrections, Layout Vastu Harmonization Report`;
      turnaround = '3 - 5 Working Days';
    } else {
      scopeDetails = `Master Layout Plotting, Solar/Wind Path Zoning, Road Network & Landscaping Masterplan`;
      turnaround = '4 - 8 Weeks';
    }

    if (outputScope) outputScope.innerText = scopeDetails;
    if (outputTurnaround) outputTurnaround.innerText = turnaround;

    const message = encodeURIComponent(
      `Hello VASTUSHED Team,\nI would like to inquire about your services:\n- Service: ${service.toUpperCase()}\n- Project Type: ${scale}\n- Approximate Area: ${area} Sq.Ft.\n- Location: ${city}\nEstimated Scope: ${scopeDetails}\nPlease connect with me for a preliminary consultation.`
    );

    if (sendWhatsAppBtn) {
      sendWhatsAppBtn.href = `https://wa.me/919876543210?text=${message}`;
    }
  }

  form.addEventListener('input', calculateEstimate);
  calculateEstimate();
}

// =============================================================================
// THE NAMING OF VASTUSHED: 9-STAGE ARCHITECTURAL, CIVIL & COSMIC BLENDER ENGINE
// CAD Floorplan • 9x9 Parametric Grid • Furniture • People • Activities • X-Ray 3D
// Architecture (Soul) ➔ Construction (Body) ➔ Harmonious Living (Alignment)
// =============================================================================

const BLENDER_STAGES = [
  // ---------------------------------------------------------------------------
  // PART I: ARCHITECTURE & SPATIAL DESIGN (THE SOUL // SPATIAL SOFTWARE)
  // ---------------------------------------------------------------------------
  {
    stage: 0,
    key: 'arch_massing',
    pill: 'architecture',
    phase: 'Phase 1: Architecture & Spatial Planning',
    badge: 'STAGE 01 // MACRO MASSING & SOLAR ORIENTATION',
    title: 'ARCHITECTURE — Site Massing & Solar Orientation',
    subtitle: 'Sun Path Vector • Boundary Envelope • Breezeway Axis • The Soul Inception',
    accentColor: '#38bdf8',
    glowClass: 'active-arch',
    quote: '"Architecture is the soul—the intelligent spatial programming that captures daylight, breeze, and functional harmony before a single brick is laid."',
    designPct: 45,
    constructionPct: 5,
    alignmentPct: 25,
    statusText: 'STAGE 1/9: SITE ORIENTATION, SOLAR MASSING & ENVELOPE',
    explanation: 'The architectural journey begins with macro space planning: charting the path of the sun from dawn to dusk, establishing setback boundaries, defining entry breezeways, and determining volumetric heights to ensure natural illumination.',
    serviceLink: 'architecture.html',
    serviceActionText: 'Explore Architectural Spatial Planning &rarr;',
    serviceBadge: 'PHASE 01: ARCHITECTURAL DESIGN',
    vastuGridAlpha: 0.15,
    planLinesAlpha: 0.45,
    furnitureAlpha: 0.0,
    peopleAlpha: 0.0,
    activitiesAlpha: 0.0,
    structureAlpha: 0.0,
    xray3dAlpha: 0.0,
    cosmicFlowAlpha: 0.05,
    alignmentBeamAlpha: 0.0,
    shapes: ['compassRings']
  },
  {
    stage: 1,
    key: 'arch_plan',
    pill: 'architecture',
    phase: 'Phase 1: Architecture & Spatial Planning',
    badge: 'STAGE 02 // CAD PLAN',
    title: 'ARCHITECTURE — CAD Plan & Multi-Room Layout',
    subtitle: 'Master Suite • Courtyard • Kitchen • Hallways • Window Mullions & Door Swings',
    accentColor: '#0ea5e9',
    glowClass: 'active-arch',
    quote: '"A big, generous floorplan balances open gathering courtyards with quiet, restorative personal sanctuaries."',
    designPct: 75,
    constructionPct: 15,
    alignmentPct: 40,
    statusText: 'STAGE 2/9: ARCHITECTURAL CAD PLAN & FULL ROOM PARTITIONS',
    explanation: 'Here the plan expands into a full-scale architectural blueprint: double-line exterior envelope walls, 9 integrated functional room suites, expansive central Aangan courtyard, radial doorway swing arcs, and expansive daylight fenestrations.',
    serviceLink: 'architecture.html',
    serviceActionText: 'Explore CAD Master Planning &rarr;',
    serviceBadge: 'PHASE 01: ARCHITECTURAL BLUEPRINTS',
    vastuGridAlpha: 0.25,
    planLinesAlpha: 1.0,
    furnitureAlpha: 0.15,
    peopleAlpha: 0.0,
    activitiesAlpha: 0.15,
    structureAlpha: 0.05,
    xray3dAlpha: 0.0,
    cosmicFlowAlpha: 0.1,
    alignmentBeamAlpha: 0.0,
    shapes: ['astakona', 'compassRings']
  },
  {
    stage: 2,
    key: 'arch_interiors',
    pill: 'architecture',
    phase: 'Phase 1: Architecture & Spatial Planning',
    badge: 'STAGE 03 // INTERIOR PROGRAM & HUMAN FURNISHING',
    title: 'ARCHITECTURE — Interior Furnishing & Active Spaces',
    subtitle: 'Custom Furniture CAD • Active Room Ergonomics • People & Daily Flow',
    accentColor: '#06b6d4',
    glowClass: 'active-arch',
    quote: '"Spaces only become alive through the people who inhabit them. We detail every joinery piece, sofa nook, and dining zone to nurture everyday rituals."',
    designPct: 100,
    constructionPct: 25,
    alignmentPct: 55,
    statusText: 'STAGE 3/9: FULL FURNITURE BLUEPRINT, OCCUPANT CIRCULATION & ACTIVITY ZONING',
    explanation: 'Populating the spaces with living intelligence: ergonomic furniture layouts (master king bed, dining table, chef island counter, temple altar, study desk), human occupants moving through the home, and dedicated activity tags from morning prayer to evening rest.',
    serviceLink: 'architecture.html',
    serviceActionText: 'Explore Luxury Interior Architecture &rarr;',
    serviceBadge: 'PHASE 01: INTERIORS & HUMAN LIVING',
    vastuGridAlpha: 0.35,
    planLinesAlpha: 1.0,
    furnitureAlpha: 1.0,
    peopleAlpha: 1.0,
    activitiesAlpha: 0.95,
    structureAlpha: 0.15,
    xray3dAlpha: 0.0,
    cosmicFlowAlpha: 0.15,
    alignmentBeamAlpha: 0.0,
    shapes: ['astakona', 'compassRings']
  },

  // ---------------------------------------------------------------------------
  // PART II: CIVIL ENGINEERING & CONSTRUCTION (THE BODY // PHYSICAL SHED)
  // ---------------------------------------------------------------------------
  {
    stage: 3,
    key: 'civil_raft',
    pill: 'construction',
    phase: 'Phase 2: Civil Construction & Engineering',
    badge: 'STAGE 04 // SUBTERRANEAN RAFT & REBAR FOUNDATION',
    title: 'CONSTRUCTION — Heavy Footings & Rebar Grid',
    subtitle: 'Soil Load Testing • Fe550D Rebar Cages • Earthquake-Resilient Pile Caps',
    accentColor: '#f97316',
    glowClass: 'active-shed',
    quote: '"Before reaching into the sky, a building must root itself deeply into the earth. Precision rebar cages form the unyielding anchor of the structure."',
    designPct: 85,
    constructionPct: 50,
    alignmentPct: 60,
    statusText: 'STAGE 4/9: EXCAVATION, PILE FOOTING PADS & STRUCTURAL REBAR CAGES',
    explanation: 'Transitioning from drawing to physical earth: excavating engineered depths, casting concrete foundation raft pads at structural bay intersections, and tying ductile Fe550D TMT rebar cages to safely distribute seismic and gravity loads.',
    serviceLink: 'construction.html',
    serviceActionText: 'Explore Foundation & Civil Works &rarr;',
    serviceBadge: 'PHASE 02: STRUCTURAL ENGINEERING',
    vastuGridAlpha: 0.3,
    planLinesAlpha: 0.8,
    furnitureAlpha: 0.35,
    peopleAlpha: 0.25,
    activitiesAlpha: 0.25,
    structureAlpha: 0.65,
    xray3dAlpha: 0.15,
    cosmicFlowAlpha: 0.2,
    alignmentBeamAlpha: 0.1,
    shapes: ['astakona']
  },
  {
    stage: 4,
    key: 'civil_columns',
    pill: 'construction',
    phase: 'Phase 2: Civil Construction & Engineering',
    badge: 'STAGE 05 // MONOLITHIC RCC FRAMING (COLUMNS & BEAMS)',
    title: 'CONSTRUCTION — 16 Heavy Columns & Tie Beams',
    subtitle: 'M35 Ready-Mix Concrete • Moment Frames • Rigid Bay Spans • The Shed Skeleton',
    accentColor: '#ea580c',
    glowClass: 'active-shed',
    quote: '"Our own in-house construction crew pours the columns and ties every beam, eliminating contractor shortcuts and protecting architectural purity."',
    designPct: 70,
    constructionPct: 80,
    alignmentPct: 65,
    statusText: 'STAGE 5/9: 16 REINFORCED CONCRETE COLUMNS & PERIMETER TIE BEAM MATRIX',
    explanation: 'Erecting the heavy skeleton: casting 16 monolithic RCC columns with perimeter tie beams that lock the structural grid in place. The column bays are engineered to frame open courtyards and span wide room enclosures without internal load-bearing interruptions.',
    serviceLink: 'construction.html',
    serviceActionText: 'View Turnkey Construction Packages &rarr;',
    serviceBadge: 'PHASE 02: MONOLITHIC RCC BUILD',
    vastuGridAlpha: 0.25,
    planLinesAlpha: 0.75,
    furnitureAlpha: 0.45,
    peopleAlpha: 0.35,
    activitiesAlpha: 0.35,
    structureAlpha: 1.0,
    xray3dAlpha: 0.45,
    cosmicFlowAlpha: 0.25,
    alignmentBeamAlpha: 0.2,
    shapes: ['astakona', 'compassRings']
  },
  {
    stage: 5,
    key: 'civil_shell',
    pill: 'construction',
    phase: 'Phase 2: Civil Construction & Engineering',
    badge: 'STAGE 06 // CIVIL SHELL & X-RAY 3D CANOPY',
    title: 'CONSTRUCTION — X-Ray 3D Cutaway & Sheltering Shell',
    subtitle: 'Extruded Wall Heights • Cantilevered Canopy • Monolithic Thermal Envelope',
    accentColor: '#c8633a',
    glowClass: 'active-shed',
    quote: '"The Shed is humanity’s archetypal guardian. Its cantilevered canopy and thermal mass shield occupants from extreme weather and the march of time."',
    designPct: 55,
    constructionPct: 100,
    alignmentPct: 70,
    statusText: 'STAGE 6/9: X-RAY 3D AXONOMETRIC CUTAWAY & WEATHERPROOF SHELTER',
    explanation: 'The physical body of the building is fully established: 3D walls extruded upward with insulated masonry, weatherproof roof slabs, cantilevered protective overhangs, and full structural enclosure ready to receive energetic tuning.',
    serviceLink: 'construction.html',
    serviceActionText: 'Consult Civil Construction Directors &rarr;',
    serviceBadge: 'PHASE 02: COMPLETE SHED SHELTER',
    vastuGridAlpha: 0.2,
    planLinesAlpha: 0.7,
    furnitureAlpha: 0.55,
    peopleAlpha: 0.45,
    activitiesAlpha: 0.45,
    structureAlpha: 1.0,
    xray3dAlpha: 1.0,
    cosmicFlowAlpha: 0.3,
    alignmentBeamAlpha: 0.25,
    shapes: ['compassRings']
  },

  // ---------------------------------------------------------------------------
  // PART III: VASTU & HARMONIOUS LIVING ALIGNMENT (THE HARMONY // HARMONIOUS LIVING)
  // ---------------------------------------------------------------------------
  {
    stage: 6,
    key: 'vastu_mandala',
    pill: 'vastu',
    phase: 'Phase 3: Vastu & Harmonious Living Alignment',
    badge: 'STAGE 07 // 9x9 VASTU PURUSHA MANDALA GRID',
    title: 'VASTU — 81-Pada Paramasayika Calibration',
    subtitle: '9 Quadrants • Pancha Mahabhutas Elements • Directional Energy Calibrator',
    accentColor: '#e5b95c',
    glowClass: 'active-vastu',
    quote: '"Vastu is not superstition; it is the geometry of nature. Mapping the 81 Padas aligns human circadian rhythms with solar radiation and geomagnetic axes."',
    designPct: 85,
    constructionPct: 85,
    alignmentPct: 85,
    statusText: 'STAGE 7/9: 81-PADA VASTU PURUSHA MANDALA & 5-ELEMENT RESONANCE',
    explanation: 'Superimposing the 9x9 Vedic Paramasayika mandala onto the completed floorplan: tuning Water (Jal) in North-East, Fire (Agni) in South-East, Earth (Prithvi) in South-West, Air (Vayu) in North-West, and pure Space (Akasha) in the central Brahma Sthana.',
    serviceLink: 'vastu.html',
    serviceActionText: 'Explore Scientific Vastu Audits &rarr;',
    serviceBadge: 'PHASE 03: VASTU MANDALA CALIBRATION',
    vastuGridAlpha: 1.0,
    planLinesAlpha: 0.85,
    furnitureAlpha: 0.75,
    peopleAlpha: 0.7,
    activitiesAlpha: 0.95,
    structureAlpha: 0.65,
    xray3dAlpha: 0.35,
    cosmicFlowAlpha: 0.55,
    alignmentBeamAlpha: 0.5,
    shapes: ['sriYantra', 'astakona', 'compassRings']
  },
  {
    stage: 7,
    key: 'vastu_prana',
    pill: 'vastu',
    phase: 'Phase 3: Vastu & Harmonious Living Alignment',
    badge: 'STAGE 08 // COSMIC PRANA & SACRED GEOMETRY',
    title: 'VASTU — Cosmic Energy Lines & Sacred Vortices',
    subtitle: 'Prana Streamlines • Sri Yantra Triangles • Fibonacci Golden Ratio • Toroidal Field',
    accentColor: '#a855f7',
    glowClass: 'active-vastu',
    quote: '"When sacred geometry is set in motion, positive pranic energy streams along structural corridors, revitalizing the body and mind of every resident."',
    designPct: 95,
    constructionPct: 90,
    alignmentPct: 95,
    statusText: 'STAGE 8/9: COSMIC PRANA STREAMLINES FLOWING THROUGH STRUCTURAL BAYS',
    explanation: 'Activating dynamic energy flow: 36 circulating Prana vectors move freely through the column bays and central courtyard, while rotating Sri Yantra triangles, Astakona star fields, and Fibonacci spirals balance the spatial field without requiring structural demolitions.',
    serviceLink: 'vastu.html',
    serviceActionText: 'Explore Sacred Geometry & Bio-Resonance &rarr;',
    serviceBadge: 'PHASE 03: BIO-ENERGETIC RESONANCE',
    vastuGridAlpha: 0.9,
    planLinesAlpha: 0.9,
    furnitureAlpha: 0.85,
    peopleAlpha: 0.85,
    activitiesAlpha: 1.0,
    structureAlpha: 0.75,
    xray3dAlpha: 0.55,
    cosmicFlowAlpha: 1.0,
    alignmentBeamAlpha: 0.85,
    shapes: ['sriYantra', 'astakona', 'spiral', 'compassRings']
  },
  {
    stage: 8,
    key: 'vastushed_harmonious_living',
    pill: 'vastushed',
    phase: 'The Culmination: VASTUSHED Harmonious Living',
    badge: 'STAGE 09 // VASTUSHED HARMONIOUS LIVING EQUILIBRIUM',
    title: 'VASTUSHED — Design. Build. Align. Harmonious Living',
    subtitle: 'The Ultimate Fruition • Architecture + Construction + Vastu in Pure Harmony',
    accentColor: '#2dd4bf',
    glowClass: 'active-vastushed',
    quote: '"Architecture is the Soul. Construction is the Body. Vastu is the Alignment. When all three unite, the building awakens as a living sanctuary of health, wealth, and generational peace."',
    designPct: 100,
    constructionPct: 100,
    alignmentPct: 100,
    statusText: 'STAGE 9/9: VASTUSHED MASTER EQUILIBRIUM — HARMONIOUS LIVING SANCTUARY',
    explanation: 'The supreme culmination of VASTUSHED: Design, Construction, and Sacred Vastu unite in flawless harmonious living resonance. The architectural spaces nurture modern luxury; the monolithic concrete shell protects with unyielding strength; and cosmic prana circulates freely, ensuring occupants thrive in absolute peace, vitality, and prosperity.',
    serviceLink: 'vastu.html',
    serviceActionText: 'Begin Your Design-Build-Align Journey &rarr;',
    serviceBadge: 'THE FULL JOURNEY: 100% HARMONIOUS LIVING',
    vastuGridAlpha: 0.85,
    planLinesAlpha: 1.0,
    furnitureAlpha: 1.0,
    peopleAlpha: 1.0,
    activitiesAlpha: 1.0,
    structureAlpha: 0.9,
    xray3dAlpha: 0.75,
    cosmicFlowAlpha: 1.0,
    alignmentBeamAlpha: 1.0,
    shapes: ['sriYantra', 'astakona', 'spiral', 'compassRings']
  }
];

let currentBlenderStageIndex = 8; // Default to Stage 9 Master Harmonious Living
window.currentBlenderStageIndex = 8;
let blenderAnimId = null;
let blenderAngle = 0;
let blenderMouse = { x: null, y: null, isHovered: false, targetX: 0, targetY: 0 };
let blenderHoverCell = { r: null, c: null };
let blenderRipples = [];
let blenderCosmicParticles = [];

// Layer Toggles (All 9 interactive layers)
window.blenderLayerToggles = {
  shapes: true,
  vastuGrid: true,
  planLines: true,
  furniture: true,
  people: true,
  activities: true,
  structure: true,
  xray3d: true,
  cosmicFlow: true
};

// Stage Recommended Layer Presets
const STAGE_LAYER_PRESETS = [
  // 0: Massing (Solar Vector & Orientation)
  { shapes: true, vastuGrid: true, planLines: true, furniture: false, people: false, activities: false, structure: false, xray3d: false, cosmicFlow: false },
  // 1: CAD Plan (Architectural Blueprint)
  { shapes: false, vastuGrid: true, planLines: true, furniture: false, people: false, activities: false, structure: false, xray3d: false, cosmicFlow: false },
  // 2: Interiors (Furnishing & People)
  { shapes: false, vastuGrid: false, planLines: true, furniture: true, people: true, activities: true, structure: false, xray3d: false, cosmicFlow: false },
  // 3: Foundation (Rebar Raft & Footings)
  { shapes: false, vastuGrid: false, planLines: true, furniture: false, people: false, activities: false, structure: true, xray3d: false, cosmicFlow: false },
  // 4: Columns (16 Monolithic Columns & Tie Beams)
  { shapes: false, vastuGrid: false, planLines: true, furniture: false, people: false, activities: false, structure: true, xray3d: false, cosmicFlow: false },
  // 5: 3D Shell (Axonometric 3D Cutaway)
  { shapes: false, vastuGrid: false, planLines: true, furniture: false, people: false, activities: false, structure: true, xray3d: true, cosmicFlow: false },
  // 6: 9x9 Vastu (81 Padas & 5 Elements)
  { shapes: true, vastuGrid: true, planLines: true, furniture: false, people: false, activities: true, structure: false, xray3d: false, cosmicFlow: false },
  // 7: Prana Flow (Cosmic Energy & Vortices)
  { shapes: true, vastuGrid: true, planLines: false, furniture: false, people: false, activities: true, structure: false, xray3d: false, cosmicFlow: true },
  // 8: Harmonious Living (All 9 Layers Active)
  { shapes: true, vastuGrid: true, planLines: true, furniture: true, people: true, activities: true, structure: true, xray3d: true, cosmicFlow: true }
];

window.updateLayerToggleButtons = function() {
  const keys = ['vastuGrid', 'planLines', 'furniture', 'people', 'activities', 'structure', 'xray3d', 'cosmicFlow', 'shapes'];
  keys.forEach(key => {
    const btn = document.getElementById(`toggle-btn-${key}`);
    if (btn) {
      if (window.blenderLayerToggles[key]) {
        btn.classList.add('bg-[#2dd4bf]/20', 'border-[#2dd4bf]', 'text-white');
        btn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-400');
        btn.style.borderColor = '#2dd4bf';
        btn.style.boxShadow = '0 0 14px rgba(45, 212, 191, 0.4)';
      } else {
        btn.classList.remove('bg-[#2dd4bf]/20', 'border-[#2dd4bf]', 'text-white');
        btn.classList.add('bg-white/5', 'border-white/10', 'text-slate-400');
        btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        btn.style.boxShadow = 'none';
      }
    }
  });
};

window.toggleBlenderLayer = function(layerKey) {
  if (typeof window.blenderLayerToggles[layerKey] !== 'undefined') {
    window.blenderLayerToggles[layerKey] = !window.blenderLayerToggles[layerKey];
    window.updateLayerToggleButtons();

    // Trigger visual ripple burst
    blenderRipples.push({
      x: 0,
      y: 0,
      r: 8,
      maxR: 140,
      life: 0.9,
      color: window.blenderLayerToggles[layerKey] ? '#2dd4bf' : '#94a3b8'
    });
  }
};

window.setBlenderStage = function(stageIdx) {
  const idx = Math.max(0, Math.min(BLENDER_STAGES.length - 1, parseInt(stageIdx, 10)));
  currentBlenderStageIndex = idx;
  window.currentBlenderStageIndex = idx;
  const data = BLENDER_STAGES[idx];

  // 1. Synchronize Active Multi-Dimensional Layer Toggles to this stage
  const preset = STAGE_LAYER_PRESETS[idx];
  if (preset) {
    Object.assign(window.blenderLayerToggles, preset);
  }
  window.updateLayerToggleButtons();

  // 2. Update 9 Stage Pill Buttons
  const stageBtns = document.querySelectorAll('.stage-pill-btn');
  stageBtns.forEach((btn, i) => {
    const btnIdx = btn.getAttribute('data-stage-index') !== null 
      ? parseInt(btn.getAttribute('data-stage-index'), 10) 
      : i;
    if (btnIdx === idx) {
      btn.classList.add('active', 'text-white');
      btn.classList.remove('border-white/10', 'bg-white/5', 'text-slate-300');
      btn.style.borderColor = data.accentColor;
      btn.style.backgroundColor = `${data.accentColor}25`;
      btn.style.boxShadow = `0 0 16px ${data.accentColor}40`;
    } else {
      btn.classList.remove('active', 'text-white');
      btn.classList.add('border-white/10', 'bg-white/5', 'text-slate-300');
      btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      btn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      btn.style.boxShadow = 'none';
    }
  });

  // 3. Update Equation Pills (ARCHITECTURE, CONSTRUCTION, HARMONIOUS LIVING)
  const pills = document.querySelectorAll('.naming-equation-pill');
  pills.forEach(pill => {
    pill.classList.remove('active-arch', 'active-shed', 'active-vastu', 'active-vastushed');
    if (pill.dataset.namingPill === data.pill) {
      pill.classList.add(data.glowClass);
    }
  });

  // 4. Update Range Slider
  const slider = document.getElementById('naming-blend-slider');
  if (slider && parseInt(slider.value, 10) !== idx) {
    slider.value = idx;
  }

  // 5. Update Telemetry Progress Bars & Values
  const designBar = document.getElementById('telemetry-design-bar');
  const designVal = document.getElementById('telemetry-design-val');
  const execBar = document.getElementById('telemetry-exec-bar');
  const execVal = document.getElementById('telemetry-exec-val');
  const alignBar = document.getElementById('telemetry-align-bar');
  const alignVal = document.getElementById('telemetry-align-val');

  if (designBar) designBar.style.width = `${data.designPct}%`;
  if (designVal) designVal.innerText = `${data.designPct}%`;
  if (execBar) execBar.style.width = `${data.constructionPct}%`;
  if (execVal) execVal.innerText = `${data.constructionPct}%`;
  if (alignBar) alignBar.style.width = `${data.alignmentPct}%`;
  if (alignVal) alignVal.innerText = `${data.alignmentPct}%`;

  // 6. Update Detail Narrative Card
  const badgeEl = document.getElementById('naming-detail-badge');
  const titleEl = document.getElementById('naming-detail-title');
  const subtitleEl = document.getElementById('naming-detail-subtitle');
  const quoteEl = document.getElementById('naming-detail-quote');
  const explanationEl = document.getElementById('naming-detail-explanation');
  const ctaBtn = document.getElementById('naming-detail-cta');
  const serviceBadgeEl = document.getElementById('naming-service-badge');
  const stageStatus = document.getElementById('naming-stage-status');

  if (badgeEl) badgeEl.innerText = data.badge;
  if (titleEl) {
    titleEl.innerText = data.title;
    titleEl.style.color = data.accentColor;
  }
  if (subtitleEl) subtitleEl.innerText = data.subtitle;
  if (quoteEl) quoteEl.innerText = data.quote;
  if (explanationEl) explanationEl.innerText = data.explanation;
  if (serviceBadgeEl) serviceBadgeEl.innerText = data.serviceBadge;

  if (stageStatus) {
    stageStatus.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full animate-pulse" style="background-color: ${data.accentColor}"></span>
      <span style="color: ${data.accentColor}">${data.statusText}</span>
    `;
  }

  if (ctaBtn) {
    ctaBtn.href = data.serviceLink;
    ctaBtn.innerHTML = `
      <span>${data.serviceActionText}</span>
      <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
    `;
    if (window.lucide) {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  }

  // Trigger cosmic energy pulse burst on culmination
  if (idx === 8) {
    blenderRipples.push({
      x: 0,
      y: 0,
      r: 10,
      maxR: 220,
      life: 1.0,
      color: '#2dd4bf'
    });
  } else {
    blenderRipples.push({
      x: 0,
      y: 0,
      r: 8,
      maxR: 160,
      life: 0.85,
      color: data.accentColor
    });
  }
};

// Backwards compatibility for equation pills
window.setNamingState = function(key) {
  if (key === 'architecture' || key === 'vastu') window.setBlenderStage(0);
  else if (key === 'construction' || key === 'shed') window.setBlenderStage(4);
  else window.setBlenderStage(8);
};

window.onNamingSliderChange = function(val) {
  window.setBlenderStage(parseInt(val, 10));
};

function initCosmicParticles() {
  blenderCosmicParticles = [];
  const count = 55;
  const colors = ['#2dd4bf', '#e5b95c', '#38bdf8', '#f97316', '#a855f7', '#34d399', '#f59e0b'];
  for (let i = 0; i < count; i++) {
    blenderCosmicParticles.push({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      vx: (Math.random() - 0.5) * 1.15,
      vy: (Math.random() - 0.5) * 1.15,
      size: Math.random() * 2.5 + 0.9,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * Math.PI * 2
    });
  }
}

function getVedicZoneInfo(row, col) {
  if (row >= 3 && row <= 5 && col >= 3 && col <= 5) {
    return { 
      name: 'Central Courtyard (Brahma Aangan)', 
      element: 'Akasha (Pure Space)', 
      activity: 'âœ¨ Harmonic Convergence', 
      freq: '528 Hz Love & DNA Repair' 
    };
  }
  if (row <= 2 && col >= 6) {
    return { 
      name: 'North-East (Ishanya Mandir & Sanctuary)', 
      element: 'Jal (Water & Prana)', 
      activity: 'ðŸ§˜ Dhyana & Meditation', 
      freq: '432 Hz Divine Clarity' 
    };
  }
  if (row >= 6 && col >= 6) {
    return { 
      name: 'South-East (Agni Kitchen & Pantry)', 
      element: 'Agni (Metabolic Fire)', 
      activity: 'ðŸ”¥ Paaka & Culinary Energy', 
      freq: '528 Hz Vitality' 
    };
  }
  if (row >= 6 && col <= 2) {
    return { 
      name: 'South-West (Nairutya Master Suite)', 
      element: 'Prithvi (Earth & Stability)', 
      activity: 'ðŸ›ï¸ Vishranti & Deep Rest', 
      freq: '396 Hz Grounding' 
    };
  }
  if (row <= 2 && col <= 2) {
    return { 
      name: 'North-West (Vayavya Guest Lounge)', 
      element: 'Vayu (Air & Circulation)', 
      activity: 'ðŸ—£ï¸ Samvaad & Social Living', 
      freq: '639 Hz Communication' 
    };
  }
  if (row <= 2) {
    return { 
      name: 'North (Uttara Main Foyer & Study)', 
      element: 'Kuber (Prosperity Flow)', 
      activity: 'ðŸ’¼ Karya & Intellect', 
      freq: '432 Hz Wealth Vibration' 
    };
  }
  if (col >= 6) {
    return { 
      name: 'East (Purva Morning Verandah)', 
      element: 'Surya (Solar Vitality)', 
      activity: 'ðŸŒ… Circadian Renewal', 
      freq: '528 Hz Solar Prana' 
    };
  }
  if (row >= 6) {
    return { 
      name: 'South (Dakshina Media Suite)', 
      element: 'Yama (Structural Power)', 
      activity: 'ðŸŽ¬ Leisure & Family Entertainment', 
      freq: '396 Hz Strength' 
    };
  }
  return { 
    name: 'West (Paschim Dining Hall & Library)', 
    element: 'Varuna (Nourishment & Wisdom)', 
    activity: 'ðŸ½ï¸ Bhojana & Shared Dining', 
    freq: '432 Hz Contentment' 
  };
}

function initNamingCanvas() {
  const canvas = document.getElementById('naming-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || 480;
    canvas.height = rect.height || 420;
  }

  window.addEventListener('resize', resize);
  resize();
  initCosmicParticles();

  // Pointer Interaction
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    blenderMouse.x = e.clientX - rect.left;
    blenderMouse.y = e.clientY - rect.top;
    blenderMouse.isHovered = true;

    // Detect 9x9 hover cell
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const gridDim = Math.min(canvas.width, canvas.height) * 0.74;
    const gridLeft = cx - gridDim / 2;
    const gridTop = cy - gridDim / 2;
    const cellW = gridDim / 9;

    const relX = blenderMouse.x - gridLeft;
    const relY = blenderMouse.y - gridTop;

    if (relX >= 0 && relX < gridDim && relY >= 0 && relY < gridDim) {
      blenderHoverCell.c = Math.floor(relX / cellW);
      blenderHoverCell.r = Math.floor(relY / cellW);

      // Update HUD Box
      const hudBox = document.getElementById('naming-hud-box');
      const hudCoord = document.getElementById('naming-hud-coord');
      const hudZone = document.getElementById('naming-hud-zone');
      const hudTele = document.getElementById('naming-hud-telemetry');

      if (hudBox) hudBox.style.opacity = '1';
      if (hudCoord) hudCoord.innerText = `PADA [R${blenderHoverCell.r}, C${blenderHoverCell.c}]`;

      const zoneInfo = getVedicZoneInfo(blenderHoverCell.r, blenderHoverCell.c);
      if (hudZone) hudZone.innerText = `${zoneInfo.name} // ${zoneInfo.activity}`;

      const currentStage = BLENDER_STAGES[currentBlenderStageIndex] || BLENDER_STAGES[8];
      if (hudTele) {
        hudTele.innerText = `${zoneInfo.element} | Design: ${currentStage.designPct}% | Civil: ${currentStage.constructionPct}% | ${zoneInfo.freq}`;
      }
    } else {
      blenderHoverCell.r = null;
      blenderHoverCell.c = null;
      const hudBox = document.getElementById('naming-hud-box');
      if (hudBox) hudBox.style.opacity = '0.5';
    }
  });

  canvas.addEventListener('mouseleave', () => {
    blenderMouse.isHovered = false;
    blenderHoverCell.r = null;
    blenderHoverCell.c = null;
    const hudBox = document.getElementById('naming-hud-box');
    if (hudBox) hudBox.style.opacity = '0.4';
  });

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const clickX = e.clientX - rect.left - cx;
    const clickY = e.clientY - rect.top - cy;

    blenderRipples.push({
      x: clickX,
      y: clickY,
      r: 6,
      maxR: 190,
      life: 1.0,
      color: (BLENDER_STAGES[currentBlenderStageIndex] || BLENDER_STAGES[8]).accentColor
    });
  });

  function render() {
    blenderAngle += 0.007;
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    const st = BLENDER_STAGES[currentBlenderStageIndex] || BLENDER_STAGES[8];
    const gridDim = Math.min(w, h) * 0.74;
    const cellW = gridDim / 9;
    const startX = -gridDim / 2;
    const startY = -gridDim / 2;

    // Parallax mouse shift
    let pX = 0;
    let pY = 0;
    if (blenderMouse.isHovered && blenderMouse.x !== null) {
      pX = (blenderMouse.x - cx) * 0.04;
      pY = (blenderMouse.y - cy) * 0.04;
    }

    ctx.save();
    ctx.translate(cx + pX, cy + pY);

    // =========================================================================
    // LAYER 1: SACRED GEOMETRY & KINETIC ASTROLABE DIAL (shapes)
    // =========================================================================
    if (window.blenderLayerToggles.shapes) {
      // 1. Concentric 360-Degree Compass Dial Ring with Directional Indicators
      ctx.save();
      ctx.rotate(blenderAngle * 0.15);
      ctx.beginPath();
      ctx.arc(0, 0, gridDim * 0.68, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.22)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, gridDim * 0.63, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      const compassDirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      for (let d = 0; d < 360; d += 10) {
        const rad = (d * Math.PI) / 180;
        const isMajor = d % 45 === 0;
        const isMedium = d % 15 === 0;
        const rInner = isMajor ? gridDim * 0.61 : (isMedium ? gridDim * 0.63 : gridDim * 0.65);
        const rOuter = gridDim * 0.68;
        const x1 = Math.cos(rad) * rInner;
        const y1 = Math.sin(rad) * rInner;
        const x2 = Math.cos(rad) * rOuter;
        const y2 = Math.sin(rad) * rOuter;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = isMajor ? '#e5b95c' : (isMedium ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.2)');
        ctx.lineWidth = isMajor ? 1.8 : (isMedium ? 1.0 : 0.6);
        ctx.stroke();

        if (isMajor) {
          const dirIdx = Math.round(d / 45) % 8;
          const textR = gridDim * 0.58;
          const tx = Math.cos(rad) * textR;
          const ty = Math.sin(rad) * textR;
          ctx.save();
          ctx.translate(tx, ty);
          ctx.rotate(rad + Math.PI / 2);
          ctx.font = 'bold 7px monospace';
          ctx.fillStyle = compassDirs[dirIdx] === 'N' ? '#38bdf8' : (compassDirs[dirIdx] === 'NE' ? '#2dd4bf' : '#e5b95c');
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(compassDirs[dirIdx], 0, 0);
          ctx.restore();
        }
      }
      ctx.restore();

      // In Stages 6, 7, 8 (or when explicitly toggled on): show Astrolabe, Astakona, Sri Yantra, and Fibonacci spiral
      if (currentBlenderStageIndex >= 6 || currentBlenderStageIndex === 1 || window.blenderLayerToggles.shapes) {
        // 2. Astrolabe Counter-Rotating Radial Mechanical Gear Teeth
        ctx.save();
        ctx.rotate(-blenderAngle * 0.25);
        const gearR = gridDim * 0.56;
        ctx.beginPath();
        ctx.arc(0, 0, gearR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(45, 212, 191, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();

        for (let g = 0; g < 24; g++) {
          const rad = (g * Math.PI * 2) / 24;
          const gx1 = Math.cos(rad) * (gearR - 4);
          const gy1 = Math.sin(rad) * (gearR - 4);
          const gx2 = Math.cos(rad) * (gearR + 4);
          const gy2 = Math.sin(rad) * (gearR + 4);
          ctx.beginPath();
          ctx.moveTo(gx1, gy1);
          ctx.lineTo(gx2, gy2);
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.35)';
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
        ctx.restore();

        // 3. Astakona 8-Pointed Star
        ctx.save();
        ctx.rotate(-blenderAngle * 0.35);
        const starR = gridDim * 0.52;
        for (let sq = 0; sq < 2; sq++) {
          ctx.save();
          ctx.rotate((sq * Math.PI) / 4);
          ctx.strokeStyle = sq === 0 ? 'rgba(56, 189, 248, 0.35)' : 'rgba(229, 185, 92, 0.35)';
          ctx.lineWidth = 1.3;
          ctx.strokeRect(-starR / 2, -starR / 2, starR, starR);
          ctx.beginPath();
          ctx.moveTo(-starR / 2, -starR / 2);
          ctx.lineTo(starR / 2, starR / 2);
          ctx.moveTo(starR / 2, -starR / 2);
          ctx.lineTo(-starR / 2, starR / 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
          [[-starR / 2, -starR / 2], [starR / 2, -starR / 2], [starR / 2, starR / 2], [-starR / 2, starR / 2]].forEach(([vx, vy]) => {
            ctx.beginPath();
            ctx.arc(vx, vy, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = sq === 0 ? '#38bdf8' : '#e5b95c';
            ctx.fill();
          });
          ctx.restore();
        }
        ctx.restore();

        // 4. Sri Yantra: 9 Interlocking Sacred Triangles
        ctx.save();
        ctx.rotate(blenderAngle * 0.4);
        const triR = gridDim * 0.48;
        const pulseWeight = 1 + Math.sin(blenderAngle * 3) * 0.35;
        for (let t = 0; t < 4; t++) {
          const scale = 1 - t * 0.18;
          const currentR = triR * scale;
          const yOffset = -t * 4;
          ctx.beginPath();
          ctx.moveTo(0, -currentR + yOffset);
          ctx.lineTo(-currentR * 0.86, currentR * 0.5 + yOffset);
          ctx.lineTo(currentR * 0.86, currentR * 0.5 + yOffset);
          ctx.closePath();
          ctx.strokeStyle = 'rgba(229, 185, 92, 0.35)';
          ctx.lineWidth = pulseWeight * 0.9;
          ctx.stroke();
        }
        for (let s = 0; s < 5; s++) {
          const scale = 1 - s * 0.16;
          const currentR = triR * scale;
          const yOffset = s * 3.5;
          ctx.beginPath();
          ctx.moveTo(0, currentR + yOffset);
          ctx.lineTo(-currentR * 0.86, -currentR * 0.5 + yOffset);
          ctx.lineTo(currentR * 0.86, -currentR * 0.5 + yOffset);
          ctx.closePath();
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.35)';
          ctx.lineWidth = pulseWeight * 0.9;
          ctx.stroke();
        }
        ctx.restore();

        // 5. Golden Ratio Fibonacci Swirling Spiral with Beads
        ctx.save();
        ctx.rotate(blenderAngle * 0.65);
        ctx.beginPath();
        const a = 1.4;
        const b = 0.17;
        for (let theta = 0; theta < Math.PI * 4.2; theta += 0.08) {
          const r = a * Math.exp(b * theta);
          if (r > gridDim * 0.5) break;
          const sx = Math.cos(theta) * r;
          const sy = Math.sin(theta) * r;
          if (theta === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = 'rgba(229, 185, 92, 0.3)';
        ctx.lineWidth = 1.4;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let bead = 0; bead < 5; bead++) {
          const beadTheta = ((blenderAngle * 1.8 + (bead * Math.PI * 0.8)) % (Math.PI * 3.8));
          const beadR = a * Math.exp(b * beadTheta);
          if (beadR < gridDim * 0.48) {
            const bx = Math.cos(beadTheta) * beadR;
            const by = Math.sin(beadTheta) * beadR;
            ctx.beginPath();
            ctx.arc(bx, by, 2.2, 0, Math.PI * 2);
            ctx.fillStyle = bead % 2 === 0 ? '#e5b95c' : '#2dd4bf';
            ctx.shadowBlur = 6;
            ctx.shadowColor = ctx.fillStyle;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
        ctx.restore();
      }

      // Sonar radar rings
      const sonarR = (blenderAngle * 45) % (gridDim * 0.32);
      ctx.beginPath();
      ctx.arc(0, 0, sonarR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(45, 212, 191, ${Math.max(0, 0.4 - sonarR / (gridDim * 0.32))})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    // =========================================================================
    // LAYER 2: 9x9 VASTU MANDALA MATRIX (81 LIVING PADAS) (vastuGrid)
    // =========================================================================
    if (window.blenderLayerToggles.vastuGrid) {
      ctx.save();
      const isVastuProminent = currentBlenderStageIndex >= 6 || currentBlenderStageIndex === 0;
      ctx.globalAlpha = isVastuProminent ? 1.0 : 0.45;

      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          const cellX = startX + c * cellW;
          const cellY = startY + r * cellW;
          const isBrahma = r >= 3 && r <= 5 && c >= 3 && c <= 5;
          const isHovered = blenderHoverCell.r === r && blenderHoverCell.c === c;

          // Compute ripple / pointer wave distance
          let waveFactor = Math.sin(blenderAngle * 3.2 + (r + c) * 0.45) * 0.06;
          if (blenderHoverCell.r !== null && blenderHoverCell.c !== null) {
            const dist = Math.hypot(c - blenderHoverCell.c, r - blenderHoverCell.r);
            waveFactor += Math.max(0, 1 - dist / 4.5) * Math.sin(blenderAngle * 6 - dist) * 0.12;
          }

          // Cell Background Color Washes (Pancha Mahabhutas)
          if (isHovered) {
            ctx.fillStyle = 'rgba(45, 212, 191, 0.42)';
            ctx.fillRect(cellX, cellY, cellW, cellW);
          } else if (isBrahma) {
            ctx.fillStyle = `rgba(229, 185, 92, ${0.15 + waveFactor * 1.5})`;
            ctx.fillRect(cellX, cellY, cellW, cellW);
          } else if (r <= 2 && c >= 6) {
            // NE Water (Jal)
            ctx.fillStyle = `rgba(56, 189, 248, ${0.12 + waveFactor})`;
            ctx.fillRect(cellX, cellY, cellW, cellW);
            if ((r + c) % 2 === 0) {
              ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.arc(cellX + cellW * 0.5, cellY + cellW * 0.5, cellW * 0.28, 0, Math.PI);
              ctx.stroke();
            }
          } else if (r >= 6 && c >= 6) {
            // SE Fire (Agni)
            ctx.fillStyle = `rgba(249, 115, 22, ${0.12 + waveFactor})`;
            ctx.fillRect(cellX, cellY, cellW, cellW);
            if ((r + c) % 2 === 1) {
              ctx.fillStyle = 'rgba(249, 115, 22, 0.35)';
              ctx.beginPath();
              ctx.arc(cellX + cellW * 0.5, cellY + cellW * 0.5, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (r >= 6 && c <= 2) {
            // SW Earth (Prithvi)
            ctx.fillStyle = `rgba(200, 99, 58, ${0.12 + waveFactor})`;
            ctx.fillRect(cellX, cellY, cellW, cellW);
          } else if (r <= 2 && c <= 2) {
            // NW Air (Vayu)
            ctx.fillStyle = `rgba(6, 182, 212, ${0.10 + waveFactor})`;
            ctx.fillRect(cellX, cellY, cellW, cellW);
          } else if (r <= 2) {
            ctx.fillStyle = 'rgba(45, 212, 191, 0.05)';
            ctx.fillRect(cellX, cellY, cellW, cellW);
          } else if (c >= 6) {
            ctx.fillStyle = 'rgba(251, 191, 36, 0.05)';
            ctx.fillRect(cellX, cellY, cellW, cellW);
          }

          // Cell Border
          ctx.strokeStyle = isHovered 
            ? '#ffffff' 
            : (isBrahma ? 'rgba(229, 185, 92, 0.65)' : 'rgba(255, 255, 255, 0.14)');
          ctx.lineWidth = isHovered ? 2 : (isBrahma ? 1.4 : 0.75);
          ctx.strokeRect(cellX, cellY, cellW, cellW);

          // Micro Pada Coordinate Labels on Key Nodes
          if (isHovered || (r === 0 && c === 0) || (r === 8 && c === 8) || (r === 0 && c === 8) || (r === 8 && c === 0) || (r === 4 && c === 4)) {
            ctx.fillStyle = isHovered ? '#2dd4bf' : (isBrahma ? '#e5b95c' : '#94a3b8');
            ctx.font = '6px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`${r},${c}`, cellX + cellW / 2, cellY + cellW / 2 + 2);
          }
        }
      }

      // Sacred Karna Sutra Diagonal Energy Axes (SW to NE Vastu Purusha Spine)
      ctx.beginPath();
      ctx.moveTo(startX, startY + gridDim);
      ctx.lineTo(startX + gridDim, startY);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.45)';
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + gridDim, startY + gridDim);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1.0;
      ctx.stroke();
      ctx.setLineDash([]);

      // Corner Celestial Beacon Rings
      [[startX, startY], [startX + gridDim, startY], [startX, startY + gridDim], [startX + gridDim, startY + gridDim]].forEach(([bx, by]) => {
        ctx.beginPath();
        ctx.arc(bx, by, 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#e5b95c';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(bx, by, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#2dd4bf';
        ctx.fill();
      });

      // Brahma Sthana 3x3 Outer Boundary Glow
      const bLeft = startX + 3 * cellW;
      const bTop = startY + 3 * cellW;
      const bSize = 3 * cellW;
      ctx.strokeStyle = '#e5b95c';
      ctx.lineWidth = 2.4;
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#e5b95c';
      ctx.strokeRect(bLeft, bTop, bSize, bSize);
      ctx.shadowBlur = 0;

      // Inner Brahma Sthana Lotus Ring
      ctx.beginPath();
      ctx.arc(0, 0, cellW * 0.9, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    }

    // =========================================================================
    // LAYER 3: ARCHITECTURAL CAD PLAN / MASSING (planLines)
    // =========================================================================
    if (window.blenderLayerToggles.planLines) {
      ctx.save();
      const planLeft = startX + cellW * 0.3;
      const planTop = startY + cellW * 0.3;
      const planW = cellW * 8.4;
      const planH = cellW * 8.4;

      if (currentBlenderStageIndex === 0) {
        // STAGE 0: MACRO SITE MASSING & SOLAR PATH ENVELOPE
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.4;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(planLeft - 10, planTop - 10, planW + 20, planH + 20);
        ctx.setLineDash([]);

        // Building massing envelope
        ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.fillRect(planLeft, planTop, planW, planH);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(planLeft, planTop, planW, planH);

        // Sun Path Arc across site (East to West)
        ctx.beginPath();
        ctx.arc(0, 0, gridDim * 0.45, Math.PI * 0.9, Math.PI * 0.1, true);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Active Sun disc moving along arc
        const sunAngle = Math.PI * 0.9 - ((blenderAngle * 0.5) % Math.PI * 0.8);
        const sunX = Math.cos(sunAngle) * (gridDim * 0.45);
        const sunY = -Math.sin(sunAngle) * (gridDim * 0.45);
        ctx.beginPath();
        ctx.arc(sunX, sunY, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#f59e0b';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Breezeway axis
        ctx.strokeStyle = '#2dd4bf';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, startY - 14);
        ctx.lineTo(0, startY + gridDim + 14);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 7.5px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SITE MASSING & SOLAR VECTOR ENVELOPE', 0, planTop - 18);
      } else {
        // STAGES 1 TO 8: FULL DOUBLE-LINE CAD BLUEPRINT
        // 1. Double-Line Exterior Walls with CAD Concrete Diagonal Hatching
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(planLeft, planTop, planW, planH);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.strokeRect(planLeft + 5, planTop + 5, planW - 10, planH - 10);

        // Concrete Wall Diagonal Hatching
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 0.7;
        for (let hx = planLeft; hx < planLeft + planW; hx += 16) {
          ctx.beginPath();
          ctx.moveTo(hx, planTop);
          ctx.lineTo(hx + 5, planTop + 5);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(hx, planTop + planH - 5);
          ctx.lineTo(hx + 5, planTop + planH);
          ctx.stroke();
        }

        // 2. Interior Partitions (9 Spatial Suites)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.lineWidth = 1.6;

        ctx.strokeRect(planLeft, startY + cellW * 5.5, cellW * 2.7, cellW * 3.2); // SW Master
        ctx.strokeRect(planLeft, startY + cellW * 7.2, cellW * 1.3, cellW * 1.5); // Ensuite
        ctx.strokeRect(startX + cellW * 6, startY + cellW * 5.5, cellW * 2.7, cellW * 3.2); // SE Kitchen
        ctx.strokeRect(startX + cellW * 6, planTop, cellW * 2.7, cellW * 3.2); // NE Mandir
        ctx.strokeRect(planLeft, planTop, cellW * 2.7, cellW * 3.2); // NW Lounge
        ctx.strokeRect(startX + cellW * 3, planTop, cellW * 3, cellW * 2.7); // North Foyer
        ctx.strokeRect(startX + cellW * 3, startY + cellW * 6, cellW * 3, cellW * 2.7); // South Media
        ctx.strokeRect(planLeft, startY + cellW * 3.5, cellW * 2.7, cellW * 2); // West Dining
        ctx.strokeRect(startX + cellW * 6, startY + cellW * 3.5, cellW * 2.7, cellW * 2); // East Verandah

        // 3. Realistic CAD Door Swings with Dotted Arcs & Jamb Stops
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.2;

        const doorMainX = startX + cellW * 4.5;
        const doorMainY = planTop;
        ctx.beginPath();
        ctx.arc(doorMainX, doorMainY, cellW * 0.45, 0, Math.PI * 0.5);
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(doorMainX, doorMainY);
        ctx.lineTo(doorMainX, doorMainY + cellW * 0.45);
        ctx.stroke();

        const doorSwX = startX + cellW * 3;
        const doorSwY = startY + cellW * 6.2;
        ctx.beginPath();
        ctx.arc(doorSwX, doorSwY, cellW * 0.4, Math.PI * 0.5, Math.PI);
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(doorSwX, doorSwY);
        ctx.lineTo(doorSwX - cellW * 0.4, doorSwY);
        ctx.stroke();

        const doorSeX = startX + cellW * 6;
        const doorSeY = startY + cellW * 6.2;
        ctx.beginPath();
        ctx.arc(doorSeX, doorSeY, cellW * 0.4, 0, Math.PI * 0.5);
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(doorSeX, doorSeY);
        ctx.lineTo(doorSeX, doorSeY + cellW * 0.4);
        ctx.stroke();

        const doorNeX = startX + cellW * 6;
        const doorNeY = startY + cellW * 2.8;
        ctx.beginPath();
        ctx.arc(doorNeX, doorNeY, cellW * 0.35, Math.PI * 1.5, Math.PI * 2);
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(doorNeX, doorNeY);
        ctx.lineTo(doorNeX + cellW * 0.35, doorNeY);
        ctx.stroke();

        // 4. Double-Glazed Windows
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.9)';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(startX + cellW * 1.2, planTop);
        ctx.lineTo(startX + cellW * 2.2, planTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(planLeft + planW, startY + cellW * 3.8);
        ctx.lineTo(planLeft + planW, startY + cellW * 5.2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(startX + cellW * 1.2, planTop + planH);
        ctx.lineTo(startX + cellW * 2.4, planTop + planH);
        ctx.stroke();

        // 5. Dimension Strings
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 0.8;
        const dimY = planTop - 10;
        ctx.beginPath();
        ctx.moveTo(planLeft, dimY);
        ctx.lineTo(planLeft + planW, dimY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(planLeft - 3, dimY - 3);
        ctx.lineTo(planLeft + 3, dimY + 3);
        ctx.moveTo(planLeft + planW - 3, dimY - 3);
        ctx.lineTo(planLeft + planW + 3, dimY + 3);
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '6.5px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('18.00m ARCHITECTURAL CAD BLUEPRINT', 0, dimY - 3);

        // 6. CAD Room Title Tags
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.font = 'bold 6px monospace';
        ctx.fillText('SW // MASTER SUITE', startX + cellW * 1.6, startY + cellW * 8.6);
        ctx.fillText('SE // KITCHEN & AGNI', startX + cellW * 7.3, startY + cellW * 8.6);
        ctx.fillText('NE // PUJA MANDIR', startX + cellW * 7.3, startY + cellW * 0.7);
        ctx.fillText('NW // LIVING LOUNGE', startX + cellW * 1.6, startY + cellW * 0.7);
        ctx.fillText('BRAHMA AANGAN', 0, cellW * 0.9);
      }

      ctx.restore();
    }

    // =========================================================================
    // LAYER 4: ARCHITECTURAL CAD FURNITURE (furniture)
    // =========================================================================
    if (window.blenderLayerToggles.furniture) {
      ctx.save();
      const bedX = startX + cellW * 1.45;
      const bedY = startY + cellW * 6.7;
      const bedW = cellW * 1.15;
      const bedH = cellW * 1.25;

      // Area Rug
      ctx.strokeStyle = 'rgba(229, 185, 92, 0.25)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash([2, 2]);
      ctx.strokeRect(bedX - 12, bedY - 4, bedW + 24, bedH + 12);
      ctx.setLineDash([]);

      // King Bed Frame
      ctx.fillStyle = '#1c1917';
      ctx.strokeStyle = '#e5b95c';
      ctx.lineWidth = 1.3;
      ctx.fillRect(bedX, bedY, bedW, bedH);
      ctx.strokeRect(bedX, bedY, bedW, bedH);

      ctx.strokeStyle = 'rgba(229, 185, 92, 0.5)';
      ctx.beginPath();
      ctx.moveTo(bedX, bedY + bedH * 0.45);
      ctx.lineTo(bedX + bedW, bedY + bedH * 0.45);
      ctx.stroke();

      ctx.strokeStyle = '#f59e0b';
      ctx.strokeRect(bedX + 4, bedY + 4, bedW * 0.42, 9);
      ctx.strokeRect(bedX + bedW * 0.52, bedY + 4, bedW * 0.42, 9);

      // Nightstands
      [bedX - 11, bedX + bedW + 2].forEach(nx => {
        ctx.fillStyle = 'rgba(229, 185, 92, 0.25)';
        ctx.fillRect(nx, bedY, 9, 11);
        ctx.strokeRect(nx, bedY, 9, 11);
        ctx.beginPath();
        ctx.arc(nx + 4.5, bedY + 5.5, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
      });

      // 6-Seater Dining Table
      const dtX = startX + cellW * 0.8;
      const dtY = startY + cellW * 4.0;
      const dtW = cellW * 1.4;
      const dtH = cellW * 0.8;
      ctx.fillStyle = '#1c1917';
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1.3;
      ctx.fillRect(dtX, dtY, dtW, dtH);
      ctx.strokeRect(dtX, dtY, dtW, dtH);
      [0.2, 0.5, 0.8].forEach(f => {
        ctx.strokeRect(dtX + dtW * f - 4, dtY - 6, 8, 5);
        ctx.strokeRect(dtX + dtW * f - 4, dtY + dtH + 1, 8, 5);
      });

      // Sectional Sofa
      const sofaX = startX + cellW * 0.8;
      const sofaY = startY + cellW * 0.9;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.4;
      ctx.fillStyle = '#111827';
      ctx.fillRect(sofaX, sofaY, cellW * 1.35, 15);
      ctx.strokeRect(sofaX, sofaY, cellW * 1.35, 15);
      ctx.fillRect(sofaX, sofaY + 15, 15, cellW * 0.95);
      ctx.strokeRect(sofaX, sofaY + 15, 15, cellW * 0.95);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.strokeRect(sofaX + 24, sofaY + 24, cellW * 0.65, cellW * 0.45);

      // Kitchen Island
      const kX = startX + cellW * 6.2;
      const kY = startY + cellW * 5.9;
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 1.4;
      ctx.strokeRect(kX, kY, cellW * 2.1, 13);
      ctx.strokeRect(kX + cellW * 2.1 - 13, kY + 13, 13, cellW * 1.9);
      const isX = kX + 6;
      const isY = kY + 24;
      ctx.strokeRect(isX, isY, cellW * 0.95, cellW * 0.65);
      [0.28, 0.72].forEach(bx => {
        [0.32, 0.68].forEach(by => {
          ctx.beginPath();
          ctx.arc(isX + cellW * 0.95 * bx, isY + cellW * 0.65 * by, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ea580c';
          ctx.fill();
        });
      });

      // Pooja Mandir Altar
      const mX = startX + cellW * 7.1;
      const mY = startY + cellW * 1.5;
      ctx.strokeStyle = '#e5b95c';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(mX, mY, cellW * 0.95, cellW * 0.85);
      ctx.beginPath();
      ctx.arc(mX + cellW * 0.47, mY + cellW * 0.42, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#fbbf24';
      ctx.stroke();
      const flamePulse = 2.5 + Math.sin(blenderAngle * 8) * 0.6;
      ctx.beginPath();
      ctx.arc(mX + cellW * 0.47, mY + cellW * 0.42, flamePulse, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      // Study Desk
      const sX = startX + cellW * 3.7;
      const sY = startY + cellW * 1.1;
      ctx.strokeStyle = '#2dd4bf';
      ctx.lineWidth = 1.3;
      ctx.strokeRect(sX, sY, cellW * 1.25, 11);
      ctx.strokeRect(sX + cellW * 0.5 - 5, sY + 14, 10, 7);

      // Courtyard Water Kund
      ctx.strokeStyle = '#2dd4bf';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.arc(0, 0, cellW * 0.7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, cellW * 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = '#e5b95c';
      ctx.stroke();

      ctx.restore();
    }

    // =========================================================================
    // LAYER 5: PEOPLE & OCCUPANT CIRCULATION ENGINE (people)
    // =========================================================================
    if (window.blenderLayerToggles.people) {
      ctx.save();
      const walkCycle = Math.sin(blenderAngle * 2.4);
      const walkX = startX + cellW * 3.5 + walkCycle * (cellW * 0.9);
      const walkY = startY + cellW * 1.9;

      const occupants = [
        { x: startX + cellW * 7.55, y: startY + cellW * 2.6, role: 'Dhyana', color: '#e5b95c', pulse: true, angle: 0 },
        { x: startX + cellW * 6.8, y: startY + cellW * 7.4, role: 'Culinary', color: '#f97316', pulse: false, angle: Math.PI },
        { x: startX + cellW * 2.05, y: startY + cellW * 7.5, role: 'Resting', color: '#c8633a', pulse: false, angle: 0 },
        { x: startX + cellW * 1.5, y: startY + cellW * 1.8, role: 'Lounge', color: '#38bdf8', pulse: false, angle: Math.PI * 0.5 },
        { x: startX + cellW * 1.5, y: startY + cellW * 3.9, role: 'Dining', color: '#06b6d4', pulse: false, angle: 0 },
        { x: walkX, y: walkY, role: 'Circulation', color: '#2dd4bf', pulse: true, angle: walkCycle > 0 ? 0 : Math.PI }
      ];

      occupants.forEach((p, idx) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        const breathScale = p.pulse ? 1 + Math.sin(blenderAngle * 3.5 + idx) * 0.12 : 1;
        ctx.scale(breathScale, breathScale);

        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}20`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 7.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}35`;
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(0, 0, 6, 3.8, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.restore();
      });

      ctx.restore();
    }

    // =========================================================================
    // LAYER 6: SPACE ACTIVITIES & HOLOGRAPHIC HUD MARKERS (activities)
    // =========================================================================
    if (window.blenderLayerToggles.activities) {
      ctx.save();
      const activityTags = [
        { text: 'ðŸ§˜ Dhyana // 432 Hz', x: startX + cellW * 7.3, y: startY + cellW * 0.8, color: '#e5b95c' },
        { text: 'ðŸ”¥ Paaka // Agni Energy', x: startX + cellW * 7.3, y: startY + cellW * 8.4, color: '#f97316' },
        { text: 'ðŸ›ï¸ Vishranti // Delta Rest', x: startX + cellW * 1.6, y: startY + cellW * 8.4, color: '#c8633a' },
        { text: 'ðŸ—£ï¸ Samvaad // Social Lounge', x: startX + cellW * 1.6, y: startY + cellW * 0.8, color: '#38bdf8' },
        { text: 'ðŸ½ï¸ Bhojana // Nourishment', x: startX + cellW * 1.5, y: startY + cellW * 5.2, color: '#06b6d4' },
        { text: 'ðŸ’¼ Karya // High Focus', x: startX + cellW * 4.5, y: startY + cellW * 0.8, color: '#2dd4bf' },
        { text: 'ðŸŒ… Surya // Dawn Influx', x: startX + cellW * 7.3, y: startY + cellW * 5.2, color: '#fbbf24' },
        { text: 'âœ¨ Akasha // Harmonic Core', x: 0, y: cellW * 1.15, color: '#ffffff' }
      ];

      activityTags.forEach(tag => {
        ctx.save();
        ctx.font = 'bold 7px monospace';
        ctx.textAlign = 'center';

        const textW = ctx.measureText(tag.text).width;
        ctx.fillStyle = 'rgba(4, 8, 12, 0.88)';
        ctx.fillRect(tag.x - textW / 2 - 6, tag.y - 7.5, textW + 12, 12);
        ctx.strokeStyle = `${tag.color}80`;
        ctx.lineWidth = 0.9;
        ctx.strokeRect(tag.x - textW / 2 - 6, tag.y - 7.5, textW + 12, 12);

        ctx.beginPath();
        ctx.arc(tag.x - textW / 2 - 2, tag.y - 1.5, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = tag.color;
        ctx.fill();

        ctx.fillStyle = tag.color;
        ctx.fillText(tag.text, tag.x + 3, tag.y + 1.5);
        ctx.restore();
      });

      ctx.restore();
    }

    // =========================================================================
    // LAYER 7: CIVIL STRUCTURE â€” 16 MONOLITHIC COLUMNS & TIE BEAMS (structure)
    // =========================================================================
    if (window.blenderLayerToggles.structure) {
      ctx.save();
      const colBays = [
        [0.3, 0.3], [3, 0.3], [6, 0.3], [8.7, 0.3],
        [0.3, 3],   [3, 3],   [6, 3],   [8.7, 3],
        [0.3, 6],   [3, 6],   [6, 6],   [8.7, 6],
        [0.3, 8.7], [3, 8.7], [6, 8.7], [8.7, 8.7]
      ];

      // Primary Tie Beams
      ctx.strokeStyle = '#c8633a';
      ctx.lineWidth = 3.5;
      [0.3, 3, 6, 8.7].forEach(r => {
        ctx.beginPath();
        ctx.moveTo(startX + cellW * 0.3, startY + cellW * r);
        ctx.lineTo(startX + cellW * 8.7, startY + cellW * r);
        ctx.stroke();
      });
      [0.3, 3, 6, 8.7].forEach(c => {
        ctx.beginPath();
        ctx.moveTo(startX + cellW * c, startY + cellW * 0.3);
        ctx.lineTo(startX + cellW * c, startY + cellW * 8.7);
        ctx.stroke();
      });

      // Tie Beam Rebar Lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      [0.3, 3, 6, 8.7].forEach(r => {
        ctx.beginPath();
        ctx.moveTo(startX + cellW * 0.3, startY + cellW * r);
        ctx.lineTo(startX + cellW * 8.7, startY + cellW * r);
        ctx.stroke();
      });
      [0.3, 3, 6, 8.7].forEach(c => {
        ctx.beginPath();
        ctx.moveTo(startX + cellW * c, startY + cellW * 0.3);
        ctx.lineTo(startX + cellW * c, startY + cellW * 8.7);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 16 Columns & Footings
      colBays.forEach(([cbCol, cbRow]) => {
        const colX = startX + cellW * cbCol;
        const colY = startY + cellW * cbRow;

        // Footing pad
        ctx.fillStyle = 'rgba(200, 99, 58, 0.28)';
        ctx.fillRect(colX - 12, colY - 12, 24, 24);
        ctx.strokeStyle = 'rgba(200, 99, 58, 0.6)';
        ctx.lineWidth = 1;
        ctx.strokeRect(colX - 12, colY - 12, 24, 24);

        // Concrete Column Core
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(colX - 7, colY - 7, 14, 14);
        ctx.strokeStyle = '#ea580c';
        ctx.lineWidth = 1.8;
        ctx.strokeRect(colX - 7, colY - 7, 14, 14);

        // 8 Rebar Dots
        ctx.fillStyle = '#f59e0b';
        [[-4.5, -4.5], [4.5, -4.5], [4.5, 4.5], [-4.5, 4.5], [0, -4.5], [0, 4.5], [-4.5, 0], [4.5, 0]].forEach(([rx, ry]) => {
          ctx.fillRect(colX + rx - 1, colY + ry - 1, 2, 2);
        });
      });

      // Axis callout bubbles
      ctx.font = 'bold 6.5px monospace';
      ctx.textAlign = 'center';
      ['A', 'B', 'C', 'D'].forEach((axis, i) => {
        const ax = startX + cellW * [0.3, 3, 6, 8.7][i];
        const ay = startY - 8;
        ctx.beginPath();
        ctx.arc(ax, ay, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 88, 12, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#ea580c';
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.fillText(axis, ax, ay + 2.5);
      });

      ['1', '2', '3', '4'].forEach((axis, i) => {
        const ax = startX - 8;
        const ay = startY + cellW * [0.3, 3, 6, 8.7][i];
        ctx.beginPath();
        ctx.arc(ax, ay, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 88, 12, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#ea580c';
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.fillText(axis, ax, ay + 2.5);
      });

      // Cantilevered Canopy Overhang
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.lineWidth = 2.2;
      ctx.setLineDash([7, 5]);
      ctx.strokeRect(startX - 14, startY - 14, gridDim + 28, gridDim + 28);
      ctx.setLineDash([]);

      ctx.fillStyle = '#ea580c';
      ctx.font = '7.5px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Cantilevered Sheltering Canopy (Protective Shed Body)', 0, startY - 20);

      ctx.restore();
    }

    // =========================================================================
    // LAYER 8: X-RAY 3D AXONOMETRIC CUTAWAY SHELL (xray3d)
    // =========================================================================
    if (window.blenderLayerToggles.xray3d) {
      ctx.save();
      const offX = 16;
      const offY = -16;

      ctx.strokeStyle = '#2dd4bf';
      ctx.lineWidth = 1.6;

      const corners = [
        [startX + cellW * 0.3, startY + cellW * 0.3],
        [startX + cellW * 3, startY + cellW * 0.3],
        [startX + cellW * 6, startY + cellW * 0.3],
        [startX + cellW * 8.7, startY + cellW * 0.3],
        [startX + cellW * 8.7, startY + cellW * 3],
        [startX + cellW * 8.7, startY + cellW * 6],
        [startX + cellW * 8.7, startY + cellW * 8.7],
        [startX + cellW * 6, startY + cellW * 8.7],
        [startX + cellW * 3, startY + cellW * 8.7],
        [startX + cellW * 0.3, startY + cellW * 8.7],
        [startX + cellW * 0.3, startY + cellW * 6],
        [startX + cellW * 0.3, startY + cellW * 3]
      ];

      corners.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + offX, y + offY);
        ctx.stroke();
      });

      // Extruded Top Rim
      ctx.fillStyle = 'rgba(45, 212, 191, 0.08)';
      ctx.fillRect(startX + cellW * 0.3 + offX, startY + cellW * 0.3 + offY, cellW * 8.4, cellW * 8.4);
      ctx.strokeStyle = '#2dd4bf';
      ctx.lineWidth = 1.6;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(startX + cellW * 0.3 + offX, startY + cellW * 0.3 + offY, cellW * 8.4, cellW * 8.4);
      ctx.setLineDash([]);

      // Courtyard Shaft
      const cbX = startX + cellW * 3;
      const cbY = startY + cellW * 3;
      const cbS = cellW * 3;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.3;
      ctx.strokeRect(cbX + offX, cbY + offY, cbS, cbS);
      [
        [cbX, cbY], [cbX + cbS, cbY], [cbX + cbS, cbY + cbS], [cbX, cbY + cbS]
      ].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + offX, y + offY);
        ctx.stroke();
      });

      ctx.fillStyle = 'rgba(229, 185, 92, 0.1)';
      ctx.beginPath();
      ctx.moveTo(cbX + offX, cbY + offY);
      ctx.lineTo(cbX + cbS + offX, cbY + offY);
      ctx.lineTo(cbX + cbS, cbY + cbS);
      ctx.lineTo(cbX, cbY + cbS);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#2dd4bf';
      ctx.font = 'bold 7.5px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('X-Ray 3D Axonometric Model [Z: +3.60m]', startX + cellW * 8.7 + offX, startY + cellW * 0.3 + offY - 8);

      ctx.restore();
    }

    // =========================================================================
    // LAYER 9: COSMIC PRANA & ENERGY FLOW (cosmicFlow)
    // =========================================================================
    if (window.blenderLayerToggles.cosmicFlow) {
      ctx.save();
      const streamLinesCount = 10;
      for (let s = 0; s < streamLinesCount; s++) {
        const offset = (s / streamLinesCount) * (gridDim * 0.85) - (gridDim * 0.425);
        ctx.beginPath();
        ctx.moveTo(-gridDim * 0.48, offset);
        const waveY = offset + Math.sin(blenderAngle * 4.5 + s * 0.7) * 18;
        ctx.lineTo(gridDim * 0.48, waveY);
        ctx.strokeStyle = s % 2 === 0 ? 'rgba(45, 212, 191, 0.5)' : 'rgba(229, 185, 92, 0.5)';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([8, 12]);
        ctx.lineDashOffset = -blenderAngle * 48;
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // 4 Corner Vortices
      const vortices = [
        { x: startX + cellW * 7.5, y: startY + cellW * 1.5, color: '#38bdf8', dir: 1 },
        { x: startX + cellW * 7.5, y: startY + cellW * 7.5, color: '#f97316', dir: -1 },
        { x: startX + cellW * 1.5, y: startY + cellW * 7.5, color: '#c8633a', dir: 1 },
        { x: startX + cellW * 1.5, y: startY + cellW * 1.5, color: '#06b6d4', dir: -1 }
      ];
      vortices.forEach(v => {
        ctx.save();
        ctx.translate(v.x, v.y);
        ctx.rotate(blenderAngle * 3 * v.dir);
        for (let ring = 1; ring <= 3; ring++) {
          ctx.beginPath();
          ctx.arc(0, 0, ring * 7, 0, Math.PI * 1.5);
          ctx.strokeStyle = v.color;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
        ctx.restore();
      });

      // Cosmic Prana Kinetic Particle Swarm
      blenderCosmicParticles.forEach(pt => {
        pt.x += pt.vx;
        pt.y += pt.vy;
        if (pt.x < -gridDim / 2) pt.x = gridDim / 2;
        if (pt.x > gridDim / 2) pt.x = -gridDim / 2;
        if (pt.y < -gridDim / 2) pt.y = gridDim / 2;
        if (pt.y > gridDim / 2) pt.y = -gridDim / 2;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.shadowBlur = 9;
        ctx.shadowColor = pt.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central Harmonious Living Convergence Pillar
      if (currentBlenderStageIndex === 8 || currentBlenderStageIndex === 7 || st.alignmentBeamAlpha > 0.05) {
        ctx.save();
        const coreGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, cellW * 3.2);
        coreGrad.addColorStop(0, 'rgba(45, 212, 191, 0.9)');
        coreGrad.addColorStop(0.35, 'rgba(229, 185, 92, 0.5)');
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(0, 0, cellW * 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, -h * 0.46);
        ctx.lineTo(0, h * 0.46);
        ctx.strokeStyle = '#2dd4bf';
        ctx.lineWidth = 3.5;
        ctx.shadowBlur = 28;
        ctx.shadowColor = '#2dd4bf';
        ctx.stroke();
        ctx.shadowBlur = 0;

        for (let orb = 0; orb < 3; orb++) {
          ctx.save();
          ctx.rotate((orb * Math.PI) / 3 + blenderAngle * 1.5);
          ctx.beginPath();
          ctx.ellipse(0, 0, cellW * 1.6, cellW * 0.55, 0, 0, Math.PI * 2);
          ctx.strokeStyle = orb % 2 === 0 ? '#2dd4bf' : '#e5b95c';
          ctx.lineWidth = 1.4;
          ctx.stroke();
          ctx.restore();
        }

        const pulseR = cellW * 1.35 + Math.sin(blenderAngle * 4) * 16;
        ctx.beginPath();
        ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = '#e5b95c';
        ctx.lineWidth = 2.2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9.5px cinzel, serif';
        ctx.textAlign = 'center';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#2dd4bf';
        ctx.fillText('HARMONIOUS LIVING ALIGNMENT', 0, 4);
        ctx.shadowBlur = 0;

        ctx.restore();
      }

      ctx.restore();
    }

    // =========================================================================
    // LAYER 10: CLICK & INTERACTION RIPPLE WAVES
    // =========================================================================
    for (let i = blenderRipples.length - 1; i >= 0; i--) {
      const rip = blenderRipples[i];
      rip.r += 3.5;
      rip.life -= 0.025;

      if (rip.life <= 0 || rip.r >= rip.maxR) {
        blenderRipples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
      ctx.strokeStyle = rip.color;
      ctx.globalAlpha = rip.life * 0.7;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    // =========================================================================
    // ON-CANVAS REAL-TIME STAGE HUD BADGE
    // =========================================================================
    ctx.save();
    let activeLayerCount = 0;
    Object.values(window.blenderLayerToggles).forEach(v => { if (v) activeLayerCount++; });
    
    ctx.fillStyle = 'rgba(4, 8, 12, 0.82)';
    ctx.fillRect(-w / 2 + 10, -h / 2 + 10, 220, 22);
    ctx.strokeStyle = st.accentColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(-w / 2 + 10, -h / 2 + 10, 220, 22);

    ctx.beginPath();
    ctx.arc(-w / 2 + 18, -h / 2 + 21, 3, 0, Math.PI * 2);
    ctx.fillStyle = st.accentColor;
    ctx.shadowBlur = 6;
    ctx.shadowColor = st.accentColor;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px monospace';
    ctx.textAlign = 'left';
    const stageLabel = (st.title || '').replace(/^.*?[\u2014\u2013\-]\s*/, '') || st.title;
    ctx.fillText(`0${st.stage + 1} // ${stageLabel} [${activeLayerCount}/9 ACTIVE]`, -w / 2 + 26, -h / 2 + 23.5);
    ctx.restore();

    ctx.restore();
    blenderAnimId = requestAnimationFrame(render);
  }

  render();
}

function initNamingSection() {
  const section = document.getElementById('naming-vastushed-section');
  if (!section) return;

  // 1. Programmatically attach click listeners to all 9 stage buttons
  const stageBtns = document.querySelectorAll('.stage-pill-btn');
  stageBtns.forEach((btn, idx) => {
    btn.onclick = null;
    btn.removeAttribute('onclick');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const stageIdx = btn.getAttribute('data-stage-index') !== null 
        ? parseInt(btn.getAttribute('data-stage-index'), 10) 
        : idx;
      window.setBlenderStage(stageIdx);
    });
  });

  // 2. Programmatically attach to slider (both 'input' and 'change' events)
  const slider = document.getElementById('naming-blend-slider');
  if (slider) {
    slider.oninput = null;
    slider.onchange = null;
    slider.removeAttribute('oninput');
    slider.removeAttribute('onchange');
    slider.addEventListener('input', (e) => {
      window.onNamingSliderChange(e.target.value);
    });
    slider.addEventListener('change', (e) => {
      window.onNamingSliderChange(e.target.value);
    });
  }

  // 3. Programmatically attach click listeners to all 9 layer toggle buttons
  const layerKeys = ['vastuGrid', 'planLines', 'furniture', 'people', 'activities', 'structure', 'xray3d', 'cosmicFlow', 'shapes'];
  layerKeys.forEach(key => {
    const btn = document.getElementById(`toggle-btn-${key}`);
    if (btn) {
      btn.onclick = null;
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleBlenderLayer(key);
      });
    }
  });

  // 4. Programmatically attach to equation pills
  const eqPills = document.querySelectorAll('.naming-equation-pill');
  eqPills.forEach(pill => {
    pill.onclick = null;
    pill.removeAttribute('onclick');
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const p = pill.getAttribute('data-naming-pill');
      if (p === 'architecture') window.setBlenderStage(0);
      else if (p === 'construction') window.setBlenderStage(4);
      else window.setBlenderStage(8);
    });
  });

  // 5. Initialize canvas and start in Stage 8 (Master Harmonious Living)
  initNamingCanvas();
  window.setBlenderStage(8);
}

window.initNamingSection = initNamingSection;

// Automatic DOMContentLoaded trigger
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNamingSection);
} else {
  initNamingSection();
}