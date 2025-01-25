import Breadcrumb from "@/components/Breadcrumbs";
import BasicChart from "@/components/Charts/BasicChart";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";



const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Basic Chart" />

      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
