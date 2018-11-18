renderMiniCalendar(m) {
  const nowDate = m.date(); //цифра сегодняшней даты
  const lastDatePrevMonth = m
    .clone()
    .subtract(1, "month")
    .endOf("month")
    .date(); // дата последнего дня предыдущего месяца
  const dayOfFirstDate = m
    .clone()
    .date(1)
    .day(); //номер дня недели первого числа текущего месяца
  const lastDateNowMonth = m
    .clone()
    .endOf("month")
    .date();
  const mondayOfNowWeek = m
    .clone()
    .startOf("month")
    .day(1);
  const lastMondayOfNowMonth = m
    .clone()
    .endOf("month")
    .day(1);

  let week = [];

  for (let i = 0; i <= 6; i++) {
    week.push(mondayOfNowWeek.clone().add(i, "day"));
  }
  console.log(week.map(day => day));
  return week.map(day => day.format("DD MMM"));
}