import Link from 'next/link';
import { Icons } from '../Icons';
import NavbarClientContainer from './navbar-client';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      <div className="mb-6 mt-11 flex items-center justify-center">
        <Icons.logo />
      </div>

      <div className="border-y-2 border-black px-5">
        <div className="relative mx-auto my-0 flex max-w-[1440px] items-center justify-center gap-32 py-6">
          <Link className="text-base font-medium leading-5" href="/">
            HOME
          </Link>
          <Link className="text-base font-medium leading-5" href="/store">
            STORE
          </Link>
          <Link className="text-base font-medium leading-5" href="/contact">
            CONNECT
          </Link>
          <NavbarClientContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
