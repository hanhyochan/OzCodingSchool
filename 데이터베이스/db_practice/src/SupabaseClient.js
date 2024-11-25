import { createClient } from "@supabase/supabase-js";

const APIKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmanlra2Z0aWx3Yml0cnRkYXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MjIxNDksImV4cCI6MjA0ODA5ODE0OX0.Juw3g7SZEiUcr9RNBXgUNPaNo9jyrlFmJTSktxcaU4w'
const supabaseURL = 'https://rfjykkftilwbitrtdasp.supabase.co'



const supabase = createClient(supabaseURL, APIKEY)
export default supabase;