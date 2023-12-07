import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qoqjduecraxyslpncqhh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcWpkdWVjcmF4eXNscG5jcWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzQ3MTcsImV4cCI6MjAxNzAxMDcxN30.hN2IOckMd8e2EndL2l04e_4LFyTtx6w89Upo0un6MOY";

export const supabase = createClient(supabaseUrl, supabaseKey);
