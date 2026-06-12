export default function RGPD() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Politique RGPD</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Dernière mise à jour : juin 2025</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>1. Responsable du traitement</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Shootscan est édité par Bastian Lemee, domicilié en France. Contact : contact@shootscan.fr</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>2. Données collectées</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Nous collectons uniquement les données nécessaires au fonctionnement du service : adresse email, historique des scans, plan d'abonnement. Les photos uploadées sont analysées en mémoire et ne sont pas stockées sur nos serveurs.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>3. Finalité du traitement</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Vos données sont utilisées exclusivement pour fournir le service Shootscan : authentification, historique des scans, gestion de l'abonnement. Aucune donnée n'est revendue à des tiers.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>4. Hébergement</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Les données sont hébergées sur des infrastructures européennes (Supabase EU, Vercel). Les transferts sont sécurisés via HTTPS.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>5. Vos droits</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@shootscan.fr</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>6. Cookies</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Shootscan utilise uniquement des cookies strictement nécessaires au fonctionnement du service (session d'authentification). Aucun cookie publicitaire ou de tracking n'est utilisé.</p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
        </div>
      </div>
    </main>
  )
}