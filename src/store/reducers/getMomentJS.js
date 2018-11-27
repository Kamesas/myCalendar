import moment from "moment";

export default function getMomentJS(state = moment(), action) {
  switch (action.type) {
    case "NEXT_MONTH":
      return state.clone().add(1, "M");

    case "PREV_MONTH":
      return (state = state.clone().subtract(1, "M"));

    default:
      break;
  }
  return state;
}
