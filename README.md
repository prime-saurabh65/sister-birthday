# A birthday website for your sister 💗

## 1. Run locally
Install Node.js (LTS), open this folder in VS Code, and run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## 2. Personalize
Edit `src/data/content.js`:
- Change `sisterName`, `fromName`, `headline`, and `letter`.
- Replace `YOUR_EMAIL@example.com` with YOUR real email to receive Q&A answers.
- Edit the five questions in `questions`.
- Put photos in `public/photos/` and uncomment/edit the `photos` entries. Example: `{ src: 'photos/us1.jpg', caption: 'Best day ever!' }`.

**Privacy:** Answers are submitted to the third-party FormSubmit service, which forwards them to your email. Do not ask for sensitive personal information. The receiving email is visible in the site's source. The first submission may trigger a verification email: verify your address and test before sharing.

## 3. Deploy to GitHub Pages
1. Create a new **public** GitHub repository, e.g. `sister-birthday`.
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sister-birthday.git
git push -u origin main
```

3. Run `npm install -D gh-pages`.
4. Add these scripts to the existing `scripts` section of `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

5. Run `npm run deploy`.
6. In GitHub repository Settings → Pages, set **Deploy from a branch**, branch **gh-pages**, folder **/(root)**, then Save.
7. Your URL will usually be `https://YOUR_USERNAME.github.io/sister-birthday/` (replace placeholders). Wait a few minutes for publishing.

**Important:** The `vite.config.js` file already sets `base: './'` so asset paths work on GitHub Pages.

## 4. Test before sharing
Check on mobile, confirm photos load, submit a test Q&A, complete FormSubmit verification, and confirm the answers reach your inbox.
