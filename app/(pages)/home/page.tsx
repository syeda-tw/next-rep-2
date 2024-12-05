import { TSales, columns } from "./columns";
import { DataTable } from "./data-table";
import { mockData } from "./mock-data";

async function getData(): Promise<TSales[]> {
  return mockData;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
