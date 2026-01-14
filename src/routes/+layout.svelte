<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside helper
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar">
  <nav class="container d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
      </a>

      <a class="navbar-brand-text" href="{base}/">AxelBase</a>

      <!-- Buy Me a Coffee with Bitcoin option -->
      <div class="bmac-wrapper position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support AxelBase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z"
            />
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Bitcoin / Crypto
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="d-flex align-items-center list-unstyled m-0">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="footer">
  <div class="container">
    <p class="mb-2">© AxelBase Crypto Price Target Calculator – {currentYear}</p>
    <div>
      <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
      <span>|</span>
      <a href="{base}/terms" class="footer-link">Terms of Service</a>
    </div>
  </div>
</footer>

<style>
  /* ── Buy Me a Coffee Button & Dropdown ── */
  .bmac-button {
    background: #f59e0b;          /* warm yellow/orange coffee vibe */
    color: #111;
    border: none;
    padding: 9px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.93rem;
    transition: all 0.28s ease;
    box-shadow: 0 3px 10px rgba(0,0,0,0.12);
  }

  .bmac-button:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.18);
  }

  .bmac-dropdown {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    background: white;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-hover);
    overflow: hidden;
    border: 1px solid rgba(73, 126, 118, 0.12);
    z-index: 1001;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 18px;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.96rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--primary-mint-light);
    color: var(--primary-mint);
    padding-left: 24px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: #d97706;               /* coffee theme accent */
    font-size: 1.08rem;
    min-width: 48px;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--primary-mint);
    justify-content: center !important;
    border-top: 1px solid #eee;
    padding: 12px 18px;
  }

  .bmac-dropdown .bitcoin-option:hover {
    background: #f0fdfa;
    color: #0f766e;
  }

  /* Small override to keep nice underline animation from file 2 */
  .nav-link-custom {
    margin-left: 1.75rem;
  }
</style>