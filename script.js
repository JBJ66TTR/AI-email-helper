const emailInput = document.getElementById("emailInput");
const correctButton = document.getElementById("correctButton");
const result = document.getElementById("result");

correctButton.addEventListener("click", async function () {

    const text = emailInput.value.trim();

    if (text === "") {
        result.textContent = "Please enter an email first.";
        return;
    }

    result.textContent = "Correcting...";

    try {

        const response = await fetch(
            "YOUR-EMAIL-WORKER-URL",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: text
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.correctedText) {
            throw new Error(data.error || "Correction failed");
        }

        result.textContent = data.correctedText;

    } catch (error) {

        console.error(error);

        result.textContent =
            "Correction failed. Please try again.";
    }
});
