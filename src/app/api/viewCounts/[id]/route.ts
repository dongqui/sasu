import supabase from "@/shared/config/supabase";

export const dynamic = "force-dynamic";

async function getViewCount(linkId: number) {
  const { data, error } = await supabase
    .from("ViewCount")
    .select()
    .eq("linkId", linkId);

  if (data) {
    return data[0];
  }

  throw new Error(error?.message);
}

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const linkId = Number(pathname.split("/api/viewCounts/")[1]);

  const viewCount = await getViewCount(Number(linkId));
  return Response.json({
    viewCount,
  });
}

export async function PUT(request: Request) {
  const { pathname } = new URL(request.url);
  const linkId = Number(pathname.split("/api/viewCounts/")[1]);

  await supabase.rpc("increment", {
    linkid: linkId,
  });

  const viewCount = await getViewCount(linkId);

  return Response.json({
    viewCount,
  });
}
