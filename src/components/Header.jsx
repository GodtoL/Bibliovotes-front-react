import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
            <header>
                <div className="head-menu">
                <img src="../public/Bibliovoteslogo.png" alt="logo BiblioVotes" />
                    <input type="text" placeholder="Buscar libro..."></input>
                    <UserBtn btnName="Inicio"/>
                    <UserBtn btnName="Categorias"/>

                </div>
                <div className="head-menu">
                    <UserBtn btnName="Iniciar Sesión"/>
                    <UserBtn btnName="Registrarse"/>
                </div>
            </header>
        </>
    );
}

function UserBtn({btnName}){
    return <li><Link className="user-btn" to={"/"}> {btnName}</Link></li>
}
