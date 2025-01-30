import Logo from '@/components/core/svg/Logo';
import { headerArr } from '@/utils/lib/constants';
import { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <section className="relative mx-auto my-[30px] w-[1440px] px-[30px]">
        <div className="relative z-50 flex w-full flex-col items-center justify-center">
          <nav className="flex w-full flex-row items-center justify-between px-8 py-6">
            <div className="flex flex-row items-center justify-start gap-8">
              {headerArr.map((item, index) => (
                <Link
                  href={item.slug}
                  key={index + item.slug}
                  className="font-montserrat flex flex-row items-center justify-start gap-1 text-base font-semibold text-white"
                >
                  {item.icon()} {item.title}
                </Link>
              ))}
            </div>
            <div className="">
              <Logo />
            </div>
            <div className="flex flex-row items-center justify-start gap-8">
              <Link href={'/'} className="btnPrimaryLarge"></Link>
            </div>
          </nav>
        </div>
        <div className="aspect-h-10 aspect-w-23 bg-hero absolute inset-x-auto top-0 z-10 w-[1380px] rounded-3xl bg-cover bg-fixed bg-center bg-no-repeat" />
        <div className="aspect-h-10 aspect-w-23 absolute inset-x-auto top-0 z-20 w-[1380px] rounded-3xl bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-60% to-[rgba(0,0,0,0.0)]" />
      </section>
      <div className="container"></div>
    </>
  );
};
export default Home;
