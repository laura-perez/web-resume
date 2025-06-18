# Configuration du service d'email pour la ChatBox

La ChatBox utilise un service d'email pour envoyer les messages directement vers votre boîte mail. Voici comment configurer différentes options :

## Option 1: EmailJS (Recommandé pour les débutants)

EmailJS est un service gratuit qui permet d'envoyer des emails directement depuis le frontend sans serveur.

### Étapes de configuration :

1. **Créer un compte EmailJS** : https://www.emailjs.com/
2. **Installer EmailJS** :
   ```bash
   npm install @emailjs/browser
   ```
3. **Configurer votre service d'email** dans EmailJS :
   - Ajouter un service (Gmail, Outlook, etc.)
   - Créer un template d'email
   - Noter votre Service ID, Template ID et Public Key

4. **Mettre à jour le code** dans `src/services/emailService.ts` :
   - Décommenter la section EmailJS
   - Remplacer `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, et `YOUR_PUBLIC_KEY`

### Template EmailJS suggéré :
```
Sujet : Nouveau message de {{from_name}} via le CV

Bonjour Laura,

Vous avez reçu un nouveau message via votre CV web :

Nom : {{from_name}}
Email : {{from_email}}
Entreprise : {{company}}

Message :
{{message}}
```

## Option 2: Formspree

Formspree est une alternative simple qui ne nécessite pas d'installation.

### Étapes de configuration :

1. **Créer un compte** : https://formspree.io/
2. **Créer un nouveau form** et noter l'ID
3. **Mettre à jour le code** :
   - Utiliser `sendEmailWithFormspree` au lieu de `sendEmail`
   - Remplacer `YOUR_FORM_ID` par votre vrai ID

## Option 3: Service backend personnalisé

Pour plus de contrôle, vous pouvez créer votre propre endpoint :

```typescript
export const sendEmailWithBackend = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};
```

## Fonctionnalités actuelles

- ✅ Interface conversationnelle intuitive
- ✅ Collecte des informations utilisateur (nom, email, entreprise)
- ✅ Validation des champs requis
- ✅ Gestion des erreurs
- ✅ Animation de chargement
- ✅ Confirmation d'envoi
- ✅ Responsive design
- ✅ Style cohérent avec Instagram

## Personnalisation

Vous pouvez personnaliser :
- Les messages de la conversation dans `ChatBox.tsx`
- L'email de destination dans `emailService.ts`
- Le style visuel via les classes CSS
- Les champs collectés (ajouter téléphone, poste, etc.)

## Test en développement

En mode développement, les emails sont simulés et affichés dans la console. Pour tester avec de vrais emails, configurez un des services ci-dessus.
