// 환경 변수 설정 (실제 프로젝트 URL 및 키로 대체하세요)
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; 
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; 

// Supabase 라이브러리가 로드되었는지 확인
if (window.supabase && typeof window.supabase.createClient === 'function') {
    // 전역 객체(window)에 클라이언트 인스턴스를 저장하여 다른 모든 스크립트에서 접근 가능하게 함
    // Identifier 'supabase' has already been declared 오류 방지
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: true,      // ⭐ 핵심: 세션 정보를 Local Storage에 저장하여 페이지 이동 시 유지
            autoRefreshToken: true    // 토큰 만료 시 자동 갱신
        }
    });
    console.log("Supabase 클라이언트 초기화 및 세션 유지 설정 완료.");
} else {
    console.error("Supabase 라이브러리가 로드되지 않았거나 createClient 함수를 찾을 수 없습니다.");
}
