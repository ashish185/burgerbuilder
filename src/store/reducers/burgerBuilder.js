import * as actionTypes from '../actions/actionsTypes';
const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 7,
    cheese: 10,
    meat: 17
}
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const reducer = ( state= initialState, action) => {
    switch (action.type ){
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state, // This will shallow copy of the objects not deep copy
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientname] : state.ingredients[action.ingredientname] +1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientname]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state, // This will shallow copy of the objects not deep copy
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientname] : state.ingredients[action.ingredientname]-1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientname]
            }
        default:
            return state;
    }
};
export default reducer;