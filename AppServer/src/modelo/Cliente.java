package modelo;

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

    public int[] getArreglo() {
        return arreglo;
    }

    public void setArreglo(int[] arreglo) {
        this.arreglo = arreglo;
    }
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
