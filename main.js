document.addEventListener('DOMContentLoaded', function () {
    const getWalletInfo = async () => {
        const walletAddress = document.getElementById('walletAddress').value.toLowerCase();

        try {
            const response = await fetch(`https://jup-airdrop.zhen8558.workers.dev/allocation/${walletAddress}`);
            const data = await response.text();
            document.getElementById('result').innerHTML = data;
        } catch (error) {
            console.error("Error fetching data:", error);
            document.getElementById('result').innerHTML = "Error fetching data.";
        }
    };

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', getWalletInfo);
});
