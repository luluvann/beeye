# Beeye

## Application déployée
[https://luluvann.github.io/beeye](https://luluvann.github.io/beeye)

## Choix technique
- Utilisation de la librairie ReactJS pour développer le wireframe
- Comme il n'y avait pas de **User Story**, toutes les fonctionnalités et interactions entre les sections de ce design n'ont pas été développées: certains sections ne sont que des blocs/composants statiques tandis que certains composants font du "dynamic rendering" (ex: lorsqu'on clique l'élement "Tâches" dans le sidebar de gauche, la liste des tâches apparaît)
- Pour la partie grid, simple utilisation des propriétés css display
- Les couleurs ont été regroupées comme des css variables dans le fichier index.css
- Certains css classes auraient pu être refactorisées pour alléger le code (ex: les tags unordered list "ul")
- Dans la mesure du possible, les contenus des tags "li" ont été enregistrés dans une "array" dans un fichier js dédié pour un composant donné
- Fontawesome est utilisé pour les icônes, cependant, n'ayant pas de compte pro, certaines icônes ne sont pas dans leur version "far" (régulier) c'est-à-dire sans le fond noir
- L'application est partiellement responsive, la section droite de l'écran permet un overflow horizontal mais ne permet pas encore de cacher par exemple la sidebar de gauche pour des écrans moins larges.

## Axes d'amélioration
- Factoriser les classes
- Apporter les fonctionnalités du design
- Rendre certains composants réutilisables dans une autre vue
- Rendre davantage responsive sur écrans moins larges (ex: cacher la sidebar partiellement pour que la section à droite prenne toute la largeur de l'écran)
- Personnaliser les inputs des tâches aux couleurs de Beeye lorsque ceux-ci sont cliqués


