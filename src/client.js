import { createClient } from '@supabase/supabase-js';

const URL = 'https://diddnvaybahkjkpkkjnn.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZGRudmF5YmFoa2prcGtram5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNjg5MTYsImV4cCI6MjAzOTc0NDkxNn0.WvARYkVC1mBnSPy-Ae2HewhwMIaTul9-2uIRRYZbLeE';

export const supabase = createClient(URL, API_KEY);