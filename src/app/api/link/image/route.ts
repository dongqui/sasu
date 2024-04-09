import supabase from "@/shared/config/supabase";

export async function POST(request: Request) {
  const data = await request.formData();
  const imageFile = data.get("file");

  if (imageFile) {
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

      return Response.json({ image: result?.data?.publicUrl });
    }
  }
}
