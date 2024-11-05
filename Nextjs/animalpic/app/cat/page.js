import Link from 'next/link';

export default async function cat() {

    try {
      const res = await fetch(`http://localhost:3000/api/cat`)
      const catData = await res.json()

      return (
        <>
          <h1>고양이 API 데이터: </h1>
          <img src={catData.image} />
          <p>{catData.message}</p>
          <Link href={'/'}>⬅️ 홈으로 돌아가기</Link>
        </>
      );
    } catch (error) {
      console.log('오류가 발생했습니다.')
      return <p>오류가 발생했습니다.</p>
    }
  }
  