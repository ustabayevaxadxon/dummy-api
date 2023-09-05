const ElList = document.getElementById("product-list");
const ElListItem = document.getElementById("product-item");
const ElGetBtn = document.getElementById("get-product");

ElGetBtn.addEventListener("click", async () => {
  const { products } = await fetch("https://dummyjson.com/products?limit=10").then((res) =>
    res.json()
  );
  // console.log(products);
  products.forEach(product => {
    console.log(product);
    ElListItem.innerHTML = `${product.title}`
  });
});
