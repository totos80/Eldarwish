import "./globals.css";
import { Providers } from "@/components/Providers";

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
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
