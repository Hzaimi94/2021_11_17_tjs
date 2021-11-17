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

Liste des pluggins à installer : 
React JS Extensions Pack extension pour eslint et prettier
Add git graph extension
ES7 React/Redux/GraphQL/React-Native snippets

Stateless : composant sans props, n'est pas responsable de modifier l'état, rend ce qui reçoit de son parent

Statefull : Composant qui a ses propres props 

Button est une function car aucune responsabilité métier

What happens in Vages stays in Vegas, il faut exporter les composants pour les réutiliser

Un export default par fichier, on peut changer le nom du composant au moment de l'import

Le parent n'a pas besoin de savoir tout l'event de son enefant, chaque composant gère son event
