export default function MentionsLegales() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#00B874', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Document juridique</p>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Mentions légales</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '0.25rem' }}>Service accessible sur <a href="https://shootscan.fr" style={{ color: '#00B874' }}>shootscan.fr</a>.</p>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN).</p>

        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#8AB098', textTransform: 'uppercase', marginBottom: '1rem' }}>Sommaire</p>
          {['Éditeur du site', 'Hébergement', 'Propriété intellectuelle', 'Responsabilité', 'Litiges'].map(item => (
            <p key={item} style={{ fontSize: '14px', color: '#00B874', marginBottom: '0.5rem' }}>→ {item}</p>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Éditeur du site</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Dénomination :</strong> Shootscan</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Exploitant :</strong> Bastian Lemee, auto-entrepreneur exerçant une activité de services numériques (édition de logiciels SaaS).</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Adresse :</strong> Vannes, 56250, France</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Email :</strong> <a href="mailto:contact@shootscan.com" style={{ color: '#00B874' }}>contact@shootscan.com</a></p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Site web :</strong> <a href="https://shootscan.fr" style={{ color: '#00B874' }}>shootscan.fr</a></p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Statut :</strong> Auto-entrepreneur (entreprise individuelle)</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>SIRET :</strong> En cours d'immatriculation</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Hébergement</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Hébergeur principal :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA — <a href="https://vercel.com" style={{ color: '#00B874' }}>vercel.com</a></p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Base de données :</strong> Supabase (infrastructure hébergée en Europe) — <a href="https://supabase.com" style={{ color: '#00B874' }}>supabase.com</a></p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Intelligence artificielle :</strong> Anthropic PBC, San Francisco, CA, USA — <a href="https://anthropic.com" style={{ color: '#00B874' }}>anthropic.com</a></p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Paiements :</strong> Stripe Inc., San Francisco, CA, USA — <a href="https://stripe.com" style={{ color: '#00B874' }}>stripe.com</a></p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Propriété intellectuelle</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8 }}>L'ensemble des éléments constituant le site Shootscan (textes, logo, interface, code source, base de données) sont la propriété exclusive de Bastian Lemee et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation non autorisée est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Responsabilité</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8 }}>Les estimations de prix fournies par Shootscan sont générées par intelligence artificielle à titre purement indicatif. Elles ne constituent pas une offre d'achat ou de vente, ni une garantie de prix. Shootscan ne saurait être tenu responsable des décisions prises sur la base de ces estimations. L'utilisateur reste seul responsable de ses transactions commerciales.</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Litiges</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8 }}>En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. Le droit français est applicable. En cas d'échec de la résolution amiable, les tribunaux compétents de Vannes seront saisis. Pour tout différend relatif à la consommation, vous pouvez recourir à la médiation de la consommation conformément aux articles L.611-1 et suivants du Code de la consommation.</p>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4', display: 'flex', gap: '1.5rem' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
          <a href="/politique-confidentialite" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>Politique de confidentialité →</a>
          <a href="/rgpd" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>RGPD →</a>
        </div>
      </div>
    </main>
  )
}