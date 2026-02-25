import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://fkzkljcwgbpvjlgajxss.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZremtsamN3Z2JwdmpsZ2FqeHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NTI1ODcsImV4cCI6MjA4NzUyODU4N30.MgwrsQO90JvWVqdDJu-pEm6sgEoaK5_QTHOKVox7lQU"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
