import { useState } from "react";
import meals from "../meals";


function Menu() {
    let [selectedItem, setSelectedItem] = useState(false);


    return (
        <div className="grid">

            {!selectedItem && meals.map((meal, index) =>

                <article key={index} className="card">

                    <img src={meal.imageSrc} alt="meal"></img>
                    <h3 className="mealTitle">{meal.title}</h3>

                    <p className="content">{meal.content}</p>

                    <h4 className="price">{meal.price}</h4>

                    <div className="star">
                        <svg fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        <span className="rating">{meal.rating}</span>
                        <span className="review">({meal.reviews})</span>

                    </div>
                    <button onClick={() => setSelectedItem(meal)}
                        className="btn">Commander</button>
                </article>
            )}

            {selectedItem && <div className="single container">
                <p>Vous avez commandé le repas {selectedItem.title}</p>
                <img src={selectedItem.imageSrc} alt="meal" />
            </div>}

        </div>
    )
}

export default Menu;