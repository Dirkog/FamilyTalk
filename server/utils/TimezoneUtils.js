const { MOSCOW_TZ, KHABAROVSK_TZ } = require("./Constants");

function familyLocalTime(date = new Date()) {
  return {
    moscow: new Intl.DateTimeFormat("ru-RU", { timeZone: MOSCOW_TZ, dateStyle: "short", timeStyle: "short" }).format(date),
    khabarovsk: new Intl.DateTimeFormat("ru-RU", { timeZone: KHABAROVSK_TZ, dateStyle: "short", timeStyle: "short" }).format(date)
  };
}

function isFamilyNight(date = new Date()) {
  const hours = [MOSCOW_TZ, KHABAROVSK_TZ].map((timeZone) =>
    Number(new Intl.DateTimeFormat("en-US", { timeZone, hour: "2-digit", hour12: false }).format(date))
  );
  return hours.every((hour) => hour >= 23 || hour < 6);
}

module.exports = { familyLocalTime, isFamilyNight };
