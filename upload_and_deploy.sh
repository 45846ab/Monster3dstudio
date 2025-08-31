#!/bin/bash

# 필수 정보
GITHUB_USERNAME="your-username"       # 👉 여기에 본인 GitHub ID 넣기
REPO_NAME="monsterforge3d"
PROJECT_DIR="monsterforge3d_site"

echo "🚀 MonsterForge 3D GitHub 업로드 및 Vercel 배포 시작"

# 1. Git 초기화
cd "$PROJECT_DIR"
git init
git config user.name "$GITHUB_USERNAME"
git config user.email "${GITHUB_USERNAME}@users.noreply.github.com"
git branch -M main

# 2. GitHub 원격 연결
gh repo create "$GITHUB_USERNAME/$REPO_NAME" --public --source=. --remote=origin --push

# 3. 첫 커밋 및 푸시
git add .
git commit -m "Initial commit: MonsterForge 3D"
git push -u origin main

# 4. Vercel 로그인 및 배포
echo "🔐 Vercel 로그인"
vercel login

echo "🌍 Vercel에 배포 중..."
vercel --prod

echo "✅ GitHub & Vercel 배포 완료!"