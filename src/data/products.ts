import iphone1 from "@/assets/products/iphone-1.jpg";
import iphone2 from "@/assets/products/iphone-2.jpg";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number; // in BDT
  shortDescription: string;
  longDescription: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "p-iphone-15-pro",
    name: "iPhone 15 Pro (128GB)",
    slug: "iphone-15-pro",
    price: 154990,
    shortDescription: "Titanium design with A17 Pro chip and pro camera system.",
    longDescription:
      "Experience next‑level performance with A17 Pro, advanced Pro camera system, and a strong yet lightweight titanium design. Perfect for mobile gamers, creators, and power users.",
    images: [iphone1, iphone2],
  },
  {
    id: "earbuds3",
    name: "GEEOO T2 Digital Display TWS Earbuds",
    slug: "GEEOO T2 Digital Display TWS Earbuds",
    price: 1490,
    shortDescription: "Experience clear, powerful sound with the GEEOO T2 True Wireless Earbuds, built for performance and convenience. Featuring a digital battery display, you can easily monitor the charge status of both earbuds and the case.",
    longDescription:
      "🎧 Key Features: ✅ Bluetooth 5.3 – Stable connection with up to 10m range.✅ Digital Battery Display – Real-time power status for both earbuds and case. ✅ 13mm Drivers – Delivers rich, immersive sound. ✅ Touch Controls – Manage calls, volume, and music with a tap. ✅ IPX4 Waterproof – Sweat and splash-resistant, ideal for workouts. ✅ Long Battery Life – Up to 6 hours playback Plus 20 Plus hours with case. ✅ Fast Charging – Earbuds charge in 1 hour; case in 1.5–2 hours. ✅ Crystal Clear Calls – Built-in mic with -42±3dB sensitivity. 🔖 Perfect for Everyday Use. Whether you're at the gym, commuting, or relaxing, the GEEOO T2 offers style, comfort, and performance in one compact package.",
    images: ["/public/earbuds-3.jpg"],
  },
  {
    id: "speaker",
    name: "K12 Blueteeth Speaker Wireless Microphone",
    slug: "GAS-K12 Blueteeth Speaker Outdoor Portable Wireless Microphone K Song Artifact Home Small Speaker Multi-Function K Song",
    price: 3490,
    shortDescription: "This portable Bluetooth speaker is designed for PC, mobile phone, and party use, offering versatile audio options for different occasions. Perfect for both outdoor gatherings and indoor entertainment, it adds a lively atmosphere to any occasion, elevating the overall experience. ",
    longDescription:
      "The Music Sound Column is a versatile Bluetooth speaker suitable for PC, mobile phones, and parties. This wireless speaker delivers high-quality sound, making it perfect for enhancing your audio experience. Its portable design makes it ideal for on-the-go use or as a stationary speaker for your entertainment setup. Whether you're hosting a gathering or simply enjoying your favorite tunes, this speaker provides a seamless and immersive listening experience. It is compatible with various devices and is designed to elevate your sound experience, making it a great addition to any occasion or setup. With its sleek and modern design, it adds a touch of style to any environment, ensuring both functionality and aesthetics. Whether you're at home, outdoors, or on the move, this Bluetooth speaker is your reliable companion for exceptional sound quality and convenience. It also features a long-lasting battery life, ensuring uninterrupted music enjoyment for extended periods. Its easy connectivity and user-friendly controls make it a hassle-free choice for all your audio needs. With its durable build and impressive sound performance, the Music Sound Column is the perfect choice for music enthusiasts and party hosts alike, providing an immersive and enjoyable sound experience for all occasions.",
    images: ["/public/speaker.jpg"],
  },
  {
    id: "earbuds-7",
    name: "Apple Airpods pro wireless Bluetooth EarBuds",
    slug: "Apple Airpods pro 1st Generation Dubai Master Copy ANC in Ear Noise Cancelling Headphone wireless Bluetooth EarBuds Dubai Made",
    price: 1299,
    shortDescription: "Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you.Three sizes of soft, tapered silicone tips for a customizable fit. ",
    longDescription:
      "Sweat and water resistant. Adaptive EQ automatically tunes music to the shape of your ear. Easy setup for all your Apple devices. Quick access to Siri by saying “Hey Siri”. The Wireless Charging Case delivers more than 24 hours of battery life. ",
    images: ["/public/earbuds-7.jpg"],
  },
  {
    id: "microphone",
    name: "F15-2-2N1 Wireless Collar Microphone IPhone & Android",
    slug: "F15-2-2N1 Wireless Collar Microphone IPhone & Android",
    price: 1650,
    shortDescription: "Easy to plug and play. 48kHz intelligent noise reduction. Automatic real-time synchronization with no delay. Mini, Portable, Durable. Suitable for more scenarios.",
    longDescription:
      "F15-2-2N1 Wireless Collar Microphone Professional Noise Reduction Wireless Microphones. Mini microphone for iPhone and Android has an Import DSP High-end noise reduction chip, intelligent noise reduction, and omnidirectional clear pickup. New intelligent frequency conversion noise reduction can intelligent identification of different noise environments, filtering noise clearer human voice, and provides more vivid, soft, natural and stereo sound around for recording or real time video . Plug and Play & Free Your Hands Completely. new upgrade wireless concept wireless live recording lavalier microphone, simply plug the receiver into your smartphone, turn on the high-sensitivity microphone, and it will automatically connect and start working. The wireless microphones can also real-time adjustments while recording and listening, plug and play. Lapel microphone wireless f provides efficiency and convenience for content creators’ video recording/sound collection.",
    images: ["/public/microphone.jpg"],
  },
  {
    id: "camera-stand",
    name: "Q185 ট্র্যাকিং গিম্বল সেলফি স্টিক",
    slug: "Q185 Tracking Gimble Selfie Stick",
    price: 4034,
    shortDescription: "আপনার ভিডিও ও কনটেন্ট এখন হবে আরও স্মার্ট ও প্রফেশনাল! 🔥",
    longDescription:
      " 360 degree auto tracking, স্ট্যাবিলাইজার ফিচার – ভিডিও হবে ঝাঁকুনিহীন, 1.8 মিটার পর্যন্ত এক্সটেন্ড,  ওয়ান-ক্লিক অপেন সিস্টেম,মোবাইল, Vlog, TikTok, YouTube সব কাজে পারফেক্ট, হালকা ও পোর্টেবল – ক্যারি করতে সহজ.প্যাকেজে থাকছে: Q185 Gimbal Selfie Stick, চার্জিং কেবল, ইউজার ম্যানুয়াল.  ",
    images: ["/public/camera-stand.jpg"],
  },
  {
    id: "p-re-nyo60",
    name: "RE-NYO60 Bluetooth Earphone",
    slug: "re-nyo60-bluetooth-earphone",
    price: 990,
    shortDescription: "Bluetooth 5.1, Hi‑Fi Stereo, LED ডিসপ্লে, ২০০h ব্যাকআপ",
    longDescription: `বৈশিষ্ট্যসমূহ:
✅ Bluetooth Version 5.1 — অতি দ্রুত ও স্থিতিশীল কানেকশন

✅ Hi-Fi Stereo Sound — উন্নত শব্দমান এবং ডিপ বেস

✅ LED ডিসপ্লে – চার্জিং কেসে ব্যাটারি লেভেল দেখা যাবে

✅ টাচ কন্ট্রোল – সহজেই গান পরিবর্তন, কল রিসিভ ও ভয়েস অ্যাসিস্ট্যান্ট

✅  ফোন কল বা মিউজিকে আরও পরিষ্কারতা

✅ স্বচ্ছ এবং আরামদায়ক ডিজাইন – দীর্ঘ সময় ব্যবহারেও আরাম

✅ ব্যাটারি ব্যাকআপ –

🔋 ইয়ারফোনে ২০০ ঘণ্টা

🔋 চার্জিং কেস দিয়ে অতিরিক্ত 3-4 বার চার্জ

📦 প্যাকেজে যা থাকছে:

2টি ইয়ারবাড

1টি চার্জিং কেস

1টি চার্জিং কেবল

ইউজার ম্যানুয়াল

💰 মূল্য: মাত্র ৯৯০৳ টাকা

📦 ক্যাশ অন ডেলিভারি (০৬০) উপলব্ধ!

🚚 সারা বাংলাদেশে হোম ডেলিভারি!

📩 ইনবক্স করুন এখন অর্ডার করতে!

📞 অর্ডার হেল্পলাইনে কল করুন: ০১৮১৮৬২২০৬৯`,

images: ["/lovable-uploads/6d228422-49dc-48a3-b68c-13f201ef62d0.png"],
  },
  
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
