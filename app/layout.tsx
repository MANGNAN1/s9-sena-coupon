import { ReactNode } from 'react';

export const metadata = {
  title: '세븐나이츠 리버스 쿠폰 등록기',
  description: 'Netmarble 쿠폰 자동 입력 사이트',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
