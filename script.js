
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const categories = Object.keys(data);
    const categoryContainer = document.getElementById('categories');
    const menuContainer = document.getElementById('menu-items');

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.innerText = cat;
      btn.classList.add('category-btn');
      btn.onclick = () => showCategory(cat, data);
      categoryContainer.appendChild(btn);
    });

    function showCategory(category, data) {
      menuContainer.innerHTML = '';
      data[category].forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = \`
          <img src="\${item.image}" alt="">
          <h3>\${item.name} - \${item.price}</h3>
          <p>\${item.description}</p>
        \`;
        menuContainer.appendChild(div);
      });
    }

    showCategory(categories[0], data);
  });
