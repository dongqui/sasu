"use server";

import supabase from "@/shared/config/supabase";
import type { Link } from "@/shared/config/types";
import { randomString } from "@/shared/lib";

export async function addLinkAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description");
  const url = formData.get("url");
  const image = formData.get("image");

  const res = await fetch(image as string);
  const arrayBuffer = await res.arrayBuffer();
  const imageFile = Buffer.from(arrayBuffer);

  const { data, error } = await supabase.storage
    .from("link-meta-images")
    .upload(String(new Date().getTime()), imageFile, {
      cacheControl: "3600",
      upsert: false,
    });

  console.log(data);
  //   const {} = await supabase
  //     .from("links")
  //     .insert({ url, title, description, image });

  console.log(error);
}
