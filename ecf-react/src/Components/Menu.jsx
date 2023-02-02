import meals from "../meals";


function Menu() {
    

    return(
        <div className="meal">
            <article>
                {meals.map((meal,index)=>
                <div key={index}>
                    {meal.title}
                </div>
                )}
            </article>
    </div>
    )
}

export default Menu;