import supabase from "@/shared/config/supabase";
import { cache } from "react";

export const getLinks = cache(async () => {
  const links = await supabase.from("Link").select();
  return links.data;
});

export const getViewCounts = async () => {
  const viewCounts = await supabase.from("ViewCount").select();
  return viewCounts.data || [];
};

export const getViewCount = async (linkId: number) => {
  const { data, error } = await supabase
    .from("ViewCount")
    .select()
    .eq("linkId", linkId);
  if (data) {
    return data[0];
  }

  throw new Error(error.message);
};

export const updateAndGetViewCount = async (linkId: number) => {
  await supabase.rpc("increment", {
    linkid: linkId,
  });

  return await getViewCount(linkId);
};
