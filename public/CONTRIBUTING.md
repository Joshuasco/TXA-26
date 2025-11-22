# Contributing to Event 2026 Website

## 🌿 Branching Strategy

**Main Branches:**
- `main` - Production code (DO NOT push directly!)
- `develop` - Integration branch

**Feature Branches:**
- `feature/hero-section`
- `feature/navigation-menu`
- `bugfix/mobile-responsive`

## 🔄 Workflow

### 1. Start New Feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### 2. Make Changes
```bash
git add .
git commit -m "descriptive message"
git push origin feature/your-feature-name
```

### 3. Create Pull Request
- Go to GitHub
- Click "Compare & pull request"
- **Base:** develop (NOT main!)
- **Compare:** your feature branch
- Add description
- Request review from @yourname or @coleadname

### 4. After Approval
- DO NOT merge to main directly
- Merge to develop first
- Lead will merge develop → main weekly

## ⚠️ IMPORTANT RULES

**❌ NEVER:**
- Push directly to `main`
- Force push (`git push -f`)
- Merge without review

**✅ ALWAYS:**
- Work on feature branches
- Open PRs to `develop`
- Get review before merging
- Test locally before pushing

## 👥 Getting Help

- Questions? Ask in #frontend-dev
- Stuck? Tag @yourname or @coleadname
- Urgent? DM on Slack
