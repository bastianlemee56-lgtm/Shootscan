'use client'
import { useState } from 'react'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh', colorScheme: 'light' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --mint: #00B874;
          --mint-dark: #008850;
          --mint-xdark: #005530;
          --mint-light: #E4F5EC;
          --mint-xlight: #F2FAF6;
          --white: #FFFFFF;
          --bg: #F6FAF7;
          --bg2: #EDF5EF;
          --bg3: #E0EFE4;
          --text: #0A1A10;
          --text2: #4A7A58;
          --text3: #8AB098;
          --border: #C0DDD0;
          --border2: #9ABDA0;
          --serif: 'Instrument Serif', Georgia, serif;
          --sans: 'Inter', system-ui, sans-serif;
          --r: 10px;
          --rl: 16px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: var(--sans); background: var(--bg); color: var(--text); line-height: 1.6; }

        /* NAV */
        .nav { background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-bottom: 0.5px solid var(--border); padding: 0 2rem; height: 58px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
        .nav-logo { font-family: var(--sans); font-size: 20px; font-weight: 300; color: var(--text); text-decoration: none; letter-spacing: -0.5px; }
        .nav-logo strong { font-weight: 600; color: var(--mint); }
        .nav-links { display: flex; gap: 2px; align-items: center; }
        .nav-btn { font-size: 13px; color: var(--text2); padding: 6px 14px; border-radius: 20px; text-decoration: none; transition: all 0.15s; }
        .nav-btn:hover { background: var(--mint-light); color: var(--mint-dark); }
        .nav-cta { background: var(--mint); color: white; border-radius: 20px; padding: 8px 18px; font-size: 13px; font-weight: 500; text-decoration: none; margin-left: 6px; transition: all 0.15s; }
        .nav-cta:hover { background: var(--mint-dark); }
        .nav-hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; padding: 4px; }
        .nav-hamburger span { width: 22px; height: 2px; background: var(--text2); border-radius: 2px; transition: all 0.2s; }

        /* HERO */
        .hero { max-width: 1080px; margin: 0 auto; padding: 5rem 2rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--mint-light); border: 0.5px solid var(--border2); color: var(--mint-dark); font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 20px; margin-bottom: 1.5rem; }
        .hero-badge-dot { width: 5px; height: 5px; background: var(--mint); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .hero h1 { font-family: var(--serif); font-size: 54px; font-weight: 400; line-height: 1.08; color: var(--text); letter-spacing: -0.5px; margin-bottom: 1.25rem; }
        .hero h1 em { color: var(--mint); font-style: italic; }
        .hero-sub { font-size: 15px; color: var(--text2); line-height: 1.7; margin-bottom: 2rem; max-width: 420px; }
        .hero-actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .btn-primary { background: var(--mint); color: white; border-radius: var(--r); padding: 12px 22px; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.15s; display: inline-block; }
        .btn-primary:hover { background: var(--mint-dark); transform: translateY(-1px); }
        .btn-ghost { background: transparent; color: var(--text2); border: 0.5px solid var(--border2); border-radius: var(--r); padding: 12px 22px; font-size: 13px; text-decoration: none; transition: all 0.15s; display: inline-block; }
        .btn-ghost:hover { background: var(--mint-light); }
        .hero-trust { font-size: 11px; color: var(--text3); margin-top: 1rem; }
        .hero-card { background: var(--white); border-radius: var(--rl); border: 0.5px solid var(--border); overflow: hidden; box-shadow: 0 4px 24px rgba(0,184,116,0.08); }
        .hero-card-top { background: var(--mint-xlight); padding: 1.25rem; border-bottom: 0.5px solid var(--border); display: flex; gap: 12px; align-items: flex-start; }
        .hero-ring { width: 54px; height: 54px; border-radius: 50%; border: 2.5px solid var(--mint); background: var(--white); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .hero-ring-num { font-family: var(--serif); font-size: 20px; color: var(--mint); }
        .hero-item-name { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 3px; }
        .hero-item-meta { font-size: 11px; color: var(--text3); margin-bottom: 6px; }
        .hero-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .hero-tag { font-size: 10px; padding: 2px 8px; border-radius: 10px; background: var(--white); color: var(--mint-dark); border: 0.5px solid var(--border2); }
        .hero-card-body { padding: 1.25rem; }
        .hero-prices { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 10px; }
        .hero-pc { background: var(--mint-xlight); border-radius: var(--r); padding: 10px; text-align: center; }
        .hero-plbl { font-size: 9px; color: var(--text3); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.3px; }
        .hero-pval { font-size: 17px; font-weight: 500; color: var(--text); font-family: var(--serif); }
        .hero-pval.hi { color: var(--mint); }
        .hero-tip { background: var(--mint-xlight); border-radius: var(--r); padding: 10px 12px; font-size: 12px; color: var(--text2); line-height: 1.5; }

        /* CAT PILLS */
        .cat-pills { display: flex; flex-wrap: wrap; gap: 6px; max-width: 1080px; margin: 0 auto; padding: 0 2rem 3rem; }
        .cat-pill { font-size: 11px; padding: 5px 13px; border-radius: 20px; background: var(--white); border: 0.5px solid var(--border); color: var(--text2); cursor: pointer; transition: all 0.15s; }
        .cat-pill:hover { background: var(--mint-light); border-color: var(--border2); color: var(--mint-dark); }

        /* PLATFORMS */
        .plat-strip { background: var(--white); border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); padding: 2rem; }
        .plat-strip-inner { max-width: 1080px; margin: 0 auto; }
        .plat-strip-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text3); text-align: center; margin-bottom: 1.25rem; }
        .plat-logos { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .plat-logo { font-size: 11px; font-weight: 500; padding: 6px 14px; border-radius: 20px; border: 0.5px solid var(--border); background: var(--bg); color: var(--text2); }

        /* SECTION */
        .section { max-width: 1080px; margin: 0 auto; padding: 4rem 2rem; }
        .section-tag { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--mint); font-weight: 500; margin-bottom: 0.5rem; }
        .section-title { font-family: var(--serif); font-size: 36px; font-weight: 400; color: var(--text); margin-bottom: 0.75rem; letter-spacing: -0.3px; }
        .section-title em { color: var(--mint); font-style: italic; }
        .section-sub { font-size: 14px; color: var(--text2); max-width: 480px; line-height: 1.7; margin-bottom: 2.5rem; }

        /* STEPS */
        .steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .step { background: var(--white); border-radius: var(--rl); padding: 1.75rem; border: 0.5px solid var(--border); }
        .step-num { font-family: var(--serif); font-size: 36px; color: var(--bg3); line-height: 1; margin-bottom: 1rem; }
        .step-icon { width: 40px; height: 40px; background: var(--mint-light); border-radius: var(--r); display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 1rem; }
        .step-title { font-size: 15px; font-weight: 500; color: var(--text); margin-bottom: 0.4rem; }
        .step-desc { font-size: 12px; color: var(--text2); line-height: 1.6; }

        /* FEATS */
        .feats-band { background: var(--white); border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); }
        .feats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2.5rem; }
        .feat { padding: 1.5rem; border-radius: var(--rl); border: 0.5px solid var(--border); background: var(--bg); }
        .feat-icon { font-size: 20px; margin-bottom: 0.75rem; }
        .feat-title { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 0.3rem; }
        .feat-desc { font-size: 12px; color: var(--text2); line-height: 1.6; }

        /* REVIEWS */
        .reviews { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2rem; }
        .review { background: var(--white); border: 0.5px solid var(--border); border-radius: var(--rl); padding: 1.5rem; }
        .review-stars { color: var(--mint); font-size: 12px; letter-spacing: 2px; margin-bottom: 0.75rem; }
        .review-text { font-family: var(--serif); font-size: 13px; color: var(--text2); line-height: 1.7; margin-bottom: 1rem; font-style: italic; }
        .review-author { display: flex; align-items: center; gap: 8px; }
        .review-av { width: 30px; height: 30px; border-radius: 50%; background: var(--mint-light); border: 0.5px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; color: var(--mint-dark); flex-shrink: 0; }
        .review-name { font-size: 12px; font-weight: 500; color: var(--text); }
        .review-role { font-size: 10px; color: var(--text3); }

        /* PRICING */
        .pricing-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
        .pricing-card { background: var(--white); border: 0.5px solid var(--border); border-radius: var(--rl); padding: 1.75rem; }
        .pricing-card.pop { border: 1.5px solid var(--mint); }
        .pop-badge { display: inline-block; background: var(--mint-light); color: var(--mint-xdark); font-size: 10px; font-weight: 500; padding: 2px 9px; border-radius: 10px; margin-bottom: 0.75rem; }
        .pricing-plan { font-size: 13px; font-weight: 500; color: var(--text); margin-bottom: 0.4rem; }
        .pricing-price { font-family: var(--serif); font-size: 40px; font-weight: 400; color: var(--text); line-height: 1; margin-bottom: 0.2rem; }
        .pricing-period { font-size: 11px; color: var(--text3); margin-bottom: 1.5rem; }
        .pricing-feats { list-style: none; margin-bottom: 1.75rem; }
        .pricing-feats li { font-size: 12px; color: var(--text2); padding: 5px 0; border-bottom: 0.5px solid var(--border); display: flex; align-items: center; gap: 7px; }
        .pricing-feats li:last-child { border-bottom: none; }
        .pricing-btn { display: block; width: 100%; padding: 11px; border-radius: var(--r); font-size: 13px; font-weight: 500; text-align: center; text-decoration: none; transition: all 0.15s; }
        .pricing-btn.primary { background: var(--mint); color: white; }
        .pricing-btn.primary:hover { background: var(--mint-dark); }
        .pricing-btn.outline { background: transparent; color: var(--text); border: 0.5px solid var(--border2); }
        .pricing-btn.outline:hover { background: var(--mint-light); }

        /* CTA */
        .cta-band { background: var(--mint-xdark); padding: 5rem 2rem; text-align: center; }
        .cta-band h2 { font-family: var(--serif); font-size: 42px; font-weight: 400; color: white; margin-bottom: 1rem; }
        .cta-band h2 em { font-style: italic; color: #7EDBB0; }
        .cta-band p { font-size: 14px; color: #7EDBB0; margin-bottom: 2rem; }
        .btn-white { background: white; color: var(--mint-xdark); border-radius: var(--r); padding: 13px 26px; font-size: 13px; font-weight: 500; text-decoration: none; display: inline-block; transition: all 0.15s; }
        .btn-white:hover { background: var(--mint-light); }

        /* FOOTER */
        footer { background: var(--mint-xdark); padding: 3rem 2rem; }
        .footer-inner { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem; }
        .footer-logo { font-size: 18px; font-weight: 300; color: white; margin-bottom: 0.6rem; }
        .footer-logo strong { font-weight: 600; color: #7EDBB0; }
        .footer-desc { font-size: 12px; color: #4A8A60; line-height: 1.6; }
        .footer-col-title { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: #4A8A60; margin-bottom: 0.75rem; font-weight: 500; }
        .footer-link { display: block; font-size: 12px; color: #7EDBB0; margin-bottom: 5px; text-decoration: none; }
        .footer-link:hover { color: white; }
        .footer-bottom { max-width: 1080px; margin: 1.75rem auto 0; padding-top: 1.25rem; border-top: 0.5px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .footer-copy { font-size: 11px; color: #4A8A60; }

        /* RESPONSIVE MOBILE */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }

          .hero { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 1.25rem 2rem; }
          .hero h1 { font-size: 38px; }
          .hero-card { display: none; }

          .cat-pills { padding: 0 1.25rem 2rem; }

          .steps { grid-template-columns: 1fr; gap: 1rem; }
          .feats-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .reviews { grid-template-columns: 1fr; gap: 1rem; }
          .pricing-cards { grid-template-columns: 1fr; gap: 1rem; }

          .section { padding: 3rem 1.25rem; }
          .section-title { font-size: 28px; }
          .cta-band h2 { font-size: 30px; }
          .cta-band { padding: 3rem 1.25rem; }

          .footer-inner { grid-template-columns: 1fr 1fr; gap: 1.5rem; }

          .plat-strip { padding: 1.5rem 1.25rem; }
        }

        @media (max-width: 480px) {
          .hero h1 { font-size: 32px; }
          .feats-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .btn-primary, .btn-ghost { width: 100%; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">shoot<strong>scan</strong></a>
        <div className="nav-links" style={{ display: menuOpen ? 'flex' : undefined, flexDirection: menuOpen ? 'column' : undefined, position: menuOpen ? 'absolute' : undefined, top: menuOpen ? '56px' : undefined, left: 0, right: 0, background: 'white', padding: menuOpen ? '1rem' : undefined, zIndex: 100, borderBottom: menuOpen ? '1px solid #E0EFE4' : undefined }}>
          <a href="/dashboard" className="nav-btn">Scanner</a>
          <a href="/stats" className="nav-btn">Dashboard</a>
          <a href="/tarifs" className="nav-btn">Tarifs</a>
          <a href="/login" className="nav-btn">Connexion</a>
          <a href="/register" className="nav-cta">Commencer →</a>
        </div>
        <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            IA de valorisation universelle
          </div>
          <h1>Shoot.<br />Scan.<br /><em>Vends.</em></h1>
          <p className="hero-sub">Une photo suffit. L'IA identifie n'importe quel objet, estime sa valeur et te dit exactement où et comment le vendre pour maximiser ton gain.</p>
          <div className="hero-actions">
            <a href="/register" className="btn-primary">Scanner un article →</a>
            <a href="/tarifs" className="btn-ghost">Voir les tarifs</a>
          </div>
          <p className="hero-trust">✓ 3 scans gratuits &nbsp;·&nbsp; ✓ Résultat en 10 sec &nbsp;·&nbsp; ✓ Sans carte bancaire</p>
        </div>
        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-ring"><span className="hero-ring-num">87</span></div>
            <div style={{ flex: 1 }}>
              <div className="hero-item-name">iPhone 13 Pro 256Go</div>
              <div className="hero-item-meta">Électronique · Très bon état · Space Grey</div>
              <div className="hero-tags">
                <span className="hero-tag">↑ Forte demande</span>
                <span className="hero-tag">Toutes saisons</span>
                <span className="hero-tag">Apple</span>
              </div>
            </div>
          </div>
          <div className="hero-card-body">
            <div className="hero-prices">
              <div className="hero-pc"><div className="hero-plbl">Minimum</div><div className="hero-pval">340€</div></div>
              <div className="hero-pc"><div className="hero-plbl">Recommandé</div><div className="hero-pval hi">410€</div></div>
              <div className="hero-pc"><div className="hero-plbl">Maximum</div><div className="hero-pval">470€</div></div>
            </div>
            <div className="hero-tip">💡 Vends sur Back Market · Inclue la boîte originale · Photos sur fond blanc</div>
          </div>
        </div>
      </section>

      {/* CAT PILLS */}
      <div className="cat-pills">
        {['Tout', '👗 Vêtements', '👟 Sneakers', '📱 Électronique', '🛋️ Meubles', '📚 Livres', '🎮 Jeux vidéo', '⌚ Montres', '👜 Sacs', '🧸 Jouets', '🎸 Instruments', '🏋️ Sport'].map((p, i) => (
          <span key={p} className="cat-pill" style={i === 0 ? { background: 'var(--mint-light)', borderColor: 'var(--border2)', color: 'var(--mint-dark)' } : {}}>{p}</span>
        ))}
      </div>

      {/* PLATEFORMES */}
      <div className="plat-strip">
        <div className="plat-strip-inner">
          <div className="plat-strip-title">Recommandations sur toutes les plateformes</div>
          <div className="plat-logos">
            {['Vinted', 'Depop', 'eBay', 'Vestiaire Collective', 'Leboncoin', 'Back Market', 'Rakuten', 'Facebook Marketplace', 'Wallapop', 'Sellpy', 'Momox', 'Cdiscount'].map(p => (
              <span key={p} className="plat-logo">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* COMMENT ÇA MARCHE */}
      <section className="section">
        <div className="section-tag">Comment ça marche</div>
        <h2 className="section-title">Simple comme<br />un <em>shoot</em></h2>
        <p className="section-sub">En moins de 15 secondes, une analyse complète et un plan de vente sur mesure pour n'importe quel objet.</p>
        <div className="steps">
          {[
            { num: '01', icon: '📸', title: 'Tu shootes', desc: "Photo ou galerie. Vêtement, iPhone, meuble, livre, montre… L'IA reconnaît tout." },
            { num: '02', icon: '🤖', title: 'On scanne', desc: "L'IA identifie l'objet, analyse l'état, consulte des millions d'annonces et calcule le prix optimal." },
            { num: '03', icon: '💰', title: 'Tu encaisses', desc: "Score, prix, plateforme idéale, titre d'annonce généré et conseils photo. Il reste juste à publier." },
          ].map(s => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <div className="feats-band">
        <div className="section" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div className="section-tag">Fonctionnalités</div>
          <h2 className="section-title">Tout pour revendre <em>intelligemment</em></h2>
          <div className="feats-grid">
            {[
              { icon: '🎯', title: 'Score de revendabilité', desc: 'Un score sur 100 basé sur la demande, l\'état et les tendances actuelles du marché.' },
              { icon: '📊', title: '12 plateformes comparées', desc: 'Vinted, Back Market, eBay, Depop, Vestiaire, Leboncoin… On te dit où vendre pour maximiser.' },
              { icon: '✍️', title: 'Annonce prête à copier', desc: 'Titre accrocheur et description optimisée générés automatiquement. Tu publies, c\'est tout.' },
              { icon: '📦', title: 'Scan en lot', desc: 'Mode Pro : scanne jusqu\'à 3 articles en même temps. Business : lots illimités.' },
              { icon: '🧮', title: 'Calculateur de marge', desc: 'Entre ton prix d\'achat et calcule ton ROI net en temps réel pour chaque article.' },
              { icon: '📂', title: 'Dashboard & export CSV', desc: 'Suis ta valeur totale, tes catégories les plus rentables et exporte tes données.' },
            ].map(f => (
              <div key={f.title} className="feat">
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TÉMOIGNAGES */}
      <section className="section">
        <div className="section-tag">Témoignages</div>
        <h2 className="section-title">Ils revendent <em>mieux</em></h2>
        <div className="reviews">
          {[
            { stars: '★★★★★', text: '"J\'ai vendu mon iPhone 12 150€ de plus que ce que j\'aurais mis. Le titre d\'annonce généré par l\'IA a tout changé."', av: 'ML', name: 'Marie L.', role: 'Revendeuse · Paris' },
            { stars: '★★★★★', text: '"Le scan en lot m\'économise 2h par semaine. Je scanne mon stock le dimanche et je publie tout d\'un coup."', av: 'KD', name: 'Kevin D.', role: 'Reseller pro · Lyon' },
            { stars: '★★★★☆', text: '"L\'IA m\'a indiqué Back Market plutôt que Leboncoin pour mon Mac. +180€ sur la même machine."', av: 'AC', name: 'Amina C.', role: 'Acheteuse-revendeuse · Bordeaux' },
          ].map(r => (
            <div key={r.name} className="review">
              <div className="review-stars">{r.stars}</div>
              <div className="review-text">{r.text}</div>
              <div className="review-author">
                <div className="review-av">{r.av}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-tag">Tarifs</div>
        <h2 className="section-title">Des prix <em>simples</em></h2>
        <p className="section-sub">Sans engagement · Mensuel uniquement</p>
        <div className="pricing-cards">
          {[
            { plan: 'Gratuit', price: 'Gratuit', period: 'pour toujours', features: ['3 scans / mois', 'Score + prix conseillé', '2 plateformes suggérées'], cta: 'Commencer gratuitement', ctaClass: 'outline', pop: false },
            { plan: 'Pro', price: '12€', period: '/ mois', features: ['Scans illimités', 'Scan en lot (3 articles max)', 'Toutes les plateformes (11+)', 'Titre & description générés', 'Calculateur ROI', 'Dashboard + export CSV'], cta: 'Démarrer le Pro', ctaClass: 'primary', pop: true },
            { plan: 'Business', price: '39€', period: '/ mois', features: ['Tout le plan Pro', 'Scan en lot illimité', 'Multi-utilisateurs (5)', 'API access', 'Support prioritaire'], cta: "Contacter l'équipe", ctaClass: 'outline', pop: false },
          ].map(p => (
            <div key={p.plan} className={`pricing-card${p.pop ? ' pop' : ''}`}>
              {p.pop && <div className="pop-badge">★ Le plus populaire</div>}
              <div className="pricing-plan">{p.plan}</div>
              <div className="pricing-price">{p.price}</div>
              <div className="pricing-period">{p.period}</div>
              <ul className="pricing-feats">
                {p.features.map(f => <li key={f}><span style={{ color: 'var(--mint)' }}>✓</span> {f}</li>)}
              </ul>
              <a href="/register" className={`pricing-btn ${p.ctaClass}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="cta-band">
        <h2>Prêt à <em>encaisser</em> ?</h2>
        <p>Rejoins +6 000 revendeurs qui utilisent Shootscan chaque mois.</p>
        <a href="/register" className="btn-white">Scanner mon premier article →</a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-logo">shoot<strong>scan</strong></div>
            <div className="footer-desc">L'IA qui valorise n'importe quel objet de seconde main pour revendre plus vite et plus cher.</div>
          </div>
          <div>
            <div className="footer-col-title">Produit</div>
            <a href="/dashboard" className="footer-link">Scanner</a>
            <a href="/dashboard" className="footer-link">Dashboard</a>
            <a href="/tarifs" className="footer-link">Tarifs</a>
          </div>
          <div>
            <div className="footer-col-title">Plateformes</div>
            <span className="footer-link">Vinted · Depop · eBay</span>
            <span className="footer-link">Back Market · Rakuten</span>
            <span className="footer-link">Vestiaire Collective</span>
            <span className="footer-link">Leboncoin · +6 autres</span>
          </div>
          <div>
            <div className="footer-col-title">Entreprise</div>
            <a href="#" className="footer-link">À propos</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">CGU</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Shootscan · Tous droits réservés</span>
          <span className="footer-copy">Fait avec ☘ à Paris</span>
        </div>
      </footer>

    </main>
  )
}
