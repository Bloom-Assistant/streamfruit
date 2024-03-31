import BreadCrumb from "@/components/breadcrumb";
import { IntegrationClient } from "@/components/tables/user-tables/client";
import { integrations } from "@/constants/data";

const breadcrumbItems = [{ title: "Integrations", link: "/dashboard/user" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <IntegrationClient data={integrations} />
      </div>
    </>
  );
}
