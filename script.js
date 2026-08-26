const messageInput = document.getElementById("message");
const generateButton = document.getElementById("generateButton");
const toneSelect = document.getElementById("tone");
const result = document.getElementById("result");

generateButton.addEventListener("click", async () => {

    const text = messageInput.value.trim();
    const tone = toneSelect.value;

    if (!text) {
        result.textContent = "Please write something first.";
        return;
    }

    result.textContent = "Correcting your email...";

    try {
        const response = await fetch(
            "https://patient-bird-31ce.maazouzsara66.workers.dev/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: text,
                    tone: tone
                })
            }
        );

        const data = await response.json();

        if (!response.ok || !data.correctedText) {
            throw new Error(data.error || "Correction failed");
        }

        result.textContent = data.correctedText;

    } catch (error) {
        console.error("Email Helper error:", error);
        result.textContent = "Correction failed. Please try again.";
    }
});
