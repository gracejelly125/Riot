# Riot API를 활용한 리그 오브 레전드 정보 앱 만들기
----
## 프로젝트의 목표
- Next.js와 TypeScript를 사용하여 프론트엔드 개발의 기본기를 다진다.
- 타입 선언 방법, useState에서 제네릭 사용, 유틸리티 타입 활용 등을 실습한다.
- 동적 라우팅, App Router, 레이아웃 구성, Route Handler 등 Next.js의 핵심 기능을 다룬다.
----
## 기능
### 1. 데이터 Fetching
- Server Actions를 활용하여 /champions, /items, /rotation 등의 데이터 페칭을 서버 컴포넌트 내에서 직접 처리
- Route Handlers는 클라이언트 사이드 렌더링(CSR)에서만 사용하는 /api/rotation 엔드포인트 하나만 유지
- fetch를 사용하여 외부 API를 호출하고, 적절한 에러 처리를 수행

### 2. Tanstack Query
- 상태 관리와 데이터 캐싱을 위해 직접 useState와 useEffect를 사용하는 대신, Tanstack Query를 활용
- useQuery의 enabled 속성을 활용하여 조건부로 쿼리를 실행하도록 설정

### 3. 각 페이지 구현 및 렌더링 방식 적용
- 챔피언 목록 페이지 (`/champions`): ISR 방식으로 구현하고, 챔피언 목록을 표시
- 챔피언 상세 페이지 (`/champions/[id]`): 동적 렌더링 방식으로 구현하고, 챔피언의 상세 정보를 표시합니다. 또한, 해당 페이지에서 동적 메타데이터를 생성
- 챔피언 로테이션 페이지 (`/rotation`): 클라이언트 사이드 렌더링으로 구현하고, 로테이션 정보를 표시
- 아이템 목록 페이지 (`/items`): SSG 방식으로 구현하고, 아이템 목록을 표시
  
### 4. 레이아웃 및 네비게이션 구성
- 글로벌 레이아웃을 설정하고, 네비게이션 메뉴를 추가하여 페이지 간 이동이 가능

### 5. 로딩 및 에러 핸들링 고도화
- React Suspense와 loading.tsx를 사용하여 서버 컴포넌트의 로딩 상태를 관리
- error.tsx 파일을 생성하여 각 경로에서 발생하는 에러를 사용자 친화적인 메시지로 처리
- useRouter와 startTransition을 활용하여 에러 발생 시 리셋 기능이나 재시도 기능을 구현

### 6. 성능 최적화
- 이미지 최적화: Next.js의 <Image> 컴포넌트를 활용하여 이미지 로딩 최적화 및 자동 서식 변경을 적용
- Lazy Loading: 컴포넌트나 이미지에 대해 지연 로딩을 적용하여 초기 로딩 속도를 개선

### 7. 반응형 디자인 및 UI 개선
- Tailwind CSS의 유틸리티 클래스를 활용하여 반응형 디자인을 구현
- 모바일 환경에서도 사용하기 편리한 인터페이스를 제공

### 8. 다크 모드 기능 구현
- 사용자 인터페이스에 다크 모드 토글 스위치를 제공하여 테마를 전환할 수 있도록 구현

----
## 사용한 툴
- NextJS
- TypeScript
- Tailwind css
- Tanstack/React-Query
----
## 결과물
- vercel 배포 링크 : [https://riot-mu.vercel.app/]
