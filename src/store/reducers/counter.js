export default function counter(state = 0, action) {
  switch (action.type) {
    case "ADD_NUM":
      return state + 1;

    default:
      break;
  }
  return state;
}
