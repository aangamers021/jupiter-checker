<?php

// Get user wallet address from the HTML form
$walletAddress = isset($_POST['wallet']) ? strtolower($_POST['wallet']) : '';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $info = getInfo($walletAddress);
        echo $info;
    } catch (Exception $error) {
        echo "Error fetching data: " . $error->getMessage();
    }
}

// Function to get information
function getInfo($wallet)
{
    $encodedWalletAddress = urlencode($wallet);
    $url = "https://jup-airdrop.zhen8558.workers.dev/allocation/astqs6ka7dpzgxpmct3zyxivyj6nohau7vsj6uaqh9jv";

    $options = [
        'http' => [
            'header' => "Referer: https://airdrop.jup.ag\r\n" .
                        "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36\r\n",
        ],
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        throw new Exception("Failed to fetch data");
    }

    return $result;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wallet Information</title>
</head>
<body>
    <h1>Wallet Information</h1>
    <form method="post" action="">
        <label for="wallet">Enter your wallet address:</label>
        <input type="text" id="wallet" name="wallet" required>
        <button type="submit">Submit</button>
    </form>
    <?php
        // Display the result here if needed
    ?>
</body>
</html>
