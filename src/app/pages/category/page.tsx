import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import CategoryBoxes from "@/components/Category";

const Category: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Categorys" />
        <CategoryBoxes/>
      </div>
    </DefaultLayout>
  );
};

export default Category;
