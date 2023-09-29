document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const summarizeButton = document.getElementById('summarizeButton');
    const result = document.getElementById('result');

    summarizeButton.addEventListener('click', function () {
        const textToSummarize = inputText.value;
        
        // يمكنك هنا استخدام خوارزمتك أو خدمة تلخيص نصوص لتلخيص النص.
        // في هذا المثال، سنستخدم نصًا بسيطًا كمثال.
        const summarizedText = "هذا مثال على نص ملخص.";
        
        result.textContent = summarizedText;
    });
});
