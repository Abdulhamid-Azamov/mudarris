"use client"

import Image from "next/image"
import Reveal from "@/components/Reveal"
import { useT } from "@/hook/useT"

const teamMembers = [
    {
        image: "/images/1_member.svg",
        name: "Yo'ldoshbek Ibrohim",
    },
    {
        image: "/images/2-member.svg",
        name: "Hamidulloh Najmiddinov",
    },
    {
        image: "/images/3-member.svg",
        name: "Murodulloh Iskandarov",
    },
    {
        image: "/images/4-member.svg",
        name: "Tojiboyev Muhammadrizo",
    },
    {
        image: "/images/5-member.svg",
        name: "Xabibullaev Sirojiddin",
    },
]

const OurTeam = () => {
    const t = useT()

    return (
        <section className="containers px-5 py-10 sm:py-14">
            <Reveal className="text-center">
                <h2 className="mt-3 font-display text-[28px] font-bold text-navy sm:text-[34px] md:text-[40px]">
                    {t("Bizning jamoa")}
                </h2>
            </Reveal>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {teamMembers.map((member) => (
                    <div key={member.name} className="relative w-50">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={220}
                            height={220}
                            className="h-55 w-full rounded-b-lg rounded-t-lg object-cover"
                            unoptimized
                        />

                        <div className="absolute bottom-0 left-0 right-0 top-43 rounded-b-lg px-3 py-3">
                            <p className="text-center text-[13px] font-extrabold text-navy">
                                {member.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurTeam