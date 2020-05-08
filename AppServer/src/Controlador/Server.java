package Controlador;

import Controlador.Baraja;
import Modelo.Carta;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import modelo.Cliente;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import org.json.JSONObject;
import java.net.ServerSocket;
import org.json.JSONArray;

public class Server extends WebSocketServer {

    private static List<Cliente> clients = new ArrayList<>(4);
    static Baraja b = new Baraja();
    protected static List<Carta> Jugador1 = (List<Carta>) Arrays.asList(b.darCartas(13));
    protected static List<Carta> Jugador2 = (List<Carta>) Arrays.asList(b.darCartas(13));
    protected static List<Carta> Jugador3 = (List<Carta>) Arrays.asList(b.darCartas(13));
    protected static List<Carta> Jugador4 = (List<Carta>) Arrays.asList(b.darCartas(13));
    ArrayList<String> tablero = new ArrayList<String>();
    boolean estado = false;
    boolean estado1 = false, estado2 = false, estado3 = false, estado4 = false;

    String usuario[];
    int cont = 1;
    //  String tablero[];

    public Server() {
        super(new InetSocketAddress(30001));
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        String message = "";
        if (clients.size() >= 4) {
            message = "{\"tipo\":\"cola\"}";
            conn.send(message);
        } else {
            message = "{\"tipo\":\"conectado\"}";
            conn.send(message);

            System.out.println("New client connected: " + conn.getRemoteSocketAddress() + " hash " + conn.getRemoteSocketAddress().hashCode());
            Cliente cliente = new Cliente();
            cliente.setConn(conn);
            cliente.setHash(conn.getRemoteSocketAddress().hashCode());
            String object = "{\"tipo\":\"hash\",\"hash\":\"" + cliente.getHash() + "\",\"conectados\":[";
            for (int i = 0; i < clients.size(); i++) {
                object += "{\"usuario\": \"" + clients.get(i).getNombre() + "\"}";
                if (i < clients.size() - 1) {
                    object += ",";
                }
            }
            object += "]}";
            conn.send(object);
            clients.add(cliente);
        }

    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        usuario = new String[3];
        Gson gson = new Gson();
        Cliente cli = new Cliente();
        JSONObject obj = new JSONObject(message);
        String tipo = (String) obj.get("tipo");
        String object = "";
        switch (tipo) {
            case "ping":
                message = "pong";
                conn.send(message);
                break;
            case "nuevo":
                cont = 1;
                for (int i = 0; i < clients.size(); i++) {
                    if (clients.get(i).getHash() == Integer.parseInt(obj.getString("hash"))) {
                        clients.get(i).setNombre(obj.getString("usuario"));
                        object = "{\"tipo\":\"conexion\",\"hash\":\"" + clients.get(i).getHash() + "\",\"nombre\":\"" + clients.get(i).getNombre() + "\"}";
                        this.sendToAll(conn, object);
                        break;
                    }
                }
                break;
            case "jugador":
                if (clients.size() <= 4) {
                    if (clients.get(0) == clients.get(0)) {
                        String jugador1 = "[";
                        for (int i = 0; i < Jugador1.size() - 1; i++) {
                            jugador1 += Jugador1.get(i) + ",";
                        }
                        jugador1 += Jugador1.get(Jugador1.size() - 1) + "]";

                        Carta[] userArray1 = gson.fromJson(jugador1, Carta[].class);
                        int i = 0;
                        String obj1 = "{\"tipo\":\"jugador1\",\"nombre\":\"" + clients.get(0).getNombre() + "\",\"arreglo\":[";
                        for (Carta user : userArray1) {
                            obj1 += "{\"numero\": \"" + user.numero + "\",\"palo\":\"" + user.palo + "\"}";
                            if (i < Jugador1.size() - 1) {
                                obj1 += ",";
                            }
                            i++;
                        }
                        obj1 += "]}";
                        clients.get(0).getConn().send(obj1);
                    }

                    if (clients.get(1) == clients.get(1)) {
                        String jugador2 = "[";
                        for (int i = 0; i < Jugador2.size() - 1; i++) {
                            jugador2 += Jugador2.get(i) + ",";
                        }
                        jugador2 += Jugador2.get(Jugador2.size() - 1) + "]";
                    

                        Carta[] userArray2 = gson.fromJson(jugador2, Carta[].class);
                        String obj2 = "{\"tipo\":\"jugador2\",\"nombre\":\"" + clients.get(1).getNombre() + "\",\"arreglo\":[";
                        int i = 0;
                        for (Carta user2 : userArray2) {
                            obj2 += "{\"numero\": \"" + user2.numero + "\",\"palo\":\"" + user2.palo + "\"}";
                            if (i < Jugador2.size() - 1) {
                                obj2 += ",";
                            }
                            i++;
                        }
                        obj2 += "]}";
                        clients.get(1).getConn().send(obj2);
                    }
                    if (clients.get(2) == clients.get(2)) {
                        String jugador3 = "[";
                        for (int i = 0; i < Jugador3.size() - 1; i++) {
                            jugador3 += Jugador3.get(i) + ",";
                        }
                        jugador3 += Jugador3.get(Jugador3.size() - 1) + "]";
                     

                        Carta[] userArray3 = gson.fromJson(jugador3, Carta[].class);
                        String obj3 = "{\"tipo\":\"jugador3\",\"nombre\":\"" + clients.get(2).getNombre() + "\",\"arreglo\":[";
                        int i = 0;
                        for (Carta user3 : userArray3) {
                            obj3 += "{\"numero\": \"" + user3.numero + "\",\"palo\":\"" + user3.palo + "\"}";
                            if (i < Jugador3.size() - 1) {
                                obj3 += ",";
                            }
                            i++;
                        }
                        obj3 += "]}";
                        clients.get(2).getConn().send(obj3);
                    }
                    if (clients.get(3) == clients.get(3)) {
                        String jugador4 = "[";
                        for (int i = 0; i < Jugador4.size() - 1; i++) {
                            jugador4 += Jugador4.get(i) + ",";
                        }
                        jugador4 += Jugador4.get(Jugador4.size() - 1) + "]";
                    
                        Carta[] userArray4 = gson.fromJson(jugador4, Carta[].class);
                        String obj4 = "{\"tipo\":\"jugador4\",\"nombre\":\"" + clients.get(3).getNombre() + "\",\"arreglo\":[";
                        int i = 0;
                        for (Carta user4 : userArray4) {
                            obj4 += "{\"numero\": \"" + user4.numero + "\",\"palo\":\"" + user4.palo + "\"}";
                            if (i < Jugador4.size() - 1) {
                                obj4 += ",";
                            }
                            i++;
                        }
                        obj4 += "]}";
                        clients.get(3).getConn().send(obj4);
                    }
                }
                break;
            case "turno":

                object = "";
                if (cont < clients.size()) {
                    cont++;
                } else {
                    cont = 1;
                }
                switch (cont) {
                    case 1:
                        estado1 = true;
                        object = "{\"tipo\":\"turno\",\"estado\":\"" + cont + "\"}";
                        break;
                    case 2:
                        estado2 = true;
                        object = "{\"tipo\":\"turno\",\"estado\":\"" + cont + "\"}";
                        break;
                    case 3:
                        estado3 = true;
                        object = "{\"tipo\":\"turno\",\"estado\":\"" + cont + "\"}";
                        break;
                    case 4:
                        estado4 = true;
                        object = "{\"tipo\":\"turno\",\"estado\":\"" + cont + "\"}";
                        break;
                    default:
                        break;
                }
                this.sendToAll(conn, object);

                break;

            case "trio":

                JSONArray jsonArray = obj.getJSONArray("tablero");
                for (int i = 0; i < jsonArray.length(); i++) {
                    tablero.add(jsonArray.get(i).toString());
                }

                object = "{\"tipo\":\"trio\",\"arreglo\":[";

                for (int i = 0; i < tablero.size(); i++) {
                 
                    object += "{\"tablero\": \"" + tablero.get(i) + "\"}";
                    if (i < tablero.size() - 1) {
                        object += ",";
                    }
                }
                object += "]}";
                this.sendToAll(conn, object);
                tablero.clear();
                break;
            case "escalera":
                JSONArray jsonArray2 = obj.getJSONArray("tablero");
                for (int i = 0; i < jsonArray2.length(); i++) {
                    tablero.add(jsonArray2.get(i).toString());
                }

                object = "{\"tipo\":\"escalera\",\"arreglo\":[";

                for (int i = 0; i < tablero.size(); i++) {
                  
                    object += "{\"tablero\": \"" + tablero.get(i) + "\"}";
                    if (i < tablero.size() - 1) {
                        object += ",";
                    }
                }
                object += "]}";

                this.sendToAll(conn, object);
                tablero.clear();
                break;
            case "cambio":
                if (b.cartasDisponible() == 0) {
                    b.setPosSiguienteCarta(52);
                } else {
                    int cambio = 0;
                    b.mostrarBaraja();
                    Carta nuevacarta[] = b.darCartas(1);
                    cambio = obj.getInt("tablero");
                    object = "{\"tipo\":\"cambio\",\"numero\":\"" + nuevacarta[0].numero + "\",\"color\":\"" + nuevacarta[0].palo + "\"}";
                    for (int i = 0; i < clients.size(); i++) {
                        WebSocket c = (WebSocket) clients.get(i).getConn();
                        if (c == conn) {
                            c.send(object);
                        }
                    }
                }
                break;
            case "agregar":
                if (b.cartasDisponible() == 0) {
                    b.setPosSiguienteCarta(52);
                } else {
                    int cambio = 0;
                    b.mostrarBaraja();
                    Carta nuevacarta[] = b.darCartas(1);
                    cambio = obj.getInt("tablero");
                    object = "{\"tipo\":\"agregar\",\"numero\":\"" + nuevacarta[0].numero + "\",\"color\":\"" + nuevacarta[0].palo + "\"}";
                    for (int i = 0; i < clients.size(); i++) {
                        WebSocket c = (WebSocket) clients.get(i).getConn();
                        if (c == conn) {
                            c.send(object);
                        }
                    }
                }
                break;
            case "gano":
                String jugador = (String) obj.get("jugador");
                String ganador = "";
              
                if ("valid1".equals(jugador)) {
                    ganador = "jugador1";
                } else if ("valid2".equals(jugador)) {
                    ganador = "jugador2";
                } else if ("valid3".equals(jugador)) {
                    ganador = "jugador3";
                } else if ("valid4".equals(jugador)) {
                    ganador = "jugador4";
                }
                object = "{\"tipo\":\"gano\",\"jugador\":\"" + ganador + "\"}";
                this.sendToAll(conn, object);
                // conn.close();
                break;
            case "nombre":
                 object = "{\"tipo\":\"nombre\",\"conectados\":[";
                for (int i = 0; i < clients.size(); i++) {
                    object += "{\"usuario\": \"" + clients.get(i).getNombre() + "\"}";
                    if (i < clients.size() - 1) {
                        object += ",";
                    }
                }
                  object += "]}";
                this.sendToAll(conn, object);
                // conn.close();
                break;
            default:
                break;
        }

    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        cont = 1;
        String message;
        message = "{\"tipo\":\"desconectado\"}";
        this.sendToAll(conn, message);
         System.out.println("Client " + code + " disconnected: " + reason);
        for (int i = 0; i < clients.size(); i++) {
            if (clients.get(i).getConn().equals(conn)) {
                clients.remove(i);
                break;
            }
        }
    }

    @Override
    public void onError(WebSocket conn, Exception exc) {
         System.out.println("Error happened: " + exc);
    }

    private void sendToAll(WebSocket conn, String message) {
        for (int i = 0; i < clients.size(); i++) {
            WebSocket c = (WebSocket) clients.get(i).getConn();
            c.send(message);
        }
    }

    public static void main(String[] args) {
        Server server = new Server();
        server.start();
        Baraja b = new Baraja();
        List<Carta> Jugador1 = (List<Carta>) Arrays.asList(b.darCartas(13));
        List<Carta> Jugador2 = (List<Carta>) Arrays.asList(b.darCartas(13));
        List<Carta> Jugador3 = (List<Carta>) Arrays.asList(b.darCartas(13));
        List<Carta> Jugador4 = (List<Carta>) Arrays.asList(b.darCartas(13));

//        Se crean los cuatros Jugadores con <List> de tipo carta 
        // Se imprimen las fichas de casda Jugador 
     

    }

}
