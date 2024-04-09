"use server";

import supabase from "@/shared/config/supabase";
import { revalidatePath } from "next/cache";

import type { Link } from "@/shared/config/types";

export async function deployLinksAction({
  addedLinks,
  deletedLinks,
  editedLinks,
}: {
  addedLinks: Link[];
  deletedLinks: number[];
  editedLinks: Link[];
}) {
  // TODO: 타입 해결하기
  try {
    await Promise.all([
      ...addedLinks.map((link) => addLink(link)).reverse(),
      ...deletedLinks.map((id) => deleteLink(id)),
      ...editedLinks.map((link) => updateLink(link)),
    ]);

    revalidatePath("/");
  } catch (e) {
    return e;
  }
}

async function addLink({ image, url, title, description }: Link) {
  if (!image) return;

  const isAlreadyImageUploded = image.startsWith(
    "https://dptlwzemlfpgmncbydjx.supabase.co"
  );

  const iamgeUrl = isAlreadyImageUploded
    ? image
    : await uploadSiteMetaImage(image);

  const { data: newLink } = await supabase
    .from("Link")
    .insert({ url, title, description, image: iamgeUrl })
    .select();

  if (newLink) {
    await supabase
      .from("ViewCount")
      .insert({ linkId: newLink[0].id, count: 0 });
  }
}

async function deleteLink(linkId: number) {
  await supabase.from("Link").delete().eq("id", linkId);
}

export async function updateLink(link: Link) {
  await supabase
    .from("Link")
    .update({
      title: link.title,
      description: link.description,
      image: link.image,
    })
    .eq("id", link.id);
}

async function uploadSiteMetaImage(image: string) {
  const res = await fetch(image);
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
    const result = await supabase.storage
      .from("link-meta-image")
      .getPublicUrl(pathData?.path);

    return result?.data?.publicUrl || null;
  }
}
