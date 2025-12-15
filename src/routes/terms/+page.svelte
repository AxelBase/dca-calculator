<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Simple DCA Calculator</title>
  <meta name="description" content="Review the terms of use for the Simple DCA Calculator, a free client-side tool provided as-is for cryptocurrency investment tracking." />
  <meta property="og:title" content="Terms and Conditions | Simple DCA Calculator" />
  <meta property="og:description" content="Review the terms of use for the Simple DCA Calculator, a free client-side tool provided as-is for cryptocurrency investment tracking." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 15, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Simple DCA Calculator</strong> ("the Tool"), a free web utility for calculating average entry price in Dollar-Cost Averaging strategies, you agree to these Terms and Conditions. If you do not agree, please do not use the Tool.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a <strong>client-side static web application</strong> that performs calculations locally in your browser. It helps users track total investment, total units acquired, and average entry price for cryptocurrency holdings. No data is stored or transmitted.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted activities include:</p>
    <ul>
      <li>Inputting investment data to calculate averages.</li>
      <li>Viewing results and summaries.</li>
      <li>Using the Tool offline after initial load.</li>
    </ul>
    <p>You agree not to misuse the Tool, including attempting to reverse-engineer, distribute modified versions without proper attribution, or use it for illegal purposes.</p>

    <h2>4. No Financial Advice</h2>
    <p><strong>The Tool does not provide financial, investment, or tax advice.</strong> All calculations are mathematical only and based solely on user-provided inputs. Cryptocurrency investing involves substantial risk. You are solely responsible for your investment decisions and should consult qualified professionals.</p>

    <h2>5. Accuracy and Reliability</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind. While we strive for accuracy in calculations, we do not guarantee error-free operation. Users should verify results independently.</p>

    <h2>6. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool, including but not limited to financial losses from incorrect calculations or investment decisions.</p>

    <h2>7. Intellectual Property</h2>
    <p>The Tool's source code is open-source and available on GitHub under a permissive license. You may fork, modify, and redistribute provided you retain attribution and license notices.</p>

    <h2>8. Third-Party Links</h2>
    <p>The Tool may contain links to external resources (e.g., blog articles). We are not responsible for the content or availability of third-party sites.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may update these Terms periodically. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms are governed by general internet usage principles. Disputes, if any, should be addressed through open communication.</p>

    <p class="italic-note">Thank you for using the Simple DCA Calculator responsibly. We hope it supports your long-term investment journey.</p>
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