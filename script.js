const messageInput = document.getElementById("message");
const toneSelect = document.getElementById("tone");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");

generateButton.addEventListener("click", function () {

    const message = messageInput.value.trim();
    const tone = toneSelect.value;

    if (message === "") {
        result.textContent = "Please write what you want to say first.";
        return;
    }

    let email = "";

    if (tone === "professional") {
        email = `Subject: Regarding Your Request

Dear [Name],

${message}

Thank you for your understanding.

Best regards,
[Your Name]`;
    }

    else if (tone === "friendly") {
        email = `Subject: Just a Quick Message

Hi [Name],

${message}

Thanks for understanding!

Best,
[Your Name]`;
    }

    else if (tone === "short") {
        email = `Hi [Name],

${message}

Thank you,
[Your Name]`;
    }

    result.textContent = email;
});
