import Image from 'next/image';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <Link href={'store/detail/45'}>
      <div className="flex min-w-[261px] flex-col items-center rounded-md border-4 border-black ">
        <Image
          src="/product1.png"
          width={261}
          height={209}
          alt="Picture of the author"
          className="mb-3 object-cover"
        />
        <p className="mb-3 mt-2 w-full border-b-2 border-t-2 border-black text-center text-sm font-semibold">
          Monthly Budget | Google Sheets
        </p>
        <div className="flex w-full items-center justify-between p-2">
          <p className="ml-1 text-base font-bold">9.99 $</p>
          <button
            type="button"
            className="flex items-center justify-center rounded-sm border-4 border-black p-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
