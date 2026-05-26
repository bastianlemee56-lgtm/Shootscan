export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#F6FAF7', minHeight: '100vh', colorScheme: 'light' }}>

      {/* NAV */}
      <nav style={{ background: 'white', borderBottom: '1px solid #C0DDD0', padding: '0 2rem', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10' }}>
          shoot<strong style={{ color: '#00B874' }}>scan</strong>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="/scanner" style={{ fontSize: '13px', color: '#4A7A58', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none' }}>Scanner</a>
          <a href="/tarifs" style={{ fontSize: '13px', color: '#4A7A58', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none' }}>Tarifs</a>
          <a href="/login" style={{ fontSize: '13px', color: '#4A7A58', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none' }}>Connexion</a>
          <a href="/register" style={{ background: '#00B874', color: 'white', borderRadius: '20px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>Commencer →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E4F5EC', border: '1px solid #9ABDA0', color: '#005530', fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00B874', borderRadius: '50%', display: 'inline-block' }}></span>
          IA de valorisation universelle
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 650, color: '#0A1A10', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Shoot. Scan.<br />
          <span style={{ color: '#00B874' }}>Encaisse.</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#4A7A58', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '540px', margin: '0 auto 2rem' }}>
          Une photo suffit. L'IA identifie n'importe quel objet, estime sa valeur et te dit exactement où et comment le vendre.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/register" style={{ background: '#00B874', color: 'white', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>Scanner mon premier article →</a>
          <a href="/pricing" style={{ background: 'white', color: '#4A7A58', border: '1px solid #9ABDA0', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', textDecoration: 'none' }}>Voir les tarifs</a>
        </div>
        <p style={{ fontSize: '12px', color: '#8AB098', marginTop: '1rem' }}>✓ 3 scans gratuits &nbsp;·&nbsp; ✓ Sans carte bancaire &nbsp;·&nbsp; ✓ Résultat en 10 sec</p>
      </section>

      {/* PLATEFORMES */}
      <section style={{ background: 'white', borderTop: '1px solid #C0DDD0', borderBottom: '1px solid #C0DDD0', padding: '2rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8AB098', marginBottom: '1rem' }}>Recommandations sur toutes les plateformes</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Vinted', 'Depop', 'eBay', 'Vestiaire Collective', 'Leboncoin', 'Back Market', 'Rakuten', 'Facebook Marketplace', 'Wallapop', 'Momox', 'Cdiscount'].map(p => (
              <span key={p} style={{ fontSize: '12px', padding: '6px 14px', borderRadius: '20px', border: '1px solid #C0DDD0', background: '#F6FAF7', color: '#4A7A58' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 2rem' }}>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#00B874', fontWeight: 500, marginBottom: '8px' }}>Comment ça marche</p>
        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0A1A10', marginBottom: '2.5rem' }}>Simple comme un <span style={{ color: '#00B874' }}>shoot</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { num: '01', icon: '📸', title: 'Tu shootes', desc: 'Photo ou galerie. Vêtement, iPhone, meuble, livre, montre… L\'IA reconnaît tout.' },
            { num: '02', icon: '🤖', title: 'On scanne', desc: 'L\'IA identifie l\'objet, analyse l\'état, consulte des millions d\'annonces et calcule le prix optimal.' },
            { num: '03', icon: '💰', title: 'Tu encaisses', desc: 'Score, prix, plateforme idéale, titre d\'annonce généré et conseils photo. Il reste juste à publier.' },
          ].map(s => (
            <div key={s.num} style={{ background: 'white', borderRadius: '16px', padding: '1.75rem', border: '1px solid #C0DDD0' }}>
              <div style={{ fontSize: '32px', color: '#E0EFE4', fontWeight: 700, marginBottom: '12px' }}>{s.num}</div>
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '13px', color: '#4A7A58', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: 'white', borderTop: '1px solid #C0DDD0', borderBottom: '1px solid #C0DDD0', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0A1A10', marginBottom: '2.5rem' }}>Tout pour revendre <span style={{ color: '#00B874' }}>intelligemment</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🎯', title: 'Score de revendabilité', desc: 'Un score sur 100 basé sur la demande, l\'état et les tendances du marché.' },
              { icon: '📊', title: '11 plateformes comparées', desc: 'Vinted, Back Market, eBay, Depop, Vestiaire… On te dit où vendre pour maximiser.' },
              { icon: '✍️', title: 'Annonce prête à copier', desc: 'Titre accrocheur et description optimisée générés automatiquement.' },
              { icon: '📦', title: 'Scan en lot', desc: 'Mode Pro : jusqu\'à 3 articles simultanément. Business : lots illimités.' },
              { icon: '🧮', title: 'Calculateur de marge', desc: 'Entre ton prix d\'achat et calcule ton ROI net en temps réel.' },
              { icon: '📂', title: 'Dashboard & export CSV', desc: 'Suis ta valeur totale et tes catégories les plus rentables.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#F6FAF7', borderRadius: '16px', padding: '1.5rem', border: '1px solid #C0DDD0' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '6px' }}>{f.title}</h3>
                <p style={{ fontSize: '12px', color: '#4A7A58', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0A1A10', textAlign: 'center', marginBottom: '0.5rem' }}>Des tarifs <span style={{ color: '#00B874' }}>simples</span></h2>
        <p style={{ textAlign: 'center', color: '#4A7A58', fontSize: '14px', marginBottom: '3rem' }}>Sans engagement · Mensuel uniquement</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {[
            { plan: 'Gratuit', price: '0', period: 'pour toujours', features: ['3 scans / mois', 'Score + prix conseillé', '2 plateformes suggérées'], cta: 'Commencer gratuitement', highlight: false },
            { plan: 'Pro', price: '12', period: '/ mois', features: ['Scans illimités', 'Scan en lot (3 articles max)', 'Toutes les plateformes (11+)', 'Titre & description générés', 'Calculateur ROI', 'Dashboard + export CSV'], cta: 'Démarrer le Pro', highlight: true },
            { plan: 'Business', price: '39', period: '/ mois', features: ['Tout le plan Pro', 'Scan en lot illimité', 'Multi-utilisateurs (5)', 'API access', 'Support prioritaire'], cta: 'Contacter l\'équipe', highlight: false },
          ].map(p => (
            <div key={p.plan} style={{ background: 'white', borderRadius: '16px', padding: '1.75rem', border: p.highlight ? '2px solid #00B874' : '1px solid #C0DDD0' }}>
              {p.highlight && <div style={{ background: '#E4F5EC', color: '#005530', fontSize: '10px', fontWeight: 600, padding: '2px 10px', borderRadius: '10px', display: 'inline-block', marginBottom: '12px' }}>★ Le plus populaire</div>}
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '8px' }}>{p.plan}</div>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#0A1A10', lineHeight: 1 }}>{p.price === '0' ? 'Gratuit' : `${p.price}€`}</div>
              <div style={{ fontSize: '12px', color: '#8AB098', marginBottom: '1.5rem' }}>{p.period}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize: '12px', color: '#4A7A58', padding: '5px 0', borderBottom: '1px solid #E0EFE4', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ color: '#00B874' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="/register" style={{ display: 'block', textAlign: 'center', background: p.highlight ? '#00B874' : 'transparent', color: p.highlight ? 'white' : '#4A7A58', border: p.highlight ? 'none' : '1px solid #9ABDA0', borderRadius: '10px', padding: '11px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#005530', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Prêt à <span style={{ color: '#7EDBB0' }}>encaisser</span> ?</h2>
        <p style={{ fontSize: '15px', color: '#7EDBB0', marginBottom: '2rem' }}>Rejoins +12 000 revendeurs qui utilisent Shootscan chaque mois.</p>
        <a href="/register" style={{ background: 'white', color: '#005530', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>Scanner mon premier article →</a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#003320', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 300, color: 'white', marginBottom: '8px' }}>shoot<strong style={{ color: '#7EDBB0' }}>scan</strong></div>
            <p style={{ fontSize: '12px', color: '#4A8A60', maxWidth: '220px', lineHeight: 1.6 }}>L'IA qui valorise n'importe quel objet de seconde main.</p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4A8A60', marginBottom: '10px' }}>Produit</div>
              {['Scanner', 'Dashboard', 'Tarifs'].map(l => <a key={l} href="#" style={{ display: 'block', fontSize: '12px', color: '#7EDBB0', marginBottom: '6px', textDecoration: 'none' }}>{l}</a>)}
            </div>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4A8A60', marginBottom: '10px' }}>Entreprise</div>
              {['À propos', 'Blog', 'Contact', 'CGU'].map(l => <a key={l} href="#" style={{ display: 'block', fontSize: '12px', color: '#7EDBB0', marginBottom: '6px', textDecoration: 'none' }}>{l}</a>)}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '960px', margin: '1.5rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#4A8A60' }}>© 2025 Shootscan · Tous droits réservés</span>
          <span style={{ fontSize: '11px', color: '#4A8A60' }}>Fait avec ☘ à Paris</span>
        </div>
      </footer>

    </main>
  )
}