import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'
import IngredientSteps from './IngredientSteps';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
    };

    const mySteps = {
        steps: [
            {step: 'Add cut potatoes to a pot of heavily salted water.'},
            {step: 'Bring pot to a boil.'},
            {step: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            {step: 'Strain the potatoes.'},
            {step: 'Return potatoes to pot.'},
            {step: 'Add butter, cream, salt, and pepper to taste.'},
            {step: 'Mash potatoes.'},
            {step: 'Reseason and add butter and cream as desired.'}
        ],
    };
    
    const steps = {
        
    };

    return (    
        <article>
            <h1>Recipe Manager</h1>
            
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />            {/* TODO: Add IngredientList component */}

            <IngredientList ingredients={recipe.ingredients} />

            <IngredientSteps steps={mySteps.steps} />

        </article>
    )
}

export default App;
