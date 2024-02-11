import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styling/globals.css";

const defaultFont = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pomodoro.abyditya.my.id'),
  title: 'Pomotimer',
  description: 'A Pomodoro timer to keep you focused and motivated. Customize your study timer and start studying.',
  openGraph: {
    locale: 'in_ID',
    type: 'website',
    url: 'https://abyditya.my.id',
    siteName: 'pomofocus.my.id',
    images: [
      {
        url: 'https://media.discordapp.net/attachments/1201384062175150100/1206161568635813888/pomodoro.png?ex=65db007f&is=65c88b7f&hm=9a6c26012ed1d9ef2e1324657d16f5e88e445e7544b20e706c4d21fd10872ed9&=&format=webp&quality=lossless&width=1098&height=576',
        width: 1200,
        height: 630,
      },]
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    nocache: true,
  },
  authors: [
    {
      name: "abyditya",
      url: "https://abyditya.my.id"
    }
  ],
  generator: "Next.JS",
  keywords: ["pomodoro", "pomodoro website", "study", "learn", "study timer", "pomofocus"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        '',
        defaultFont.className
      )}>{children}</body>
    </html>
  );
}
