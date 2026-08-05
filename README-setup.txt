SETUP NOTES FOR arjunrsharma.com
==================================

1. UPLOADING
   index.html is fully self contained (no separate CSS/JS files to manage).
   Upload it as index.html to the root of your hosting for arjunrsharma.com,
   through whatever host you're using (Netlify, Vercel, GitHub Pages, cPanel, etc).

2. CONTACT FORM (required step)
   The form currently points to a placeholder:
     https://formspree.io/f/YOUR_FORM_ID
   To make it work:
     a. Create a free account at https://formspree.io
     b. Create a new form, it will give you a real endpoint like
        https://formspree.io/f/abcd1234
     c. Open index.html, find the line starting with:
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        and replace YOUR_FORM_ID with your real ID.
   Formspree's free tier is enough for a low volume contact form like this.

3. EMAIL ADDRESS
   The site now shows: arjunrsharma31@gmail.com
   This keeps it separate from your work email (jumpcontent.in), which is the
   right call for independent consulting work.

4. WHAT'S DELIBERATE IN THE COPY (don't remove without thinking it through)
   - The "availability note" on the hero and the "no conflicts" language in
     About, Services, and Why sections openly names your current employer
     (per your choice) but frames the work as small scale, separate, and
     conflict checked. This is the main thing keeping the site low risk.
   - Client and brand names are listed as part of your work history, not as
     personal client relationships you're claiming credit for owning. If any
     employer asks you to remove specific brand names, that's an easy edit,
     search for the relevant <span class="chip"> line.
   - No paid media or performance marketing is offered anywhere on the site,
     only SEO and SEO-optimized website builds, as requested.

5. OPTIONAL NEXT STEPS
   - Swap in real results or numbers once you have client permission to share them.
     Right now there are no invented statistics, all claims are qualitative.
   - Add a favicon (a small square logo file) if you want a browser tab icon.
   - Consider a simple analytics tool (Plausible, Fathom) if you want to see
     how many people visit before you invest more time in this.
