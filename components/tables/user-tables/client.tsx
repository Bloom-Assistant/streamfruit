"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Integration } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { integrationColumns } from "./columns";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ProductForm } from "@/components/forms/product-form";

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
        </Button> */}
        <Dialog>
          <DialogTrigger>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Integration</DialogTitle>
              <DialogDescription>
                <ProductForm
                  categories={[
                    { _id: "shirts", name: "shirts" },
                    { _id: "pants", name: "pants" },
                  ]}
                  initialData={null}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={integrationColumns} data={data} />
    </>
  );
};
