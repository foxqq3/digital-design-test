export default function getDayInfo() {
  let dateFields = document.querySelectorAll('.card__date');
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  for (let dateField of dateFields) {
    const currentDate = new Date(dateField.getAttribute('datetime'));
    const dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    const monthOfYear = currentDate.getMonth();
    const year = currentDate.getFullYear();
    let weekOfMonth = getWeekOfMonth();

    function getWeekOfMonth() {
      const fixedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      if (dayOfMonth === fixedDayOfWeek) {
        return Math.ceil((dayOfMonth - fixedDayOfWeek - 1) / 7) + 1;
      } else {
        return Math.ceil((dayOfMonth - fixedDayOfWeek) / 7) + 1;
      }
    }

    dateField.append(
      `${days[dayOfWeek]}, ${weekOfMonth} неделя ${months[monthOfYear]} ${year} года`
    );
  }
}
