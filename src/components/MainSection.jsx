import BookList from "./BookList";
import PostForm from "./PostForm";
import { useEffect, useState } from "react";
import { useBooks } from './BooksContext';


export default function MainSection() {
    const { books } = useBooks();
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
                <div>
                    <PostForm tags={tags}></PostForm>
                </div>
                <div >
                    <BookList></BookList>
                </div>
            </main>
        </>
    );
}



