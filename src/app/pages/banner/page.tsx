import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import BannerBoxes from "@/components/Banners";

const Banner: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Banners" />
        <BannerBoxes/>
      </div>
    </DefaultLayout>
  );
};

export default Banner;