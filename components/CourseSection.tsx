import Reveal from "@/components/Reveal"

type Course = {
  title: string
  description: string
}

const COURSES: Course[] = [
  {
    title: "Ayollar fonetikasi",
    description: "Ayollar uchun mo'ljallangan arab alifbosini o'rgatuvchi kurs",
  },
  {
    title: "Jajji akademik",
    description: "4 va 7 yosh oralig'idagi bolalar uchun arab tili fonetikasi kursi",
  },
  {
    title: "Bolalar fonetikasi",
    description: "7 yoshdan yuqori bolalar uchun mo'ljallangan arab tili fonetikasi kursi",
  },
  {
    title: "Ayollar grammatikasi",
    description: "Alifboni tugatgan ayollar uchun arab tili grammatika kursi",
  },
]

const CourseSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 sm:py-20 lg:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[26px] font-extrabold uppercase text-white sm:text-[34px] md:text-[38px]">
          Mavjud kurslarimiz
        </h2>
        <p className="mt-4 text-base text-white/75 sm:text-lg">
          O&apos;zingizga ma&apos;qulini tanlab arab tilini hoziroq o&apos;rganishni boshlang
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {COURSES.map((course, i) => (
          <Reveal key={course.title} delay={i * 80}>
            <div className="group relative flex h-full min-h-75 flex-col justify-between gap-10 overflow-hidden rounded-tr-[48px] rounded-bl-[48px] border border-navy/10 bg-white p-8 text-navy shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl sm:p-9">
              <span className="pointer-events-none absolute -right-2 -top-3 font-display text-7xl font-black text-navy/5 transition-colors duration-300 group-hover:text-accent/25 sm:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <span className="block h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">
                  {course.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/65 sm:text-base">{course.description}</p>
              </div>

              <button className="relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-(--shadow-card) sm:text-base">
                Kursga yozilish
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CourseSection