// time example: 14:17
const signs = {
  am: {
    ar: "صباحًا",
    en: "AM",
  },
  pm: {
    ar: "مساءًا",
    en: "PM",
  },
};
export function formatTime(timeString) {
  const timeParts = timeString.split(":");
  const [hours, minutes] = timeParts;
  let isPM = false;

  let hoursNumber = Number(hours);

  if (hoursNumber > 12) {
    hoursNumber = hoursNumber % 12;
    isPM = true;
  }

  const time = `${prefixZero(hoursNumber)}:${minutes}`;
  return {
    time,
    sign: isPM ? signs.pm : signs.am,
  };
}

function prefixZero(value) {
  return value < 9 ? "0" + value : value;
}
