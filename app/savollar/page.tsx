import PageHero from "@/components/PageHero"
import FaqAccordion from "@/components/FaqAccordion"
import type { FaqItem } from "@/components/FaqAccordion"

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Kurslarga kimlar yozilishi mumkin?",
    answer:
      "Kurslarimiz turli yosh va daraja uchun mo'ljallangan: 4-7 yoshli bolalar uchun \"Jajji akademik\", 7 yoshdan katta bolalar uchun \"Bolalar fonetikasi\" hamda ayollar uchun alohida fonetika va grammatika kurslari mavjud. O'zingizga mos kursni tanlab, hoziroq yozilishingiz mumkin.",
  },
  {
    question: "Darslar qanday formatda o'tkaziladi?",
    answer:
      "Barcha darslar Toshkent shahridagi o'quv markazlarimizda kichik guruhlarda, tajribali ustozlar rahbarligida oflayn tarzda olib boriladi. Har bir dars amaliy mashqlar va interaktiv metodlar bilan boyitilgan.",
  },
  {
    question: "Oldindan arab tilini bilishim shartmi?",
    answer:
      "Yo'q. Kurslarimiz alifbodan boshlab, bosqichma-bosqich o'rgatiladigan tarzda tuzilgan. Fonetika kurslari aynan boshlang'ich darajadagilar uchun, grammatika kursi esa alifboni tugatganlar uchun mo'ljallangan.",
  },
  {
    question: "Guruhlar necha kishidan iborat?",
    answer:
      "Har bir o'quvchiga individual e'tibor qaratish uchun guruhlar kichik tarkibda shakllantiriladi. Aniq joylar soni haqida ma'lumotni bog'lanish orqali xodimlarimizdan olishingiz mumkin.",
  },
  {
    question: "Kurs necha oy davom etadi va narxi qancha?",
    answer:
      "Kurs davomiyligi va narxi tanlangan yo'nalishga qarab farq qiladi. Aniq muddat va to'lov shartlari bo'yicha \"Kursga yozilish\" tugmasini bosib ma'lumot qoldiring — xodimlarimiz siz bilan bog'lanib, batafsil tushuntirib berishadi.",
  },
  {
    question: "Yozilish uchun nima qilishim kerak?",
    answer:
      "Sahifadagi istalgan \"Kursga yozilish\" tugmasini bosing, ism va telefon raqamingizni qoldiring. Xodimlarimiz tez orada siz bilan bog'lanib, guruhga qo'shilish tafsilotlarini aytib berishadi.",
  },
  {
    question: "O'quv markazlari qayerda joylashgan?",
    answer:
      "Barcha o'quv markazlarimiz Toshkent shahrida joylashgan. Aniq manzillar va yo'nalishlar haqida telefon orqali yoki \"Bog'lanish\" sahifasidagi forma orqali so'rashingiz mumkin.",
  },
]

const Savollar = () => {
  return (
    <main className="bg-navy-soft/40">
      <PageHero
        eyebrow="Yordam"
        title="Ko'p beriladigan savollar"
        description="Kurslarimiz, o'quv jarayoni va yozilish tartibi haqida eng ko'p beriladigan savollarga javoblarni shu yerdan topasiz."
      />

      <section className="px-5 py-16 sm:py-20 lg:py-24">
        <FaqAccordion items={FAQ_ITEMS} />

        <div className="mx-auto mt-14 flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl border border-navy/10 bg-white px-6 py-8 text-center shadow-(--shadow-card) sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-lg font-extrabold text-navy sm:text-xl">
              Savolingizga javob topa olmadingizmi?
            </h2>
            <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
              Xodimlarimiz bilan bevosita bog&apos;laning, barcha savollaringizga javob berishadi.
            </p>
          </div>
          <a
            href="tel:+998781137353"
            className="shrink-0 cursor-pointer rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-navy hover:shadow-(--shadow-card)"
          >
            78 113 73 53
          </a>
        </div>
      </section>
    </main>
  )
}

export default Savollar
