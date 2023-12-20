'use client';
import InnerWrapper from '../ui/components/innerWrapper';
import { SearchInput } from '../ui/components/search-input';

export default function Contact() {
  return (
    <InnerWrapper>
      <div className="mb-12 px-8  pt-16">
        <p className="mb-28 text-center text-[52px] font-semibold">
          Contact Us
        </p>
        <div className="mb-5 flex items-center justify-between gap-2">
          <SearchInput
            placeholder="Name"
            style={{
              flex: 1,
              maxWidth: '40%',
            }}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              // setFilter(e.target.value)
              console.log('filter is working')
            }
          />
          <SearchInput
            placeholder="email"
            style={{
              flex: 1,
              maxWidth: '40%',
            }}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              // setFilter(e.target.value)
              console.log('filter is working')
            }
          />
        </div>
        <SearchInput
          placeholder="Message"
          style={{
            flex: 1,
            marginBottom: 20,
          }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            // setFilter(e.target.value)
            console.log('filter is working')
          }
        />

        <button
          type="button"
          className="mx-auto flex w-2/5 items-center justify-center rounded-sm border-4 border-black bg-pink-400 p-3 text-base font-bold text-white"
        >
          Submit
        </button>
      </div>
      <p className="mb-[365px] text-base font-normal">
        This site is protected by reCAPTCHA and the Google{' '}
        <span className="bg-gray-300 text-black">Privacy Policy</span> and{' '}
        <span className="bg-gray-300 text-black">Terms of Service</span> apply.
      </p>
    </InnerWrapper>
  );
}
