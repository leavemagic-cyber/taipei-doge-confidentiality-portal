import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://leavemagic-cyber.github.io/taipei-doge-confidentiality-portal/'),
  title: '臺北市政府政風處｜公務機密智能輔助系統',
  description: '臺北市政府政風處公務機密智能輔助系統入口。',
  icons: {
    icon: './doge-emblem.png',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    title: '臺北市政府政風處｜公務機密智能輔助系統',
    description: '臺北市政府政風處公務機密智能輔助系統入口。',
    images: ['./og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '臺北市政府政風處｜公務機密智能輔助系統',
    description: '臺北市政府政風處公務機密智能輔助系統入口。',
    images: ['./og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
