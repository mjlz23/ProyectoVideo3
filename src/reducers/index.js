const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList].find((item) => item.id === action.payload.id) ? state.myList : [...state.myList, action.payload],



        //   ...state,
        // myList: [...state.myList, action.payload],... codifo de platzi
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload
      }
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
