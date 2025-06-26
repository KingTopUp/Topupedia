fetch('data/produk.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('produk-list');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'produk-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <a href="${item.link}" target="_blank">Top Up Sekarang</a>
      `;
      container.appendChild(card);
    });
  });