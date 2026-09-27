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
                   💗 Happy Birthday Deepshikha (Titli) 🥰

Yrr mari kisi bhi baat k bura lga ho tho please maff kro mari koi intention nhi hoo thi ki mai preshan kruu,
Or abb kaafi time ho gyaa h yr mere sai move on bhi nhii hoo rha, mujhe nhi pata kiya chall rha hai pr sach batau tho mujhe sachi bura lgg tha hai pata nhi kuch ajeeb saa heart m feel ho tha hai or eyes sai tho 😊 orr haa mujhe sach m pasand ho aap ❤️

                </div>
            </div>
        </div>
    )
}
