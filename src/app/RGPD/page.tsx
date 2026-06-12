export default function RGPD() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #E0EFE4', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 300, color: '#0A1A10', textDecoration: 'none', letterSpacing: '-0.5px' }}>shoot<strong style={{ fontWeight: 600, color: '#00B874' }}>scan</strong></a>
      </nav>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#00B874', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Document juridique</p>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1A10', marginBottom: '0.5rem' }}>Politique RGPD</h1>
        <p style={{ fontSize: '13px', color: '#8AB098', marginBottom: '2rem' }}>Règlement Général sur la Protection des Données — Dernière mise à jour : juin 2025</p>

        <div style={{ background: '#E8F5EE', border: '1px solid #00B874', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}>Shootscan s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles dans le strict respect du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et de la loi Informatique et Libertés modifiée.</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Responsable du traitement</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Identité :</strong> Bastian Lemee</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Dénomination commerciale :</strong> Shootscan</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Adresse :</strong> Vannes, 56250, France</p>
          <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.8 }}><strong>Email DPO :</strong> <a href="mailto:contact@shootscan.com" style={{ color: '#00B874' }}>contact@shootscan.com</a></p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Base légale des traitements</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          {[
            { base: 'Exécution du contrat', desc: 'Traitement nécessaire à la fourniture du service de scan IA et à la gestion de votre abonnement.' },
            { base: 'Obligations légales', desc: 'Conservation des données de facturation conformément aux obligations comptables et fiscales françaises (10 ans).' },
            { base: 'Intérêt légitime', desc: 'Sécurité du service, prévention des abus et amélioration de l\'expérience utilisateur.' },
            { base: 'Consentement', desc: 'Pour toute communication marketing optionnelle (non pratiquée actuellement).' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 3 ? '1px solid #E0EFE4' : 'none' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '0.25rem' }}>{item.base}</p>
              <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Transferts hors UE</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '1rem' }}>Certains prestataires sont établis hors de l'Union Européenne. Ces transferts sont encadrés par des garanties appropriées :</p>
          {[
            { service: 'Vercel (USA)', garantie: 'Clauses contractuelles types de la Commission européenne.' },
            { service: 'Anthropic (USA)', garantie: 'Clauses contractuelles types — les photos ne sont pas conservées après analyse.' },
            { service: 'Stripe (USA)', garantie: 'Certifié conforme aux clauses contractuelles types — données de paiement uniquement.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: i < 2 ? '1px solid #E0EFE4' : 'none' }}>
              <p style={{ fontSize: '14px', color: '#0A1A10', lineHeight: 1.7 }}><strong>{item.service} :</strong> {item.garantie}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Sécurité des données</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          {[
            'Chiffrement HTTPS de toutes les communications.',
            'Mots de passe hashés avec bcrypt — jamais stockés en clair.',
            'Accès à la base de données restreint via Row Level Security (RLS).',
            'Photos analysées en mémoire et non persistées sur nos serveurs.',
            'Données de paiement traitées exclusivement par Stripe (norme PCI-DSS).',
          ].map((item, i) => (
            <p key={i} style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginBottom: '0.5rem' }}>✓ {item}</p>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1A10', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #00B874', display: 'inline-block' }}>Vos droits RGPD</h2>
        <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          {[
            { droit: 'Art. 15 — Droit d\'accès', desc: 'Obtenir confirmation que des données vous concernant sont traitées et en recevoir une copie.' },
            { droit: 'Art. 16 — Droit de rectification', desc: 'Faire corriger des données inexactes ou incomplètes.' },
            { droit: 'Art. 17 — Droit à l\'effacement', desc: 'Demander la suppression de vos données (« droit à l\'oubli »).' },
            { droit: 'Art. 18 — Droit à la limitation', desc: 'Demander la suspension temporaire du traitement de vos données.' },
            { droit: 'Art. 20 — Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.' },
            { droit: 'Art. 21 — Droit d\'opposition', desc: 'Vous opposer au traitement de vos données fondé sur l\'intérêt légitime.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 5 ? '1px solid #E0EFE4' : 'none' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0A1A10', marginBottom: '0.25rem' }}>{item.droit}</p>
              <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
          <p style={{ fontSize: '14px', color: '#4A7A58', lineHeight: 1.8, marginTop: '1rem' }}>Pour exercer vos droits : <a href="mailto:contact@shootscan.com" style={{ color: '#00B874' }}>contact@shootscan.com</a>. Réponse sous 30 jours maximum. En cas de réclamation non résolue, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" style={{ color: '#00B874' }}>cnil.fr</a></p>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E0EFE4', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>← Retour à l'accueil</a>
          <a href="/mentions-legales" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>Mentions légales →</a>
          <a href="/politique-confidentialite" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none' }}>Politique de confidentialité →</a>
        </div>
      </div>
    </main>
  )
}