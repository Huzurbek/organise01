import { defaultOverrides } from 'next/dist/server/require-hook';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <section className="bg-header min-h-screen w-full bg-cover bg-center bg-no-repeat p-10 " />
      <div
        className="mx-auto mb-[165px] mt-[200px] max-w-[1180px] border-[5px] border-black px-5 "
        style={{ minHeight: 725 }}
      >
        <h2>Youtube Content</h2>
      </div>

      <div
        className="mx-auto max-w-[1340px]"
        style={{ border: '2px solid red' }}
      >
        <div className="mb-9 flex flex-col items-center">
          <p className="mb-[24px] text-center text-[56px] font-semibold">
            Featured Templates
          </p>
          <p className="max-w-[500px] text-center text-4xl font-bold">
            Explore our handpicked collection of high-quality templates.
          </p>
        </div>
        <div className="mb-[246px] grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
          {[1, 2, 3, 4].map((el) => (
            <div
              key={el}
              className="bg-template flex min-h-[635px] items-center justify-center border-4 border-black bg-cover bg-center bg-no-repeat"
              style={{ flex: '1 1 150px' }}
            >
              <Image
                src="/templates/1.png"
                width={419}
                height={333}
                alt="Picture of the author"
                className=" object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mb-5 text-center text-[72px] font-bold">
          If Time is money, Are you keeping your ledgers?
        </p>
        <p className="mb-[103px] text-center text-2xl font-medium">
          They Say time is Money. How do you keep a track and maintain Time
          Ledgers?{' '}
        </p>
        <Galaries />
      </div>
    </main>
  );
}

const Galaries = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-galary1 min-h-[654px] bg-cover bg-center bg-no-repeat" />
      <div className="flex justify-between gap-7 sm:flex-col md:flex-row">
        <div
          className="bg-galary2 min-h-[654px] bg-cover bg-center bg-no-repeat"
          style={{ flex: 1 }}
        />
        <div
          className="bg-galary3 min-h-[654px] bg-cover bg-center bg-no-repeat"
          style={{ flex: 1 }}
        />
      </div>
      <div className="bg-galary4 min-h-[654px] bg-cover bg-center bg-no-repeat" />
    </div>
  );
};
