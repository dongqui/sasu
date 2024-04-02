import supabase from "@/shared/config/supabase";

export async function DELETE(request: Request) {
  const { pathname } = new URL(request.url);
  const linkId = Number(pathname.split("/api/viewCounts/")[1]);

  const res = await supabase.from("Link").delete().eq("id", linkId);
  return Response.json(res.data);
}

export async function PUT(request: Request) {
  const { title, description } = await request.json();

  const { pathname } = new URL(request.url);
  const linkId = Number(pathname.split("/api/viewCounts/")[1]);

  const res = await supabase
    .from("Link")
    .update({ title, description })
    .eq("id", linkId);
  return Response.json(res.data);
}
