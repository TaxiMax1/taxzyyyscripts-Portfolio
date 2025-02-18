import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://awojuhzyoncqjkgxmvve.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3b2p1aHp5b25jcWprZ3htdnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODAwNDUsImV4cCI6MjA1NTA1NjA0NX0.GT6OTNzTMWfiPu0gUSQgAIrnKjitl48yi5vzZCw5ooo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);