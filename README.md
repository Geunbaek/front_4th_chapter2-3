## 과제 체크포인트

### 기본과제

#### 목표 : 전역상태관리를 이용한 적절한 분리와 계층에 대한 이해를 통한 FSD 폴더 구조 적용하기
- 전역상태관리를 사용해서 상태를 분리하고 관리하는 방법에 대한 이해
- Context API, Jotai, Zustand 등 상태관리 라이브러리 사용하기
- FSD(Feature-Sliced Design)에 대한 이해
- FSD를 통한 관심사의 분리에 대한 이해
- 단일책임과 역할이란 무엇인가?
- 관심사를 하나만 가지고 있는가?
- 어디에 무엇을 넣어야 하는가?

#### 체크포인트
- [x] 전역상태관리를 사용해서 상태를 분리하고 관리했나요?
- [x] Props Drilling을 최소화했나요?
- [x] shared 공통 컴포넌트를 분리했나요?
- [x] shared 공통 로직을 분리했나요?
- [x] entities를 중심으로 type을 정의하고 model을 분리했나요?
- [ ] entities를 중심으로 ui를 분리했나요?
- [x] entities를 중심으로 api를 분리했나요?
- [x] feature를 중심으로 사용자행동(이벤트 처리)를 분리했나요?
- [x] feature를 중심으로 ui를 분리했나요?
- [ ] feature를 중심으로 api를 분리했나요?
- [ ] widget을 중심으로 데이터를 재사용가능한 형태로 분리했나요?


### 심화과제

#### 목표: 서버상태관리 도구인 TanstackQuery를 이용하여 비동기코드를 선언적인 함수형 프로그래밍으로 작성하기 

- TanstackQuery의 사용법에 대한 이해
- TanstackQuery를 이용한 비동기 코드 작성에 대한 이해
- 비동기 코드를 선언적인 함수형 프로그래밍으로 작성하는 방법에 대한 이해

#### 체크포인트

- [x] 모든 API 호출이 TanStack Query의 useQuery와 useMutation으로 대체되었는가?
- [x] 쿼리 키가 적절히 설정되었는가?
- [x] fetch와 useState가 아닌 선언적인 함수형 프로그래밍이 적절히 적용되었는가?
- [x] 캐싱과 리프레시 전략이 올바르게 구현되었는가?


## 과제 셀프회고

- 과제 파일 구조

```
src
 ┣ app
 ┃ ┣ assets
 ┃ ┃ ┗ react.svg
 ┃ ┣ App.tsx
 ┃ ┗ main.tsx
 ┣ entities
 ┃ ┣ comments
 ┃ ┃ ┣ api
 ┃ ┃ ┃ ┣ addComment.ts
 ┃ ┃ ┃ ┣ deleteComment.ts
 ┃ ┃ ┃ ┣ getComments.ts
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ updateComment.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ types.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ posts
 ┃ ┃ ┣ api
 ┃ ┃ ┃ ┣ addPost.ts
 ┃ ┃ ┃ ┣ deletePost.ts
 ┃ ┃ ┃ ┣ getPosts.ts
 ┃ ┃ ┃ ┣ getPostsByQuery.ts
 ┃ ┃ ┃ ┣ getPostsByTag.ts
 ┃ ┃ ┃ ┣ getTags.ts
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ updatePost.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ types.ts
 ┃ ┃ ┗ index.ts
 ┃ ┗ users
 ┃ ┃ ┣ api
 ┃ ┃ ┃ ┣ getUserById.ts
 ┃ ┃ ┃ ┣ getUsers.ts
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ types.ts
 ┃ ┃ ┗ index.ts
 ┣ features
 ┃ ┣ comments
 ┃ ┃ ┣ lib
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ queryKey.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ useMutationAddComment.ts
 ┃ ┃ ┃ ┣ useMutationDeleteComment.ts
 ┃ ┃ ┃ ┣ useMutationUpdateComment.ts
 ┃ ┃ ┃ ┗ useSuspenseQueryGetComments.ts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ CommentAddModal.tsx
 ┃ ┃ ┃ ┣ CommentUpdateModal.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ modal
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ useModalStore.ts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ Modal.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ posts
 ┃ ┃ ┣ config
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ postFilterParam.ts
 ┃ ┃ ┣ lib
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ queryKey.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ useMutationAddPost.ts
 ┃ ┃ ┃ ┣ useMutationDeletePost.ts
 ┃ ┃ ┃ ┣ useMutationUpdatePost.ts
 ┃ ┃ ┃ ┣ usePost.ts
 ┃ ┃ ┃ ┣ usePostFilter.ts
 ┃ ┃ ┃ ┣ useSuspenseQueryGetPosts.ts
 ┃ ┃ ┃ ┗ useSuspenseQueryGetTags.ts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ PostAddModal.tsx
 ┃ ┃ ┃ ┣ PostDetailModal.tsx
 ┃ ┃ ┃ ┣ PostFilter.tsx
 ┃ ┃ ┃ ┣ PostTable.tsx
 ┃ ┃ ┃ ┣ PostTablePagination.tsx
 ┃ ┃ ┃ ┣ PostTitle.tsx
 ┃ ┃ ┃ ┣ PostUpdateModal.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ users
 ┃ ┃ ┣ lib
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ queryKey.ts
 ┃ ┃ ┣ model
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ useSuspenseQueryGetUserbyId.ts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ UserProfile.tsx
 ┃ ┃ ┃ ┣ UserProfileModal.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┗ .DS_Store
 ┣ mocks
 ┃ ┣ api
 ┃ ┃ ┣ comments.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ posts.ts
 ┃ ┃ ┗ users.ts
 ┃ ┣ browser.ts
 ┃ ┗ handlers.ts
 ┣ pages
 ┃ ┗ posts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ PostsManagerPage.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┣ shared
 ┃ ┣ api
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ instance.ts
 ┃ ┣ lib
 ┃ ┃ ┣ array.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ types.ts
 ┃ ┃ ┗ utils.ts
 ┃ ┣ model
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ types.ts
 ┃ ┗ ui
 ┃ ┃ ┣ Badge.tsx
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ Card.tsx
 ┃ ┃ ┣ Dialog.tsx
 ┃ ┃ ┣ HighlightText.tsx
 ┃ ┃ ┣ Input.tsx
 ┃ ┃ ┣ Loading.tsx
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┣ Select.tsx
 ┃ ┃ ┣ Table.tsx
 ┃ ┃ ┣ Textarea.tsx
 ┃ ┃ ┗ index.tsx
 ┣ widgets
 ┃ ┣ comments
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ Comments.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ layout
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ Footer.tsx
 ┃ ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┃ ┗ posts
 ┃ ┃ ┣ ui
 ┃ ┃ ┃ ┣ PostTableSection.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┗ index.ts
 ┗ vite-env.d.ts
```

- app : 애플리케이션 전반적인 설정
  - router 
  - 전역 스타일

- pages : 하위 레이어들을 조합하여 페이지를 완성시키는 레이어
 
- widgets : 하위 features 와 entities 레이어에서 정의된 기능을 모으는 레이어
  - 하위 레이어에서 다른 도메인에서 정의된 훅이나 서로 다른 도메인에서 정의된 훅들을 조합해 ui를 그리는 컴포넌트
  - 하위 레이어에서의 훅들을 조합한 훅
  - 과거 section 과 비슷한 역할을 하는 컴포넌트

- features : 프로젝트가 다루는 기능들 ( 상태와 관련된 기능들 )
  - 변경되는 데이터의 타입
  - entities 에서 정의된 fetch 함수를 이용한 tanstack query 훅들
  - 변경되는 데이터들을 가공하는 계산함수
  - 해당 도메인에서 정의된 훅을 사용해 ui를 그리는 컴포넌트

- entities : 프로젝트가 다루는 데이터 영역 ( 서버에서 받아오는 데이터, 클라이언트에서 변함이 없는 데이터 )
  - 변하지 않는 데이터의 타입 
  - 데이터를 가공하는 계산 함수
  
- shared : 앱 전체 영역에서 사용할 수 있는 도메인 없이도 사용할 수 있는 기능들의 집합
