// config.js 파일 최종 수정본 (반드시 이대로 적용하세요)

// 1. 환경 변수 설정
// ⭐ 핵심: window 객체에 직접 할당하여 모든 HTML 파일에서 접근 가능하게 합니다.
window.SUPABASE_URL = 'https://wfgqdswcdwdvfaqwejmd.supabase.co'; 
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZ3Fkc3djZHdkdmZhcXdlam1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDc2NjcsImV4cCI6MjA4MDM4MzY2N30.Jb9nqalTEPp3Grwy3lnLczl6cE7gTSsK4Ol3hXGdl1Q'; 

// 2. 이 파일에서는 클라이언트 인스턴스를 생성하지 않습니다.
//    생성 로직은 각 HTML 파일의 스크립트가 담당합니다.

console.log("Supabase 설정 변수 전역 등록 완료.");
