const getPreparedData = (date: string) => {
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
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
  const month = months[new Date(date).getMonth()];

  return [day, month, year];
};

export default getPreparedData;
