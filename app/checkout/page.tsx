'use client';
import Link from 'next/link';
import InnerWrapper from '../ui/components/innerWrapper';
import Image from 'next/image';
import { Icons } from '../ui/Icons';
import { SearchInput } from '../ui/components/search-input';
import ProductCard from '../ui/components/productCard';
import './style.sass';

export default function Page() {
  return (
    <div>
      <div className="border-b-2 border-black ">
        <InnerWrapper>
          <div className="flex items-center justify-between py-8">
            <p className="text-[56px] font-semibold">Checkout</p>

            <Link
              href="/store"
              className="flex min-h-[40px] items-center justify-center self-center border-[3px] border-black p-3 text-base font-bold"
            >
              Continue Shopping
            </Link>
          </div>
        </InnerWrapper>
      </div>
      <InnerWrapper>
        <div className="flex flex-wrap items-start pb-[200px] pt-[99px]">
          <div
            className="mr-20 border-2 border-black p-14"
            style={{ flex: '1 1 150px' }}
          >
            <h1>Stripe Card</h1>
          </div>

          {/* Second Column  */}
          <div className="flex flex-col " style={{ flex: '2 1 150px' }}>
            <div className="flex flex-col border border-black">
              <div
                className="flex items-center justify-start gap-3 border-b border-black pr-3"
                style={{ flex: 1 }}
              >
                <Image
                  src="/product1.png"
                  width={95}
                  height={85}
                  alt="Picture of the author"
                  className="border border-black object-cover"
                />
                <div style={{ flex: 1 }}>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-base font-semibold">
                      Habit Tracker | Google Sheets
                    </p>
                    <p className="text-base font-semibold">$0.99</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold">
                      Qty : 1 Variant : Papaya Whip
                    </p>
                    <button type="button">
                      <Icons.delete />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-b border-black px-6 py-3 pb-12">
                <div className="mb-6 flex justify-between">
                  <p className="text-base font-semibold">Subtotal</p>
                  <p className="text-base font-semibold">$0.99</p>
                </div>
                <div className="flex justify-between gap-2" style={{ flex: 2 }}>
                  <SearchInput
                    placeholder="Discount code"
                    style={{
                      flex: 1,
                      border: '1px solid black',
                      borderRadius: '3px',
                    }}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                      // setFilter(e.target.value)
                      console.log('filter is working')
                    }
                  />
                  <button className="flex w-16 items-center justify-center rounded-[1px] border border-black">
                    Apply
                  </button>
                </div>
              </div>
              <div className="px-6 pb-4 pt-[54px]">
                <div className=" flex justify-between">
                  <p className="text-base font-semibold">Total</p>
                  <p className="text-base font-semibold">$0.99</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <input id="check-3" type="checkbox" checked={true} />
              <label htmlFor="check-3">Gift it to someone</label>
            </div>
          </div>
        </div>
        <p className="mb-[97px] text-center text-[56px] font-semibold">
          You May Also Like
        </p>
        <div className="mb-[200px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((el) => (
            <ProductCard key={el} />
          ))}
        </div>
      </InnerWrapper>
    </div>
  );
}
