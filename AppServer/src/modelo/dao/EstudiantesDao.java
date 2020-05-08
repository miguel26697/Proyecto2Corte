package modelo.dao;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import modelo.dto.Estudiante;

/**
 * Objeto de acceso a datos de los estudiantes
 *
 * @author Santiago Cáceres y Santiago Pérez
 * @since 2020-04-01
 *
 */
public class EstudiantesDao implements IDAO<Estudiante> {

    private ArrayList<Estudiante> estudiantes;

    @Override
    public boolean crear(Estudiante dto) {

        return this.estudiantes.add(dto);
    }

    @Override
    public Estudiante consultar(String key) {
        for (int i = 0; i < this.estudiantes.size(); i++) {
            if (this.estudiantes.get(i).getCorreo().equals(key)) {
                return this.estudiantes.get(i);
            }
        }
        return null;
    }

    @Override
    public boolean actualizar(Estudiante dto) {
        for (int i = 0; i < this.estudiantes.size(); i++) {
            if (this.estudiantes.get(i).equals(dto)) {
                return this.estudiantes.set(i, dto) != null;
            }
        }
        return false;

    }

    @Override
    public boolean eliminar(String key) {
        for (int i = 0; i < this.estudiantes.size(); i++) {
            if (this.estudiantes.get(i).getCorreo().equals(key)) {
                return this.estudiantes.remove(i) != null;
            }
        }
        return true;
    }

    /**
     * Método que se encarga de escribir el archivo de datos
     *
     * @throws IOException
     */
    @Override
    public void escribirArchivo() throws IOException {
        ObjectOutputStream fileO = new ObjectOutputStream(new FileOutputStream("Estudiantes"));
        fileO.writeObject(this.estudiantes);
    }

    /**
     * Método que lee el archivo de datos
     *
     * @throws IOException
     * @throws ClassNotFoundException
     */
    @Override
    public void leerArchivo() throws IOException, ClassNotFoundException {
        try {
            ObjectInputStream fileIn = new ObjectInputStream(new FileInputStream("Estudiantes"));
            this.estudiantes = (ArrayList) fileIn.readObject();

        } catch (FileNotFoundException e) {
            this.estudiantes = new ArrayList();

        }
    }
}
