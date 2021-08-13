const statusSelect = document.getElementById("selectID");

statusSelect.addEventListener("change", async ({ target }) => {
  const { orderId } = statusSelect.dataset;
  const { value } = target;

  const response = await fetch("/admin", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: orderId, status: value }),
  });

  const content = await response.json();
  console.log(content);
});
