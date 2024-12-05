"use client";

import { ColumnDef } from "@tanstack/react-table";

export type TSales = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  product: string;
  date: string;
  insights: {
    customerSegment: string;
    churnRisk: string;
    upsellPotential: string;
  };
};

export const columns: ColumnDef<TSales>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`,
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(), // Format date
  },
  {
    accessorKey: "insights.customerSegment",
    header: "Customer Segment",
  },
  {
    accessorKey: "insights.churnRisk",
    header: "Churn Risk",
  },
  {
    accessorKey: "insights.upsellPotential",
    header: "Upsell Potential",
  },
];
