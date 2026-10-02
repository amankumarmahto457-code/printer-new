# Printer Services Website

Static site (HTML/CSS/JS). No build step.

## 1. Edit your details
Open `site.js` and change the `var C={...}` line (business name, phone, email, hours, address).
Phone is already set to +1 (844) 516-9721.

## 2. Replace the domain
Find/replace `yourdomain.com` with your real domain in `index.html`, `sitemap.xml`, `robots.txt`.

## 3. GitHub
```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## 4. Vercel
1. vercel.com -> Add New -> Project -> import the GitHub repo.
2. Framework Preset: **Other**. Leave build command and output directory empty.
3. Deploy.
4. Project -> Settings -> Domains -> add your domain and set the DNS records Vercel shows.
5. Confirm HTTPS works.

## Before running Google Ads
- Complete Advertiser Verification (tech support) in Google Ads.
- Use real business name, address, email and hours; they must match your verification.
- Keep the "independent, not affiliated with Canon/HP/Epson" disclaimer. No "official" wording, no brand logos.
- Ad phone number must match the page number (or use a Google forwarding number as call asset).
- Check these URLs load: /privacy /terms /disclaimer /robots.txt /sitemap.xml
