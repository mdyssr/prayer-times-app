<script>
  import { formatTime } from "$lib/utils/time.js";
  export let data;
  const { prayersData } = data;
  const { PrayerTimings, HijriDate } = prayersData;
  const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = PrayerTimings;
  let times = [
    {
      name: {
        en: "Fajr",
        ar: "الفجر",
      },
      time: Fajr,
    },
    {
      name: {
        en: "Sunrise",
        ar: "الشروق",
      },
      time: Sunrise,
    },
    {
      name: {
        en: "Dhuhr",
        ar: "الظهر",
      },
      time: Dhuhr,
    },
    {
      name: {
        en: "Asr",
        ar: "العصر",
      },
      time: Asr,
    },
    {
      name: {
        en: "Maghrib",
        ar: "المغرب",
      },
      time: Maghrib,
    },
    {
      name: {
        en: "Isha",
        ar: "العشاء",
      },
      time: Isha,
    },
  ];

  times = times.map((time) => ({ ...time, time: formatTime(time.time) }));

  // const formattedHijriDate = `السبت، 12 ربيع الأول 1444`;
  const hijriDate = {
    day: HijriDate.day,
    weekday: {
      ar: HijriDate.weekday.ar,
      en: HijriDate.weekday.en,
    },
    month: {
      number: HijriDate.month.number,
      en: HijriDate.month.en,
      ar: HijriDate.month.ar,
    },
    year: HijriDate.year,
  };

  const arHijriDate = `${hijriDate.weekday.ar}، ${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year}`;
  const enHijriDate = `${hijriDate.weekday.en}، ${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year}`;
</script>

<div
  class="h-screen grid justify-items-center grid-rows-2 bg-neutral-900 text-violet-50"
>
  <main
    class="content row-span-2 flex flex-col justify-center items-stretch gap-14"
  >
    <section class="date">
      <h1 class="font-bold text-2xl">
        {arHijriDate}
      </h1>
    </section>

    <section class="times">
      <ul class="flex flex-col gap-2">
        {#each times as { name, time }}
          <li class="flex justify-between p-2 shadow-sm text-xl border">
            <div class="time-name font-bold">
              {name.ar}
            </div>
            <div class="time-value">
              {time.time}
              {time.sign.ar}
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </main>
  <footer class="flex flex-col justify-end py-4 text-slate-300">
    Made by Muhammad Yasser @ the 2022
  </footer>
</div>

<style>
</style>
