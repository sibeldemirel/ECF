import meals from "../meals";


function Menu() {
    

    return(
        <div className="meal">
            <article>
                {meals.map((meal,index)=>

                <div key={index} className="card">

                    <img src={meal.imageSrc} alt="meal"></img>
                    <h3>{meal.title}</h3>
                    <p>{meal.content}</p>
                    <p>{meal.price}</p>
                    
                </div>
                )}
            </article>
    </div>
    )
}

export default Menu;