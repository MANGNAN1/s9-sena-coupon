import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { uid, coupon } = await request.json();

  if (!uid || !coupon) {
    return NextResponse.json({ message: 'UID와 쿠폰 코드를 입력하세요.' }, { status: 400 });
  }

  const params = new URLSearchParams({
    gameCode: 'tskgb',
    couponCode: coupon,
    langCd: 'KO_KR',
    pid: uid
  });
  const url = `https://coupon.netmarble.com/api/coupon/reward?${params}`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.errorCode === 0) {
      return NextResponse.json({ message: '✅ 쿠폰 등록 성공', result: data });
    } else {
      return NextResponse.json({
        message: `❌ 실패: ${data.errorMessage || '알 수 없는 오류'}`,
        result: data
      }, { status: 400 });
    }
  } catch (e: any) {
    return NextResponse.json({ message: '서버 오류 발생', error: e.message }, { status: 500 });
  }
}
