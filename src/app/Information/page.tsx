import { ListInformation } from "@/lib/view";
import React from "react";

interface Props {
  searchParams: {
    postId: string;
  };
}

const Information = async ({ searchParams }: Props) => {
  const postId = searchParams["postId"];
  const data = await fetchData({ postId });
  console.log("🚀 ~ Information ~ data:", data);

  return (
    <div style={{ padding: "0 10px" }}>
      <h1 style={{ margin: "10px 0", borderBottom: "1px solid #ccc" }}>
        Information
      </h1>

      <ListInformation data={data} postId={postId} />
    </div>
  );
};

export default Information;

export async function fetchData({ postId }: { postId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId ?? 1}`,
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
