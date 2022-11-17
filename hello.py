# Premièrement un simple hello world (learn = print):
print("hello world")
# Puis un input:
texte = input("Que voulez vous écrire? : ") #en lançant le code ce texte sera affiché dans le terminal, le texte écrit à la suite sera stocké dans la variable texte
print(texte)
# maintenant les if... else.... etc. et les comparateurs (==, >=, <=, <, >, etc.)
nombre = int(input("Nombre à choisir: ")) #int va transformer le resultat en nombre entier (1 2 3 4 15 2000 etc.)
if nombre == 1: #verifie si la variable nombre correspond à un nombre égale à 1 et si c'est le cas execute le programme suivant
    print("Je suis 1")
elif nombre >2: #sinon si la variable nombre est supérieure à 2
    print("je suis supérieur à 2")
elif nombre < 0: #sinon si la variable nombre est inférieure à 0
    print("je suis inférieur à 0")

# les fonctions: 
def ecriretexte(txt):
    print(txt)

ecriretexte("hello world how are you")
