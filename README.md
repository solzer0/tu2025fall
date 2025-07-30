# 📘 GitHub 협업 브랜치 전략 가이드 (TU 2025 Fall 프로젝트)

## 🏁 목적

- `main` 브랜치는 항상 **배포 가능한 안정 버전**으로 유지
- 팀원별로 **담당 페이지별 브랜치**를 생성하여 작업
- 완료되면 `main` 브랜치로 **Pull Request (PR)** 하여 병합

---

## 📁 브랜치 구조

| `main`         | `ticket.html`, `ticket.css`     |  |
| `home-page`    | `ticket.html`, `ticket.css`     |  |
| `about-page`   | `about.html`, `about.css`       |  |
| `setlist-page` | `setlist.html`, `setlist.css`   |  |
| `members-page` | `members.html`, `members.css`   |  |
| `ticket-page`  | `ticket.html`, `ticket.css`     |  |
| `sponsor-page` | `sponsor.html`, `sponsor.css`   |  |

---

## 🛠️ 브랜치 작업 순서 (팀원용)

```bash
# 1. main 기준 브랜치 생성 및 전환
git checkout main
git pull origin main
git checkout -b about-page

# 2. 파일 수정 및 작업

# 3. 변경사항 커밋
git add .
git commit -m "✨ about 페이지 작업"

# 4. 브랜치 푸시
git push origin about-page
