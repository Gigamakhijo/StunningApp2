# Stunning App 2

## 사용 방법

[expo CLI](https://docs.expo.dev/more/expo-cli/)로 앱 빌드 및 라이브러리 설치

프로젝트 dependency 설치

```bash
npx expo install
```

앱 빌드

```bash
npx expo start
```

thrid-party 라이브러리 설치

```bash
npx install 패키지
```

## 코드 설명

### app/(screens)/_layout.tsx

앱을 실행하면 제일 먼저 실행됨
authentication state을 사용해서 app/login.tsx나 app/(screens)/index.tsx 로 routing

### app/_layout.tsx

[React Context Provider](https://react.dev/reference/react/createContext)를 사용하여 authentication session을 앱 전체에 공유
실제로 로그인 및 로그아웃 하는 부분

[expo router에서의 Authentication](https://docs.expo.dev/router/reference/authentication/)
