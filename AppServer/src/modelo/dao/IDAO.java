package modelo.dao;

import java.io.IOException;

/**
 * Interfaz DAO
 * @author Santiago Cáceres y Santiago Pérez
 * @version 1.0
 * @param <DTO>
 * @since 2020-04-01
 */
public interface IDAO <DTO> {
    public boolean crear(DTO dto);
    public DTO consultar(String key);
    public boolean actualizar(DTO dto);
    public boolean eliminar (String key);
    public void escribirArchivo() throws IOException;
    public void leerArchivo() throws IOException, ClassNotFoundException; 
}
