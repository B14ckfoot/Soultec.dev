import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create the Supabase client only if we have valid credentials
export const supabase = (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your-supabase-url')
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;