import InnerWrapper from '../ui/components/innerWrapper';
export default function Page() {
  return (
    <InnerWrapper>
      <div className="mb-[200px] mt-5 border border-black">
        <div className="bg-order flex min-h-[536px] flex-col items-center bg-cover bg-center bg-no-repeat px-10 pb-5 pt-10">
          <p className="mb-4 text-4xl font-bold text-white">
            Congratulations , Omun! Your purchase is complete.
          </p>
          <p
            className="max-w-[962px] text-center text-2xl font-medium"
            style={{ flex: 1 }}
          >
            Here is to unlocking your most productive days ahead with our
            powerful productivity software. Make each click count!
          </p>
          <p className="max-w-[282px] text-center text-2xl font-medium">
            We have sent a email with download link and instructions at
            aman@gmail.com
          </p>
        </div>
        <div className="flex flex-wrap border-y border-black px-10 py-[70px]">
          <div
            className="mx-auto flex w-2/5 flex-col"
            style={{ flex: '1 1 150px' }}
          >
            <p className="text-2xl font-medium">
              Habit Tracker | Google Sheets
            </p>
            <p className="text-2xl font-medium">1.7 MB</p>
          </div>

          <div
            className="flex justify-between gap-5"
            style={{ flex: '1 1 150px', border: '1px solid pink' }}
          >
            <button
              type="button"
              className="flex w-2/5 items-center justify-center rounded-sm border-4 border-black bg-yellow-400 p-3 text-base font-bold "
            >
              Download
            </button>
            <button
              type="button"
              className="flex w-2/5 items-center justify-center rounded-sm border-4 border-black bg-green-500 p-3 text-base font-bold "
            >
              Receipt
            </button>
          </div>
        </div>
        <section className="flex flex-col items-center px-10 py-5">
          <p className="mb-5 text-2xl font-medium">
            You Can use the above links as well to download the template and the
            reciept of your payment.
          </p>
          <p className="text-[56px] font-semibold">
            Thank You for Choosing Organice01
          </p>
        </section>
      </div>
    </InnerWrapper>
  );
}
