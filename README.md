# Keeply Website — GitHub Pages

A responsive landing page for the Keeply Android APK.

## Files

- `index.html` — page structure and content
- `style.css` — complete responsive design
- `script.js` — APK download link configuration

## 1. Put your APK on GitHub

Recommended:

1. Create a public GitHub repository, for example `keeply-app`.
2. Upload the website files.
3. Create a GitHub Release.
4. Attach your `Keeply.apk` file to the release.
5. Copy the APK asset URL.

A typical release URL looks like:

`https://github.com/YOUR_USERNAME/keeply-app/releases/download/v1.0.0/Keeply.apk`

## 2. Add the APK URL

Open `script.js` and replace:

`const APK_URL = "YOUR_APK_LINK_HERE";`

with your actual APK URL.

## 3. Enable GitHub Pages

On GitHub:

Settings → Pages → Build and deployment → Deploy from a branch

Select:

- Branch: `main`
- Folder: `/ (root)`

Save it. GitHub will give you a website URL such as:

`https://YOUR_USERNAME.github.io/keeply-app/`

## 4. Updating the APK

Upload a new APK to a new GitHub Release and update `APK_URL` if the asset URL changes.

## Important security note

The website intentionally explains that Android may show Play Protect, browser, Samsung, or other security warnings for APKs installed outside Google Play. Do not tell users to disable security protections blindly. Users should install only APKs from a source they trust and verify the file before installation.
