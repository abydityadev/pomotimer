"use client";

import React from 'react'
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

const EMOJI = [
    "🤹",
    "👀",
    "🧪",
    "⛺",
    "✨",
    "🌚",
    "🌱",
    "🌸",
    "🌹",
    "🍂",
    "🍬",
    "🍭",
    "🎀",
    "🎈",
    "🎉",
    "🎨",
    "🏝️",
    "👋",
    "👒",
    "📚",
    "🔮",
    "🗿",
    "🥖",
    "🦋",
    "🧩",
    "🧶",
    "🪀",
    "🪁",
    "🪐",
];

function getRandomEmoji(exclude?: string) {
    const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI;

    return emoji[Math.trunc(emoji.length * Math.random())];
}

export default function Comingsoon() {
    const [emoji, setEmoji] = useState(EMOJI[0]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setEmoji((emoji) => getRandomEmoji(emoji));
        }, 500);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return (
        <div className='flex h-screen items-center justify-center'>
            <h1 className='text-4xl sm:text-9xl font-black'>
                <span className='bg-emerald-500 text-emerald-950 px-10'>Coming Soon</span>
                {emoji}
            </h1>
        </div>
    )
}
