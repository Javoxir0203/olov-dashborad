import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import SettingBoxes from "@/components/SettingBoxes";

const Settings: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Settings" />
        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
