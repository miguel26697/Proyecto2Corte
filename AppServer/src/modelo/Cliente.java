package modelo;

import java.util.ArrayList;
import java.util.List;
import org.java_websocket.WebSocket;

/**
 * Clase clientes
 * @author Santiago Cáceres - Santiago Pérez
 */
public class Cliente {
    private WebSocket conn;
    private int hash;
    private String nombre;
    private int[] arreglo ;

    public List<Integer> getAmarillo1() {
        return amarillo1;
    }

    public void setAmarillo1(List<Integer> amarillo1) {
        this.amarillo1 = amarillo1;
    }
    public List<Integer> amarillo1 = new ArrayList<Integer>();

   
    /**
     * 
     * @return 
     */
    public int getHash() {
        return hash;
    }
    /**
     * 
     * @param hash 
     */
    public void setHash(int hash) {
        this.hash = hash;
    }
    /**
     * 
     * @return 
     */
    public WebSocket getConn() {
        return conn;
    }
    /**
     * 
     * @param conn 
     */
    public void setConn(WebSocket conn) {
        this.conn = conn;
    }
    /**
     * 
     * @return 
     */
    public String getNombre() {
        return nombre;
    }
    /**
     * 
     * @param nombre 
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
}
