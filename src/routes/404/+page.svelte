<!-- src/routes/+error.svelte (SvelteKit 404 and error page) -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>404 — Page Not Found | Simple DCA Calculator</title>
  <meta name="description" content="The page you requested could not be found. Return to the Simple DCA Calculator home page or explore other sections." />
  <meta property="og:title" content="404 — Page Not Found | Simple DCA Calculator" />
  <meta property="og:description" content="The page you requested could not be found. Return to the Simple DCA Calculator home page or explore other sections." />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>404 Not Found</p>
  </div>

  <article class="prose">
    <h1>404 — Page Not Found</h1>

    <p class="post-meta">Last Updated: December 15, 2025</p>

    <p>We’re sorry — the page you’re looking for doesn’t exist or has been removed. This can happen if the URL was typed incorrectly, an old link was followed, or the content was reorganized.</p>

    <p>The good news is that the Simple DCA Calculator is still fully available and ready to help you track your average entry price.</p>

    <h2>Helpful Links</h2>
    <ul>
      <li><a href="{base}/">Home – Start calculating your DCA</a></li>
      <li><a href="{base}/blog">Blog – DCA insights and guides</a></li>
      <li><a href="{base}/privacy">Privacy Policy</a></li>
      <li><a href="{base}/terms">Terms and Conditions</a></li>
    </ul>

    <h2>Need More Help?</h2>
    <p>If you arrived here from an external link and believe this is a mistake, feel free to open an issue on the project’s public GitHub repository. You can also try searching the site or simply returning to the home page to continue using the calculator.</p>

    <p>Thank you for your understanding — we’re here to make Dollar-Cost Averaging tracking simple and reliable.</p>

    <p class="italic-note"><strong>Stay disciplined. Invest consistently. Track accurately.</strong></p>
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

  .prose a {
    color: var(--accent-primary);
  }
  .prose a:hover {
    text-decoration: underline;
  }
</style>