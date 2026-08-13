import "./globals.css";
import { Providers } from "@/components/Providers";
import BackgroundMusic from "@/components/BackgroundMusic";

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
          <BackgroundMusic />
          {children}
        </Providers>
      </body>
    </html>
  );
}
