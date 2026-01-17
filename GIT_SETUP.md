# Git Setup Instructions

Since `git` is not configured in this terminal environment, please run the following commands in your own terminal (PowerShell or Command Prompt) to push the code to your repository.

### 1. Initialize Repository
Navigate to the project folder:
```powershell
cd "c:\Users\Luke Needham\Documents\uk sourced site\vibe-agency"
```

Initialize Git:
```powershell
git init
```

### 2. Configure Ignore Files
Ensure `.gitignore` exists (I have already checked `.dockerignore` and created `.gcloudignore`, git will generally use `.gitignore` but we should make sure we don't commit `node_modules`).
Create/Update `.gitignore` if needed:
```powershell
echo "node_modules" >> .gitignore
echo ".next" >> .gitignore
echo ".env" >> .gitignore
```

### 3. Commit Code
Stage and commit all files:
```powershell
git add .
git commit -m "Initial commit: UK Sourced Ltd Vibe Agency"
```

### 4. Push to Remote
Replace `<YOUR_REPO_URL>` with your actual Git repository URL (e.g., from GitHub).

```powershell
git remote add origin <YOUR_REPO_URL>
git branch -M main
git push -u origin main
```

### 5. Deploy via Cloud Run (Console)
Once the code is in Git:
1. Go to **Google Cloud Console > Cloud Run**.
2. Click **Create Service**.
3. Select **"Continuously deploy new revisions from a source repository"**.
4. Connect your repo and select the `Dockerfile`.
