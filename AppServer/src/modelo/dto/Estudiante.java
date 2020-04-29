package modelo.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * Clase estudiante
 * @author Santiago Cáceres y Santiago Pérez
 * @since 2020-04-01
 * @version 1.0
 */
public class Estudiante implements Serializable{
    private String nombre;
    private String correo;
    private String password;
    private String carrera;
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Estudiante other = (Estudiante) obj;
        if (!Objects.equals(this.correo, other.correo)) {
            return false;
        }
        return true;
    }
    
    
}
