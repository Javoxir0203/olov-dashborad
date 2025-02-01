import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import Products from "@/components/Products";
import ProductBoxes from "@/components/Products";

const Product: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Products" />
        <ProductBoxes/>
      </div>
    </DefaultLayout>
  );
};

export default Product;
