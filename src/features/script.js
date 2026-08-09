const search = document.querySelector("#feature-search");
const cards = [...document.querySelectorAll(".feature-card")];
const emptyState = document.querySelector("#empty-state");

search?.addEventListener("input", (event) => {
  const term = event.target.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const matches =
      card.dataset.search.includes(term) ||
      card.textContent.toLowerCase().includes(term);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  emptyState.hidden = visible !== 0;
});
