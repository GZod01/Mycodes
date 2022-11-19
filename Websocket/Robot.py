class driver:
    def setvitesse(self,pin,vitesse):
        print("le moteur avec le pin ",pin," avance à la vitesse", vitesse,".")
        dri.set_esc(pin,vitesse)
class Robot:
    Driver=driver()
    pingauche=0
    pindroite=0
    current_vitessed=0
    current_vitesseg=0
    vitessegauche=0
    vitessedroite=0
    def init(self,pgauche,pdroite):
        self.pingauche=pgauche
        self.pindroite=pdroite
    #def checkforpin(self):
    #    if (self.pingauche==0 or self.pindroite==0) and (self.pingauche==0 and self.pindroite==0):
    #        print('there is an error, the pin are not defined')
    #    else:
    #        pass
    def moteurG(self,n):
        n=int(n)
        driver=self.Driver
        driver.setvitesse(self.pingauche,n)
        self.current_vitesseg=n
    def moteurD(self,n):
        n=int(n)
        driver=self.Driver
        driver.setvitesse(self.pindroite,n)
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