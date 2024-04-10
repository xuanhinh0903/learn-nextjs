import { redirect, useSearchParams } from "next/navigation";

import { useReplaceURL } from "@/app/hooks";

export const Submit = ({ getId }: any) => {
  // const searchParams = useSearchParams();

  // const search = searchParams.get("postId");

  // const { replaceURL } = useReplaceURL("&postId=1");

  const replaceURL = async () => {
    "use server";
    // const urlParams = new URLSearchParams(window.location.search);
    // let currentOffset = parseInt("1" || "1", 10);
    // if (isNaN(currentOffset)) {
    //   currentOffset = 1;
    // }
    // const newOffset = currentOffset + 1;
    // urlParams.set("postId", newOffset.toString());
    // const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams}`;
    // // window.history.replaceState({}, "", newUrl);
    console.log(2134567);
    // redirect(newUrl);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={replaceURL}
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
