import Link from 'next/link';

export default function Home() {
  return (
    <>
        <h1>골라보세요</h1>
        <div className='buttonContainer'>
          <Link href='/dog'>강아지</Link>
          <Link href='/cat'>고양이</Link>
        </div>
    </>
  )
}
