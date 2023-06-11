import React from 'react';

function IngredientSteps(props) {

    const ingredientStepsItems = props.steps.map((step, index) => {
        return (
            <li key={index}>
                { step.step }
            </li>
        );
    });

    return (
        <div>
            <h3>Recipie Steps</h3>
            <ol>
                { ingredientStepsItems }
            </ol>
        </div>
    );
}

export default IngredientSteps;