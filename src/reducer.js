/* i'm using the title as the identity of the 
product because the availble api's does not
 provide a id for each product
*/

export function reducer(state, action) {
    switch (action.type) {
      case 'CHANGE_BAG':
        return { ...state, showBag: !state.showBag };
      case 'ADD_TO_BAG':
        let contain = false;
        let productIndex = null;
        state.bagProducts.forEach((el, index) => {
          if (el.product.title === action.payload.product.title) {
            contain = true;
            productIndex = index;
          }
        });
  
        if (contain) {
          const newState = {
            ...state,
            bagProducts: [...state.bagProducts],
          };
          newState.bagProducts[productIndex] = {
            ...newState.bagProducts[productIndex],
            quantity: newState.bagProducts[productIndex].quantity + 1,
          };
          return newState;
        }
  
        return {
          ...state,
          bagProducts: [
            ...state.bagProducts,
            { product: action.payload.product, quantity: 1 },
          ],
        };
      case 'DELETE_FORM_BAG':
        const {quantity, title} = action.payload  
        if(quantity === 1){
          return {...state, bagProducts: state.bagProducts.filter(product=>product.product.title != title)}
        }
        const newState = {...state}
        newState.bagProducts = state.bagProducts.map(product=>{
          if(product.product.title != title) return product;
          return {...product, quantity: quantity - 1};

        })
        return newState;
      case 'UPDATE_TOTAL':
        const newSate = {
          ...state,
          totalPrice: state.totalPrice + (action.payload.price * action.payload.operation),
        } 
        return newSate;
      default:
        return state;
    }
  }
  