import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#006633",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Campus Connect Kenya",
  description:
    "One platform for everything in campus — trade textbooks, find hostels, join study groups, access M-Pesa payments, and stay safe with emergency SOS. Built by students, for students.",
  keywords: [
    "campus",
    "university",
    "Kenya",
    "students",
    "marketplace",
    "study groups",
    "hostel finder",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CampusConnect",
  },
  openGraph: {
    title: "Campus Connect Kenya",
    description:
      "The all-in-one platform for Kenyan university students.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  );
}
