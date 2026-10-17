BENTLEY OUTDOORS — PREMIUM NETLIFY WEBSITE

PAGES INCLUDED
- index.html          Home page with services, inspiration, process and working Netlify inquiry form
- about.html          About Bentley Outdoors
- services.html       Service overview
- projects.html       Inspiration gallery (sample visuals, not claimed completed client projects)
- process.html        How an inquiry progresses
- service-areas.html  Service availability information without invented locations
- contact.html        Dedicated contact page with Netlify form and image uploads
- success.html        Form submission confirmation page
- styles.css          Responsive styling
- site.js             Mobile menu and file validation
- assets/             Logo and image assets
- package.json, build.js, netlify.toml for Netlify deployment

GITHUB + NETLIFY DEPLOY
1. Extract this ZIP on your computer.
2. Upload the CONTENTS of this folder to the ROOT of your GitHub repository (do not upload the ZIP itself).
3. Commit the changes.
4. In Netlify Build settings set:
   Build command: npm run build
   Publish directory: dist
   Base directory: leave blank
5. Trigger a fresh deploy.
6. In Netlify > Forms, enable form detection if it is not enabled, then redeploy.
7. In Netlify > Forms > Submission notifications, add an email notification to the business email you actually use.

FORMS AND IMAGE UPLOADS
- The home page and contact page use native Netlify Forms HTML forms; they are not intercepted by JavaScript.
- Each form has 3 separate image fields because Netlify supports one uploaded file per field.
- The form limits the total selected image size to 7.5 MB to stay below Netlify's documented 8 MB request limit.
- Test submissions only after the site is deployed and form detection is enabled. Check Netlify > Forms for submissions.

BEFORE PUBLIC LAUNCH
- Confirm the listed service categories match what Bentley Outdoors really provides; remove anything not offered.
- Replace inspiration images with authentic completed project photos if you want to present a portfolio of finished work.
- Confirm business service areas and add real business contact details if desired. No unverified phone number, email or location has been invented in this package.
- Set email notifications in Netlify so inquiries are not missed.
