let defaultState = {
  selectedItems: {
    items: [],
    resturantName: "",
  },
};

let cartreducer = (state = defaultState, action) => {
  console.log("action type", action);
  switch (action.type) {
    case "Add-TO-CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturantName: action.payload.resturantName,
        };
      } else {
        console.log("action.payload.title", action.payload.title);
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter((item) => {
              if (item.title != action.payload.title) return item;
            }),
          ],
          resturantName: action.payload.resturantName,
        };
      }
      console.log("new state value", newState);
      return newState;
    }

    default: {
      return state;
    }
  }
};
export default cartreducer;
