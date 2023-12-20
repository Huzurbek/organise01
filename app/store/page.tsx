import { CSSProperties, Suspense } from 'react';
import ProductList from '../ui/store/productList';
import { CardSkeleton } from '../ui/skeletons';
import InnerWrapper from '../ui/components/innerWrapper';

export default function Page() {
  return (
    <InnerWrapper>
      <div className="mb-36 mt-20 flex justify-center gap-16">
        <ContentItem text="All" />
        <ContentItem
          text="Notion"
          style={{ background: 'rgba(255, 90, 198, 0.52)' }}
        />
        <ContentItem text=" Google Sheets" />
      </div>
      {/* Product Lis Container  */}
      <div className="mb-[539px]">
        <ProductCardsSkeleton />
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </InnerWrapper>
  );
}

function ProductCardsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

const ContentItem = ({
  text,
  style,
}: {
  text: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className="rounded-lg border-4 border-black p-3 text-6xl font-semibold"
      style={{ boxShadow: '6px 4px 4px 0px rgba(0, 0, 0, 0.75)', ...style }}
    >
      {text}
    </div>
  );
};
