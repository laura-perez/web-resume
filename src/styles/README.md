# Structure CSS Modulaire

Ce projet utilise une architecture CSS modulaire pour une meilleure organisation et maintenabilité du code.

## Structure des fichiers CSS

```
src/styles/
├── index.css           # Fichier principal qui importe tous les modules
├── variables.css       # Variables CSS globales (couleurs, gradients, ombres, etc.)
├── base.css           # Styles de base (reset, body, container, scrollbar)
├── header.css         # Styles pour le composant Header
├── profile.css        # Styles pour le composant Profile (photo, story ring, espacement)
├── post-card.css      # Styles pour les cartes de posts et la grille
├── carousel.css       # Styles pour le carrousel et modal overlay + Swiper
└── utilities.css      # Classes utilitaires (couleurs, gradients, animations)
```

## Description des modules

### `variables.css`
- Variables CSS globales (custom properties)
- Palette de couleurs Instagram et rétro
- Gradients et dégradés
- Ombres et border radius
- Police de caractères

### `base.css`
- Reset CSS de base
- Styles du body et container principal
- Scrollbar personnalisée
- Responsive container

### `header.css`
- Styles du header Instagram
- Gradient de fond pastel
- Effet de blur backdrop
- Responsive padding

### `profile.css`
- Section profil et story ring
- Photo de profil responsive
- Espacements adaptatifs
- Hover effects

### `post-card.css`
- Grille de posts (3 colonnes)
- Cartes de posts avec aspect ratio 1:1
- Hover effects et transitions
- Responsive gaps

### `carousel.css`
- Modal overlay du carrousel
- Contenu du carrousel
- Customisation de Swiper.js
- Optimisations mobile

### `utilities.css`
- Classes utilitaires pour les couleurs
- Classes pour les gradients
- Animations et keyframes
- Classes d'ombres et bordures

## Avantages de cette architecture

1. **Maintenabilité** : Chaque composant a ses propres styles
2. **Réutilisabilité** : Variables CSS centralisées
3. **Performance** : Imports modulaires
4. **Organisation** : Code organisé par fonctionnalité
5. **Collaboration** : Facile de travailler sur des composants séparés

## Comment ajouter de nouveaux styles

1. Pour un nouveau composant : créer un fichier `nouveau-composant.css`
2. Ajouter l'import dans `index.css`
3. Utiliser les variables existantes dans `variables.css`
4. Suivre les conventions de nommage existantes
