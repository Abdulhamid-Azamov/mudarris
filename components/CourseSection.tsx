import Image from "next/image"
import LogoImage from "@/images/logo.jpg"
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
            <div className="flex h-full min-h-[300px] flex-col justify-between gap-12  rounded-tr-[48px]  rounded-bl-[48px] border border-navy/5 bg-white p-8 text-navy shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-9">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">
                    {course.title}
                  </h3>
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl ring-1 ring-navy/10">
                    <Image src={LogoImage} alt="Mudarris Akademiyasi" fill sizes="48px" className="object-cover" />
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-navy/70 sm:text-base">{course.description}</p>
              </div>

              <button className="w-full cursor-pointer rounded-xl bg-accent px-6 py-4 text-sm font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:text-base">
                Kursga yozilish
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default CourseSection