/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package propiedades;

import java.util.ArrayList;
import java.util.Collections;

/**
 *
 * @author migue
 */
public class Revolver {

    int x = 0;
    int y = 20;
    int z = 40;
    int w = 60;
    ArrayList<Integer> Amarillo1 = new ArrayList<Integer>();
    ArrayList<Integer> Rojo = new ArrayList<Integer>();
    ArrayList<Integer> Negro = new ArrayList<Integer>();
    ArrayList<Integer> Azul1 = new ArrayList<Integer>();
    ArrayList<Integer> General = new ArrayList<Integer>();
    ArrayList<Integer> General2 = new ArrayList<Integer>();
    ArrayList<Integer> aux = new ArrayList<Integer>();
    ArrayList<Integer> jugador1 = new ArrayList<Integer>();
    ArrayList<Integer> jugador2 = new ArrayList<Integer>();
    ArrayList<Integer> jugador3 = new ArrayList<Integer>();
    ArrayList<Integer> jugador4 = new ArrayList<Integer>();

    public void revolver() {
        int i = 0;
        for (i = 1; i < 14; i++) {
            Amarillo1.add(x + i);
            Azul1.add(y + i);
            Rojo.add(z + i);
            Negro.add(w + i);
        }
        System.out.println("Amarillo" + Amarillo1);
        System.out.println("Azul" + Azul1);
        System.out.println("Rojo" + Rojo);
        System.out.println("Negro" + Negro);

//     Random random = new Random();
        for (i = 0; i < Amarillo1.size(); i++) {
            General.add(Amarillo1.get(i));
        }
        System.out.println("General con Amarillo" + General);

        for (i = 0; i < Azul1.size(); i++) {
            General.add(Azul1.get(i));
        }
        System.out.println("General con amarillo y azul" + General);

        for (i = 0; i < Rojo.size(); i++) {
            General.add(Rojo.get(i));
        }
        System.out.println("General con amarillo,azul y Rojo" + General);

        for (i = 0; i < Negro.size(); i++) {
            General.add(Negro.get(i));
        }
        System.out.println("General con amarillo,azul,Rojo y negro" + General);
        for (i = 0; i < General.size(); i++) {
            // cliente1.add(Amarillo1.get( random.nextInt(Amarillo1.size()) )+Azul1.get(random.nextInt(Azul1.size())));
            // Collections.shuffle(Amarillo1);
            // Collections.shuffle(Azul1);
            Collections.shuffle(General);
        }
        for (i = 0; i < General.size(); i++) {
            General2.add(General.get(i));
        }
        for (i = 0; i < General.size(); i++) {
            General2.add(General.get(i));
        }
        System.out.println("General con amarillo,azul,Rojo y negro" + General);
        System.out.println("General 2" + General2);

        //cliente1.add(Amarillo1.get( random.nextInt(Amarillo1.size()) ));
        for (i = 0; i < 12; i++) {
            jugador1.add(General2.get(i));
        }
        System.out.println("fichas del jugador 1" + jugador1);

        for (i = 13; i < 25; i++) {
            jugador2.add(General2.get(i));
        }
        System.out.println("fichas del jugador 2" + jugador2);

        for (i = 26; i < 38; i++) {
            jugador3.add(General2.get(i));
        }
        System.out.println("fichas del jugador 3" + jugador3);

        for (i = 39; i < 52; i++) {
            jugador4.add(General2.get(i));
        }
        System.out.println("fichas del jugador 4" + jugador4);
    }
}
