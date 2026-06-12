export default function PolitiqueConfidentialite() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#00B874', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Document juridique</p>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Politique de confidentialité</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '0.25rem' }}>Site : <a href="https://shootscan.fr" style={{ color: '#00B874' }}>shootscan.fr</a></p>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Dernière mise à jour : juin 2025</p>

        <div style={{ background: '#E8F5EE', border: '1px solid #00B874', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}>La présente politique de confidentialité de <strong>Bastian Lemee</strong>, agissant sous la dénomination commerciale <strong>Shootscan</strong> (« nous », « notre »), décrit comment et pourquoi nous pouvons <strong>accéder, collecter, stocker, utiliser et/ou partager</strong> vos informations personnelles lorsque vous utilisez nos Services, notamment lorsque vous visitez <a href="https://shootscan.fr" style={{ color: '#00B874' }}>shootscan.fr</a> ou que vous vous inscrivez et utilisez notre application.</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8, marginTop: '1rem' }}><strong>Questions ou préoccupations ?</strong> La lecture de ce document vous aide à comprendre vos droits et vos choix en matière de confidentialité. Pour toute question, contactez-nous à <a href="mailto:contact@shootscan.com" style={{ color: '#00B874' }}>contact@shootscan.com</a>.</p>
        </div>

        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#8AB098', textTransform: 'uppercase', marginBottom: '1rem' }}>Synthèse des points essentiels</p>
          {[
            'Nous collectons uniquement les données nécessaires au fonctionnement du service.',
            'Vos photos sont analysées en temps réel et ne sont jamais stockées sur nos serveurs.',
            'Vos données ne sont jamais vendues à des tiers.',
            'Vous pouvez demander la suppression de vos données à tout moment.',
            'Nous utilisons des cookies strictement nécessaires, sans tracking publicitaire.',
          ].map((point, i) => (
            <p key={i} style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '0.5rem' }}>✓ {point}</p>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>1. Données collectées</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '1rem' }}>Nous collectons les données suivantes lors de votre utilisation de Shootscan :</p>
          {[
            { titre: 'Données de compte', desc: 'Adresse email, mot de passe hashé (jamais en clair), date d\'inscription.' },
            { titre: 'Données d\'abonnement', desc: 'Plan souscrit (Gratuit, Pro, Business), statut de l\'abonnement, historique de facturation via Stripe.' },
            { titre: 'Données de scan', desc: 'Nom de l\'article, prix estimé, catégorie, état, plateformes recommandées, conseil de vente. Ces données constituent votre historique de scans.' },
            { titre: 'Photos uploadées', desc: 'Les images sont transmises à l\'API Anthropic pour analyse en temps réel. Elles ne sont jamais stockées sur nos serveurs ni dans notre base de données.' },
            { titre: 'Données techniques', desc: 'Adresse IP, type de navigateur, pages visitées — collectées automatiquement à des fins de sécurité et de performance.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 4 ? '1px solid #E0EFE4' : 'none' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '0.25rem' }}>{item.titre}</p>
              <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>2. Utilisation des données</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          {[
            'Fournir et améliorer le service de scan IA.',
            'Gérer votre compte et votre abonnement.',
            'Traiter les paiements via Stripe.',
            'Afficher votre historique de scans.',
            'Assurer la sécurité et prévenir les abus.',
            'Vous contacter en cas de problème technique ou de mise à jour importante.',
          ].map((item, i) => (
            <p key={i} style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '0.5rem' }}>→ {item}</p>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>3. Services tiers</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          {[
            { nom: 'Supabase', role: 'Base de données et authentification. Infrastructure hébergée en Europe.' },
            { nom: 'Stripe', role: 'Traitement des paiements. Vos données bancaires ne transitent jamais par nos serveurs.' },
            { nom: 'Anthropic', role: 'Analyse IA des photos uploadées. Les images sont transmises pour analyse et ne sont pas conservées.' },
            { nom: 'Vercel', role: 'Hébergement de l\'application web.' },
          ].map((service, i) => (
            <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 3 ? '1px solid #E0EFE4' : 'none' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '0.25rem' }}>{service.nom}</p>
              <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>{service.role}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>4. Cookies</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8 }}>Shootscan utilise uniquement des cookies strictement nécessaires au fonctionnement du service : cookie de session d'authentification (maintien de votre connexion). Aucun cookie publicitaire, de tracking ou d'analyse comportementale n'est utilisé.</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>5. Conservation des données</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8 }}>Vos données sont conservées tant que votre compte est actif. En cas de suppression de compte, l'ensemble de vos données personnelles et de votre historique de scans est supprimé dans un délai de 30 jours. Les données de facturation sont conservées 10 ans conformément aux obligations légales françaises.</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>6. Vos droits</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '1rem' }}>Conformément au RGPD, vous disposez des droits suivants :</p>
          {[
            { droit: 'Droit d\'accès', desc: 'Obtenir une copie de vos données personnelles.' },
            { droit: 'Droit de rectification', desc: 'Corriger des données inexactes vous concernant.' },
            { droit: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données.' },
            { droit: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré.' },
            { droit: 'Droit d\'opposition', desc: 'Vous opposer au traitement de vos données.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.7 }}><strong>{item.droit} :</strong> {item.desc}</p>
            </div>
          ))}
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginTop: '1rem' }}>Pour exercer ces droits : <a href="mailto:contact@shootscan.com" style={{ color: '#00B874' }}>contact@shootscan.com</a>. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" style={{ color: '#00B874' }}>cnil.fr</a>).</p>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
          <a href="/mentions-legales" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>Mentions légales →</a>
          <a href="/rgpd" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>RGPD →</a>
        </div>
      </div>
    </main>
  )
}