import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsList = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
   
    

  function handleSubmit(formData) {
      
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
      
    }
    
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
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