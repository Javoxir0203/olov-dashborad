import Breadcrumb from "@/components/Breadcrumbs";
import CalendarBox from "@/components/CalendarBox";
import DefaultLayout from "@/components/Layouts/DefaultLayout";



const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Calendar" />

        <CalendarBox />
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
