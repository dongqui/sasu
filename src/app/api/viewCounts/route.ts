import supabase from "@/shared/config/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const viewCounts = await supabase.from("ViewCount").select();
  return Response.json({
    viewCounts: viewCounts.data || [],
  });
}
