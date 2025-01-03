export default function Header(){
    return (
        <>
            <header>
                <div className="head-menu">
                    <img src="static/images/pngwing.com.png" alt="logo BiblioVotes"></img>
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
    return <li><a className="user-btn" href="index.html"> {btnName}</a></li>
}