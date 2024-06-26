!(function () {
  const submitButton = document.querySelector(
    'button[type="submit"]#bare-inputs-submit',
  );
  const inputs = document.querySelectorAll(".bare-inputs-container input");

  submitButton.addEventListener("click", async () => {
    if (!inputs.length) {
      return;
    }

    const data = Array(...inputs).reduce(
      (postBody, { name, value }) => ({ ...postBody, [name]: value }),
      {},
    );

    const response = await fetch("/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(data),
    });

    if (response.redirected) {
      window.location.href = response.url;
    }
  });
})();
