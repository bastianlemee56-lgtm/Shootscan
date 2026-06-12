export default function PolitiqueConfidentialite() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Politique de confidentialité</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Dernière mise à jour : juin 2025</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>1. Données collectées</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Shootscan collecte les données suivantes : adresse email, historique des scans (nom, prix, plateformes, état), plan d'abonnement actif. Les photos uploadées sont analysées en temps réel et ne sont jamais stockées sur nos serveurs.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>2. Utilisation des données</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Vos données sont utilisées pour : fournir le service de scan IA, gérer votre compte et votre abonnement, afficher votre historique de scans. Aucune donnée n'est partagée ou vendue à des tiers.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>3. Services tiers</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Shootscan utilise les services suivants : Supabase (base de données, authentification), Stripe (paiements — vos données bancaires ne transitent jamais par nos serveurs), Anthropic (analyse IA des photos).</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>4. Conservation des données</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Vos données sont conservées tant que votre compte est actif. Vous pouvez demander la suppression de votre compte et de toutes vos données à tout moment en contactant contact@shootscan.fr</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>5. Sécurité</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Toutes les communications sont chiffrées via HTTPS. Les mots de passe sont hashés et jamais stockés en clair. Nous appliquons les meilleures pratiques de sécurité pour protéger vos données.</p>

        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0A1A10', marginTop: '2rem', marginBottom: '0.5rem' }}>6. Vos droits</h2>
        <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits : contact@shootscan.fr</p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
        </div>
      </div>
    </main>
  )
}