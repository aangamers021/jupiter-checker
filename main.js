document.addEventListener('DOMContentLoaded', function () {
    const getWalletInfo = async () => {
        const walletAddress = document.getElementById('walletAddress').value.toLowerCase();

        try {
            const response = await fetch(`https://jup-airdrop.zhen8558.workers.dev/allocation/${walletAddress}`);
            const data = await response.json(); // Mengubah respons menjadi objek JSON

            // Mengambil nilai yang diinginkan dari properti JSON
            const owner = data.owner;
            const tokensFinal = data.tokens_final;
            const og = data.tokens_og_bonus;
            const volume = data.volume;
            const rank = data.debug_rank;
            const swapScore = data.debug_swap_score;

            // Menampilkan hasil di dalam elemen dengan id 'result'
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `
                <p>Wallet Address: ${owner}</p>
                <p>Tokens Final: ${tokensFinal}</p>
                <p>Tokens OG Bonus: ${og}</p>
                <p>Volume TX: ${volume}</p>
                <p>Rank: ${rank}</p>
                <p>Swap Score: ${swapScore}</p>
            `;
        } catch (error) {
            console.error("Error fetching data:", error);

            // Menampilkan pesan khusus jika wallet tidak memenuhi syarat
            const resultElement = document.getElementById('result');
            if (error.message.includes("Error fetching data.")) {
                resultElement.innerHTML = "Your Wallet Not Eligible";
            } else {
                resultElement.innerHTML = "Error fetching data.";
            }
        }
    };

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', getWalletInfo);
});
