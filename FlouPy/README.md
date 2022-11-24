# FlouPy
FlouPy est un module de floutage en Python, intégrez le dans un programme pour flouter une image (png).
## Utilisation:
Voici comment l'utiliser:
```py
from FlouPy import FlouPy as flou
dist = 10
sizeofresize = 20
flou.floupy(self, 'imagepath.png', 'destinationpath.png', dist, sizeofresize)
```
Remplacez `imagepath.png` par le chemin d'accès de l'image que vous voulez flouter.<br>
Remplacez `destinationpath.png` par le chemin d'accès de l'image finale (chemin d'accès déja existant si vous voulez remplacer une image déja existante, sinon chemin d'accès "vide")<br>
Remplacez la variable `dist` par le nombre (entier) de la distance de floutage que vous souhaitez (distance à laquelle le programme prend les couleurs des pixels pour flouter un pixel)<br>
Remplacez la variable `sizeofresize` par le nombre (entier) 

## Librairie necessaires:

## Fonctionnement du programme:
