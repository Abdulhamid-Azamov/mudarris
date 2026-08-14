const Contact = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f3f3] px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative w-full max-w-295 overflow-hidden rounded-4xl" style={{  background:   "linear-gradient(90deg, #0d3c74 0%, #0e3b75 45%, #0d3970 100%)",  boxShadow: "0 26px 70px rgba(12, 41, 74, 0.16)",   }}  >
        <div  className="absolute inset-0 opacity-40 bg-navy"  />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-4 lg:gap-10">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-9 md:px-10 lg:px-14 lg:py-16">
            <h1 className="max-w-125 text-3xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.1rem]">
              Kurslarmizga
              <span className="mt-2 block text-white/90">hoziroq yoziling</span>
            </h1>

            <p className="mt-6 max-w-107.5 text-base text-white/75">
              Kurslarimiz haqidagi batafsil ma&apos;lumotni bilib oling
            </p>

            <div className="mt-8 flex items-center gap-3 text-xl font-bold text-white sm:text-2xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3ed2ad]/20 text-[#3ed2ad]">
                ☎
              </span>
              <span>78 113 73 53</span>
            </div>
          </div>

          <div className="flex items-center justify-center px-5 pb-6 pt-2 sm:px-7 md:px-6 md:pb-8 lg:px-10 lg:pb-12">
            <div className="w-full max-w-107.5 rounded-[28px] bg-[#f5f5f5] p-5 shadow-[0_18px_45px_rgba(16,31,61,0.12)] sm:p-7 lg:p-8">
              <form className="space-y-5">
                <div>
                  <h2 className="text-[2rem] font-extrabold leading-none text-[#0d3c74]">
                    Ma'lumotlaringizni qoldiring
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Ma&apos;lumotlaringizni qoldiring — biz sizi qo&apos;ng&apos;iroq qilamiz.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Ism-familiya <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2d7ef4] focus:ring-2 focus:ring-[#2d7ef4]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Telefon raqam <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-[#2d7ef4] focus-within:ring-2 focus-within:ring-[#2d7ef4]/15">
                      <span className="mr-2 text-sm font-medium text-slate-500">+998</span>
                      <input
                        type="tel"
                        placeholder="90 123 45 67"
                        className="w-full border-0 bg-transparent px-0 py-3 text-base text-slate-800 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                <button  type="submit"  className="mt-4 w-full rounded-xl bg-[#32d1a8] px-4 py-3.5 text-base font-bold text-white shadow-[0_12px_22px_rgba(50,209,168,0.35)] transition hover:bg-[#2abf9b]"  >
                  Ro&apos;yxatdan o&apos;tish
                </button>

                <p className="text-center text-xs text-slate-500">
                  Yoki qo&apos;ng&apos;iroq qiling: <span className="font-semibold text-slate-700">78 113 73 53</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
