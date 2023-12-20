'use client';
import { Icons } from '../Icons';
import { SearchInput } from '../components/search-input';

const NavbarClientContainer = () => {
  return (
    <div className="absolute bottom-0 right-0 top-0 flex">
      <SearchInput
        endIcon={<Icons.search />}
        placeholder="Search"
        style={{ maxWidth: 200 }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          // setFilter(e.target.value)
          console.log('filter is working')
        }
      />
      <button className="flex w-16 items-center justify-center bg-black">
        <Icons.basket />
      </button>
    </div>
  );
};

export default NavbarClientContainer;
