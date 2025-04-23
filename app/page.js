import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[92vh]">
          <div className="flex flex-col gap-4 justify-center items-center pt-5">
            <p className="text-5xl font-bold">The Best URL Shortner</p>
            <p className="text-xl font-lg">We are most straight forward URL Shortner</p>
            <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 shadow-lg px-3 py-2 rounded-lg font-bold text-white'>Try now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg px-3 py-2 rounded-lg font-bold text-white'>Github</button></Link>
            </div>
          </div>
          <div className="flex justify-start relative">
            <Image alt="evctor image" src="/vector.jpg" fill={true} className="absolute mix-blend-darken"></Image>
          </div>

        </section>
      </main>
    </>
  );
}
