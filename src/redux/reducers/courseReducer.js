export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //spread operator clones state and course
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
