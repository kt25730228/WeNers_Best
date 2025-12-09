// config.js
// => 배포 전에 아래 두 값을 본인 Supabase 프로젝트 값으로 바꿔주세요.
//    Supabase Project URL 예) https://xxxx.supabase.co
//    Anon key 예) public anon key (NOT service_role)
const SUPABASE_URL = "https://wfgqdswcdwdvfaqwejmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZ3Fkc3djZHdkdmZhcXdlam1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDc2NjcsImV4cCI6MjA4MDM4MzY2N30.Jb9nqalTEPp3Grwy3lnLczl6cE7gTSsK4Ol3hXGdl1Q";

// (선택) 전역에서 사용하기 편하게 window에 노출
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
