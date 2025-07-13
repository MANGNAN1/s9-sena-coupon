'use client';

import { useState } from 'react';

export default function Home() {
  const [uid, setUid] = useState('');
  const [coupon, setCoupon] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const send = async () => {
    if (!uid || !coupon) {
      alert('UID와 쿠폰 코드를 입력하세요.');
      return;
    }
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, coupon })
    });
    const json = await res.json();
    setResult(json.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>세븐나이츠 리버스 쿠폰 등록</h1>
      <input
        placeholder="회원번호 UID 입력"
        value={uid}
        onChange={e => setUid(e.target.value)}
        style={{ width: 300, margin: 8 }}
      />
      <input
        placeholder="쿠폰코드 입력"
        value={coupon}
        onChange={e => setCoupon(e.target.value)}
        style={{ width: 300, margin: 8 }}
      />
      <button onClick={send} style={{ padding: '8px 16px' }}>등록</button>
      {result && (
        <div style={{ marginTop: 20, padding: 16, border: '1px solid', borderRadius: 4 }}>
          {result}
        </div>
      )}
    </div>
  );
}
