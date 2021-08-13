const filterSelect = document.getElementById("filterID");
const cardContainer = document.getElementsByClassName("cardsContainer")[0];

filterSelect.addEventListener("change", async ({ target }) => {
  const value = target.value;

  const response = await (await fetch(`/admin/filter/${value}`, {
    method: "GET",
  })).json();

  console.log(response);
  
  if(response.status === 200){
    cardContainer.innerHTML = ''
    response.orders.forEach(el => {
      cardContainer.innerHTML += `
      <a href="/admin/${el._id}">
      <div class="orderCard">
        <div>Заказ № ${el._id}</div>
        <div>Заказчик: ${el.userName}</div>
        <div>mail: ${el.userEmail}</div>
        <div>phone: ${el.userPhone}</div>
      </div>
    </a>
      `
    });
  }
});
