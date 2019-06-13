# XspeedIt

XspeedIt est une société d'import / export ayant robotisé toute sa chaîne d'emballage de colis.  
Elle souhaite trouver un algorithme permettant à ses robots d'optimiser le nombre de cartons d'emballage utilisés.

Les articles à emballer sont de taille variable, représentée par un entier compris entre 1 et 9.  
Chaque carton a une capacité de contenance de 10.  
Ainsi, un carton peut par exemple contenir un article de taille 3, un article de taille 1, et un article de taille 6.

La chaîne d'articles à emballer est représentée par une suite de chiffres, chacun représentant un article par sa taille.  
Après traitement par le robot d'emballage, la chaîne est séparée par des "/" pour représenter les articles contenus dans un carton.

*Exemple*  
```txt
Chaîne d'articles en entrée : 163841689525773  
Chaîne d'articles emballés  : 163/8/41/6/8/9/52/5/7/73
```

L'algorithme actuel du robot d'emballage est très basique.  
Il prend les articles les uns après les autres, et les mets dans un carton.  
Si la taille totale dépasse la contenance du carton, le robot met l'article dans le carton suivant.

## Objectif


Implémenter une application qui permettrait de maximiser le nombre d'articles par carton, en utilisant un langage pouvant être exécuté sur une JVM ou en node.js.  
L'ordre des cartons et des articles n'a pas d'importance.

*Exemple*  
```txt
Articles      : 163841689525773  
Robot actuel  : 163/8/41/6/8/9/52/5/7/73 => 10 cartons utilisés  
Robot optimisé: 163/82/46/19/8/55/73/7   => 8  cartons utilisés
```

## Solution

Seule la logique métier a été implémenté, il n'y a donc aucune interface utilisateur, une prochaine étape pourrait être l'implémentation d'une CLI et des tests bout en bout.
Actuellement, le code est testé unitairement afin de valider le comportement du robot et des algorithmes d'emballage.

Le robot exécute trois étapes : 
- Validation de la chaîne d'articles en entrée
- Appel de l'algorithme d'emballage
- Formatage du contenu des boites suivant le format attendu

Deux algorithmes d'emballages sont implémentés :
- Simple : Le robot place les articles un à un dans les cartons, dès qu'un article ne rentre pas dans le carton ouvert, il le ferme et en ouvre un autre.
- Optimisé : Le robot place l'article courant dans le premier carton ayant suffisament de place, il ne ferme les cartons qu'a la fin du traitement.

## Usage

```bash
# Install dependencies
yarn install

# Execute unit tests
yarn test
```
