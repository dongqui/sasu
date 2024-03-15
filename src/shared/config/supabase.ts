import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabaseTypes";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
