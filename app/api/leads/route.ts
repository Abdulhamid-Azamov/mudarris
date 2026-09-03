import { NextResponse } from "next/server"

type LeadRequest = {
  name: string
  phone: string
  courseName?: string | null
  source?: string
}

export async function POST(request: Request) {
  try {
    const body: LeadRequest = await request.json()

    const name = body.name?.trim()
    const phone = body.phone?.trim()
    const courseName = body.courseName?.trim() || null
    const source = body.source?.trim() || "website"

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Ism-familiya kiritilmagan.",
        },
        { status: 400 }
      )
    }

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Telefon raqam kiritilmagan.",
        },
        { status: 400 }
      )
    }

    const digits = phone.replace(/\D/g, "")

    if (digits.length !== 9) {
      return NextResponse.json(
        {
          success: false,
          message: "Telefon raqam noto'g'ri.",
        },
        { status: 400 }
      )
    }

    const normalizedPhone = `+998${digits}`

    const lead = {
      name,
      phone: normalizedPhone,
      courseName,
      source,
      createdAt: new Date().toISOString(),
    }

    // Hozircha test uchun
    console.log("================================")
    console.log("NEW LEAD")
    console.log(lead)
    console.log("================================")

    return NextResponse.json(
      {
        success: true,
        message: "Arizangiz muvaffaqiyatli yuborildi.",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("LEAD_ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Serverda xatolik yuz berdi.",
      },
      { status: 500 }
    )
  }
}