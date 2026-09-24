import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
return (
<a
href="https://wa.me/201553939342"
target="_blank"
rel="noopener noreferrer"
aria-label="واتساب عطارة الدَرْويش"
title="تواصل معنا على واتساب"
className="fixed bottom-5 left-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-200 hover:scale-110 hover:bg-green-600 active:scale-95"
>
<MessageCircle size={29} strokeWidth={2.2} />
</a>
);
}
