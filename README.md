# 🚀 Git & GitHub Collaboration Practice

Welcome to our **Git & GitHub Practice Repository**!

This repository is created to help our team learn and practice Git collaboration before starting our main project. The focus is on understanding real-world Git workflows, including branching, pull requests, code reviews, merge conflicts, issues, and project management.

---

## 🎯 Objective

By the end of this practice, every team member should be comfortable with:

- Creating and managing branches
- Writing meaningful commits
- Pushing and pulling changes
- Creating and reviewing Pull Requests
- Resolving merge conflicts
- Using GitHub Issues
- Working with GitHub Projects
- Using Git Stash
- Cherry-picking commits
- Reverting and resetting commits
- Creating releases and tags

---

## 👥 Team Members

| Member | Responsibility |
|---------|----------------|
| Member 1 | Home Page |
| Member 2 | About Page |
| Member 3 | Team Page |
| Member 4 | Contact Page |
| Member 5 | CSS & JavaScript |

> **Note:** Everyone should work on their own branch. Never push directly to `main`.

---

## 📁 Project Structure

```
git-practice/
│
├── index.html
├── about.html
├── team.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
└── README.md
```

---

## 🌿 Branch Naming Convention

Use the following naming convention:

```
feature/home
feature/about
feature/team
feature/contact
feature/style
```

---

## 📝 Commit Message Convention

Write clear and meaningful commit messages.

Examples:

```
Add homepage layout
Create navigation bar
Fix footer alignment
Update contact form
Improve responsive design
```

Avoid commit messages like:

```
update
changes
done
fix
```

---

## 🔄 Workflow

1. Clone the repository.
2. Create your feature branch.
3. Make your changes.
4. Commit your work.
5. Push your branch.
6. Open a Pull Request.
7. Request code review.
8. Resolve review comments.
9. Merge into `main`.
10. Pull the latest changes.

---

## 📌 Practice Tasks

- [ ] Clone the repository
- [ ] Create a feature branch
- [ ] Make multiple commits
- [ ] Push branch to GitHub
- [ ] Create a Pull Request
- [ ] Review another member's PR
- [ ] Resolve a merge conflict
- [ ] Create and close an Issue
- [ ] Use Git Stash
- [ ] Cherry-pick a commit
- [ ] Revert a commit
- [ ] Reset a branch
- [ ] Add a Git tag
- [ ] Create Release v1.0

---

## 📜 Rules

- ❌ Do not push directly to `main`.
- ✅ Create a new branch for every task.
- ✅ Keep commits small and meaningful.
- ✅ Review at least one teammate's Pull Request.
- ✅ Resolve merge conflicts yourself.
- ✅ Pull the latest changes before starting new work.
- ✅ Ask questions and help each other learn.

---

## 🏁 Goal

This repository is **not about building a perfect website**.

It is about learning how professional software teams collaborate using Git and GitHub.

After completing this practice, we should be confident enough to work together on larger projects without confusion or conflicts.

---

## 📚 Useful Git Commands

```bash
# Clone repository
git clone <repository-url>

# Create a new branch
git checkout -b feature/branch-name

# Check status
git status

# Stage files
git add .

# Commit changes
git commit -m "Your commit message"

# Push branch
git push origin feature/branch-name

# Pull latest changes
git pull origin main

# View branches
git branch

# Switch branch
git checkout branch-name

# Delete local branch
git branch -d branch-name

# Stash changes
git stash
git stash pop

# Cherry-pick
git cherry-pick <commit-id>

# Revert commit
git revert <commit-id>

# Create tag
git tag v1.0
git push origin v1.0
```

---

## 🎉 Happy Learning!

Let's build good Git habits before building great software.
