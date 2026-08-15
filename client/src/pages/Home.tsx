/* Direction artistique Oasis technique : composition éditoriale agricole, vert oasis profond, bleu hydraulique et accents dorés. */
import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Droplets, Leaf, Menu, Phone, Sun, Truck, X, Zap } from "lucide-react";

const heroImage = "/manus-storage/marai-logo-hero_f46ea31b.png";
const pumpImage = "/manus-storage/marai-pompe-immergee_5fa84beb.jpg";
const solarImage = "/manus-storage/marai-panneaux-solaires_f6b5bfe8.jpg";

const copy = {
  fr: {
    nav: ["Accueil", "Solutions", "Services", "À propos", "Contact"],
    eyebrow: "SERVICES AGRICOLES · TUNISIE",
    title: "L’eau et l’énergie au service de vos récoltes.",
    lead: "Des équipements fiables et un accompagnement de terrain pour faire avancer chaque projet agricole, du puits à la parcelle.",
    cta: "Parler à un conseiller",
    explore: "Découvrir nos solutions",
    solutions: "Nos solutions",
    solutionsLead: "Une sélection pensée pour les besoins réels du terrain.",
    pumps: "Pompes immergées",
    pumpsText: "INOX & plastiques pour le pompage de l’eau, avec des références adaptées à chaque installation.",
    panels: "Panneaux solaires",
    panelsText: "Vente, installation et mise en service de systèmes solaires pour gagner en autonomie.",
    solarSpecs: [{label:"Puissance", value:"530–585 W"}, {label:"Technologie", value:"Mono. N-type / PERC"}, {label:"Rendement", value:"Jusqu’à 21 %"}, {label:"Garantie", value:"Selon modèle"}],
    solarNote: "Valeurs indicatives de gammes fabricant — fiche exacte sur demande.",
    solarDetails: "Les panneaux haute puissance peuvent être proposés en version mono-faciale ou bifaciale, avec verre renforcé et résistance adaptée aux installations extérieures.",
    brands: "Marques de confiance",
    brandsText: "ATX, PIMAX, COMARCO et DONGYIN : une sélection de marques pour vos projets agricoles.",
    services: "Un service qui va jusqu’au bout",
    servicesLead: "Parce qu’un bon équipement vaut surtout par la qualité de l’accompagnement.",
    delivery: "Livraison nationale",
    payment: "Facilités de paiement",
    wholesale: "Gros & détail",
    support: "Installation professionnelle",
    about: "À vos côtés, sur le terrain",
    aboutText: "مرعي للخدمات الفلاحية accompagne les agriculteurs et les porteurs de projets avec une approche simple : comprendre votre besoin, proposer la bonne solution et rester disponible après la vente.",
    contact: "Parlons de votre projet",
    contactText: "Besoin d’une pompe, d’un système solaire ou d’un conseil ? Appelez-nous directement.",
    call: "Appeler maintenant",
    footer: "Nous servons l’agriculteur… parce que l’agriculture est notre avenir."
  },
  ar: {
    nav: ["الرئيسية", "الحلول", "الخدمات", "من نحن", "اتصل بنا"],
    eyebrow: "الخدمات الفلاحية · تونس",
    title: "الماء والطاقة في خدمة محاصيلكم.",
    lead: "تجهيزات موثوقة ومرافقة ميدانية لإنجاح كل مشروع فلاحي، من البئر إلى الحقل.",
    cta: "تحدث مع مستشار",
    explore: "اكتشف حلولنا",
    solutions: "حلولنا",
    solutionsLead: "اختيارات مصممة لتلبية الاحتياجات الحقيقية للفلاح.",
    pumps: "المضخات الغاطسة",
    pumpsText: "مضخات INOX والبلاستيك لضخ المياه، مع مراجع مناسبة لمختلف التركيبات.",
    panels: "الألواح الشمسية",
    panelsText: "بيع وتركيب وتجهيز الأنظمة الشمسية لمزيد من الاستقلالية.",
    solarSpecs: [{label:"القدرة", value:"530–585 واط"}, {label:"التقنية", value:"N-type / PERC"}, {label:"المردود", value:"حتى 21٪"}, {label:"الضمان", value:"حسب النموذج"}],
    solarNote: "قيم إرشادية حسب مراجع المصنع — الورقة التقنية حسب الطلب.",
    solarDetails: "تتوفر الألواح ذات القدرة العالية بنسخ أحادية أو ثنائية الوجه، مع زجاج مقوى ومقاومة مناسبة للتركيبات الخارجية.",
    brands: "علامات موثوقة",
    brandsText: "ATX و PIMAX و COMARCO و DONGYIN : علامات مختارة لمشاريعكم الفلاحية.",
    services: "خدمة ترافقكم حتى النهاية",
    servicesLead: "لأن جودة التجهيز تظهر أيضاً في جودة المرافقة.",
    delivery: "توصيل إلى مختلف الجهات",
    payment: "تسهيلات في الدفع",
    wholesale: "بيع بالجملة والتفصيل",
    support: "تركيب وخدمة احترافية",
    about: "معكم في الميدان",
    aboutText: "ترافق شركة مرعي للخدمات الفلاحية الفلاحين وأصحاب المشاريع من خلال منهج بسيط: فهم حاجتكم، اقتراح الحل المناسب، والبقاء إلى جانبكم بعد البيع.",
    contact: "لنتحدث عن مشروعكم",
    contactText: "تحتاجون إلى مضخة أو نظام شمسي أو استشارة؟ اتصلوا بنا مباشرة.",
    call: "اتصل الآن",
    footer: "نخدم الفلاح... لأن الفلاحة مستقبلنا."
  }
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const isArabic = lang === "ar";

  const setLanguage = (next: "fr" | "ar") => setLang(next);

  return (
    <div className="site-shell" dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="مرعي للخدمات الفلاحية">
          <span className="brand-mark"><Leaf size={20} strokeWidth={2.3} /></span>
          <span className="brand-text"><strong>مرعي</strong><small>للخدمات الفلاحية</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          {t.nav.map((item, index) => <a key={item} href={["#accueil", "#solutions", "#services", "#apropos", "#contact"][index]} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Choisir la langue">
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLanguage("fr")}>FR</button>
            <button className={lang === "ar" ? "active" : ""} onClick={() => setLanguage("ar")}>ع</button>
          </div>
          <a className="header-call" href="tel:+21650691980"><Phone size={16} /> <span>50 691 980</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero-section">
          <div className="hero-copy">
            <span className="kicker"><span className="kicker-dot" />{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+21650691980">{t.cta} <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#solutions">{t.explore} <ChevronDown size={17} /></a>
            </div>
            <div className="hero-note"><span className="note-icon"><Zap size={17} /></span><span>{isArabic ? "حلول موثوقة لكل مشروع فلاحي" : "Des solutions fiables pour chaque projet agricole"}</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src={heroImage} alt="مرعي للخدمات الفلاحية — pompes immergées et panneaux solaires" /></div>
            <div className="hero-stamp"><span>01</span><small>{isArabic ? "خبرة ميدانية" : "Expertise terrain"}</small></div>
            <div className="hero-float"><Droplets size={18} /><span>{isArabic ? "ضخ المياه" : "Pompage de l’eau"}</span></div>
          </div>
          <div className="hero-side-label">MARAI<br />AGRICULTURAL<br />SERVICES</div>
        </section>

        <section className="proof-strip" aria-label="Points forts">
          <div><span>01</span><strong>{isArabic ? "جودة موثوقة" : "Qualité fiable"}</strong></div>
          <div><span>02</span><strong>{isArabic ? "أسعار تنافسية" : "Prix compétitifs"}</strong></div>
          <div><span>03</span><strong>{isArabic ? "توصيل وطني" : "Livraison nationale"}</strong></div>
          <div><span>04</span><strong>{isArabic ? "مرافقة احترافية" : "Accompagnement pro"}</strong></div>
        </section>

        <section id="solutions" className="solutions-section section-pad">
          <div className="section-heading">
            <div><span className="section-index">01 / 03</span><h2>{t.solutions}</h2></div>
            <p>{t.solutionsLead}</p>
          </div>
          <div className="solution-grid">
            <article className="solution-card card-pumps"><div className="solution-image"><img src={pumpImage} alt={isArabic ? "مضخة غاطسة من inox" : "Pompe immergée en inox"} /></div><div className="card-number">01</div><div className="card-icon"><Droplets /></div><div className="card-content"><span className="card-label">POMPES · WATER</span><h3>{t.pumps}</h3><p>{t.pumpsText}</p><div className="brand-row"><span>ATX</span><span>PIMAX</span><span>COMARCO</span><span>DONGYIN</span></div></div></article>
            <article className="solution-card card-solar"><div className="solution-image"><img src={solarImage} alt={isArabic ? "ألواح شمسية في حقل فلاحي" : "Panneaux solaires dans un champ agricole"} /></div><div className="card-number">02</div><div className="card-icon"><Sun /></div><div className="card-content"><span className="card-label">ÉNERGIE · SOLAR</span><h3>{t.panels}</h3><p>{t.panelsText}</p><div className="solar-specs">{t.solarSpecs.map((spec) => <div className="solar-spec" key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div><p className="solar-detail">{t.solarDetails}</p><small className="solar-note">{t.solarNote}</small><div className="card-link">{isArabic ? "اطلب الورقة التقنية" : "Demander la fiche technique"} <ArrowUpRight size={16} /></div></div></article>
            <article className="solution-card card-brands"><div className="card-number">03</div><div className="card-icon"><Check /></div><div className="card-content"><span className="card-label">SÉLECTION · TRUST</span><h3>{t.brands}</h3><p>{t.brandsText}</p><div className="card-link">{isArabic ? "اختر بثقة" : "Choisir avec confiance"} <ArrowUpRight size={16} /></div></div></article>
          </div>
        </section>

        <section id="services" className="service-section section-pad">
          <div className="service-intro"><span className="section-index light">02 / 03</span><h2>{t.services}</h2><p>{t.servicesLead}</p></div>
          <div className="service-list">
            {[{icon: Truck, title:t.delivery, text:isArabic?"نضمن لكم وصول منتجاتكم إلى مختلف الجهات.":"Nous faisons parvenir vos équipements partout en Tunisie."},{icon: Zap, title:t.payment, text:isArabic?"حلول مرنة لمساعدتكم على إنجاز مشاريعكم.":"Des facilités pour avancer sereinement sur vos projets."},{icon: Leaf, title:t.wholesale, text:isArabic?"حلول مناسبة للمهنيين والأفراد.":"Des conditions adaptées aux professionnels comme aux particuliers."},{icon: Check, title:t.support, text:isArabic?"من الاختيار إلى التركيب، نبقى معكم.":"Du choix à la mise en service, nous restons à vos côtés."}].map(({icon:Icon,title,text},i)=><div className="service-item" key={title}><span className="service-count">0{i+1}</span><span className="service-icon"><Icon size={20}/></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={19}/></div>)}
          </div>
        </section>

        <section id="apropos" className="about-section section-pad">
          <div className="about-side"><span className="section-index">03 / 03</span><div className="vertical-script">من الأرض إلى المستقبل</div></div>
          <div className="about-body"><span className="kicker"><span className="kicker-dot" />{isArabic ? "من نحن" : "NOTRE APPROCHE"}</span><h2>{t.about}</h2><p>{t.aboutText}</p><div className="about-signature"><strong>مرعي</strong><span>Services Agricoles</span></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-decor"><Sun size={116} strokeWidth={0.7}/></div>
          <div className="contact-copy"><span className="kicker"><span className="kicker-dot" />{isArabic ? "نحن في خدمتكم" : "PARLONS TERRAIN"}</span><h2>{t.contact}</h2><p>{t.contactText}</p></div>
          <div className="contact-actions"><a className="button button-gold" href="tel:+21650691980"><Phone size={18}/>{t.call}</a><div className="phone-numbers"><strong>50 691 980</strong><strong>93 691 105</strong></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark"><Leaf size={18}/></span><strong>مرعي للخدمات الفلاحية</strong></div><p>{t.footer}</p><div className="footer-meta"><span>© {new Date().getFullYear()} Marai Services Agricoles</span><a href="#accueil">↑</a></div></footer>
    </div>
  );
}
