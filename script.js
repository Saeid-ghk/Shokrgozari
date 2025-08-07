document.addEventListener("DOMContentLoaded", () => {
const exercises = [
  { day: 1, title: "شمارش نعمت‌ها", content: "هر روز ۱۰ نعمت در زندگیت بنویس و برای هر کدوم دلیل شکرگزاری‌ت رو بنویس. بعد از خوندن هر مورد، بگو: «سپاسگزارم، سپاسگزارم، سپاسگزارم»" },
  { day: 2, title: "سنگ شکرگزاری", content: "یک سنگ کوچک پیدا کن. هر شب قبل از خواب، اونو تو دستت بگیر و بابت بهترین اتفاق اون روز شکرگزاری کن." },
  { day: 3, title: "روابط جادویی", content: "۳ نفر از کسانی که به خاطرشون سپاسگزار هستی رو انتخاب کن. برای هر کدوم، ۵ دلیل بنویس که چرا ازشون قدردانی می‌کنی." },
  { day: 4, title: "سلامتی جادویی", content: "به بدن، اعضا و سلامتت توجه کن و بابت هر کدوم، جداگانه سپاسگزاری کن. مثلاً: \"از قلبم ممنونم که بدون توقف برای من کار می‌کنه.\"" },
  { day: 5, title: "پول جادویی", content: "به چیزهایی فکر کن که با پول براشون فراهم شده؛ مثل خانه، لباس، آموزش... و بابتشون سپاسگزاری کن. همچنین روی اسکناس بنویس: \"از تمام پولی که در زندگی‌ام دریافت کرده‌ام سپاسگزارم.\"" },
  { day: 6, title: "کار جادویی", content: "در مورد شغلت یا اگر بیکاری، در مورد فرصت‌های زندگی یا مهارت‌هات، سپاسگزاری کن." },
  { day: 7, title: "جذب جادویی", content: "هدفت رو واضح بنویس (مثلاً خانه، شغل، رابطه) و تصور کن که بهش رسیدی و بابتش از قبل شکر کن." },
  { day: 8, title: "مواد غذایی جادویی", content: "قبل از خوردن هر وعده، بابت غذا و زنجیره‌ای که باعث فراهم شدنش شدن (کشاورز، فروشنده، آشپز...) شکرگزاری کن." },
  { day: 9, title: "آهنربای پول جادویی", content: "به خاطراتی فکر کن که پول به طریقی بهت رسیده — حقوق، هدیه، تخفیف، کمک دوستان — و بابتشون قدردانی کن." },
  { day: 10, title: "صبح جادویی", content: "قبل از بلند شدن از تخت، بابت ۱۰ چیز که در اون روز قراره داشته باشی یا انجام بدی، شکرگزاری کن." },
  { day: 11, title: "به سلامتی!", content: "همچون روز ۴، ولی دقیق‌تر؛ مثلاً در حین دوش گرفتن یا ورزش کردن، با تمام وجود به بدنت توجه کن و سپاسگزاری کن." },
  { day: 12, title: "لحظات جادویی", content: "صبح، لیستی از اتفاق‌های مهم روزت بنویس (جلسه، دیدار...) و برای هر کدوم، از قبل سپاسگزاری کن که عالی پیش می‌ره." },
  { day: 13, title: "در همه‌ی جهت‌ها ببار!", content: "هر وقت پول خرج کردی (چه نقدی، چه کارت)، بگو: «سپاسگزارم برای اینکه این پول، ده برابر به من برمی‌گرده!»" },
  { day: 14, title: "روابط متحول‌شده", content: "اگه با کسی مشکلی داری، ۱۰ ویژگی مثبت اون شخص رو بنویس و بابت هر کدوم ازش قدردانی کن." },
  { day: 15, title: "شفای گذشته", content: "به اتفاقات تلخ گذشته فکر کن. حالا ببین توی هرکدوم چه خیری نهفته بوده. بابت اون خیرها سپاسگزاری کن." },
  { day: 16, title: "گام جادویی", content: "در طول روز، هر گامی که برمی‌داری رو با کلمه‌ی «سپاسگزارم» همراه کن. با هر قدم، یه «سپاسگزارم» بگو (حتی تو ذهنت)." },
  { day: 17, title: "چک جادویی", content: "یه چک ساختگی برای خودت بنویس (مثلاً از طرف کائنات) با مبلغی که می‌خوای. روش بنویس بابت چی این پولو می‌گیری و سپاسگزار باش." },
  { day: 18, title: "فهرست شکرگزاری", content: "۳ آرزوی مهمت رو انتخاب کن. برای هر کدوم، ۱۰ دلیل بنویس که انگار بهش رسیدی و بابتش سپاسگزاری کن." },
  { day: 19, title: "قدم جادویی دوم", content: "همچون روز ۱۶، اما این بار هر کاری که می‌کنی (نه فقط قدم زدن) با «سپاسگزارم» همراه باشه." },
  { day: 20, title: "قلب شکرگزار", content: "چند دقیقه دستت رو روی قلبت بذار و نفس عمیق بکش. بعد بابت چیزهای خوب زندگی‌ت، از ته قلبت سپاسگزاری کن." },
  { day: 21, title: "نتایج جادویی", content: "به چالشی فکر کن (مثلاً دعوا، بدهی...) و تصور کن به بهترین شکل حل شده. بابتش از قبل سپاسگزاری کن." },
  { day: 22, title: "تنفس شکرگزاری", content: "در طول روز، هر بار که نفس می‌کشی، ذهنت بگه: «سپاسگزارم» (با دم یا بازدم، هر جور راحتی)" },
  { day: 23, title: "صبح جادویی دیگر", content: "دوباره مثل روز ۱۰، ۱۰ مورد برای روز پیشِ رو بنویس و بابتشون از قبل سپاسگزاری کن." },
  { day: 24, title: "راه جادویی", content: "به مکان‌هایی که امروز می‌ری فکر کن (خیابون، فروشگاه، محل کار...) و تصور کن نور طلایی جلوی راهت هست و سپاسگزاری کن." },
  { day: 25, title: "آدم‌های جادویی", content: "۷ نفر رو انتخاب کن و بهشون پیام یا حرف محبت‌آمیز بزن یا درباره‌شون از ته دل دعا و قدردانی کن." },
  { day: 26, title: "تبدیل اشتباه به جادو", content: "به اشتباهاتت فکر کن و بابت درسی که ازشون گرفتی شکرگزاری کن. حتی بابت اشتباهات دیگران در حقت." },
  { day: 27, title: "آینه‌ی جادویی", content: "روبه‌روی آینه، به خودت نگاه کن و با صدای بلند بگو: «از تو سپاسگزارم!» و ۱۰ ویژگی‌ مثبتت رو نام ببر و بابتشون قدردان باش." },
  { day: 28, title: "یادآوری معجزه", content: "در طول روز چند بار توقف کن، و با خودت تکرار کن: «سپاسگزارم برای همه‌ی نعمت‌های گذشته، حال و آینده‌ام.»" }
];


  function toPersianDigits(input) {
    return input.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  }

  function getPersianDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('fa-IR', options);
  }

  function getStartDate() {
    let start = localStorage.getItem("startDate");
    if (!start) {
      start = new Date().toISOString();
      localStorage.setItem("startDate", start);
    }
    return new Date(start);
  }

  function getDaysPassed() {
    const startDate = getStartDate();
    const today = new Date();
    return Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
  }

  function getPendingDayIndex() {
    const completed = JSON.parse(localStorage.getItem("completedDays") || "[]");
    const totalDays = getDaysPassed();
    for (let i = 0; i < totalDays && i < exercises.length; i++) {
      if (!completed.includes(i)) return i;
    }
    return null;
  }

  function showExercise(index) {
    const titleEl = document.getElementById("day-title");
    const contentEl = document.getElementById("day-content");
    const dateEl = document.getElementById("date");

    if (index === null || !exercises[index]) {
      titleEl.textContent = "🎉 تبریک!";
      contentEl.textContent = "شما همه تمرین‌ها را انجام داده‌اید.";
      dateEl.textContent = "";
      return;
    }

    const exercise = exercises[index];
    titleEl.textContent = `🌟 روز ${toPersianDigits(exercise.day)}: ${exercise.title}`;
    contentEl.textContent = toPersianDigits(exercise.content);
    dateEl.textContent = `📅 تاریخ: ${getPersianDate()}`;
  }

  function markDayAsCompleted(index) {
    const completed = JSON.parse(localStorage.getItem("completedDays") || "[]");
    if (!completed.includes(index)) {
      completed.push(index);
      localStorage.setItem("completedDays", JSON.stringify(completed));
    }
  }

  // دکمه شروع دوباره
const resetBtn = document.getElementById("reset");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    // تنظیم تاریخ شروع جدید
    localStorage.setItem("startDate", new Date().toISOString());

    // پاک‌سازی لیست روزهای انجام‌شده
    localStorage.setItem("completedDays", JSON.stringify([]));

    // نمایش تمرین روز اول
    showExercise(0);
  });
}

  // دکمه حالت تاریک
  const themeBtn = document.getElementById("toggle-theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // دکمه نمایش همه روزها
  const showAllBtn = document.getElementById("show-all");
  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      document.querySelector("main").classList.add("hidden");
      document.getElementById("all-days").classList.remove("hidden");

      const listEl = document.getElementById("days-list");
      listEl.innerHTML = "";

      exercises.forEach(ex => {
        const item = document.createElement("div");
        item.className = "exercise-item";
        item.innerHTML = `
          <strong>روز ${toPersianDigits(ex.day)}: ${ex.title}</strong><br>
          <span>${toPersianDigits(ex.content)}</span>
        `;
        listEl.appendChild(item);
      });
    });
  }

  // دکمه بازگشت
  const backBtn = document.getElementById("back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("all-days").classList.add("hidden");
      document.querySelector("main").classList.remove("hidden");
    });
  }

  // نمایش تمرین روز جاری
  showExercise(getPendingDayIndex());

  // ثبت سرویس‌ورکر
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
});