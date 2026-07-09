/* ─────────────────────
   SHARED DATA (used by the "now on air" bar on every page,
   and by the character grid on the home page)
───────────────────── */
const PROJECTS = [
  {
    id: 'lenlor1', num: '01', name: 'LENLORCRAFT 1',
    subtitle: '', onAir: false,
    logo: 'Project/logo_lenlorcraft_1.webp',
    logoTitle: 'Project/no_bg/logo_lenlorcraft.webp',
    rows: 2, pages: 1,
    chars: []
  },
  {
    id: 'rotas', num: '02', name: 'ROTAS',
    subtitle: '', onAir: false,
    logo: 'Project/logo_rotas-02.webp',
    logoTitle: 'Project/no_bg/logo_rotas.webp',
    rows: 3, pages: 1,
    chars: []
  },
  {
    id: 'nemorphine', num: '03', name: 'THE NEMORPHINE',
    subtitle: '', onAir: false,
    logo: 'Project/logo_the_nemorphine.webp',
    logoTitle: 'Project/no_bg/logo_the_nemorphine.webp',
    rows: 3, pages: 3,
    chars: []
  },
  {
    id: 'lustoria', num: '04', name: 'LUSTORIA HOTEL',
    subtitle: '', onAir: true,
    logo: 'Project/logo_lustoria_hotel.webp',
    logoTitle: 'Project/no_bg/logu_lustoria_hotel.webp',
    rows: 3, pages: 1,
    chars: [
      { roman:'0',     name:'The Fool',           img:'CARD/0card 0.webp',
        thai:'โพลโว่ เจเรก้า', en:'Polvo Jelaga',
        age:17, role:'โจร', profession:'โจรจากสลัม',
        head:'Heart', sin:'Sin of Innocence',
        player:'ฟ้า', playerId:'m3ngzh1', ytName:'M3ng_Zh1',
        yt:'https://www.youtube.com/channel/UCLrVByHOftcetdocaFL0LgQ',
        tag:'#LustoriaHotelเรก้า' },

      { roman:'I',     name:'The Magician',       img:'CARD/1card I.webp',
        thai:'วารัม', en:'Varam',
        age:25, role:'ชาวบ้าน', profession:'นักมายากลเร่ร่อน',
        head:'Slot Machine', sin:'Lie',
        player:'ดรีม', playerId:'Oceanalama', ytName:'GODPAUSE',
        yt:'https://www.youtube.com/@god_pause',
        tag:'#LustoriaHotelวารัม' },

      { roman:'II',    name:'Two of Swords',      img:'CARD/2card II.webp',
        thai:'เมโลเรีย แอสทราเวล', en:'Meloria Astravelle (เมเรีย)',
        age:20, role:'ผู้ติดตาม', profession:'แม่บ้าน',
        head:'Eyes', sin:'Silent Apathy',
        player:'ได๋', playerId:'daidiaryyy', ytName:'daidiaryy',
        yt:'https://www.youtube.com/@daidiaryy1/streams',
        tag:'#LustoriaHotelเมเรีย' },

      { roman:'III',   name:'The Empress',        img:'CARD/3card III.webp',
        thai:'โอฟิเลีย มอนท์แคลร์', en:"Montclair Ophelia",
        age:23, role:'คนรวย', profession:'มูลนิธิ, ค้ามนุษย์',
        head:'Spider', sin:'Sin of Drunkenness',
        player:'เตย', playerId:'Pantera211', ytName:'Alvina Ch',
        yt:'https://www.youtube.com/channel/UCwLCMt4wN6dTIWvxt0w95rQ',
        tag:'#LustoriaHotelโอฟิเลีย' },

      { roman:'IV',    name:'The Emperor',        img:'CARD/4card IV.webp',
        thai:'นิโคไล จีโนซิส ราเว่น', en:'Nikolai Ž. Genosis Raven',
        age:30, role:'โจร', profession:'อดีตมาเฟีย / โจรจากสลัม',
        head:'Myriad Machine', sin:'Knowledge (Destruction)',
        player:'มาธาร์', playerId:'AizenZ_', ytName:'Marstinny',
        yt:'https://www.youtube.com/@Vinciana11',
        tag:'#LustoriaHotelนิโคไล' },

      { roman:'V',     name:'The Hierophant',     img:'CARD/5card V.webp',
        thai:'โลเล็ตต้า แอสทราเวล', en:'Loletta Astravelle (โลโล)',
        age:16, role:'ผู้ติดตาม', profession:'เด็ก ม.ปลาย',
        head:'Hand', sin:'Sin of Fixation',
        player:'ปุย', playerId:'PUINAAAA', ytName:'Akari Puina Ch.',
        yt:'https://www.youtube.com/@AkariPuina',
        tag:'#LustoriaHotelโลเล็ตต้า' },

      { roman:'VI',    name:'The Lovers',         img:'CARD/6card VI.webp',
        thai:'ลาวินเนียร์ ไวโอเลต เลอมองส์', en:'Lavinia Violet Le Mans',
        age:19, role:'ชาวบ้าน', profession:'ลูกสาวร้านน้ำหอม',
        head:'Perfume', sin:'Sin of Infatuated',
        player:'ลุงเตย์', playerId:'raynailz', ytName:'LUNGTAY',
        yt:'https://www.youtube.com/channel/UCm2sJNo1vFkW7bXjXYWGC9A',
        tag:'#LustoriaHotelลาวินเนียร์' },

      { roman:'VII',   name:'The Chariot',        img:'CARD/7card VII.webp',
        thai:'สตีเว่น', en:'Steven',
        age:27, role:'โจร', profession:'โจร / นักวางแผน',
        head:'Paper Bag', sin:'Sin of Survival',
        player:'ไม้', playerId:'ghostmaiky', ytName:'ghostmaiky',
        yt:'https://www.youtube.com/@ghostmaiky',
        tag:'#LustoriaHotelสตีเว่น' },

      { roman:'VIII',  name:'Strength',           img:'CARD/8card VIII.webp',
        thai:'วิเวียน ฟิโอเรลลี่', en:'Vivienne Fiorelli',
        age:22, role:'คนรวย', profession:'คุณหนูบ้านรวย',
        head:'Doll', sin:'Veil of Sin',
        player:'เชาเชา', playerId:'Lavy_W', ytName:'C how_เชา',
        yt:'https://www.youtube.com/channel/UCE14qSbcpPdt71ty3xRM5VA',
        tag:'#LustoriaHotelวิเวียน' },

      { roman:'IX',    name:'The Hermit',         img:'CARD/9card IX.webp',
        thai:'โนวิค อีแวนสัน', en:'Novik Evanson',
        age:'-', role:'ไอดอล', profession:'คนความจำเสื่อม',
        head:'Identity', sin:'Endless Enigma',
        player:'เลเวียซ', playerId:'Leviaz_VTB', ytName:'Leviaz Ch.【DPX】',
        yt:'https://www.youtube.com/@LeviazCh',
        tag:'#LustoriaHotelโนวิค' },

      { roman:'X',     name:'Wheel of Fortune',   img:'CARD/10card X.webp',
        thai:'บีบี เบลบอร์น', en:'BB Belborn',
        age:25, role:'โจร', profession:'คนจากสลัมที่มาเป็นโจร (เพื่อนชวน)',
        head:'Glasses', sin:'The Awakening Story',
        player:'คาวาย', playerId:'_Kawai', ytName:'kawaimecute',
        yt:'https://www.youtube.com/@Kawaime1191',
        tag:'#LustoriaHotelบีบี' },

      { roman:'XI',    name:'Justice',            img:'CARD/11card XI.webp',
        thai:'มอเรี่ยน เฮลบาวด์', en:'Morian Helbound',
        age:18, role:'คนรวย', profession:'หัวหน้าก๊งปล่อยเงินกู้ / ค้าอาวุธ',
        head:'Hollow', sin:'Sin of Greed',
        player:'กล้า', playerId:'SchwarzX2', ytName:'Schwarz',
        yt:'https://www.youtube.com/@SchwarzX2',
        tag:'#LustoriaHotelมอเรี่ยน' },

      { roman:'XII',   name:'The Hanged Man',     img:'CARD/12crad XII.webp',
        thai:'ไฮยาซีน วิสเปอร์', en:'Hyacinth Whisper',
        age:26, role:'ชาวบ้าน', profession:'ชาวประมง',
        head:'Hyaenidae', sin:'Survive',
        player:'ลัส', playerId:'LuZQuLa._', ytName:'LuZQuLa._',
        yt:'https://www.youtube.com/@luzqula._6654',
        tag:'#LustoriaHotelไฮยาซีน' },

      { roman:'XIII',  name:'Death',              img:'CARD/13card XIII.webp',
        thai:'ลูน อามาเลีย มอโร', en:'Lune Amélia Moreau',
        age:23, role:'คนรวย', profession:'ร้านขายเสื้อผ้าแฟชั่น / มาเฟีย',
        head:'Hyaenidae', sin:'Fraud',
        player:'เคียวยะ', playerId:'KyoYaKunGz', ytName:'Kyo Ya Kun Ch',
        yt:'https://www.youtube.com/channel/UCooSuXw2VZedO90XGtEAg9w',
        tag:'#LustoriaHotelลูน' },

      { roman:'XIV',   name:'Temperance',         img:'CARD/14card XIV.webp',
        thai:'คอเวน คูซาร์', en:"Corvane Q'sar",
        age:32, role:'ชาวบ้าน', profession:'บาทหลวง',
        head:'Sins', sin:'Rottenfaith',
        player:'เป็ด', playerId:'MrQuestion7', ytName:'MrQuestion',
        yt:'https://www.youtube.com/@mrquestion4498',
        tag:'#LustoriaHotelคูซาร์' },

      { roman:'XV',    name:'The Devil',          img:'CARD/15card XV.webp',
        thai:'โลกิ ซารานเฟย์', en:'Loki Zalanfay',
        age:32, role:'ผู้ติดตาม', profession:'พ่อบ้าน',
        head:'Crow', sin:'Sin of the Deceiver',
        player:'มาร์ค', playerId:'Makukung', ytName:'MakuKung',
        yt:'https://www.youtube.com/channel/UCaOPp1ZwjLtNWPi8Thc975g',
        tag:'#LustoriaHotelโลกิ' },

      { roman:'XVI',   name:'The Tower',          img:'CARD/16crad XVI.webp',
        thai:'แคลริสซา มอร์ทิมเมอร์', en:'Clarissa Mortimer',
        age:29, role:'ล. โรงแรม', profession:'นักธุรกิจ',
        head:'Moth', sin:'Spiritruin',
        player:'ซาบิ', playerId:'SaBleoik', ytName:'SeRaEl',
        yt:'https://www.youtube.com/@SaBlE5110',
        tag:'#LustoriaHotelแคลริสซา' },

      { roman:'XVII',  name:'The Star',           img:'CARD/17card XVII.webp',
        thai:'ลีแวน', en:'Lievan',
        age:18, role:'ผู้ติดตาม', profession:'เลขา',
        head:'Hask', sin:'Falsegrin',
        player:'จีจ้า', playerId:'Jeeja00', ytName:'je jeeja',
        yt:'https://www.youtube.com/@je_jeeja',
        tag:'#LustoriaHotelลีแวน' },

      { roman:'XVIII', name:'The Moon',           img:'CARD/18card XVIII.webp',
        thai:'-', en:'-',
        age:40, role:'พ่อเจ้าของโรงแรม', profession:'เจ้าของโรงแรมคนเก่า',
        head:'-', sin:'-',
        player:'-', playerId:'WaitAsencnd', ytName:'',
        yt:'',
        tag:'#LustoriaHotel' },

      { roman:'XIX',   name:'The Sun',            img:'CARD/19card XIX.webp',
        thai:'โนอาห์', en:'Noah',
        age:33, role:'บัตเลอร์', profession:'บัตเลอร์',
        head:'Pumpkin Rabbit', sin:'Nullgrace',
        player:'บราว', playerId:'AE_KillerZ', ytName:'BrownSugar',
        yt:'https://www.youtube.com/@brownsugarpow',
        tag:'#LustoriaHotelโนอาห์' },

      { roman:'XX',    name:'The Judgement',      img:'CARD/20card XX.webp',
        thai:'โซระ อาคามิเนะ', en:'Sora Akamine',
        age:23, role:'ผู้ติดตาม', profession:'พ่อบ้าน',
        head:'Tengu', sin:'Payback',
        player:'กล้วย', playerId:'KANKLUAY_', ytName:'กล้วยเอง',
        yt:'https://www.youtube.com/@Kluayeng',
        tag:'#LustoriaHotelโซระ' },

      { roman:'XXI',   name:'The World',          img:'CARD/21card XXI.webp',
        thai:'แมว', en:'Cat',
        age:'-', role:'แมว', profession:'แมว',
        head:'-', sin:'-',
        player:'นอร์ท', playerId:'somnoth', ytName:'AGI-NORTH',
        yt:'https://www.youtube.com/@agi-north158',
        tag:'#LustoriaHotel' },
    ]
  }
];

/* ─────────────────────
   MOBILE MENU
───────────────────── */
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
function mobileNav(fn) {
  closeMobileMenu();
  setTimeout(fn, 60);
}

/* ─────────────────────
   NAVIGATION
───────────────────── */
function goHome() {
  const onHome = /(^|\/)index\.html$/.test(location.pathname) || /\/$/.test(location.pathname);
  if (onHome) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    location.href = 'index.html';
  }
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({behavior:'smooth'});
  } else {
    location.href = 'index.html#' + id;
  }
}

/* ─────────────────────
   NOW ON AIR TABS
───────────────────── */
function renderTabs() {
  const onAir = PROJECTS.find(p => p.onAir);
  document.getElementById('air-tabs').innerHTML = PROJECTS.map(p => `
    <button class="air-tab ${p.id === onAir?.id ? 'active' : ''}" id="tab-${p.id}" onclick="toggleTab('${p.id}')">
      <span>${p.num}</span>
      <span class="air-tab-name">${p.name}</span>
    </button>
  `).join('');
}

function toggleTab(id) {
  // Tab click → show ONLY the project's name (hide "NOW ON AIR | " prefix).
  // Clicking the active tab again → revert to default "NOW ON AIR | <on-air project>".
  const btn = document.getElementById('tab-' + id);
  const wasActive = btn.classList.contains('active');
  document.querySelectorAll('.air-tab').forEach(t => t.classList.remove('active'));
  const airText  = document.querySelector('.air-text');
  const airName  = document.getElementById('air-name');
  if (wasActive) {
    airText.classList.remove('tab-selected');
    const def = PROJECTS.find(p => p.onAir);
    if (def) airName.textContent = def.name;
  } else {
    btn.classList.add('active');
    airText.classList.add('tab-selected');
    const proj = PROJECTS.find(p => p.id === id);
    if (proj) airName.textContent = proj.name;
  }
}

/* ─────────────────────
   MUSIC PLAYER
───────────────────── */
const TRACKS = [
  { title: 'GOAL SET! instrumental',      src: 'song/METALS.mp3' },
  { title: 'DEATH ILLUSION instrumental', src: 'song/EX_LUSTORIA(MT).mp3' }
];
let trackIdx = 0;

const SVG_PLAY   = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>';
const SVG_PAUSE  = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
const SVG_VOL_HI = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';
const SVG_VOL_LO = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 9v6h4l5 5V4l-5 5H7z"/></svg>';
const SVG_VOL_MUTE = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3z"/></svg>';

function loadTrack(i, autoplay) {
  const n = TRACKS.length;
  trackIdx = ((i % n) + n) % n;
  const audio = document.getElementById('mp-audio');
  audio.src = TRACKS[trackIdx].src;
  document.getElementById('mp-title').textContent = TRACKS[trackIdx].title;
  if (autoplay) audio.play().catch(() => {});
}

function togglePlay() {
  const audio = document.getElementById('mp-audio');
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

function nextTrack() { loadTrack(trackIdx + 1, true); }
function prevTrack() { loadTrack(trackIdx - 1, true); }
function hidePlayer() {
  document.getElementById('mp-audio').pause();
  document.getElementById('music-player').classList.add('hidden');
}

function applyVolume(v) {
  const audio = document.getElementById('mp-audio');
  const icon  = document.getElementById('mp-vol-icon');
  const value = document.getElementById('mp-vol-value');
  const vol   = Math.max(0, Math.min(100, +v));
  audio.volume = vol / 100;
  icon.innerHTML = vol === 0 ? SVG_VOL_MUTE : (vol < 50 ? SVG_VOL_LO : SVG_VOL_HI);
  value.textContent = vol;
  try { localStorage.setItem('mp-vol', vol); } catch (e) {}
}

function toggleMute() {
  const slider = document.getElementById('mp-vol-slider');
  if (+slider.value > 0) {
    slider.dataset.prev = slider.value;
    slider.value = 0;
  } else {
    slider.value = slider.dataset.prev || 50;
  }
  applyVolume(slider.value);
}

(function initPlayer() {
  const audio = document.getElementById('mp-audio');
  const playBtn = document.getElementById('mp-play');
  const volSlider = document.getElementById('mp-vol-slider');

  loadTrack(0, false);

  // Restore saved volume (default 50%).
  let savedVol = 50;
  try { const s = localStorage.getItem('mp-vol'); if (s !== null) savedVol = +s; } catch (e) {}
  volSlider.value = savedVol;
  applyVolume(savedVol);

  volSlider.addEventListener('input', e => applyVolume(e.target.value));

  audio.addEventListener('play',  () => {
    playBtn.innerHTML = SVG_PAUSE;
    playBtn.classList.remove('pulse');
  });
  audio.addEventListener('pause', () => { playBtn.innerHTML = SVG_PLAY; });
  audio.addEventListener('ended', () => { loadTrack(trackIdx + 1, true); });

  // Try autoplay; browsers usually block it. Fall back to starting on the
  // user's first interaction with the page.
  audio.play().catch(() => {
    const kick = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click',   kick, true);
      window.removeEventListener('keydown', kick, true);
      window.removeEventListener('touchstart', kick, true);
    };
    window.addEventListener('click',   kick, true);
    window.addEventListener('keydown', kick, true);
    window.addEventListener('touchstart', kick, true);
  });
})();

/* ─────────────────────
   INIT (runs on every page — the now-on-air bar is global chrome)
───────────────────── */
renderTabs();
