import notes from "../../CalendarApp/dbNote";

export default function getNotes(state = notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DEL_NOTE":
      return state.filter(note => note.id !== action.id);

    case "UPDATE_NOTE":
      return state.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            time: action.note.time,
            date: action.note.date,
            title: action.note.title,
            descr: action.note.descr,
            color: action.note.color
          };
        } else return note;
      });

    default:
      return state;
  }
}
