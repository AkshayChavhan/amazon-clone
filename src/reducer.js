export const initialState = {
    basket : [],
};

function reducer(state,action){
    switch(action.type){
        case "ADD_TO_BASKET":
            //LOGIC FOR ADDING ITEMS TO BASKET
            break;

        case "REMOVE_FROM_BASKET" :
            //LOGIC FOR REMOVING ITEMS FROM BASKET
            break;
        default:
            return state;   
    }
}

export default reducer;



