

package Modelo;

/**
 * Clase Carta
 * @author Disco Duro de Roer
 */
public class Carta {
    
    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getPalo() {
        return palo;
    }

    //Atributos
    public void setPalo(String palo) {
        this.palo = palo;
    }
    public int numero;
    public String palo;
    
    //Constantes
    public static final String[] PALOS={"Rojo", "Azul", "Amarillo", "Negro"};
    public static final int LIMITE_CARTA_PALO = 13;
    //Constructor
    public Carta(int numero, String palo) {
        this.numero = numero;
        this.palo = palo;
    }
    
    @Override
    public String toString() {
         return "{numero=" + numero + ", palo=" + palo +"}" ;
    }
   
}
