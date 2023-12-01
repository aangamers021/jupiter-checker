document.addEventListener('DOMContentLoaded', function () {
    const getWalletInfo = async () => {
        const walletAddress = document.getElementById('walletAddress').value.toLowerCase();

        try {
            const response = await fetch(`https://jup-airdrop.zhen8558.workers.dev/allocation/${walletAddress}`);
            const data = await response.json(); // Mengubah respons menjadi objek JSON

            // Mengambil nilai yang diinginkan dari properti JSON
            const owner = data.owner;
            const tokensFinal = data.tokens_final;
            const volume = data.volume;
            const rank = data.debug_rank;

            // Menampilkan hasil di dalam elemen dengan id 'result'
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `
                <p>Owner: ${owner}</p>
                <p>Tokens Final: ${tokensFinal}</p>
                <p>Volume: ${volume}</p>
                <p>Rank: ${rank}</p>
            `;
        } catch (error) {
            console.error("Error fetching data:", error);
            document.getElementById('result').innerHTML = "Error fetching data.";
        }
    };

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', getWalletInfo);
});
