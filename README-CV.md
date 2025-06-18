# 🌟 CV Instagram Style - Laura Dupont

## 🎯 Présentation

Un CV digital original présenté sous forme d'un profil Instagram interactive. Cette single-page web app combine l'expérience utilisateur familière d'Instagram avec un contenu professionnel, créant un CV moderne et mémorable.

## ✨ Fonctionnalités

### 🎨 Design Instagram-like
- **Interface authentique** : Header, photo de profil, grille de posts
- **Esthétique rétro 90's** : Couleurs pastel, dégradés doux, ombres subtiles
- **Mobile-first** : Responsive design optimisé pour tous les écrans
- **Animations fluides** : Transitions et effets hover soignés

### 📱 Expérience utilisateur
- **Profil complet** : Photo, bio, statistiques, liens sociaux
- **Grille de posts** : 6 sections du CV (expériences, formations, compétences, etc.)
- **Stories interactives** : Carousel détaillé pour chaque section
- **Navigation intuitive** : Clavier (Échap), clics, boutons de navigation

### 🛠️ Sections du CV
1. **💼 Expériences** - Parcours professionnel détaillé
2. **🎓 Formations** - Cursus académique et certifications
3. **🛠️ Compétences** - Technologies par catégories avec niveaux
4. **🌟 Personnel** - Centres d'intérêt et langues
5. **📱 Contact** - Informations de contact interactives
6. **🚀 Projets** - Réalisations marquantes

## 🚀 Technologies

### Frontend
- **React 19** avec TypeScript
- **Vite** pour le build et le dev server
- **Tailwind CSS v4** pour le styling
- **CSS Grid/Flexbox** pour la mise en page

### Développement
- **ESLint** pour la qualité du code
- **Hot Module Replacement** pour le développement
- **Architecture modulaire** avec composants réutilisables

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # En-tête Instagram
│   ├── Profile.tsx     # Section profil
│   ├── Feed.tsx        # Grille de posts
│   ├── PostCard.tsx    # Carte de post
│   └── CarouselStory.tsx # Modal carousel
├── data/               # Données statiques
│   ├── profile.ts      # Infos personnelles
│   ├── experiences.ts  # Expériences pro
│   ├── formations.ts   # Formations
│   └── skills.ts       # Compétences
├── hooks/              # Hooks personnalisés
│   └── index.ts        # Utilitaires (scroll lock, etc.)
└── styles/             # Styles CSS
    └── index.css       # Tailwind + styles custom
```

## 🎨 Palette de couleurs

### Couleurs principales
- **Instagram Gray** : #fafafa, #262626, #737373
- **Retro Purple** : #8B5CF6
- **Retro Pink** : #EC4899  
- **Retro Blue** : #3B82F6
- **Retro Cyan** : #06B6D4
- **Retro Green** : #10B981

### Dégradés
- Story ring : `from-retro-pink via-retro-orange to-retro-yellow`
- Background : `from-retro-purple to-retro-blue`

## 🚀 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualisation du build
npm run preview
```

## 📱 Responsive Design

- **Mobile** : Interface optimisée, navigation tactile
- **Tablet** : Adaptation de la grille et des modales  
- **Desktop** : Expérience complète avec hover effects

## 🎯 Optimisations

### Performance
- Composants React optimisés
- Lazy loading des images
- CSS moderne (Grid, Flexbox)
- Bundle optimisé avec Vite

### Accessibilité
- Navigation clavier (Échap pour fermer)
- Contraste des couleurs respecté
- Textes alternatifs sur les images
- Focus management dans les modales

### SEO
- Meta tags optimisées
- Structure sémantique HTML
- Contenu indexable

## 🔮 Améliorations futures

- [ ] Animations Framer Motion
- [ ] Mode sombre/clair
- [ ] Swiper.js pour les carousels
- [ ] PWA (Progressive Web App)
- [ ] Analytics et tracking
- [ ] Intégration CMS headless
- [ ] Tests unitaires et e2e
- [ ] Déploiement automatisé

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

**Développé avec ❤️ par Laura Dupont**  
*Transformez votre CV en expérience digitale mémorable !*
