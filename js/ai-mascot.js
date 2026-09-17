/**
 * VASTUSHED - Interactive AI Mascot ("VASTU AI ARCHITECT")
 * Trained on VASTUSHED Mission, Design-Build Philosophy, 10-Year Craft & Practical Vastu
 */

(function () {
  // Knowledge Base & Prompt Engineering for VASTUSHED
  const VASTU_RESPONSES = [
    {
      keywords: ['mission', 'vision', 'purpose', 'why vastushed', 'about you', 'who are you', 'company'],
      reply: `At <strong>VASTUSHED</strong>, our mission is <strong>"To Create Spaces That Work on Every Level."</strong><br/><br/>
      While conventional developers focus only on surface cosmetics or rapid speed, we combine <em>architectural design, turnkey on-ground construction, and practical Vastu intelligence</em> under one roof. We live by <strong>"Build With Awareness"</strong>—uplifting liveability for families and institutions across North India for over 10 years!`
    },
    {
      keywords: ['kitchen', 'cooking', 'agneya', 'fire', 'south-east', 'stove'],
      reply: `🔥 <strong>Kitchen & Fire Placement:</strong><br/>
      According to Vastu Shastra and solar physics, the <strong>South-East (Agneya)</strong> zone is optimal for the kitchen, governed by the Fire element (Agni). If SE is unavailable, the <strong>North-West (Vayavya)</strong> is an acceptable secondary placement.<br/><br/>
      <em>VASTUSHED Practical Approach:</em> We design proper ventilation draft hoods, high-safety induction/gas circuits, and warm terracotta/copper finishes without imposing dogmatic rituals.`
    },
    {
      keywords: ['bedroom', 'master', 'sleep', 'nairutya', 'south-west', 'bed direction'],
      reply: `🛏️ <strong>Master Bedroom & Restful Stability:</strong><br/>
      The master bedroom is best positioned in the <strong>South-West (Nairutya)</strong> quadrant, ruled by the Earth element (Prithvi). This anchors leadership, family stability, and restorative sleep.<br/><br/>
      <em>Sleeping Alignment:</em> Keep your head towards the <strong>South or East</strong> for harmonious geomagnetic blood circulation. Avoid head pointing North!`
    },
    {
      keywords: ['puja', 'temple', 'mandir', 'meditation', 'ishanya', 'north-east', 'water'],
      reply: `💧 <strong>Pooja, Meditation & North-East (Ishanya):</strong><br/>
      The <strong>North-East</strong> is the purest receptor of morning solar and cosmic energies (Water element). It should remain the <em>lightest, lowest, and cleanest</em> quadrant of the home.<br/><br/>
      <em>VASTUSHED Guidance:</em> Ideal for meditation pods, prayer spaces, libraries, or underground water reservoirs. Never position heavy storage, staircases, or toilets here!`
    },
    {
      keywords: ['demolition', 'break', 'break walls', 'superstition', 'fear', 'remedy', 'non-destructive'],
      reply: `🛡️ <strong>Non-Destructive Vastu (No Demolition):</strong><br/>
      We strictly practice <strong>responsible, non-fear-based Vastu</strong>. You do NOT need to demolish structural load-bearing walls!<br/><br/>
      We balance existing architectural defects using elemental compensations: directional lighting, mineral balancing, color wavelength tuning, and acoustic buffers.`
    },
    {
      keywords: ['construction', 'builder', 'contractor', 'quality', 'turnkey', 'how do you build'],
      reply: `🏗️ <strong>Turnkey Construction Under One Roof:</strong><br/>
      Unlike typical firms where architects and contractors point fingers at each other, <strong>VASTUSHED operates as your direct builder</strong>.<br/><br/>
      We manage full residential construction, high-end interior joinery, and structural renovations with strict laboratory-tested concrete, certified steel, and clear milestone schedules.`
    },
    {
      keywords: ['patna', 'delhi', 'office', 'studio', 'location', 'where', 'address'],
      reply: `📍 <strong>Our Studio Hubs:</strong><br/>
      • <strong>Patna Regional Studio (HQ):</strong> Bailey Road Corridor, Patna, Bihar (Phone: +91 98765 43210)<br/>
      • <strong>Delhi NCR Studio:</strong> South Extension / Aerocity Gateway, New Delhi (Phone: +91 98765 43212)<br/>
      We execute projects across Bihar, Delhi NCR, UP, Haryana, and the wider North India region!`
    },
    {
      keywords: ['cost', 'price', 'rate', 'quote', 'estimate', 'sq ft', 'budget', 'timeline'],
      reply: `📊 <strong>Project Turnaround & Scope:</strong><br/>
      • <strong>Turnkey Design-Build:</strong> Complete architecture, 3D working drawings, materials & construction (Typically 8–14 months depending on scale).<br/>
      • <strong>Architectural Design Only:</strong> 6–8 weeks.<br/>
      • <strong>Practical Vastu Audit:</strong> 3–5 working days.<br/><br/>
      You can use our interactive estimator on the <strong>Contact Us</strong> page or click below to chat with our directors on WhatsApp!`
    },
    {
      keywords: ['experience', 'years', 'numbers', 'projects', 'track record'],
      reply: `📈 <strong>VASTUSHED by the Numbers:</strong><br/>
      • <strong>10+ Years</strong> of on-ground practice<br/>
      • <strong>150+ Projects</strong> designed and delivered<br/>
      • <strong>2,500,000+ Sq. Ft.</strong> built-up space aligned<br/>
      • <strong>100% Practical Vastu</strong> compliance with zero fear-mongering<br/>
      • <strong>98.6%</strong> on-time delivery record!`
    }
  ];

  function getAiReply(query) {
    const cleanQuery = query.toLowerCase();
    for (const item of VASTU_RESPONSES) {
      if (item.keywords.some(k => cleanQuery.includes(k))) {
        return item.reply;
      }
    }
    return `Thank you for your question! At <strong>VASTUSHED</strong>, we deliver thoughtful architecture, turnkey construction, and practical Vastu harmony based on our 10-year experience across Patna and Delhi.<br/><br/>
    Would you like to explore our <strong>Architecture Portfolio</strong>, schedule a <strong>Practical Vastu Audit</strong>, or connect directly with our studio directors on WhatsApp?`;
  }

  function initMascot() {
    // Inject Mascot HTML into document body
    const mascotContainer = document.createElement('div');
    mascotContainer.id = 'vastu-ai-mascot-container';
    mascotContainer.innerHTML = `
      <!-- Floating Trigger Pill / Avatar Button -->
      <button id="vastu-ai-trigger" class="fixed bottom-6 left-6 z-50 flex items-center gap-3 p-2 pr-4 rounded-full glass-panel border border-[#e5b95c]/50 shadow-2xl hover:border-[#e5b95c] hover:scale-105 transition-all group cursor-pointer bg-[#070a0d]/90 backdrop-blur-md">
        <div class="relative w-11 h-11 rounded-full overflow-hidden border border-[#e5b95c] shadow-lg shadow-[#e5b95c]/30">
          <img src="assets/images/vastushed-logo.jpg" alt="VASTUSHED Vastu Purusha AI Avatar" class="w-full h-full object-cover animate-spin-slow group-hover:scale-110 transition-transform" />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#070a0d] rounded-full"></span>
        </div>
        <div class="text-left font-mono">
          <span class="block text-xs font-bold text-white flex items-center gap-1.5">
            VASTU AI <span class="text-[9px] px-1.5 py-0.2 rounded bg-[#e5b95c]/20 text-[#e5b95c] border border-[#e5b95c]/40 font-mono">ONLINE</span>
          </span>
          <span class="block text-[10px] text-slate-400">Ask Design & Vastu</span>
        </div>
      </button>

      <!-- Chat Modal Window -->
      <div id="vastu-ai-window" class="fixed bottom-24 left-6 z-50 w-[92vw] sm:w-[420px] max-h-[620px] h-[540px] rounded-2xl glass-panel border border-[#e5b95c]/40 shadow-2xl flex flex-col overflow-hidden hidden bg-[#0a0f14]/98 backdrop-blur-xl">
        <!-- Header -->
        <div class="p-4 bg-gradient-to-r from-[#0d1318] to-[#131c23] border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full overflow-hidden border border-[#e5b95c]/60">
              <img src="assets/images/vastushed-logo.jpg" alt="Logo" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="text-xs font-bold font-tech text-white flex items-center gap-1.5">
                VASTU AI ARCHITECT
              </h4>
              <span class="text-[9px] font-mono text-[#e5b95c]">10 Yrs Craft • Patna & Delhi Studio</span>
            </div>
          </div>
          <button id="vastu-ai-close" class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Chat Messages Scroll Container -->
        <div id="vastu-ai-messages" class="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
          <!-- Initial AI Message -->
          <div class="flex items-start gap-2.5">
            <div class="w-7 h-7 rounded-full overflow-hidden border border-[#e5b95c]/40 shrink-0 mt-0.5">
              <img src="assets/images/vastushed-logo.jpg" alt="Avatar" class="w-full h-full object-cover" />
            </div>
            <div class="p-3.5 rounded-2xl rounded-tl-none bg-white/[0.04] border border-white/10 text-slate-200 leading-relaxed max-w-[88%]">
              Namaste! 🙏 I am your <strong>VASTUSHED AI Architectural Guide</strong>. I can answer questions about our unified design-build approach, practical Vastu rules, our 10-year craft, or help you estimate project timelines across Patna & Delhi. How can I align your space today?
            </div>
          </div>
        </div>

        <!-- Quick Action Prompt Chips -->
        <div class="p-2.5 border-t border-white/5 bg-[#070a0d]/70 flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono no-scrollbar">
          <button class="ai-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#e5b95c]/20 border border-white/10 text-[#e5b95c] whitespace-nowrap transition-colors" data-prompt="Where should my kitchen be?">
            Kitchen Vastu?
          </button>
          <button class="ai-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#e5b95c]/20 border border-white/10 text-[#e5b95c] whitespace-nowrap transition-colors" data-prompt="Can I avoid demolition for Vastu?">
            Avoid Demolition?
          </button>
          <button class="ai-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#e5b95c]/20 border border-white/10 text-[#e5b95c] whitespace-nowrap transition-colors" data-prompt="Tell me about your Mission & 10 years">
            Our Mission?
          </button>
          <button class="ai-chip px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#e5b95c]/20 border border-white/10 text-[#e5b95c] whitespace-nowrap transition-colors" data-prompt="Turnkey construction timeline & costs">
            Timeline & Cost?
          </button>
        </div>

        <!-- Input Box -->
        <form id="vastu-ai-form" class="p-3 border-t border-white/10 bg-[#070a0d] flex items-center gap-2">
          <input 
            type="text" 
            id="vastu-ai-input" 
            placeholder="Ask about design, Vastu, Patna & Delhi..." 
            class="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e5b95c] font-sans"
            autocomplete="off"
          />
          <button type="submit" class="p-2 bg-[#e5b95c] text-black rounded-lg hover:bg-amber-400 transition-colors shrink-0">
            <i data-lucide="send" class="w-4 h-4"></i>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(mascotContainer);

    const trigger = document.getElementById('vastu-ai-trigger');
    const chatWindow = document.getElementById('vastu-ai-window');
    const closeBtn = document.getElementById('vastu-ai-close');
    const form = document.getElementById('vastu-ai-form');
    const input = document.getElementById('vastu-ai-input');
    const messages = document.getElementById('vastu-ai-messages');
    const chips = document.querySelectorAll('.ai-chip');

    function toggleChat() {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden')) {
        input.focus();
        scrollBottom();
      }
    }

    function scrollBottom() {
      messages.scrollTop = messages.scrollHeight;
    }

    trigger.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.dataset.prompt;
        submitUserMessage(prompt);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      submitUserMessage(text);
      input.value = '';
    });

    function submitUserMessage(userText) {
      // Append User message
      const userBubble = document.createElement('div');
      userBubble.className = 'flex items-start justify-end gap-2';
      userBubble.innerHTML = `
        <div class="p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-[#e5b95c] to-[#c8633a] text-black font-medium leading-relaxed max-w-[85%] text-xs shadow-md">
          ${userText}
        </div>
      `;
      messages.appendChild(userBubble);
      scrollBottom();

      // Show typing indicator
      const typing = document.createElement('div');
      typing.id = 'ai-typing-indicator';
      typing.className = 'flex items-start gap-2.5';
      typing.innerHTML = `
        <div class="w-6 h-6 rounded-full overflow-hidden border border-[#e5b95c]/40 shrink-0">
          <img src="assets/images/vastushed-logo.jpg" alt="Avatar" class="w-full h-full object-cover" />
        </div>
        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-mono text-[10px] flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#e5b95c] animate-ping"></span>
          Consulting Vastu Matrix...
        </div>
      `;
      messages.appendChild(typing);
      scrollBottom();

      setTimeout(() => {
        const ind = document.getElementById('ai-typing-indicator');
        if (ind) ind.remove();

        const replyHtml = getAiReply(userText);
        const aiBubble = document.createElement('div');
        aiBubble.className = 'flex items-start gap-2.5';
        aiBubble.innerHTML = `
          <div class="w-7 h-7 rounded-full overflow-hidden border border-[#e5b95c]/40 shrink-0 mt-0.5">
            <img src="assets/images/vastushed-logo.jpg" alt="Avatar" class="w-full h-full object-cover" />
          </div>
          <div class="p-3.5 rounded-2xl rounded-tl-none bg-white/[0.04] border border-white/10 text-slate-200 leading-relaxed max-w-[88%] space-y-2">
            <div>${replyHtml}</div>
            <div class="pt-2 border-t border-white/10 flex items-center gap-2">
              <a href="https://wa.me/919876543210?text=${encodeURIComponent('Hello VASTUSHED Team, I was chatting with your Vastu AI regarding: "' + userText + '". Please connect with me for detailed consultation.')}" target="_blank" class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 text-[10px] font-mono">
                <i data-lucide="message-circle" class="w-3 h-3"></i> WhatsApp Our Architects
              </a>
            </div>
          </div>
        `;
        messages.appendChild(aiBubble);
        scrollBottom();

        if (window.lucide) {
          window.lucide.createIcons();
        }
      }, 650);
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  document.addEventListener('DOMContentLoaded', initMascot);
})();
