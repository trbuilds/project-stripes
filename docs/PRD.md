**PROJECT STRIPES**

Product Requirement Document

  -----------------------------------------------------------------------
  Document Version      2.0
  --------------------- -------------------------------------------------
  Status                Draft

  Date                  March 2026

  Website               www.projectstripes.xyz

  Prepared by           Tanvi / Hatmaker Studio

  Target Stack          Next.js + Tailwind CSS + Vercel
  -----------------------------------------------------------------------

**Change Log --- v2.0**

  ------------------------------------------------------------------------------------------------------------
  **\#**   **Change**
  -------- ---------------------------------------------------------------------------------------------------
  1        Contact form: Formspree wired up in V1 (no longer a placeholder)

  2        Font updated to Almarai (ExtraBold 800, Regular 400, Light 300)

  3        Brand colours updated: red #B01131, accent #F47E2F, black #111111, white #FAFAFA, grey #CCCCCC

  4        Shop page and Individual Product Page moved to V2 scope

  5        Community Gallery changed from static 4-column strip to carousel with left/right arrow navigation

  6        Footer copyright updated to 2026

  7        YouTube icon removed; replaced with Volunteer placeholder icon in navbar/floating bar

  8        Recommended Project Structure rewritten as a readable table (was a raw code block)

  9        Instagram Feed embed added as a new V1 Home section (moved forward from V2)

  10       SEO due diligence checklist added to V1 Launch Checklist
  ------------------------------------------------------------------------------------------------------------

**1. Project Overview**

Project Stripes is a cause-commerce brand dedicated to raising awareness about threatened and endangered animals. The website serves as the primary storefront, community hub, and mission communication platform. It currently runs on Wix (Business plan) which carries an expensive annual subscription.

This PRD defines the requirements to rebuild the website from scratch using a free, self-hosted stack --- replicating the exact look, feel, and functionality of the current site while establishing a scalable foundation for future dynamic features.

**1.1 Objectives**

-   Eliminate Wix subscription costs by migrating to a free self-hosted stack

-   Exactly replicate the visual identity and layout of the current site

-   Build a clean, maintainable codebase structured for future V2 dynamic features

-   Achieve full mobile responsiveness across all pages

-   Maintain SEO performance and Lighthouse scores

**1.2 Tech Stack**

  --------------------------------------------------------------------------------------------------------------------------------------------
  **Layer**                  **Technology**            **Purpose**                                                              **Cost**
  -------------------------- ------------------------- ------------------------------------------------------------------------ --------------
  Framework                  Next.js 14 (App Router)   React-based SSG/SSR --- handles V1 static + V2 dynamic in one codebase   Free

  Styling                    Tailwind CSS              Utility-first CSS with brand token config                                Free

  Hosting                    Vercel                    Zero-config deployment, CDN edge, 99.9% uptime                           Free

  Contact Form               Formspree                 Server-side form-to-email --- wired up in V1                             Free (50/mo)

  Product Data (V1)          JSON file                 Static product catalog, no database needed                               Free

  Database (V2)              Supabase                  Postgres --- products, orders, users, storage                            Free tier

  Payments (V2)              Razorpay                  India-first gateway: UPI, Netbanking, wallets                            2% per txn

  Auth (V2)                  Supabase Auth             Customer accounts, admin login                                           Free tier

  Transactional Email (V2)   Resend                    Order confirmation and shipping notification emails                      Free (3k/mo)

  Fonts                      Almarai (Google Fonts)    ExtraBold 800, Regular 400, Light 300                                    Free
  --------------------------------------------------------------------------------------------------------------------------------------------

**2. Design System**

**2.1 Colour Palette**

  ----------------------------------------------------------------------------------------------------
  **Token**                   **Hex Value**   **Tailwind Key**   **Usage**
  --------------------------- --------------- ------------------ -------------------------------------
  \--color-bg-primary         #111111         ps-black           Main page and navbar background

  \--color-bg-section         #1A1A1A         ps-dark            Card and form field backgrounds

  \--color-accent-primary     #B01131         ps-red             Primary CTA buttons, key highlights

  \--color-accent-secondary   #F47E2F         ps-orange          Secondary highlights, hover accents

  \--color-text-primary       #FAFAFA         ps-white           Main text on dark backgrounds

  \--color-text-secondary     #CCCCCC         ps-grey            Body copy, captions, placeholders

  \--color-watermark          #1F1F1F         ps-watermark       #ForTheFauna diagonal pattern fill

  \--color-border             #2A2A2A         ps-border          Form field borders, dividers
  ----------------------------------------------------------------------------------------------------

**2.2 Typography**

Primary font: Almarai (Arabic-origin, Latin-supported Google Font). Load all three weights via Google Fonts link tag in layout.tsx.

  -------------------------------------------------------------------------------------------------------
  **Element**           **Font**   **Weight**      **Size (approx)**   **Style**
  --------------------- ---------- --------------- ------------------- ----------------------------------
  Logo                  Almarai    ExtraBold 800   28--32px            Uppercase

  Section Headings      Almarai    ExtraBold 800   40--64px            Uppercase

  Hero Headline         Almarai    ExtraBold 800   56--80px            Mixed case --- red accent word

  Sub-headings          Almarai    Regular 400     24--32px            Sentence case

  Body Copy             Almarai    Light 300       16--18px            Sentence case, line-height 1.7

  Button Labels         Almarai    ExtraBold 800   14--16px            Uppercase, letter-spacing 0.08em

  Nav Links             Almarai    Regular 400     14px                Uppercase

  Footer / Legal Text   Almarai    Light 300       13px                Muted, #CCCCCC
  -------------------------------------------------------------------------------------------------------

**2.3 Tailwind Configuration**

Extend tailwind.config.ts with the following brand tokens so every colour and font is accessible as a utility class throughout the codebase:

  -------------------------------------------------------------------------------------
  **Config Key**       **Value**                         **Example Tailwind Class**
  -------------------- --------------------------------- ------------------------------
  colors.ps-black      #111111                           bg-ps-black, text-ps-black

  colors.ps-dark       #1A1A1A                           bg-ps-dark

  colors.ps-red        #B01131                           bg-ps-red, text-ps-red

  colors.ps-orange     #F47E2F                           bg-ps-orange, text-ps-orange

  colors.ps-white      #FAFAFA                           text-ps-white, bg-ps-white

  colors.ps-grey       #CCCCCC                           text-ps-grey

  fontFamily.display   \[\'Almarai\', \'sans-serif\'\]   font-display

  fontFamily.body      \[\'Almarai\', \'sans-serif\'\]   font-body
  -------------------------------------------------------------------------------------

**2.4 Component Patterns**

-   Primary CTA: Solid red (#B01131) fill, #FAFAFA uppercase ExtraBold text, sharp corners (no border-radius), hover darkens to 10% opacity overlay

-   Secondary CTA: Transparent fill, 1.5px #FAFAFA border, #FAFAFA uppercase ExtraBold text, hover fills with #FAFAFA at 10% opacity

-   Navbar: Full-width #111111 bar, logo top-left, nav links center-right, Volunteer icon + Instagram icon far right

-   Floating social icons: Fixed right edge of viewport, Instagram + Volunteer icons in #FAFAFA

-   Background watermark: Repeating diagonal \'#ForTheFauna\' text in Almarai Light at \~8% opacity, rotated -30deg

-   Section layout: Full-viewport-width sections, max-width 1200px content container, horizontally centered

-   Carousel arrows: Left/right chevron buttons, semi-transparent dark background, #FAFAFA icon, positioned absolutely on the gallery strip

**3. Scope & Versioning**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Version**               **Scope**                                                                                                                                **Status**
  ------------------------- ---------------------------------------------------------------------------------------------------------------------------------------- ---------------
  V1 --- Static Site        Home page (all sections including Instagram feed + Formspree contact form), legal pages, full mobile responsiveness, SEO metadata        Current build

  V2 --- Dynamic Commerce   Shop page, individual product pages, cart, Razorpay checkout, customer accounts, order management, admin backend, transactional emails   Future phase
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**4. Pages --- V1 (Static)**

**4.1 Home Page (/)**

The home page is a single long-scrolling page composed of the following sections in order:

**Section 1 --- Hero**

  --------------------------------------------------------------------------------------------------------------------------------------------------
  **Element**        **Specification**
  ------------------ -------------------------------------------------------------------------------------------------------------------------------
  Background         Full-viewport #111111 with repeating diagonal \'#ForTheFauna\' watermark text at \~8% opacity, Almarai Light, -30deg rotation

  Headline           Raising Awareness about \[white\] + Endangered \[red #B01131\] + Animals \[white\] --- Almarai ExtraBold, large, centered

  CTA 1              SHOP FOR A CAUSE --- solid #B01131 button, links to /shop (placeholder in V1, active route in V2)

  CTA 2              JOIN COMMUNITY --- outline #FAFAFA button, links to Instagram (@projectstripes)

  Scroll indicator   Chevron-down icon, #FAFAFA, centered below CTAs, subtle bounce animation

  Floating icons     Instagram icon + Volunteer icon fixed to right edge of viewport, #FAFAFA
  --------------------------------------------------------------------------------------------------------------------------------------------------

**Section 2 --- Get Involved**

  ------------------------------------------------------------------------------------------------------------------------
  **Element**        **Specification**
  ------------------ -----------------------------------------------------------------------------------------------------
  Layout             2-column: text left (\~45%), product image collage right (\~55%). Stacks to single column on mobile

  Heading            Get Involved! --- Almarai ExtraBold, #B01131, large

  Body text          Impact copy: purchase contributes to conservation --- Almarai Light, #CCCCCC

  Highlight phrase   It\'s a win-win! --- inline red highlight (#B01131 background or text accent)

  CTA                SHOP WITH PURPOSE --- outline #FAFAFA button, links to /shop (V1 placeholder, V2 active)

  Right column       Static product collage image (Project Mammals grid graphic), lazy-loaded
  ------------------------------------------------------------------------------------------------------------------------

**Section 3 --- Community Gallery (Carousel)**

  --------------------------------------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- ---------------------------------------------------------------------------------------------------------------------------------
  Layout           Full-width horizontal carousel --- displays 4 photos at a time on desktop, 2 on tablet, 1 on mobile

  Navigation       Left arrow and right arrow buttons, absolutely positioned on the carousel edges, semi-transparent dark bg, #FAFAFA chevron icon

  Content          Lifestyle photos of customers wearing Project Stripes tees --- 4+ images, sourced from current site

  Interaction      Arrow click advances or retreats by one image with smooth CSS transition (translate). No autoplay

  CTA              JOIN THE CAUSE --- solid #B01131 button, centered below carousel, links to /shop

  Accessibility    Arrow buttons have aria-label (\'Previous photo\', \'Next photo\'). Images have descriptive alt text

  Implementation   Pure React state (useState for current index) --- no external carousel library needed
  --------------------------------------------------------------------------------------------------------------------------------------------------

**Section 4 --- Mission (About)**

  -----------------------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- ------------------------------------------------------------------------------------------------------------------
  Layout           Full-bleed wildlife photo background (elephant image), dark overlay for text legibility, text block on left half

  Anchor           id=\'about\' --- targeted by nav ABOUT link

  Heading          MISSION --- Almarai ExtraBold, #FAFAFA, large

  Body text        Full mission statement, 2 paragraphs --- Almarai Light, #FAFAFA

  CTA              VOLUNTEER TO HELP --- outline #FAFAFA button, links to external Google Form
  -----------------------------------------------------------------------------------------------------------------------------------

**Section 5 --- Instagram Feed (NEW --- V1)**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Element**         **Specification**
  ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------
  Purpose             Show recent Instagram activity to encourage visitors to follow \@projectstripes before they leave the page

  Layout              Full-width section, dark background (#111111), centred heading above the feed grid

  Heading             FOLLOW OUR JOURNEY --- Almarai ExtraBold, #FAFAFA

  Sub-heading         \@projectstripes --- Almarai Light, #CCCCCC, links to Instagram profile

  Feed display        3x2 grid of the 6 most recent Instagram posts as static image tiles (manually updated or via embed)

  V1 implementation   Use SnapWidget, Behold.so, or Elfsight free-tier Instagram embed widget (iframe). No Instagram API credentials required for embed-based tools

  CTA                 FOLLOW ON INSTAGRAM --- outline or solid #B01131 button, opens Instagram in new tab

  Fallback            If embed fails or is unavailable, display a static grid of 6 curated Instagram screenshots as image assets
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Section 6 --- Contact**

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- ----------------------------------------------------------------------------------------------------------------------------
  Layout           2-column: form left (\~55%), greeting text right (\~45%). Stacks on mobile

  Anchor           id=\'contact\' --- targeted by nav CONTACT link

  Form fields      Full Name (required), Email (required), Phone (optional, placeholder: \'Optional --- faster replies\'), Message (required)

  Submit button    SEND MESSAGE --- full-width #FAFAFA button with #111111 text, Almarai ExtraBold

  Form backend     Formspree --- form action points to Formspree endpoint. Submissions emailed to Project Stripes inbox

  Success state    On successful send: inline success message \'Message sent! We will get back to you shortly.\'

  Error state      On failure: inline error message \'Something went wrong. Please try again or email us directly.\'

  Response time    Include copy: \'We reply within 48 hours\' in the right column

  Right column     Hello! greeting, contact invitation copy, 48-hour response time note --- Almarai Light, #FAFAFA
  ---------------------------------------------------------------------------------------------------------------------------------------------

**Section 7 --- Footer**

  -------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- --------------------------------------------------------------------------------------------------
  Layout           Full-width #111111 footer, 2-column: copyright left, legal links right

  Left             2026 by Project Stripes. Powered and secured by Hatmaker Studio --- Almarai Light, #CCCCCC, 13px

  Right links      Shipping & Returns \| Terms & Conditions \| Privacy Policy --- each links to the respective page

  Colours          Link text #CCCCCC default, #FAFAFA on hover
  -------------------------------------------------------------------------------------------------------------------

**5. Navigation**

  ----------------------------------------------------------------------------------------------------------------------------------------------
  **Nav Item**             **Link Target**                        **V1 Behaviour**
  ------------------------ -------------------------------------- ------------------------------------------------------------------------------
  PROJECT STRIPES (logo)   / (home)                               Navigate to home page

  HOME                     / (home)                               Navigate to home page

  SHOP                     /shop                                  V1: placeholder page with \'Coming Soon\' or redirect to home. V2: full shop

  ABOUT                    /#about                                Smooth scroll to Mission section

  CONTACT                  /#contact                              Smooth scroll to Contact section

  Instagram icon           https://instagram.com/projectstripes   Opens in new tab

  Volunteer icon           #contact or /volunteer                 Scrolls to contact section or opens volunteer Google Form in new tab

  Floating: Instagram      https://instagram.com/projectstripes   Fixed right edge, opens in new tab

  Floating: Volunteer      Google Form URL                        Fixed right edge, opens volunteer form in new tab
  ----------------------------------------------------------------------------------------------------------------------------------------------

**6. Legal Pages --- V1**

  --------------------------------------------------------------------------------------------------------------------------
  **Page**             **Route**           **Content Source**            **Layout**
  -------------------- ------------------- ----------------------------- ---------------------------------------------------
  Shipping & Returns   /shipping           Copy from existing Wix page   Shared navbar + footer, max-width prose container

  Terms & Conditions   /terms-conditions   Copy from existing Wix page   Shared navbar + footer, max-width prose container

  Privacy Policy       /privacy-policy     Copy from existing Wix page   Shared navbar + footer, max-width prose container
  --------------------------------------------------------------------------------------------------------------------------

All legal page text is rendered as static MDX or hardcoded JSX. Typography: Almarai Regular 400 for headings, Light 300 for body. Text colour #111111 on #FAFAFA background (inverted from main site for readability on long-form content).

**7. Pages --- V2 (Out of Scope for V1)**

**7.1 Shop Page (/shop)**

  ---------------------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- ----------------------------------------------------------------------------------------------------------------
  Layout           Responsive product grid: 4 columns desktop, 2 tablet, 1 mobile

  Product card     Image (hover swaps to alternate view), product name, price in INR (INR 849), size selector, Add to Cart button

  Data source      Supabase products table (migrated from products.json)

  Cart behaviour   Add to Cart stores item in React context / localStorage with persistent session

  Filtering        Filter by category (Mammal Tees, Bird Tees, etc.)
  ---------------------------------------------------------------------------------------------------------------------------------

**7.2 Individual Product Page (/shop/\[slug\])**

  -----------------------------------------------------------------------------------------------------------------------------------------
  **Element**      **Specification**
  ---------------- ------------------------------------------------------------------------------------------------------------------------
  Route            Dynamic --- /shop/grevy-zebra, /shop/orangutan, etc.

  Content          Large product images (swipeable gallery), name, price, impact description, size selector, Add to Cart, stock indicator

  Data source      Supabase --- fetched by product slug

  SEO              Dynamic meta title and OG image per product
  -----------------------------------------------------------------------------------------------------------------------------------------

**8. User Stories**

**8.1 Visitor Stories --- V1 Static**

  --------------------------------------------------------------------------------------------------------------------------------------------------
  **ID**   **User Story**                                  **Acceptance Criteria**                                                       **Phase**
  -------- ----------------------------------------------- ----------------------------------------------------------------------------- -----------
  VS-01    See mission explanation on homepage             Mission section visible on scroll with heading and 2-paragraph copy           V1

  VS-02    View info about endangered animals supported    Product references and mission copy name specific endangered animals          V1

  VS-03    See how purchases contribute to conservation    Get Involved section clearly explains purchase-to-impact chain                V1

  VS-08    Clear CTAs throughout the page                  Minimum 3 CTAs visible: Shop For A Cause, Join Community, Volunteer To Help   V1

  VS-09    Link to Instagram page                          Instagram icon in navbar and floating bar links to \@projectstripes           V1

  VS-10    See Instagram content previews on site          Instagram feed section on home page shows 6 recent posts                      V1

  VS-11    Understand what I gain by following             Get Involved section or Instagram section explains community value            V1

  VS-12    Social proof of an active community             Community gallery carousel shows real customers wearing products              V1

  VS-13    Easily find shipping policy                     Shipping & Returns link in footer navigates to /shipping                      V1

  VS-14    Know which countries are shipped to             /shipping page lists countries and estimated delivery times                   V1

  VS-15    Review return/refund policy before purchasing   /refund-cancellations or /shipping page covers return conditions              V1

  VS-16    Contact Project Stripes with a question         Contact form on home page submits via Formspree with success/error feedback   V1

  VS-17    Know the expected response time                 Contact section displays \'We reply within 48 hours\'                         V1

  VS-18    View volunteer or team join opportunities       Mission section shows Volunteer To Help CTA linking to Google Form            V1

  VS-20    Review privacy policy                           Privacy Policy link in footer navigates to /privacy-policy                    V1

  VS-21    Site works well on my phone                     Fully responsive at 375px, 768px, 1024px, 1440px --- all content readable     V1
  --------------------------------------------------------------------------------------------------------------------------------------------------

**8.2 Visitor Stories --- V2 Dynamic**

  ---------------------------------------------------------------------------------------------------
  **ID**   **User Story**                                                        **Phase**
  -------- --------------------------------------------------------------------- --------------------
  VS-04    Browse available products with filtering                              V2

  VS-05    View detailed product pages with images, price, description, impact   V2

  VS-06    See stock availability indicator on products                          V2

  VS-07    Add a product to my cart without creating an account                  V2

  VS-19    Submit a volunteer application or expression of interest              V2
  ---------------------------------------------------------------------------------------------------

**8.3 Customer Stories --- V2 Dynamic**

  ----------------------------------------------------------------------------------------------
  **ID**   **User Story**                                                   **Phase**
  -------- ---------------------------------------------------------------- --------------------
  CS-01    Review cart items before checkout                                V2

  CS-02    Update quantities or remove items from my cart                   V2

  CS-03    Securely enter shipping and payment information                  V2

  CS-04    See total price including shipping before paying                 V2

  CS-05    Receive on-screen order confirmation after payment               V2

  CS-06    Receive a confirmation email with my order details               V2

  CS-07    See a thank-you message that reinforces my conservation impact   V2

  CS-08    Create an account to track my orders                             V2

  CS-09    Log in as a returning customer and view past orders              V2

  CS-11    See estimated delivery time during checkout                      V2

  CS-12    Receive shipping confirmation when my order is dispatched        V2

  CS-17    See a clear error message if my payment fails                    V2

  CS-18    Have my cart persist if I accidentally close the browser         V2

  CS-21    Reset my password if I forget it                                 V2
  ----------------------------------------------------------------------------------------------

**8.4 Customer Stories --- Static (V1)**

  ----------------------------------------------------------------------------------------------------------------------------------------
  **ID**   **User Story**                                     **Acceptance Criteria**                                          **Phase**
  -------- -------------------------------------------------- ---------------------------------------------------------------- -----------
  CS-13    Know how to request a return or refund             Returns process documented on Shipping page                      V1

  CS-14    Understand return eligibility and timelines        Timelines and conditions stated clearly on Shipping page         V1

  CS-15    Contact support about delivery or payment issues   Contact form and email address accessible from Shipping page     V1

  CS-19    Know what to do if my order does not arrive        Instructions documented on Shipping or Returns page              V1

  CS-20    See trust signals for secure payment               Razorpay logo / security badge shown on site (V1 static asset)   V1
  ----------------------------------------------------------------------------------------------------------------------------------------

**8.5 Admin Stories --- V2 Backend App**

The admin panel is a separate authenticated Next.js dashboard that replicates the management features previously provided by Wix. All admin stories are V2 scope.

  ----------------------------------------------------------------------------------------------------------------------------------------------
  **Category**         **Admin Stories**
  -------------------- -------------------------------------------------------------------------------------------------------------------------
  Product Management   Create products, edit details (price, description, images, stock), archive or remove products, track best-selling items

  Order Management     View all orders, view order details, update status (pending / shipped / completed), add tracking numbers

  Content Management   Update homepage copy, mission statements, impact metrics, Instagram link URLs, volunteer CTA links

  Customer Support     View Formspree contact submissions, mark as resolved, manage return requests, process refunds

  Volunteer Pipeline   Post volunteer opportunities, receive and review applications, shortlist and contact candidates

  Analytics            Track page visits, conversion rate, top products, Instagram link click-throughs via Vercel Analytics

  Finance              View total sales, order counts, shipping cost configuration by region, failed payment log

  Security             Secure login with Supabase Auth, encrypted customer passwords, admin-only route protection
  ----------------------------------------------------------------------------------------------------------------------------------------------

**9. Recommended Project Structure**

The table below lists every file and folder in the recommended codebase layout. Each entry includes its type and a plain-English description of what it does.

  ----------------------------------------------------------------------------------------------------------------------
  **Path / File**                     **Type**    **Purpose**
  ----------------------------------- ----------- ----------------------------------------------------------------------
  project-stripes/                    Root        Project root

  app/                                Directory   Next.js App Router --- all pages live here

  app/layout.tsx                      File        Global layout: Navbar + Footer shared across all pages

  app/page.tsx                        File        Home page (hero, get involved, gallery, mission, Instagram, contact)

  app/shop/page.tsx                   File        Shop page --- product grid (V2)

  app/shipping/page.tsx               File        Shipping & Returns static page

  app/terms-conditions/page.tsx       File        Terms & Conditions static page

  app/privacy-policy/page.tsx         File        Privacy Policy static page

  components/                         Directory   Reusable UI components

  components/Navbar.tsx               File        Top navigation bar with logo, links, icons

  components/Footer.tsx               File        Footer with copyright (2026) and legal links

  components/HeroSection.tsx          File        Full-viewport hero with headline and CTAs

  components/GetInvolvedSection.tsx   File        Two-column: impact copy + product collage image

  components/CommunityGallery.tsx     File        Carousel with left/right arrow navigation

  components/MissionSection.tsx       File        Full-bleed wildlife photo with mission text overlay

  components/InstagramFeed.tsx        File        Static Instagram embed / feed preview section (V1)

  components/ContactSection.tsx       File        Two-column contact form (Formspree) + greeting

  components/ProductCard.tsx          File        Product card for shop grid (V2)

  data/                               Directory   Static data files

  data/products.json                  File        Product catalog --- used in V1 shop grid, migrated to Supabase in V2

  public/                             Directory   Static assets served directly

  public/images/                      Directory   All photos, product images, lifestyle shots

  public/fonts/                       Directory   Almarai font files (if self-hosted)

  styles/                             Directory   Global CSS

  styles/globals.css                  File        Tailwind directives + CSS custom properties (brand tokens)

  tailwind.config.ts                  File        Extends Tailwind with Project Stripes brand colours and fonts

  next.config.ts                      File        Next.js config --- image domains, redirects
  ----------------------------------------------------------------------------------------------------------------------

**10. Non-Functional Requirements**

  -----------------------------------------------------------------------------------------------------------------------------------
  **Requirement**        **Target**                                 **How**
  ---------------------- ------------------------------------------ -----------------------------------------------------------------
  Performance            Lighthouse score \>= 90 all categories     Next.js static generation, next/image, font preloading

  Mobile                 375px to 1440px+ fully responsive          Tailwind responsive utilities (sm, md, lg, xl breakpoints)

  SEO                    Full metadata on every page                Next.js Metadata API --- title, description, OG, canonical

  Accessibility          WCAG 2.1 AA baseline                       Alt text on all images, keyboard nav, colour contrast \>= 4.5:1

  Browser support        Chrome, Safari, Firefox, Edge (last 2)     CSS variables + Tailwind autoprefixer

  Hosting uptime         99.9% via Vercel free tier                 Serverless + CDN edge network

  Image optimisation     WebP, lazy-loaded, blur placeholder        next/image component on all images

  Font loading           No layout shift on font load               Google Fonts with font-display: swap, preconnect link

  Carousel performance   No layout shift, smooth 60fps transition   CSS transform: translateX, will-change: transform

  Form reliability       Formspree delivers 100% to inbox           Formspree server-side handling, spam filter, success/error UI
  -----------------------------------------------------------------------------------------------------------------------------------

**11. V1 Launch Checklist**

**11.1 Pages & Content**

1.  Home page live with all 7 sections: Hero, Get Involved, Community Gallery, Mission, Instagram Feed, Contact, Footer

2.  Shipping & Returns page populated with accurate content from Wix site

3.  Terms & Conditions page populated with accurate content from Wix site

4.  Privacy Policy page populated with accurate content from Wix site

5.  Footer copyright reads \'2026 by Project Stripes\'

**11.2 Design & Layout**

6.  Visual design exactly matches current Wix site: colours, fonts, section order, spacing

7.  Almarai font loads correctly in all three weights (ExtraBold, Regular, Light)

8.  Brand colours applied correctly: red #B01131, accent #F47E2F, black #111111, white #FAFAFA, grey #CCCCCC

9.  Community Gallery carousel works with left/right arrows and smooth transition

10. Site is fully responsive and usable at 375px, 768px, 1024px, and 1440px

11. Floating icons on right edge show Instagram + Volunteer (no YouTube icon)

**11.3 Functionality**

12. All nav links and anchor-scroll targets (/#about, /#contact) work correctly

13. All external links (Instagram, volunteer Google Form) open in a new tab

14. Formspree contact form submits successfully and delivers to Project Stripes inbox

15. Contact form shows success message on send and error message on failure

16. Instagram feed section renders correctly (embed or static fallback)

17. Shop nav link shows a placeholder or \'Coming Soon\' state (not a broken page)

**11.4 SEO Due Diligence**

18. Unique \<title\> tag set for every page (Home, Shipping, Terms, Privacy)

19. Unique meta description set for every page (150-160 characters)

20. Open Graph tags set on all pages: og:title, og:description, og:image, og:url

21. og:image is a high-quality branded graphic at 1200x630px

22. Canonical URL tag on every page pointing to the correct URL

23. robots.txt file present at /robots.txt --- allows all crawlers

24. sitemap.xml generated and accessible at /sitemap.xml

25. All images have descriptive alt text (not blank, not \'image\')

26. Heading hierarchy is correct: one H1 per page, H2/H3 used in order

27. Google Search Console: site verified and sitemap submitted

28. Vercel Analytics enabled for traffic monitoring from day one

29. Page load speed: Lighthouse Performance \>= 90 on mobile and desktop

30. No broken internal links (run a link checker before launch)

31. Custom domain (projectstripes.xyz) connected, HTTPS active, www redirect configured

**12. V2 Technical Considerations**

  --------------------------------------------------------------------------------------------------------------
  **Feature**              **Recommended Approach**
  ------------------------ -------------------------------------------------------------------------------------
  Cart & checkout          React Context for cart state + Razorpay Orders API + webhook for order confirmation

  Customer auth            Supabase Auth --- email/password with optional Google OAuth

  Product catalog          Supabase PostgreSQL --- migrate products.json to products table

  Order management         Supabase tables: orders, order_items, shipping_status

  Transactional email      Resend --- free tier 3,000 emails/month, React Email templates

  Admin dashboard          Next.js /admin routes, protected by Supabase Auth middleware

  Analytics                Vercel Analytics (free) + Plausible self-hosted if deeper data needed

  Instagram embed (V2)     Upgrade embed to Instagram Basic Display API for live, auth-based feed refresh

  Shipping calculation     Shiprocket API --- India-first, rate calculation + tracking number integration

  Volunteer applications   Supabase table: volunteer_applications --- submitted via Next.js API route
  --------------------------------------------------------------------------------------------------------------

*End of Document --- Project Stripes PRD v2.0*
