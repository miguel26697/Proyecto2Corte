package Controlador;

import Modelo.Carta;
import java.util.Random;

public class Baraja {

    /**
     * Baraja todas las cartas
     */
    public static int generaNumeroEnteroAleatorio(int minimo, int maximo) {
        Random r = new Random();
        return r.nextInt(maximo) + 1;
    }
    protected Carta cartas[];
    protected Carta cartas2[];
    protected Carta barajaFinal[];

    public int getPosSiguienteCarta() {
        return posSiguienteCarta;
    }

    public void setPosSiguienteCarta(int posSiguienteCarta) {
        this.posSiguienteCarta = posSiguienteCarta;
    }
    private int posSiguienteCarta;

    //Cartas
    public static final int NUM_CARTAS = 104;

    public Baraja() {
        this.cartas = new Carta[NUM_CARTAS];
        this.posSiguienteCarta = 0;
        crearBaraja(); //Creamos la baraja
        barajar(); // barajamos la baraja
    }

    /**
     * Crea la baraja ordenada
     */
    private void crearBaraja() {

        String[] palos = Carta.PALOS;
        cartas2 = new Carta[cartas.length];
        barajaFinal = new Carta[cartas.length + cartas2.length];

//        //Recorro los palos
        int cardcont = 0, cont = 0, z = 0;
        for (int i = 0; i < palos.length; i++) {

            //Recorro los numeros
            for (int j = 1; j <= Carta.LIMITE_CARTA_PALO; j++) {

                cartas[cardcont] = new Carta(j, palos[i]);
                cardcont++;
            }

        }
        for (Carta carta : cartas) {
            cartas2[cont] = carta;
            cont++;
        }

        for (int i = 0; i < cartas.length; i++) {
            barajaFinal[z] = cartas[i];
            z++;
            barajaFinal[z] = cartas2[i];
            z++;
        }

    }

    /**
     * Baraja todas las cartas
     */
    public void barajar() {

        int posAleatoria = 0;
        Carta c;

        //Recorro las cartas
        for (int i = 0; i < barajaFinal.length; i++) {

            posAleatoria = generaNumeroEnteroAleatorio(0, NUM_CARTAS - 1);
            if (barajaFinal[i] != null) {
                c = barajaFinal[i];
                barajaFinal[i] = barajaFinal[posAleatoria];
                barajaFinal[posAleatoria] = c;
            }
            //intercambio

        }

        //La posición vuelve al inicio
        this.posSiguienteCarta = 0;

    }

    /**
     * Devuelve la casta donde se encuentre "posSiguienteCarta"
     *
     * @return carta del arreglo
     */
    public Carta siguienteCarta() {

        Carta c = null;

        if (posSiguienteCarta == NUM_CARTAS) {
            System.out.println("Ya no hay mas cartas, barajea de nuevo");
        } else {
            c = barajaFinal[posSiguienteCarta++];
        }

        return c;

    }

    /**
     * Devuelve un numero de cartas. Controla si hay mas cartas de las que se
     * piden
     *
     * @param numCartas
     * @return
     */
    public Carta[] darCartas(int numCartas) {

        if (numCartas > NUM_CARTAS) {
            System.out.println("No se puede dar mas cartas de las que hay");
        } else if (cartasDisponible() < numCartas) {
            System.out.println("No hay suficientes cartas que mostrar");
        } else {

            Carta[] cartasDar = new Carta[numCartas];

            //recorro el array que acabo de crear para rellenarlo
            for (int i = 0; i < cartasDar.length; i++) {
                cartasDar[i] = siguienteCarta(); //uso el metodo anterior
            }

            //Lo devuelvo
            return cartasDar;

        }

        //solo en caso de error
        return null;

    }

    /**
     * Indica el numero de cartas que hay disponibles
     *
     * @return
     */
    public int cartasDisponible() {
        System.out.println("" + posSiguienteCarta);
        return NUM_CARTAS - posSiguienteCarta;

    }

    /**
     * Muestro las cartas que ya han salido
     */
    public void cartasMonton() {

        if (cartasDisponible() == NUM_CARTAS) {
            System.out.println("No se ha sacado ninguna carta");
        } else {
            //Recorro desde 0 a la posSiguienteCarta
            for (int i = 0; i < posSiguienteCarta; i++) {
                System.out.println(cartas[i]);
            }
        }

    }

    /**
     * Muestro las cartas que aun no han salido
     */
    public void mostrarBaraja() {

        if (cartasDisponible() == 0) {
            System.out.println("No hay cartas que mostrar");
        } else {
            for (int i = posSiguienteCarta; i < cartas2.length; i++) {
                System.out.println(i + " " + barajaFinal[i]);
            }
        }

    }

    public Carta[] reingresar(int NumCarta) {
        Carta[] cartaDevolver = new Carta[1];
        for (int i = 0; i < cartaDevolver.length; i++) {
            cartaDevolver[i] = CartaAnterior();
            barajaFinal[0] = cartaDevolver[i];
        }
        return barajaFinal;
    }

    public Carta CartaAnterior() {
        Carta c = null;
        barajar();
        c = barajaFinal[posSiguienteCarta--];
        return c;
    }

}
