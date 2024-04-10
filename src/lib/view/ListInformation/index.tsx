"use client";

import { useEffect, useState } from "react";

import { Submit } from "@/components";
import { updateFilters } from "./action";

interface InformationProps {
  name: string;
  email: string;
  body: string;
  postId: number;
  id: number;
}

interface Props {
  data: InformationProps[];
  postId: string;
}

export const ListInformation = ({ data, postId }: Props) => {
  const [list, setList] = useState<any>([]);
  console.log("🚀 ~ ListInformation ~ list:", list);

  useEffect(() => {
    setList((prev: any) => [...prev, ...data]);
  }, [setList]);

  return (
    <>
      {list.map((item: InformationProps, index: number) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>Name: {item.name}</p>
            <p style={{ margin: "0" }}>Email: {item.email}</p>
          </div>
          <p style={{ margin: "0" }}>Description: {item.body}</p>
        </div>
      ))}
      <form action={updateFilters}>
        <input
          checked={true}
          type="checkbox"
          name="postId"
          value={postId ?? 1}
          readOnly
          style={{ display: "none" }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
