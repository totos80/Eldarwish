import "app/globals.css";

export const metadata = {
  title: "عطارة الدرويش",
  description: "أفضل الأعشاب والتوابل والمنتجات الطبيعية في السويس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
