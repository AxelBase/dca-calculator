<!-- src/routes/blog/+page.svelte (Blog Index Page) -->

<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is Dollar-Cost Averaging (DCA) in Cryptocurrency?', description: 'An introduction to the DCA investment strategy and why it helps manage volatility in crypto markets.' },
    { href: '/blog/posts/post2', title: 'How the Average Entry Price is Calculated', description: 'A clear explanation of the math behind average entry price: total investment divided by total units acquired.' },
    { href: '/blog/posts/post3', title: 'Benefits of Using DCA for Long-Term Crypto Investing', description: 'Explore how DCA reduces emotional decision-making and smooths out the impact of price fluctuations.' },
    { href: '/blog/posts/post4', title: 'DCA vs Lump Sum Investing: Which Performs Better in Crypto?', description: 'A comparison of spreading investments over time versus investing all at once, with real-world considerations.' },
    { href: '/blog/posts/post5', title: 'Common Mistakes When Applying DCA in Cryptocurrency', description: 'Avoid pitfalls like stopping during downturns, ignoring fees, or abandoning discipline.' },
    { href: '/blog/posts/post6', title: 'Real-World Examples of DCA in Bitcoin and Altcoins', description: 'Step-by-step scenarios showing how DCA plays out across different market conditions.' },
    { href: '/blog/posts/post7', title: 'Using a Simple DCA Calculator for Your Crypto Strategy', description: 'How this utility helps track your average entry price and evaluate your ongoing DCA plan.' },
  ];
</script>

<svelte:head>
  <title>Blog | Simple DCA Calculator Insights</title>
  <meta name="description" content="In-depth articles on Dollar-Cost Averaging strategies, calculations, and best practices for cryptocurrency investors using this simple DCA calculator." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: DCA Insights</h1>
    <p class="subtitle">
      Practical guides, explanations, and tips on Dollar-Cost Averaging for cryptocurrency. Learn how average entry price works, compare strategies, and make informed decisions with this free DCA calculator tool.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>