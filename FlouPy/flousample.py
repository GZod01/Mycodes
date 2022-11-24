from FlouPy import FlouPy as flou
dist = 10
sizeofresize = 20
flou.floupy(self, 'imagepath.png', 'destinationpath.png', dist, sizeofresize)
# l'élément imagepath est le chemin de l'image que vous voulez flouter
# l'élément destinationpath est le chemin vers l'image finale (image existante si vous voulez remplacer une image ou alors chemin vide)
# l'élément dist est le rayon de floutage
# l'élément sizeofresize est la taille par laquelle l'image va etre divisée au redimensionnement (mettre 1 si pas de redimensionnement)
