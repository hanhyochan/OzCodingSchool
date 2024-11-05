import Link from 'next/link';

export default async function dog() {

  try {
    const res = await fetch(`http://localhost:3000/api/dog`)
    const dogData = await res.json()
console.log(dogData)
    return (
      <>
        <h1>강아지 API 데이터: </h1>
        <img src={dogData.image} />
        <p>{dogData.message}</p>
        <Link href={'/'}>⬅️ 홈으로 돌아가기</Link>
      </>
    );
  } catch (error) {
    console.log('오류가 발생했습니다.')
    return <p>오류가 발생했습니다.</p>
  }
}
