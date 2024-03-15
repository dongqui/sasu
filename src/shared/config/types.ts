import { Database } from "./supabaseTypes";

export type Link = Database["public"]["Tables"]["Link"]["Row"];
export type ViewCount = Database["public"]["Tables"]["ViewCount"]["Row"];
