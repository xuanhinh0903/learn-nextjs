import { ListInformation } from "../lib/view";
import React from "react";
import { useSearchParams } from "next/navigation";

const Information = async () => {
  const res = await fetchData();

  const searchParams = useSearchParams();

  return (
    <div style={{ padding: "0 10px" }}>
      <h1 style={{ margin: "10px 0", borderBottom: "1px solid #ccc" }}>
        Information
      </h1>

      <ListInformation data={res} />
    </div>
  );
};

export default Information;

async function fetchData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=1`,
    {
      next: { tags: ["products"] },
    }
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Error fetching data: ${data.message || res.statusText}`);
  }

  return data;
}
