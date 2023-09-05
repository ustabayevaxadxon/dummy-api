const ElList = document.getElementById("product-list");
const ElListItem = document.getElementById("product-item");
const ElGetBtn = document.getElementById("get-product");
// const ElBrand = document.querySelector(".list--item .list--item__brand");
// const ElName = document.querySelector(".list--item .list--item__name");
// const ElCategory = document.querySelector(".list--item .list--item__category");
// const ElImg = document.querySelector(".list--item .list--item__img");
// const ElDesc = document.querySelector(".list--item .list--item__desc");
// const ElPrice = document.querySelector(".list--item .list--item__price");
// const ElBtn = document.querySelector(".list--item .list--item__btn");

window.addEventListener("load", async () => {
  const { products } = await fetch(
    "https://dummyjson.com/products?limit=10"
  ).then((res) => res.json());
  // console.log(products);
  products.forEach((product) => {
    console.log(product);
    ElList.innerHTML += `<li class="list--item">
      <div class="item--box">
          <div class="item--box--info">
              <h2 class="list--item__brand">${product.brand} ${product.category}</h2>
              <h3 class="list--item__title">Name: ${product.title}</h3>
              <p>Price: $${product.price}</p>
          </div>
          <img width="200" height="content" src="${product.images[0]}" alt="">
      </div>
      <div class="item--text">
        <p>Full description: ${product.description}</p>
      </div>
    </li>`;
  });
});
