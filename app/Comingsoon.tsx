"use client";

import { cn } from '@/lib/utils';
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
            <h1 className='text-4xl sm:text-9xl font-black relative'>
                <span className='bg-emerald-500 text-emerald-950 px-10 border-4 sm:border-8 border-emerald-600 rounded-lg sm:rounded-2xl'>Coming Soon</span>
                <span className={cn(
                    'text-3xl sm:text-7xl absolute -top-14 -right-5 sm:-top-20 sm:-right-12 bg-amber-500 py-3 rounded-lg sm:rounded-2xl',
                    'border-4 sm:border-8 border-amber-600 sm:px-0 px-2'
                )}>
                    {emoji}
                </span>
            </h1>
        </div>
    )
}
