npx create-react-app app --template=typescript
react moteur
react-dom pour le dom virtuel
react-scripts pour les TU, rest
cra-template-typescript pour l'arborescence

learn git branching pour prendre en main git en ligne de commande
Affichage -> Affichage masqué -> Elements masqués

ES6 speard operator : Pour créer un clone d'un array ou object avec une autre référence

Javascript mode strict
React intervient uniquement sur le body pas de head

public : statique image, ressources
src : code

webvitals : pour la performance

composants js : js ou jsx
composants ts : tsx

1 repertoire = 1 composant (fichier, test, css)
si beaucoup de composants, découper selon leur type (voir ppt)

point d'entrée : index.tsx
ReactDOM.render pour retourner le composant App 

Nom de la fonction = nom du composant

Toutes les balises html sont définies en react

Transposition des attributs js en react => className

A la différence de NPM, Yarn construit mieux l'arbre de dépendances

Stateless : composant sans props, n'est pas responsable de modifier l'état, rend ce qui reçoit de son parent

Statefull : Composant qui a ses propres props, a la capacité de changer leurs props

Quand les props changent, le render se fait automatiquement

Button est une function car aucune responsabilité métier

What happens in Vages stays in Vegas, il faut exporter les composants pour les réutiliser

Un export default par fichier, on peut changer le nom du composant au moment de l'import

Le parent n'a pas besoin de savoir tout l'event de son enefant, chaque composant gère son event

propTypes pour définir la nature des props

Ajouter à chrome l'extension react developper tools, ça rajoute un volet components dans F12

Les pluggins VS Code à installer
- Debugger for firefox
- Devtools for chrome
- Debugger for Microsoft Edge
- ES7 React/Redux/GraphQL/React-Native Snippets
- React JS Extensions Pack
- Git graph
- Jest Snippets
- Jest Test Explorer
- Test explorer UI
- JS Snippet
- Lorem ipsum
- Lorem Picsum
- MUI Snippets
- Simpte React Snippets
- Redux Devtools
- Reactjs code snippets
- React-Bootstrap Snippets

Pour visualiser la liste des pluggins installés : @installed

Ne jamais utiliser des alertes ou des confirm dans le code car ça bloque l'execution

Snipp rccp pour contruire le squelette de APP.js

CSS module pour pallier aux problèmes de composants portant le même nom et éviter les collisions de classes (avec material ui par exemple). Il affecte des noms random au classe pour qu'elles ne fusionnent pas 

un composant par fichier, sauf si le composant est uniquement utilisé par un specifique parent dans ce cas on peut avoir 2 composants dans le même fichier

props = {} pour dire que c'est du JS, pas de if ou de loop

On ne mute pas le state, on dispose de setState pour avertir du changement du state

Le cycle de vie du composant, componentdidmount, componentdidupdate, componentwillunmount qui s'effectuent après le setstate et avant render. Elles ont utiles car les changements sont asynchrones on ne sait pas forcément quand le composant sera changé.

Mountage s'exécute après le constructeur
Mise à jour après new props ou setstate

console.log(arguments) pour lister les arguments demandés par une fonction

useState est un hook pour remplacer l'utilisation des classes

UseEffect and useState sont les hooks les plus utilisés dans React. Il y'a environ 20 hooks en total dans React

Les modifications d'état sont faites de façon asynchrone

Il faut jamais prefixer un nom de répertoire avec un . sinon ça pète les tests

Test explorer permet de rajouter une fiole pour exécuter les tests

On peut créer des templates pour générer des Reducers

Pour ne pas avoir à se retaper toute le commande à chaque fois npm genHooked componentName

devdocs.io pour la documentation complète