export default function Header(){

    return(
    <div className="header flex">
        <div className="flex">
            <h1>Découvrez notre</h1><h1 className="highlight"> menu. </h1>
        </div>

        <div className="menu">
            <ul>
                <li><a href="#">Tout</a></li>
                <li><a href="#">Viandes</a></li>
                <li><a href="#">Légumes</a></li>
            </ul>
        </div>
    </div>

    )

}