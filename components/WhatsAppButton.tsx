export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201011193720"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="تواصل معنا عبر واتساب"
    >
      <span className="whatsapp-pulse" />
      <span className="whatsapp-icon">◔</span>
      <span className="whatsapp-label">اطلب عبر واتساب</span>
    </a>
  );
}
