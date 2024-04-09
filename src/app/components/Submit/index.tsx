"use client";

import { useSearchParams } from "next/navigation";

export const Submit = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("postId");

  const handleUpdateFilter = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let currentOffset = parseInt(search || "1", 10);
    if (isNaN(currentOffset)) {
      currentOffset = 1;
    }
    const newOffset = currentOffset + 1;
    urlParams.set("postId", newOffset.toString());
    const newUrl = `${window.location.origin}/Information?${urlParams}`;
    window.history.replaceState({}, "", newUrl);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={handleUpdateFilter}
        style={{
          textAlign: "center",
          padding: "10px 5px",
          border: "1px solid #ccc",
          width: "30%",
          margin: "0 auto 20px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          userSelect: "none",
        }}
      >
        Load more
      </button>
    </div>
  );
};
