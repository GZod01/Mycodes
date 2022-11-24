#<<<<<<<<<<---------->>>>>>>>>>
# Made by G_Zod, Github= gzod01, Discord= G_Zod#1311
#<<<<<<<<<<---------->>>>>>>>>>
from random import randint
from PIL import Image, ImageFile
from pprint import pprint
import numpy as np
class FlouPy():
    img = None
    imgcopie = None
    resizesize = 0
    pixels = None
    pixelscopie = None
    dist = 0
    def __initialisation__(self,initialfp,exitfp,distance,resizesize):
        img = Image.open(initialfp)
        self.img = img
        imgcopie = Image.open(initialfp)
        self.imgcopie = imgcopie
        resizesize = int(resizesize)
        self.resizesize = resizesize
        img.resize(((img.size[0]//resizesize),(img.size[1]//resizesize)))
        imgcopie.resize(((img.size[0]//resizesize),(img.size[1]//resizesize)))
        self.pixels = img.load()
        self.pixelscopie = imgcopie.load()
        self.dist = distance
    def __noyau__(self, matrix: list[list[float]], x: int, y: int, d: int,img):
        new = []
        for sx in range(x-d, x+d+1):
            ligne = []
            for sy in range(y-d, y+d+1):
                if sx < 0 :
                    sx = d
                if sy < 0 :
                    sy = d
                if sx > img.size[0]:
                    sx = d
                if sy > img.size[1]:
                    sy = d
                ligne.append(matrix[sx, sy])

            new.append(ligne)
        return new

    def __floutage__(self, matrix: list[list[float]], x: int, y: int, d: int,img):
        pixl = self.__noyau__(matrix, x, y, d,img)
        newpixl = (0, 0, 0)
        imagefloutée = pixl.copy()
        for fx in range(2*d + 1):
            for fy in range(2*d + 1):
                newpixl = (
                    ((pixl[fy][fx])[0] + newpixl[0])//2,
                    ((pixl[fy][fx])[1] + newpixl[1])//2,
                    ((pixl[fy][fx])[2] + newpixl[2])//2
                )
                imagefloutée[fx][fy] = newpixl
        return imagefloutée[d+1][d+1]

    def __flouend__(self):
        for i in range(self.img.size[0]-dist):
            for j in range(self.img.size[1]-dist):
                self.pixelscopie[i, j] = self.__floutage__(self.pixels, i, j, dist,img)
        self.imgcopie.resize((img.size[0]*self.resizesize),(img.size[1]*self.resizesize))
        self.imgcopie.save(exitfp)
    def floupy(self,initialfp,exitfp,distance,resizesize):
        startfp = initialfp
        endfp = exitfp
        dist = distance
        tailleresize = resizesize
        self.__initialisation__(startfp,endfp,dist,tailleresize)
        self.__flouend__()
