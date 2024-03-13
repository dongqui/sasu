import supabase from "@/shared/config/supabase";
import { cache } from "react";

export const getLinks = cache(async() => {
  const links = await supabase.from('links').select();
  return links.data;
})