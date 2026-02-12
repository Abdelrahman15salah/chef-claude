import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsList = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
   
    

  function handleSubmit(event) {
        /**
         * Like before, don't worry about this FormData stuff yet.
         * Just use the newIngredient below to help you finish the
         * challenge.
         */
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
        event.currentTarget.reset()
      
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {
                ingredientsList
                }
            </ul>
        </main>
    )
}