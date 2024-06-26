const initialState = [];

// {
//   type: "ADD_NAME";
//   payload: "Alice";
// }

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "DELETE_NAME":
      return state.filter((personName) => personName !== action.payload);
    case "CLEAR_NAMES":
      return [];

    default:
      return state;
  }

  // if (action.type === "ADD_NAME") {
  //   return [...state, action.payload];
  // }

  // if (action.type === "DELETE_NAME") {
  //   return state.filter((personName) => personName !== action.payload);
  // }

  // if (action.type === "CLEAR_NAMES") {
  //   return [];
  // }

  // return state;
}

let newState = reducer(initialState, { type: "ADD_NAME", payload: "Alice" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "John" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Elena" });
console.log(newState);

newState = reducer(newState, { type: "DELETE_NAME", payload: "Elena" });
console.log(newState);

newState = reducer(newState, { type: "CLEAR_NAMES" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Bob" });
console.log(newState);
