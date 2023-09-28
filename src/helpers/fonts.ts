import localFont from "next/font/local";

export const cabinet = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export const hello = localFont({
  src: [
    {
      path: "../../public/fonts/Hello.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hello",
  display: "swap",
});
