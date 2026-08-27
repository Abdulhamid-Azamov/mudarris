"use client"

import Image from "next/image"
import FirstMember from "@/images/1-member.svg"
import SecondMember from "@/images/2-member.svg"
import ThirdMember from "@/images/3-member.svg"
import FourthMember from "@/images/4-member.svg"
import FifthMember from "@/images/5-member.svg"

import Reveal from "@/components/Reveal"
import { useT } from "@/hook/useT"

const OurTeam = () => {
    const t = useT()

    const teamMembers = [
        { image: FirstMember, name: "Yo'ldoshbek Ibrohim" },
        { image: SecondMember, name: "Hamidulloh Najmiddinov" },
        { image: ThirdMember, name: "Murodulloh Iskandarov" },
        { image: FourthMember, name: "Tojiboyev Muhammadrizo" },
        { image: FifthMember, name: "Xabibullaev Sirojiddin" }
    ]

    return (
        <section className="containers px-5 py-10 sm:py-14">
            <Reveal className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50 sm:text-sm">
                    {t("Ustozlarimiz")}
                </span>

                <h2 className="mt-3 font-display text-[28px] font-bold text-navy sm:text-[34px] md:text-[40px]">
                    {t("Bizning jamoa")}
                </h2>
            </Reveal>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative w-50">
                        <Image src={member.image} alt={member.name} width={220} height={220} className="w-full h-55 object-cover rounded-t-lg rounded-b-lg" />
                        
                        <div className="absolute bottom-0 left-0 right-0 top-43 py-3 px-3 rounded-b-lg">
                            <p className="font-extrabold text-navy text-[13px] text-center">{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurTeam