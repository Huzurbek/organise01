import { Icons } from '@/app/ui/Icons';
import InnerWrapper from '@/app/ui/components/innerWrapper';

interface IPageProps {
  params: {
    id: string;
  };
}
export default function Page({ params }: IPageProps) {
  const { id } = params;

  return (
    <>
      <div className="mb-[80px] border-b-2 border-black">
        <InnerWrapper>
          <div className="flex items-center justify-between py-[33px]">
            <p className="text-4xl font-bold">Habit Tracker | Google Sheets</p>
            <div className="flex items-center gap-[7px]">
              <p className="font-medium sm:text-2xl">9.99 $</p>
              <button
                type="button"
                className="flex items-center justify-center  bg-black p-3 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </InnerWrapper>
      </div>
      <div>
        <InnerWrapper>
          <div style={{ minHeight: 300, border: '2px solid black' }}>
            <h1>Here Slider</h1>
          </div>
          <div className="mb-5 flex flex-wrap border-[6px] border-black">
            <div
              style={{ flex: '1 1 150px' }}
              className="border-2 border-black"
            >
              <div className="flex items-center justify-center border-2 border-black py-[50px] ">
                <p className="text-3xl font-semibold">
                  Habit Tracker | Google Sheets
                </p>
              </div>
              <div className="p-[22px]">
                <p className="py-[22px] text-center text-4xl font-bold">
                  Description
                </p>
                <div className="py-[24px] pl-[50px] text-2xl font-medium">
                  <p className="mb-4">
                    Get Your Life Organized with our premium habit tracker.
                  </p>
                  <p className="mb-4">
                    Unlock the absoulte power of goolge sheets that centralizes
                    tasks, projects, notes, resources, and everything in
                    between.
                  </p>
                  <p className="mb-4">What is included?</p>
                  <ul>
                    <li>All-in-one dashboard</li>
                    <li>Goal Setting</li>
                    <li>Knowledge Base</li>
                    <li>Quotes & Highlights</li>
                    <li>Reading List</li>
                    <li>Include Tutorials & Examples</li>
                    <li>Lifetime Access to Updates</li>
                    <li>Access to Exclusive Community on discord community.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <div className=" flex flex-col border-2 border-black px-[22px] ">
                <p className="py-[50px] text-center text-3xl font-semibold">
                  Choose Variant
                </p>
                <div className="mb-[69px] flex items-center justify-evenly">
                  {['green', 'blue', 'yellow', 'peach'].map((el) => (
                    <div
                      key={el}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-green-400"
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="mb-4 flex min-h-[59px] w-4/5 items-center justify-center self-center rounded-sm border-[3px] border-black bg-pink-500"
                >
                  Add to Cart
                </button>
                <div className="mb-11 flex min-h-[48px] w-4/5 items-center self-center rounded-md border border-black px-4">
                  <Icons.info />{' '}
                  <p className="ml-1 text-base font-semibold">1300 Sales</p>
                </div>
                <button
                  type="button"
                  className="mb-11 flex min-h-[46px] w-4/6 items-center justify-center self-center rounded-sm border-[3px] border-black bg-gray-300"
                >
                  Delivery
                </button>
                <button
                  type="button"
                  className="mb-14 flex min-h-[46px] w-4/6 items-center justify-center self-center rounded-sm border-[3px] border-black bg-gray-300"
                >
                  Disclaimer
                </button>
              </div>
              <div className="flex flex-col justify-center border-2 border-black p-[22px]">
                <p className="mb-[23px] text-center text-4xl font-bold">Faqs</p>
                <button
                  type="button"
                  className="mb-9 flex min-h-[46px] w-4/6 items-center justify-center self-center rounded-sm border-[3px] border-black bg-gray-300"
                >
                  What is Organice01?
                </button>
                <button
                  type="button"
                  className="mb-9 flex min-h-[46px] w-4/6 items-center justify-center self-center rounded-sm border-[3px] border-black bg-gray-300"
                >
                  What is Organice01?
                </button>
                <button
                  type="button"
                  className="mb-9 flex min-h-[46px] w-4/6 items-center justify-center self-center rounded-sm border-[3px] border-black bg-gray-300"
                >
                  What is Organice01?
                </button>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </div>
    </>
  );
}
