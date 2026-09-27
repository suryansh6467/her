"use client"

import { useState } from "react"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                    Happy Birthday, Cutiepie! 💗✨
Tumhe duniya ki saari happiness, love aur endless smiles mile, kyunki tum genuinely itni special ho. 🥹❤️ Tumhari smile mein pata nahi kya magic hai, but tumhe smile karte dekh kar automatically mood achha ho jata hai. 😌✨

I hope tumhara ye birthday bahut saari happiness, cute surprises aur beautiful moments se bhara ho. 🫶🏻 Tum jis tarah se apni kindness aur sweet nature se logon ko special feel karwati ho, woh honestly kaafi rare hai.

Bas aise hi hamesha smile karti rehna aur apni cute si vibe se sabki life bright karti rehna. 💕
And haan… aaj ka din special hai, kyunki aaj **tumhara birthday hai**. 😌🎂❤️

Once again, Happy Birthday, Cutiepie! 🥳💗
May you get everything you wish for… and maybe thoda sa extra happiness meri taraf se. 🙈✨

                </div>
            </div>
        </div>
    )
}
