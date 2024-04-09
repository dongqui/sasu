import { Database } from "./supabaseTypes";

export type Link = Database["public"]["Tables"]["Link"]["Row"];
export interface EditLink extends Omit<Link, "image"> {
  image: string | null | File;
}

export type ViewCount = Database["public"]["Tables"]["ViewCount"]["Row"];
