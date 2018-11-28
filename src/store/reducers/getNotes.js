import notes from "../../CalendarApp/dbNote";

export default function getNotes(state = notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    default:
      return state;
  }
}
