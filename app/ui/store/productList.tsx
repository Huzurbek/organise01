import { Suspense } from 'react';
import ProductCard from '../components/productCard';
type TProduct = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchProductList = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store',
    });
    // if (!response?.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const result: TProduct[] = await response.json();
    return result;
  } catch (err) {
    console.log('error is ', err);
  }
};
const ProductList = async () => {
  const productList = await fetchProductList();
  return (
    <div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      //   className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
    >
      {productList?.map((el) => <ProductCard key={el.id} />)}
    </div>
  );
};

export default ProductList;
