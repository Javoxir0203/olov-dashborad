import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import ShopBoxes from "@/components/Shops";

const Shop: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Shops" />
        <ShopBoxes/>
      </div>
    </DefaultLayout>
  );
};

export default Shop;
