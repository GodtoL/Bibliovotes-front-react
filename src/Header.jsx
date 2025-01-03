export default function Header(){
    return (
        <>
            <UserBtn />
            <UserBtn />
            <UserBtn />
        </>
    );
}

function UserBtn(){
    return <li><a className="user-btn" href="index.html">Inicio</a></li>
}