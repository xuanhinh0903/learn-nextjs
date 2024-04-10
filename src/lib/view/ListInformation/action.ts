"use server";

import { redirect } from "next/navigation";

export const updateFilters = async (formData: FormData) => {
  const postIdDetail = formData.get("postId");

  if (postIdDetail) {
    const nextPostId = Number(postIdDetail) + 1;
    redirect(`/Information?postId=${nextPostId}`);
  }
};
