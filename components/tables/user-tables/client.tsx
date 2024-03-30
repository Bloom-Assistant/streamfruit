"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Integration } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { integrationColumns } from "./columns";

interface IntegrationsList {
  data: Integration[];
}

export const IntegrationClient: React.FC<IntegrationsList> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Integrations (${data.length})`} description="Manage users (Client side table functionalities.)" />
        {/* <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button> */}
      </div>
      <Separator />
      <DataTable searchKey="name" columns={integrationColumns} data={data} />
    </>
  );
};
