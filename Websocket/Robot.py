class driver:
    def setvitesse(self,pin,vitesse):
        print("le moteur avec le pin ",pin," avance à la vitesse", vitesse,".")
class Robot:
    Driver=driver()
    current_vitessed=0
    current_vitesseg=0
    vitessegauche=0
    vitessedroite=0
    def moteurG(self,n):
        n=int(n)
        driver=self.Driver
        driver.setvitesse(3,n)
        self.current_vitesseg=n
    def moteurD(self,n):
        n=int(n)
        driver=self.Driver
        driver.setvitesse(4,n)
        self.current_vitessed=n
    def Avancer(self,a):
        a=int(a)
        self.moteurG(self.current_vitesseg+a)
        self.moteurD(self.current_vitessed+a)
    def Gauche(self,g):
        g=int(g)
        self.moteurG((self.current_vitesseg)-g)
    def Droite(self,d):
        d=int(d)
        self.moteurD((self.current_vitessed)-d)
    def Reculer(self,r):
        r=int(r)
        self.moteurG(self.current_vitesseg-r)
        self.moteurD(self.current_vitessed-r)
    def stop(self):
        self.moteurG(0)
        self.moteurD(0)
    gauchevitesse=vitessegauche
    droitevitesse=vitessedroite