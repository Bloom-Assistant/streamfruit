"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Integration } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const integrationColumns: ColumnDef<Integration>[] = [
  {
    id: "select",
    header: "Select",
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "verified",
    header: "Verified",
    cell: ({ row }) => <Checkbox checked={row.original.verified} aria-label="Verified status" />,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "callbackUrl",
    header: "Callback URL",
  },
  {
    accessorKey: "scope",
    header: "Scope",
    cell: ({ row }) => row.original.scope.join(", "),
  },
  {
    accessorKey: "lastSync",
    header: "Last Sync",
    cell: ({ row }) => row.original.lastSync,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => row.original.createdAt,
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => row.original.updatedAt,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

