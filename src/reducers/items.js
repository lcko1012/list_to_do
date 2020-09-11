import * as Types from "../constants/ActionTypes";
import randomstring from "randomstring";

var data = JSON.parse(localStorage.getItem("items"));
var initialState = data ? data : [];

var findIndex = (id, items) => {
  var result = -1;

  items.forEach((item, index) => {
    if (item.id === id) return (result = index);
  });
  return result;
};

const appReducers = (state = initialState, action) => {
  var index;
  switch (action.type) {
    case Types.ADD_ITEM:
      action.item.id = randomstring.generate();
      state.push(action.item);
      localStorage.setItem("items", JSON.stringify(state));
      return [...state];
    case Types.DELETE_ITEM:
      index = findIndex(action.id, state);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(state));
      }
      return [...state];

    case Types.COMPLETE_ITEM:
      index = findIndex(action.id, state);
      if (index !== -1) {
        var new_state = state;
        new_state[index].status = !new_state[index].status;
        state = new_state;
        localStorage.setItem("items", JSON.stringify(state));
      }
      return [...state];
    case Types.CLEAR_COMPLETED:
        state = state.filter(item => {
            return item.status === false
        })
        localStorage.setItem("items", JSON.stringify(state))
        return [...state]
    case Types.COMPLETE_ALL:
        state = state.map(item => {
            if(item.status === false){
                item.status = true
            }
            return item
        });
        localStorage.setItem("items", JSON.stringify(state));
        return [...state]
    default:
        localStorage.setItem("items", JSON.stringify(state));
        return [...state];
  }
};

export default appReducers;
