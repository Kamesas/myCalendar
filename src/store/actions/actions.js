export const nextMonth = () => ({
  type: "NEXT_MONTH"
});

export const prevMonth = () => ({
  type: "PREV_MONTH"
});

export const refreshMoment = () => ({
  type: "REFRESH_MOMENT"
});

export const addNum = () => ({
  type: "ADD_NUM"
});

export const addNote = note => ({ type: "ADD_NOTE", payload: note });
