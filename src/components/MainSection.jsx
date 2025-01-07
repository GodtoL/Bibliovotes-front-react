import BookList from "./BookList";
import { useEffect, useState } from "react";

export default function MainSection() {
    const [tags, setTags] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false)
    
    const fetchTags = async () => {
    try{
        const response = await fetch("https://bibliovotes-production.up.railway.app/api/tag")
        const data = await response.json();
        setTags(data);
    } catch (error) {
        console.error("Error en el fetch de tag ", error)
    }}

    const toggleFormVisibility = () =>{
        setFormVisible(!isFormVisible);
    }

    useEffect(() => {
        fetchTags()
    }, [])
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
                        {tags.map((tag) => {
                            <option > {tag.name} </option>
                        }
                        )}
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

