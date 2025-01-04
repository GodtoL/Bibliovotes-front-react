import BookList from "./BookList";
import { useState } from "react";

export default function MainSection() {
    const [isFormVisible, setFormVisible] = useState(false)
    
    const toggleFormVisibility = () =>{
        setFormVisible(!isFormVisible);
    }

    return (
        <>
            <main>
                <button className="create-button" onClick={toggleFormVisibility}> 
                    {isFormVisible ? "Ocultar" : "Agregar recomendación"}
                </button>
                {isFormVisible && (<form className="book-create-form">
                    <CreateBookLabel propName="Titulo" />
                    <CreateBookLabel propName="Autor" />
                    <CreateBookLabel propName="Descripción breve" />
                    <label>Sinopsis:</label>
                    <textarea required></textarea>
                    <label>Etiqueta:</label>
                    <select required>
                        <option value="" disabled selected>
                            Selecciona un tag
                        </option>
                        <option value="ficcion">Ficción</option>
                        <option value="no-ficcion">No Ficción</option>
                        <option value="misterio">Misterio</option>
                    </select>
                    <button type="submit">Crear Recomendación</button>
                </form>)}
                <div >
                    <BookList></BookList>
                </div>
            </main>
        </>
    );
}

function CreateBookLabel({ propName }) {
    return (
        <>
            <label>{propName}:</label>
            <input type="text" name={propName.toLowerCase().replace(/\s/g, "-")} required />
        </>
    );
}

