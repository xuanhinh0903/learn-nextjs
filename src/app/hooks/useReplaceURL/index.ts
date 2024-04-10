"use server";

import { redirect } from "next/navigation";

export const useReplaceURL = (search: string | null) => {
  const replaceURL = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let currentOffset = parseInt(search || "1", 10);
    if (isNaN(currentOffset)) {
      currentOffset = 1;
    }
    const newOffset = currentOffset + 1;
    urlParams.set("postId", newOffset.toString());
    const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams}`;
    // window.history.replaceState({}, "", newUrl);
    console.log(2134567);
    redirect(newUrl);
  };

  return { replaceURL };
};
