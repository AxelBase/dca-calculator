<script>
  import { base } from '$app/paths';
  import { validateEntry, calculateQuantity, calculateDCA } from '$lib/dcaLogic';

  let entries = [];
  let newAmount = '';
  let newPrice = '';
  let newQuantity = '';
  let error = '';
  let results = { totalAmount: 0, totalQuantity: 0, averageEntry: 0 };

  // Reactive calculation
  $: results = calculateDCA(entries);

  function updateQuantity() {
    const amount = parseFloat(newAmount);
    const price = parseFloat(newPrice);
    if (!isNaN(amount) && !isNaN(price) && price > 0) {
      newQuantity = calculateQuantity(amount, price).toString();
    }
  }

  function addEntry() {
    const amount = parseFloat(newAmount);
    const price = parseFloat(newPrice);
    const quantity = parseFloat(newQuantity);

    const entry = { amount, price, quantity };
    const validationError = validateEntry(entry);

    if (validationError) {
      error = validationError;
      return;
    }

    entries = [...entries, entry];
    newAmount = '';
    newPrice = '';
    newQuantity = '';
    error = '';
  }

  function removeEntry(index) {
    entries = entries.filter((_, i) => i !== index);
  }
</script>

<svelte:head>
  <title>About | Simple DCA Calculator</title>
  <meta name="description" content="Learn about the Simple DCA Calculator – a free, privacy-focused tool for tracking average entry price in cryptocurrency Dollar-Cost Averaging strategies." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="About | Simple DCA Calculator" />
  <meta property="og:description" content="Learn about the Simple DCA Calculator – a free, privacy-focused tool for tracking average entry price in cryptocurrency Dollar-Cost Averaging strategies." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container mt-5">
  <h1 class="text-center mb-5 fw-bold" style="color: var(--primary-mint);">DCA Calculator</h1>
  
  <div class="card-bubbly p-4 mb-5">
    <h5 class="card-title mb-4" style="color: var(--primary-mint-dark);">Add Investment Entry</h5>
    <form on:submit|preventDefault={addEntry}>
      <div class="row g-3">
        <div class="col-md-4">
          <label for="amount" class="form-label fw-semibold">Amount (USD)</label>
          <input type="number" class="form-control" id="amount" bind:value={newAmount} on:input={updateQuantity} min="0" step="0.01" required placeholder="e.g. 100" />
        </div>
        <div class="col-md-4">
          <label for="price" class="form-label fw-semibold">Price per Unit (USD)</label>
          <input type="number" class="form-control" id="price" bind:value={newPrice} on:input={updateQuantity} min="0" step="0.01" required placeholder="e.g. 50" />
        </div>
        <div class="col-md-4">
          <label for="quantity" class="form-label fw-semibold">Quantity (Calculated)</label>
          <input type="number" class="form-control" id="quantity" bind:value={newQuantity} min="0" step="0.00000001" required />
        </div>
      </div>
      {#if error}
        <div class="alert alert-danger mt-3 rounded-pill">{error}</div>
      {/if}
      <button type="submit" class="btn btn-mint mt-4 w-100">Add Entry</button>
    </form>
  </div>

  {#if entries.length > 0}
    <h5 class="fw-bold mt-5" style="color: var(--primary-mint);">Investment Ledger</h5>
    <div class="table-responsive">
      <table class="table table-custom">
        <thead>
          <tr>
            <th>Amount (USD)</th>
            <th>Price (USD)</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {#each entries as entry, index}
            <tr>
              <td>${entry.amount.toFixed(2)}</td>
              <td>${entry.price.toFixed(2)}</td>
              <td>{entry.quantity.toFixed(8)}</td>
              <td><button class="btn-danger-soft" on:click={() => removeEntry(index)}>Remove</button></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="card-bubbly p-4 mt-4 bg-white">
      <h5 class="card-title fw-bold" style="color: var(--primary-mint);">Final Results</h5>
      <hr style="color: var(--primary-mint);">
      <div class="row text-center mt-3">
        <div class="col-md-4">
            <small class="text-muted">Total Investment</small>
            <h3 class="fw-bold text-dark">${results.totalAmount.toFixed(2)}</h3>
        </div>
        <div class="col-md-4">
            <small class="text-muted">Total Units</small>
            <h3 class="fw-bold text-dark">{results.totalQuantity.toFixed(8)}</h3>
        </div>
        <div class="col-md-4">
            <small class="text-muted">Average Entry Price</small>
            <h3 class="fw-bold" style="color: var(--primary-mint);">${results.averageEntry.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  {/if}

<!-- Replace the placeholders in src/routes/about/+page.svelte or integrate into main page as needed -->

<div id="about" class="section-placeholder mt-5">
  <h2 class="section-title">About the Simple DCA Calculator</h2>
  
  <p>The Simple DCA Calculator is a free, open-source web utility built specifically for cryptocurrency investors who practice Dollar-Cost Averaging (DCA). Its primary purpose is to provide an accurate, transparent, and privacy-focused way to calculate your average entry price—the single most important metric for evaluating a long-term DCA strategy.</p>
  
  <p>Unlike many online calculators that require accounts, send data to servers, or bundle unnecessary features, this tool operates entirely client-side. Every calculation, from quantity derivation to total investment summation and average entry price computation, happens instantly in your browser. No information is ever transmitted, stored, or logged. This stateless design aligns perfectly with the core principles of cryptocurrency: privacy, self-sovereignty, and trust minimization.</p>
  
  <p>The calculator strictly adheres to the correct mathematical formula for average entry price: total amount invested divided by total units acquired. This weighted average reflects economic reality far better than simply averaging purchase prices, which can mislead investors by ignoring position size differences across buys. By automating this calculation with precision (fiat values to two decimal places and cryptocurrency quantities to eight), the tool eliminates manual errors common in spreadsheets.</p>
  
  <p>Development focused on simplicity and reliability. The interface supports dynamic addition and removal of investment entries, automatic quantity calculation when entering amount and price, and real-time reactive updates to results. Validation ensures only positive numeric inputs are accepted, providing immediate feedback on errors. The responsive design, powered by Bootstrap, works seamlessly on desktop and mobile devices.</p>
  
  <p>Beyond the core calculator, the site includes an insights blog with in-depth articles on DCA concepts, historical performance examples, common pitfalls, and strategy comparisons. Legal pages (Privacy Policy and Terms) reinforce the no-data-collection commitment, while a custom 404 page guides users back to useful sections.</p>
  
  <p>Deployed as a static site on GitHub Pages, the tool requires no maintenance, no backend, and no external dependencies beyond a CDN for Bootstrap styling. It functions fully offline after the initial load, making it reliable even in low-connectivity environments. The entire codebase remains publicly available for review, forking, or contribution.</p>
  
  <p>Ultimately, this calculator exists to empower disciplined, long-term investors with clear, unbiased visibility into their cost basis. Whether you are accumulating Bitcoin over years, diversifying into altcoins, or simply tracking a systematic investment plan, accurate average entry tracking is essential for informed decision-making. This tool delivers exactly that—nothing more, nothing less.</p>
  
  <p class="italic-note">Precision in tracking leads to confidence in holding. Stay consistent, stay informed, and let the numbers guide your journey.</p>
</div>

<div id="how-to-use" class="section-placeholder">
  <h2 class="section-title">How to Use the Simple DCA Calculator</h2>
  
  <p>Using the calculator is straightforward and designed for efficiency. All operations occur instantly in your browser—no accounts, no saving, no data leaving your device. Follow these steps to track your Dollar-Cost Averaging progress accurately.</p>
  
  <p>Begin by navigating to the Calculator page from the home page or directly via the navigation link. You will see a clean form titled “Add Investment Entry” with three fields: Amount (USD), Price per Unit (USD), and Quantity (editable).</p>
  
  <p>Enter your first purchase: type the fiat amount you invested (e.g., 1000) in the Amount field and the cryptocurrency price at the time of purchase (e.g., 50000) in the Price field. The Quantity field automatically calculates and populates with the precise units acquired (e.g., 0.02000000 BTC), rounded to eight decimal places for accuracy.</p>
  
  <p>You may manually override the quantity if your actual purchase differed slightly due to fees or slippage—just edit the Quantity field directly. Once satisfied, click “Add Entry.” The new row appears immediately in the Investment Entries table below, formatted clearly with dollar signs and proper decimal places.</p>
  
  <p>Repeat the process for each historical or planned purchase. Add as many entries as needed—the table grows dynamically, and results update reactively without requiring a separate “Calculate” button. Each row includes a Remove button for easy correction of mistakes.</p>
  
  <p>As entries accumulate, the Results card displays three key metrics: Total Investment (sum of all amounts, rounded to two decimals), Total Units (sum of quantities to eight decimals), and Average Entry Price (total investment divided by total units, rounded to two decimals). These values refresh instantly with every addition, edit, or removal.</p>
  
  <p>For best results, include transaction fees in your amount invested to reflect true cost basis. If tracking multiple assets separately, open additional tabs or clear entries between calculations. The tool supports any cryptocurrency or even traditional assets, as long as you input consistent fiat values.</p>
  
  <p>Navigation is available at the bottom of the calculator page (and top via the global navbar) to return Home, visit the Blog for deeper DCA insights, or review Privacy/Terms. All links respect GitHub Pages base paths for correct routing.</p>
  
  <p>Tips for effective use: add entries chronologically, review monthly to assess progress, and compare current market price against your average entry to gauge unrealized performance. The tool’s simplicity encourages regular updates, turning tracking into a habit alongside investing.</p>
  
  <p class="italic-note">Accurate inputs yield accurate insights. Track diligently, adjust thoughtfully, and let the calculator reveal the power of your consistency.</p>
</div>

<div id="faq" class="section-placeholder mb-5">
  <h2 class="section-title">Frequently Asked Questions</h2>
  
  <details>
    <summary>Is my data saved or sent anywhere?</summary>
    <p>No. The calculator is completely stateless and client-side. All inputs and calculations exist only in your browser’s memory during the current session. Refreshing or closing the page clears everything. No cookies, localStorage, or server requests are used for data persistence or transmission.</p>
  </details>
  
  <details>
    <summary>Should I include trading fees in the amount?</summary>
    <p>Yes, for the most accurate average entry price. Add any exchange or network fees to your invested amount so the calculation reflects your true cost basis.</p>
  </details>
  
  <details>
    <summary>Can I use this for stocks or other assets?</summary>
    <p>Absolutely. The math is universal. Enter fiat investment amounts and asset prices consistently, and the average entry calculation works for any asset class.</p>
  </details>
  
  <details>
    <summary>What if I sell some of my holdings?</summary>
    <p>Selling does not affect average entry price, which is based solely on purchases. Track realized gains/losses separately using your average as the cost basis.</p>
  </details>
  
  <details>
    <summary>How precise are the calculations?</summary>
    <p>Fiat values round to two decimal places, quantities to eight, and average entry to two. This matches standard financial and cryptocurrency reporting conventions while maintaining mathematical accuracy.</p>
  </details>
  
  <details>
    <summary>Can I export or save my entries?</summary>
    <p>Currently, there is no built-in export due to the privacy-first stateless design. You can manually copy values or take screenshots. Future open-source contributions could add optional local export features.</p>
  </details>
  
  <details>
    <summary>Does the tool work offline?</summary>
    <p>Yes, after the initial page load. All JavaScript and assets cache in your browser, allowing full functionality without internet—ideal for secure environments.</p>
  </details>
  
  <details>
    <summary>Why not use a spreadsheet instead?</summary>
    <p>Spreadsheets work well but require manual formulas, formatting, and file management. This dedicated tool eliminates setup, ensures correct weighted averaging, provides instant reactivity, and prioritizes privacy with no file storage needed.</p>
  </details>
  
  <details>
    <summary>Is this tool affiliated with any exchange or project?</summary>
    <p>No. It is an independent, community-oriented utility with no affiliations, sponsorships, or monetization. It exists purely to help investors track DCA accurately.</p>
  </details>
  
  <details>
    <summary>How can I contribute or report issues?</summary>
    <p>The project is open-source on GitHub. Feel free to fork, submit pull requests, or open issues for bugs, feature suggestions, or improvements.</p>
  </details>
  
  <p class="italic-note">Clear questions lead to clear answers. Keep investing wisely and tracking precisely.</p>
</div>
</div>