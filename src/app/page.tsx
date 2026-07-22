'use client'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#080C09', minHeight: '100vh' }}>

      <style>{`
        :root {
          --g: #00B874;
          --dark: #080C09;
          --card: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.07);
          --text: rgba(255,255,255,0.5);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family:'Inter',sans-serif; background:var(--dark); color:#fff; overflow-x:hidden; }

        nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:18px 60px;
          background:rgba(8,12,9,0.8); backdrop-filter:blur(20px);
          border-bottom:1px solid var(--border);
        }
        .nav-r { display:flex; align-items:center; gap:28px; }
        .nav-link { font-size:14px; color:var(--text); text-decoration:none; font-weight:500; transition:color .2s; }
        .nav-link:hover { color:#fff; }
        .btn { background:var(--g); color:#fff; border:none; border-radius:100px; padding:10px 22px; font-size:14px; font-weight:700; cursor:pointer; font-family:'Inter',sans-serif; transition:box-shadow .2s, transform .15s; text-decoration: none; display: inline-block; }
        .btn:hover { box-shadow:0 8px 30px rgba(0,184,116,.4); transform:translateY(-1px); }
        .btn-lg { animation: breathe 3s ease-in-out infinite; }
@keyframes breathe { 0%,100%{ box-shadow:0 8px 24px rgba(0,184,116,.25); } 50%{ box-shadow:0 8px 34px rgba(0,184,116,.55); } }

        .nav-hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; padding: 4px; }
        .nav-hamburger span { width: 22px; height: 2px; background: rgba(255,255,255,.6); border-radius: 2px; }

        @media (max-width: 768px) {
  nav { padding: 14px 20px; }
  .nav-r { display: none; }
  .nav-hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
.mobile-menu { flex-direction: column; gap: 0px; position: fixed; top: 56px; right: 16px; left: auto; width: 180px; background: #0d160f; border: 1px solid var(--border); border-radius: 12px; padding: 6px; z-index: 99; }
.mobile-menu a { padding: 9px 12px; border-radius: 8px; color: rgba(255,255,255,.7); text-decoration: none; font-size: 13px; font-weight: 500; text-align: center; }
.mobile-menu a.btn { background: var(--g); color: #fff; text-align: center; font-weight: 700; margin-top: 4px; }
.mobile-menu a.btn { background: var(--g); color: #fff; text-align: center; font-weight: 700; margin-top: 6px; }
      `}</style>

      <nav>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg viewBox="0 0 520 80" height="32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="iconClip">
                <rect x="0" y="0" width="80" height="80" rx="14"/>
              </clipPath>
            </defs>
            <rect x="0" y="0" width="80" height="80" rx="14" fill="#0d160f"/>
            <g clipPath="url(#iconClip)">
              <rect x="0" y="38" width="80" height="2" fill="#00B874" opacity="0.9">
                <animate attributeName="y" values="10;68;10" dur="2.4s" repeatCount="indefinite" calcMode="ease-in-out"/>
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.4s" repeatCount="indefinite"/>
              </rect>
              <text x="40" y="52" fontFamily="Arial Black, sans-serif" fontSize="32" fontWeight="900" fill="#00B874" textAnchor="middle">S</text>
            </g>
            <path d="M12 22 L12 10 L24 10" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 22 L68 10 L56 10" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 58 L12 70 L24 70" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 58 L68 70 L56 70" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="96" y="50" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800">
              <tspan fill="#ffffff">Shoot</tspan><tspan fill="#00B874">scan</tspan>
            </text>
          </svg>
        </a>
        <div className="nav-r">
  <a href="/dashboard" className="nav-link">Scanner</a>
  <a href="/tarifs" className="nav-link">Tarifs</a>
  <a href="/stats" className="nav-link">Dashboard</a>
  <a href="/account" className="nav-link">Mon compte</a>
</div>
        <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="/dashboard" onClick={() => setMenuOpen(false)}>Scanner</a>
          <a href="/tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
          <a href="/stats" onClick={() => setMenuOpen(false)}>Dashboard</a>
          <a href="/account" onClick={() => setMenuOpen(false)}>Mon compte</a>
        </div>
      )}
{/* HERO */}
      <section
        style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
alignItems: 'center', justifyContent: 'center',
          padding: '130px 24px 60px', textAlign: 'center',
          position: 'relative', overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,184,116,0.09) 0%, transparent 70%)'
        }} />
        <div style={{
          position: 'absolute', top: '180px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '400px', pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(0,184,116,0.16) 0%, transparent 70%)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)'
        }} />

        <style>{`
          .hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(0,184,116,0.08); border:1px solid rgba(0,184,116,0.2); border-radius:100px; padding:7px 18px; font-size:13px; font-weight:600; color:var(--g); margin-bottom:36px; position:relative; }
          .dot { width:7px; height:7px; background:var(--g); border-radius:50%; animation:blink 2s infinite; }
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
          .hero-h1 { font-family:'Inter',sans-serif; font-size: clamp(32px, 4.5vw, 60px); font-weight:700; line-height:1.15; letter-spacing:-1.5px; margin-bottom:24px; max-width:720px; }
          .hero-sub { font-size:18px; color:var(--text); line-height:1.65; max-width:500px; margin-bottom:44px; font-weight:400; }
          .hero-sub strong { color:rgba(255,255,255,.8); font-weight:600; }
          .hero-ctas { display:flex; align-items:center; gap:14px; margin-bottom:60px; }
          .btn-lg { padding:16px 40px; font-size:16px; font-weight:700; border-radius:100px; }
          .btn-outline { background:transparent; border:1px solid var(--border); color:rgba(255,255,255,.55); padding:15px 28px; font-size:15px; font-weight:600; border-radius:100px; cursor:pointer; font-family:'Inter',sans-serif; transition:all .2s; }
          .btn-outline:hover { border-color:rgba(255,255,255,.2); color:#fff; }
          .trust { display:flex; align-items:center; gap:6px; font-size:13px; color:rgba(255,255,255,.28); font-weight:500; }
          .trust-item { display:flex; align-items:center; gap:5px; }
          .trust-item::before { content:'✓'; color:var(--g); }
          .trust-sep { color:rgba(255,255,255,.12); }

          @media (max-width: 768px) {
  section:has(.hero-h1) { padding: 80px 24px 60px !important; }
.hero-badge { font-size: 11px; padding: 5px 12px; margin-bottom: 20px; }
.hero-h1 { font-size: 36px; letter-spacing: -1px; margin-bottom: 44px; line-height: 1.15; }
.hero-sub { font-size: 14px; margin-bottom: 34px; margin-top: 20px; }
  .hero-ctas { flex-direction: column; align-items: stretch; gap: 10px; margin-bottom: 32px; width: 100%; }
  .btn-lg { padding: 13px 24px; font-size: 14px; }
  .btn-outline { padding: 12px 24px; font-size: 13px; }
  .trust { flex-wrap: wrap; justify-content: center; gap: 8px; font-size: 11px; }
  .trust-sep { display: none; }
}
        `}</style>

        <div className="hero-badge">
          <div className="dot"></div>
          IA de valorisation — En ligne maintenant
        </div>

        <h1 className="hero-h1" style={{ color: '#fff' }}>
          Et si ça valait plus que tu ne le crois ?
        </h1>

        <p className="hero-sub">
          Ta photo. <strong>Un prix juste</strong>, et la meilleure façon de vendre. En 10 secondes.
        </p>

        <div className="hero-ctas">
          <a href="/register" className="btn btn-lg">Essaie gratuitement</a>
          <a href="#demo" className="btn-outline">Voir une démo ↓</a>
        </div>

        <div className="trust">
          <div className="trust-item">Sans carte bancaire</div>
          <div className="trust-sep">·</div>
          <div className="trust-item">3 scans offerts</div>
        </div>
      </section>
      {/* BANDEAU TÉMOIGNAGES */}
      <section style={{ padding: '0px 0 20px', textAlign: 'center' }}>
        <style>{`
          .marquee-wrap2 {
            position: relative; overflow: hidden; margin-bottom: 14px;
            -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
            mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          }
          .marquee-track2 { display:flex; gap:14px; width:max-content; }
          .marquee-wrap2:hover .marquee-track2 { animation-play-state: paused; }
          .track-l2 { animation: scroll-left2 60s linear infinite; }
          .track-r2 { animation: scroll-right2 60s linear infinite; }
          @keyframes scroll-left2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes scroll-right2 { from { transform: translateX(-50%); } to { transform: translateX(0); } }

          .rev-h2 { flex-shrink:0; display:flex; align-items:center; gap:14px; background:rgba(255,255,255,.03);
            border:1px solid var(--border); border-radius:100px; padding:20px 26px; white-space:nowrap; }
          .rev-h2-stars { color:var(--g); font-size:13px; flex-shrink:0; }
          .rev-h2-text { font-size:13px; color:rgba(255,255,255,.8); font-style:italic; }
          .rev-h2-name { font-size:12px; color:var(--text); font-weight:700; flex-shrink:0; }
          .rev-h2-name::before { content:'— '; color:var(--border); }
          .rev-h2-plan { font-size:10px; font-weight:700; padding:3px 10px; border-radius:10px;
            text-transform:uppercase; letter-spacing:.3px; flex-shrink:0; }
          .rev-h2-plan.free { background:rgba(255,255,255,.06); color:rgba(255,255,255,.5); border:1px solid var(--border); }
          .rev-h2-plan.pro { background:rgba(0,184,116,.1); color:var(--g); border:1px solid rgba(0,184,116,.25); }
          .rev-h2-plan.business { background:rgba(255,193,7,.1); color:#ffc107; border:1px solid rgba(255,193,7,.25); }

          @media (max-width: 768px) {
            .rev-h2 { padding: 14px 18px; }
            .rev-h2-text { font-size: 12px; }
          }
        `}</style>

        {[0, 1].map((rowIdx) => (
          <div className="marquee-wrap2" key={rowIdx}>
            <div className={`marquee-track2 ${rowIdx === 0 ? 'track-l2' : 'track-r2'}`}>
              {[...Array(2)].flatMap(() => [
                { stars: '★★★★☆', text: "pour mes 3 scans gratuits par mois j'ai déjà repéré 2 objets oubliés que je vais revendre", name: 'Thomas L.', plan: 'free', planLabel: 'Plan Gratuit' },
                { stars: '★★★★★', text: "j'ai vendu mon iPhone 12 150€ de plus que ce que j'aurais mis grâce au titre généré", name: 'Marie L.', plan: 'pro', planLabel: 'Plan Pro' },
                { stars: '★★★★★', text: "le scan en lot m'économise 2h par semaine, je scanne le dimanche et je publie tout", name: 'Kevin D.', plan: 'pro', planLabel: 'Plan Pro' },
                { stars: '★★★★★', text: "avec le multi-comptes toute mon équipe scanne en simultané, un vrai gain de temps", name: 'Noa R.', plan: 'business', planLabel: 'Plan Business' },
                { stars: '★★★★★', text: "le titre d'annonce généré par l'IA a vraiment tout changé pour mes ventes", name: 'Julie P.', plan: 'pro', planLabel: 'Plan Pro' },
                { stars: '★★★★☆', text: "simple et rapide, j'ai vendu mon vélo en 2 jours grâce au prix recommandé", name: 'Antoine M.', plan: 'free', planLabel: 'Plan Gratuit' },
              ]).map((r, i) => (
                <div key={i} className="rev-h2">
                  <span className="rev-h2-stars">{r.stars}</span>
                  <span className="rev-h2-text">"{r.text}"</span>
                  <span className="rev-h2-name">{r.name}</span>
                  <span className={`rev-h2-plan ${r.plan}`}>{r.planLabel}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      {/* DEMO */}
      <section id="demo" style={{ padding: '10px 60px', textAlign: 'center', position: 'relative' }}>
        <style>{`
          .demo-tag { font-size:13px; font-weight:700; color:var(--g); text-transform:uppercase; letter-spacing:1px; margin-bottom:16px; }
          .demo-title { font-family:'Inter',sans-serif; font-size: clamp(26px, 3.5vw, 42px); font-weight:700; color:#fff; margin-bottom:60px; letter-spacing:-1px; }
          .demo-title em { color:var(--g); font-style:normal; }

          .phone { width:300px; height:610px; margin:0 auto; background:#0d160f; border-radius:40px; border:6px solid #1a241c; box-shadow:0 40px 100px rgba(0,0,0,.6); position:relative; overflow:hidden; }
          .phone-notch { position:absolute; top:0; left:50%; transform:translateX(-50%); width:120px; height:24px; background:#0d160f; border-radius:0 0 16px 16px; z-index:5; }
          .phone-screen { position:absolute; inset:0; background:linear-gradient(180deg, #0a120c 0%, #080C09 100%); padding:40px 18px 18px; display:flex; flex-direction:column; align-items:center; }

          .scan-frame { width:230px; height:230px; border-radius:20px; border:2px solid var(--g); position:relative; overflow:hidden; margin-bottom:22px; background:rgba(0,184,116,.05); }
          .scan-line { position:absolute; left:0; right:0; height:2px; background:var(--g); box-shadow:0 0 12px var(--g); animation: scan 2.4s ease-in-out infinite; }
          @keyframes scan { 0%,100%{ top:6%; } 50%{ top:92%; } }
          .scan-obj { font-size:64px; }

          .demo-card { background:rgba(255,255,255,.04); border:1px solid var(--border); border-radius:14px; padding:14px; width:100%; text-align:left; }
          .demo-card-top { display:flex; gap:10px; align-items:flex-start; margin-bottom: 10px; }
.demo-ring { width:42px; height:42px; border-radius:50%; border:2px solid var(--g); background:rgba(0,184,116,.06); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.demo-ring-num { font-family:'Inter',sans-serif; font-weight:800; font-size:15px; color:var(--g); }
.demo-roi { font-size:10px; color:var(--text); margin-top:8px; }
.demo-roi strong { color:var(--g); }
.demo-card-name { font-size:13px; font-weight:700; color:#fff; margin-bottom:4px; }
.demo-card-meta { font-size:11px; color:var(--text); margin-bottom:8px; }
.demo-tags { display:flex; flex-wrap:wrap; gap:4px; margin-bottom:10px; }
.demo-tag-pill { font-size:9px; padding:3px 8px; border-radius:10px; background:rgba(0,184,116,.1); color:var(--g); border:1px solid rgba(0,184,116,.25); }
.demo-prices { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; margin-bottom:10px; }
.demo-pc { background:rgba(0,184,116,.08); border-radius:8px; padding:8px 4px; text-align:center; }
.demo-plbl { font-size:8px; color:var(--text); text-transform:uppercase; margin-bottom:3px; }
.demo-pval { font-size:14px; font-weight:800; color:#fff; font-family:'Inter',sans-serif; }
.demo-pval.hi { color:var(--g); }
.demo-plat { display:flex; gap:4px; margin-bottom:8px; }
.demo-plat-pill { font-size:9px; padding:3px 8px; border-radius:10px; border:1px solid var(--border); color:var(--text); }
.demo-tip { font-size:10px; color:var(--text); line-height:1.5; background:rgba(255,255,255,.03); border-radius:8px; padding:8px 10px; }

          @media (max-width: 768px) {
  section[id="demo"] { padding: 50px 24px; }
  .phone { width: 280px; height: 570px; }
}
        `}</style>

        <div className="demo-tag">Démo en direct</div>
        <h2 className="demo-title">Regarde l'IA <em>travailler</em> en temps réel</h2>

        <div className="phone">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="scan-frame">
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100%' }}>
                <span className="scan-obj">👟</span>
              </div>
              <div className="scan-line"></div>
            </div>
            <div className="demo-card">
              <div className="demo-card-top">
                <div className="demo-ring"><span className="demo-ring-num">87</span></div>
                <div>
                  <div className="demo-card-name">Nike Air Max 90</div>
                  <div className="demo-card-meta">Chaussures · Bon état · Taille 42</div>
                </div>
              </div>
              <div className="demo-tags">
                <span className="demo-tag-pill">↑ Forte demande</span>
                <span className="demo-tag-pill">Nike</span>
                <span className="demo-tag-pill">Iconique</span>
              </div>
              <div className="demo-prices">
                <div className="demo-pc"><div className="demo-plbl">Min</div><div className="demo-pval">45€</div></div>
                <div className="demo-pc"><div className="demo-plbl">Reco</div><div className="demo-pval hi">62€</div></div>
                <div className="demo-pc"><div className="demo-plbl">Max</div><div className="demo-pval">78€</div></div>
              </div>
              <div className="demo-plat">
                <span className="demo-plat-pill">Vinted</span>
                <span className="demo-plat-pill">Leboncoin</span>
              </div>
              <div className="demo-tip">💡 Vends sur Vinted en priorité · Photos avec fond clair recommandées · Mentionne l'état de la semelle</div>
              <div className="demo-roi">ROI estimé : <strong>20-35%</strong> · État conseillé pour la vente : Bon état</div>
            </div>
        </div>
      </div>
    </section>
    {/* PROOF STRIP */}
      <div style={{
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px',
        background: 'rgba(255,255,255,.015)', flexWrap: 'wrap'
      }}>
        <style>{`
          .proof-item { text-align:center; }
          .proof-num { font-family:'Inter',sans-serif; font-size:16px; font-weight:700; color:#fff; }
.proof-label { font-size:11px; }
          .proof-label { font-size:13px; color:var(--text); margin-top:2px; }
          @media (max-width: 768px) {
            div:has(> .proof-item) { gap: 20px !important; padding: 24px !important; }
          }
        `}</style>
        <div className="proof-item"><div className="proof-num">10s</div><div className="proof-label">pour analyser un objet</div></div>
        <div className="proof-item"><div className="proof-num">+30€</div><div className="proof-label">récupérés en moyenne</div></div>
        <div className="proof-item"><div className="proof-num">0€</div><div className="proof-label">pour commencer</div></div>
        <div className="proof-item"><div className="proof-num">100%</div><div className="proof-label">objets reconnus par l'IA</div></div>
      </div>
      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: '100px 60px', maxWidth: '1080px', margin: '0 auto' }}>
        <style>{`
          .steps-tag { font-size:13px; font-weight:700; color:var(--g); text-transform:uppercase; letter-spacing:1px; text-align:center; margin-bottom:16px; }
          .steps-title { font-family:'Inter',sans-serif; font-size: clamp(26px, 3.5vw, 42px); font-weight:700; color:#fff; text-align:center; margin-bottom:60px; letter-spacing:-1px; }
          .steps-title em { color:var(--g); font-style:normal; }
          .steps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
          .step-card { background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:20px; padding:36px 28px; }
          .step-num { font-family:'Inter',sans-serif; font-size:32px; font-weight:800; color:rgba(255,255,255,.04); line-height:1; margin-bottom:8px; }
          .step-icon { width:48px; height:48px; background:rgba(0,184,116,.1); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:18px; }
          .step-title { font-size:18px; font-weight:700; color:#fff; margin-bottom:8px; }
          .step-desc { font-size:14px; color:var(--text); line-height:1.6; }

          @media (max-width: 768px) {
  section:has(.steps-grid) { padding: 40px 24px; }
  .steps-grid { grid-template-columns: 1fr; gap: 10px; }
  .step-card { padding: 20px 18px; }
  .steps-title { font-size: 24px; margin-bottom: 30px; }
  .step-icon { width: 36px; height: 36px; font-size: 18px; margin-bottom: 10px; }
  .step-title { font-size: 15px; }
  .step-desc { font-size: 12px; }
}
        `}</style>

        <div className="steps-tag">Comment ça marche</div>
        <h2 className="steps-title">Simple comme <em>un shoot</em></h2>

        <div className="steps-grid">
          {[
            { num: '01', icon: '📸', title: 'Tu shootes', desc: "Photo ou galerie. Vêtement, iPhone, meuble, livre, montre… L'IA reconnaît tout." },
            { num: '02', icon: '🤖', title: 'On scanne', desc: "L'IA identifie l'objet, analyse l'état, consulte des millions d'annonces et calcule le prix optimal." },
            { num: '03', icon: '💰', title: 'Tu encaisses', desc: "Score, prix, plateforme idéale, titre d'annonce généré et conseils. Il reste juste à publier." },
          ].map(s => (
            <div key={s.num} className="step-card">
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* FONCTIONNALITÉS */}
      <section style={{ background: 'rgba(255,255,255,.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 60px' }}>
        <style>{`
          .feats-wrap { max-width: 1080px; margin: 0 auto; }
          .feats-grid2 { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:60px; }
          .feat-card { background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:18px; padding:28px; transition: border-color .2s, background .2s; }
          .feat-card:hover { border-color:rgba(0,184,116,.3); background:rgba(255,255,255,.04); }
          .feat-card-icon { font-size:24px; margin-bottom:14px; }
          .feat-card-title { font-size:16px; font-weight:700; color:#fff; margin-bottom:6px; }
          .feat-card-desc { font-size:13px; color:var(--text); line-height:1.6; }

          @media (max-width: 768px) {
  section:has(.feats-grid2) { padding: 40px 24px; }
  .feats-grid2 { grid-template-columns: 1fr; gap: 8px; margin-top: 24px; }
  .feat-card { padding: 18px; }
  .feat-card-title { font-size: 14px; }
  .feat-card-desc { font-size: 12px; }
  .steps-title { font-size: 24px; margin-bottom: 16px; }
}
        `}</style>

        <div className="feats-wrap">
          <div className="steps-tag">Fonctionnalités</div>
          <h2 className="steps-title">Tout pour revendre <em>intelligemment</em></h2>

          <div className="feats-grid2">
            {[
              { icon: '🎯', title: 'Score de revendabilité', desc: "Un score sur 100 basé sur la demande, l'état et les tendances actuelles du marché." },
              { icon: '📊', title: '12 plateformes comparées', desc: 'Vinted, Back Market, eBay, Depop, Vestiaire, Leboncoin… On te dit où vendre pour maximiser.' },
              { icon: '✍️', title: 'Annonce prête à copier', desc: 'Titre accrocheur et description optimisée générés automatiquement. Tu publies, c\'est tout.' },
              { icon: '📦', title: 'Scan en lot', desc: "Mode Pro : scanne jusqu'à 3 articles en même temps. Business : lots illimités." },
              { icon: '🧮', title: 'Calculateur de marge', desc: "Entre ton prix d'achat et calcule ton ROI net en temps réel pour chaque article." },
              { icon: '📂', title: 'Dashboard & export CSV', desc: 'Suis ta valeur totale, tes catégories les plus rentables et exporte tes données.' },
            ].map(f => (
              <div key={f.title} className="feat-card">
                <div className="feat-card-icon">{f.icon}</div>
                <div className="feat-card-title">{f.title}</div>
                <div className="feat-card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* TARIFS */}
      <section style={{ background: 'rgba(255,255,255,.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 60px' }}>
        <style>{`
          .pricing-wrap { max-width: 1080px; margin: 0 auto; }
          .pricing-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:60px; }
          .price-card { background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:20px; padding:32px 28px; }
          .price-card.pop { border:1.5px solid var(--g); background:rgba(0,184,116,.04); position:relative; }
          .price-pop-badge { display:inline-block; background:rgba(0,184,116,.12); color:var(--g); font-size:11px; font-weight:700; padding:4px 12px; border-radius:10px; margin-bottom:14px; }
          .price-plan { font-size:14px; font-weight:700; color:#fff; margin-bottom:8px; }
          .price-amount { font-family:'Inter',sans-serif; font-size:26px; font-weight:700; color:#fff; margin-bottom:2px; }
.price-annual { display:inline-block; font-size:11px; font-weight:700; color:var(--g); background:rgba(0,184,116,.1); border:1px solid rgba(0,184,116,.25); padding:4px 10px; border-radius:8px; margin-top:6px; }
          .price-period { font-size:12px; color:var(--text); margin-bottom:24px; }
          .price-feats { list-style:none; margin-bottom:28px; }
          .price-feats li { font-size:13px; color:rgba(255,255,255,.65); padding:8px 0; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:8px; }
          .price-feats li:last-child { border-bottom:none; }
          .price-feats li::before { content:'✓'; color:var(--g); font-weight:700; }
          .price-btn { display:block; width:100%; padding:13px; border-radius:100px; font-size:14px; font-weight:700; text-align:center; text-decoration:none; transition:all .2s; font-family:'Inter',sans-serif; }
          .price-btn.primary { background:var(--g); color:#fff; }
          .price-btn.primary:hover { box-shadow:0 8px 30px rgba(0,184,116,.4); }
          .price-btn.outline { background:transparent; color:#fff; border:1px solid var(--border); }
          .price-btn.outline:hover { border-color:rgba(255,255,255,.3); }

          @media (max-width: 768px) {
  section:has(.pricing-grid) { padding: 40px 24px; }
  .pricing-grid { grid-template-columns: 1fr; gap: 10px; margin-top: 24px; }
  .price-card { padding: 22px 18px; }
  .price-amount { font-size: 22px; }
  .price-plan { font-size: 13px; }
  .price-feats li { font-size: 12px; }
  .steps-title { font-size: 24px; margin-bottom: 16px; }
}
        `}</style>

        <div className="pricing-wrap">
          <div className="steps-tag" style={{ textAlign: 'center' }}>Tarifs</div>
          <h2 className="steps-title" style={{ textAlign: 'center' }}>Des prix <em>simples</em></h2>

          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-plan">Gratuit</div>
              <div className="price-amount">0€</div>
              <div className="price-period">/ mois</div>
              <ul className="price-feats">
                <li>3 scans par mois</li>
                <li>Estimation IA de base</li>
                <li>Historique 7 jours</li>
              </ul>
              <a href="/register" className="price-btn outline">Commencer gratuitement</a>
            </div>

            <div className="price-card pop">
              <div className="price-pop-badge">★ Le plus populaire</div>
              <div className="price-plan">Pro</div>
              <div className="price-amount">11,99€</div>
              <div className="price-period">/ mois</div>
<div className="price-annual">99€/an = -31% économisés</div>
              <ul className="price-feats">
                <li>Scans illimités</li>
                <li>Scan en lot</li>
                <li>Historique complet</li>
                <li>Export CSV</li>
                <li>Support prioritaire</li>
              </ul>
              <a href="/register" className="price-btn primary">Passer Pro</a>
            </div>

            <div className="price-card">
              <div className="price-plan">Business</div>
              <div className="price-amount">29,99€</div>
              <div className="price-period">/ mois</div>
              <ul className="price-feats">
                <li>Tout Pro inclus</li>
                <li>Multi-comptes</li>
                <li>API access</li>
                <li>Dashboard équipe</li>
                <li>Onboarding dédié</li>
              </ul>
              <a href="/register" className="price-btn outline">Passer Business</a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section style={{ padding: '120px 60px', textAlign: 'center' }}>
        <style>{`
          .cta-final-title { font-family:'Inter',sans-serif; font-size: clamp(28px, 4vw, 48px); font-weight:700; color:#fff; margin-bottom:16px; letter-spacing:-1px; }
          .cta-final-title em { color:var(--g); font-style:normal; }
          .cta-final-sub { font-size:15px; color:var(--text); margin-bottom:36px; }
          .btn-cta-final { background:var(--g); color:#fff; border:none; border-radius:100px; padding:16px 38px; font-size:16px; font-weight:700; cursor:pointer; font-family:'Inter',sans-serif; text-decoration:none; display:inline-block; transition: box-shadow .2s, transform .15s; }
          .btn-cta-final:hover { box-shadow:0 8px 30px rgba(0,184,116,.4); transform:translateY(-1px); }

          @media (max-width: 768px) {
  section:has(.cta-final-title) { padding: 50px 24px; }
  .cta-final-title { font-size: 26px; }
  .btn-cta-final { padding: 13px 24px; font-size: 14px; white-space: nowrap; }
}
        `}</style>

        <h2 className="cta-final-title">Prêt à <em>encaisser</em> ?</h2>
        <p className="cta-final-sub">Rejoins +6 000 revendeurs qui utilisent Shootscan chaque mois.</p>
        <a href="/register" className="btn-cta-final">Scanner mon premier article →</a>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '50px 60px 30px' }}>
        <style>{`
          .footer-inner2 { max-width: 1080px; margin: 0 auto; display:flex; flex-direction:column; align-items:center; gap:14px; text-align:center; }
          .footer-logo2 { font-family:'Inter',sans-serif; font-size:16px; font-weight:700; color:#fff; }
          .footer-logo2 span { color:var(--g); }
          .footer-desc2 { font-size:12px; color:var(--text); }
          .footer-links2 { display:flex; gap:24px; flex-wrap:wrap; justify-content:center; }
          .footer-link2 { font-size:12px; color:var(--text); text-decoration:none; }
          .footer-link2:hover { color:#fff; }
          .footer-copy2 { font-size:11px; color:rgba(255,255,255,.25); margin-top:10px; }
        `}</style>
        <div className="footer-inner2">
          <div className="footer-logo2">Shoot<span>scan</span></div>
          <div className="footer-desc2">L'IA qui valorise n'importe quel objet de seconde main.</div>
          <div className="footer-links2">
            <a href="/politique-confidentialite" className="footer-link2">Politique de confidentialité</a>
            <a href="/mentions-legales" className="footer-link2">Mentions légales</a>
            <a href="/rgpd" className="footer-link2">RGPD</a>
          </div>
          <div className="footer-copy2">© 2026 Shootscan · Fait avec ☘ en France</div>
        </div>
      </footer>
    </main>
  )
}