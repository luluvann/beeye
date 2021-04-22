# Beeye

## Application déployée
[https://luluvann.github.io/beeye](https://luluvann.github.io/beeye)

## Choix technique
- Utilisation de la librairie ReactJS pour développer le wireframe
- Comme il n'y avait pas de **User Story**, toutes les fonctionalités et interactions entre les sections de ce design n'ont pas été développées: certains sections ne sont que des blocs/composants statiques tandis que certains composants font du "dynamic rendering" (ex: lorsqu'on clique l'élement "Tâches" dans le sidebar de gauche, la liste des tâches apparaît)
- Pour la partie grid, simple utilisation des propriétés css display
- Les couleurs ont été regroupées comme des css variables dans le fichier index.css
- Certains css classes auraient pu être refactorisées pour alléger le code (ex: les tags unordered list "ul")
- Dans la mesure du possible, les contenus des tags "li" ont été enregistrés dans une "array" dans un fichier js dédié pour un composant donné

## Axes d'amélioration
- Factoriser les classes
- Apporter les fonctionnalités du design
- Rendre certains composants réutilisables dans une autre vue


