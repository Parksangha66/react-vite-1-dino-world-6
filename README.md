# 공룡 도감

React + Vite로 만든 반응형 1페이지 공룡 소개 사이트입니다.

## 왜 `127.0.0.1` 주소는 다른 사람이 접속할 수 없을까

`127.0.0.1`은 내 컴퓨터 자신만 가리키는 로컬 루프백 주소입니다.  
즉, `http://127.0.0.1:4173`는 이 컴퓨터 안에서만 열리고 외부 인터넷에는 공개되지 않습니다.

공개 웹사이트로 열려면 로컬 서버가 아니라 Vercel 같은 외부 호스팅 서비스에 배포해야 합니다.

## 개발 실행

일반적인 명령:

```bash
npm install
npm run dev
```

이 작업 환경의 PowerShell에서는 `npm` 대신 `npm.cmd`를 써야 할 수 있습니다.

```powershell
npm.cmd install
npm.cmd run dev
```

## 프로덕션 빌드

배포 전 빌드 결과를 생성하는 명령입니다.

```bash
npm run build
```

이 프로젝트는 현재 빌드가 정상 통과하도록 설정되어 있습니다.

## GitHub 업로드 준비

이 프로젝트는 Git 저장소 초기화까지 되어 있습니다.

현재 상태 확인:

```bash
git status
```

처음 커밋을 만들 때:

```bash
git add .
git commit -m "Prepare Dino World for public deployment"
```

아직 Git 사용자 정보가 없다면 먼저 한 번만 설정합니다.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

GitHub 새 저장소를 만든 뒤 원격 저장소를 연결합니다.

```bash
git remote add origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

## Vercel 배포

이 프로젝트는 Vercel용 설정 파일 [`vercel.json`](./vercel.json)이 포함되어 있습니다.

- Framework: `vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- SPA Fallback: `index.html`로 rewrite

### 방법 1. GitHub 저장소를 Vercel에 연결

1. GitHub에 이 저장소를 push합니다.
2. Vercel에서 `Add New Project`를 누릅니다.
3. GitHub 저장소를 Import 합니다.
4. Framework Preset이 `Vite`인지 확인합니다.
5. 배포를 실행합니다.

배포가 끝나면 아래처럼 공개 URL이 발급됩니다.

```text
https://your-project-name.vercel.app
```

### 방법 2. Vercel CLI로 직접 배포

로그인:

```bash
npx vercel login
```

프로덕션 배포:

```bash
npx vercel --prod
```

## 배포 후 공개 URL

Vercel 배포가 완료되면 `https://...vercel.app` 형식의 공개 URL이 생성됩니다.  
그 주소는 인터넷에서 누구나 접속할 수 있습니다.

## 참고

- Vite 정적 배포 가이드: https://vite.dev/guide/static-deploy.html
- Vercel Vite 문서: https://vercel.com/docs/frameworks/frontend/vite
