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