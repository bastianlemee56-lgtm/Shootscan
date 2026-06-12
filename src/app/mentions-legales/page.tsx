export default function MentionsLegales() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Mentions légales</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Dernière mise à jour : juin 2025</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>Éditeur du site</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Shootscan est édité par Bastian Lemee, auto-entrepreneur domicilié en France.<br />Email : contact@shootscan.fr<br />Site : shootscan.fr</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>Hébergement</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br />La base de données est hébergée par Supabase (infrastructure EU).</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>Propriété intellectuelle</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>L'ensemble du contenu du site Shootscan (textes, visuels, logo, code) est la propriété exclusive de Bastian Lemee. Toute reproduction sans autorisation est interdite.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>Responsabilité</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Les estimations fournies par Shootscan sont générées par intelligence artificielle à titre indicatif. Shootscan ne peut être tenu responsable des décisions prises sur la base de ces estimations.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>Contact</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Pour toute question : contact@shootscan.fr</p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
        </div>
      </div>
    </main>
  )
}