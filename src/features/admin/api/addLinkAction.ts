"use server";

import supabase from "@/shared/config/supabase";
import { revalidatePath } from "next/cache";

export async function addLinkAction(formData: FormData) {
  // TODO: 타입 해결하기
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const url = formData.get("url") as string;
  const image = formData.get("image") as string;

  const res = await fetch(image as string);
  const arrayBuffer = await res.arrayBuffer();
  const imageFile = Buffer.from(arrayBuffer);

  const fileName = String(new Date().getTime());
  const { data: pathData, error } = await supabase.storage
    .from("link-meta-image")
    .upload(fileName, imageFile, {
      cacheControl: "3600",
      upsert: false,
    });
  
  if (pathData) {
    const result = supabase
      .storage
      .from('link-meta-image')
      .getPublicUrl(pathData?.path);

    await supabase
      .from("links")
      .insert({ url, title, description, image: result?.data?.publicUrl });

    revalidatePath('/');
  }   
}
