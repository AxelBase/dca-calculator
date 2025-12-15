<!-- src/routes/privacy/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Simple DCA Calculator</title>
  <meta name="description" content="Read our privacy policy for the Simple DCA Calculator – a fully client-side tool that collects no personal data or usage information." />
  <meta property="og:title" content="Privacy Policy | Simple DCA Calculator" />
  <meta property="og:description" content="Read our privacy policy for the Simple DCA Calculator – a fully client-side tool that collects no personal data or usage information." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 15, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Simple DCA Calculator</strong>, a free, open-source web utility designed to help cryptocurrency investors track their Dollar-Cost Averaging strategy by calculating average entry price. This tool operates <strong>entirely in your browser</strong> with a strict <em>privacy-by-design</em> approach. We do not collect, store, transmit, or process any personal information. This Privacy Policy explains our practices clearly so you can use the calculator with complete confidence.</p>

    <h2>2. No Data Collection</h2>
    <p>The Simple DCA Calculator is built as a <strong>stateless static site</strong>. All calculations and data handling occur exclusively on your device. We do not collect:</p>
    <ul>
      <li><strong>Personal information</strong> such as names, email addresses, or contact details.</li>
      <li><strong>Investment data</strong> including amounts, prices, quantities, or any entries you input.</li>
      <li><strong>Usage analytics</strong> such as IP addresses, browser type, device information, or visit duration.</li>
      <li><strong>Tracking data</strong> via cookies, pixels, or similar technologies.</li>
    </ul>
    <p>Your inputs remain <em>only in your browser's memory</em> during the session and are cleared when you close or refresh the page.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the calculator:</p>
    <ul>
      <li>All mathematical operations (total investment, total units, average entry price) are performed <strong>client-side using pure JavaScript</strong>.</li>
      <li>No information is ever sent to any server, including ours.</li>
      <li>Features like adding/removing entries or displaying results happen instantly in your browser without external requests.</li>
      <li>The site is hosted as static files (HTML, CSS, JS) with no backend or database.</li>
    </ul>
    <p>This architecture guarantees <strong>100% data isolation</strong> – your investment details never leave your device.</p>

    <h2>4. Third-Party Services</h2>
    <p>We use <strong>Bootstrap via CDN</strong> solely for styling and basic interactive components. These requests load only static CSS and JavaScript files and do not enable tracking or data collection. No analytics providers, advertising networks, or social media integrations are present.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>The Simple DCA Calculator <strong>does not use cookies</strong>, localStorage for persistence, session storage beyond temporary calculations, or any tracking mechanisms. Your experience is completely anonymous.</p>

    <h2>6. Security Considerations</h2>
    <p>Since no data is transmitted or stored remotely, traditional server-side risks do not apply. We recommend using the tool on a secure, updated browser and avoiding public or shared devices when entering sensitive investment information.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Changes will be reflected on this page with an updated effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority. By using the Simple DCA Calculator, you benefit from a tool that respects your data completely.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>