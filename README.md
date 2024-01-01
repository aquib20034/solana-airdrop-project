
## install spl token 
cargo install spl-token-cli

## create new crypto wallet 
solana-keygen new --force

## Get your generated pubkey of wallet
solana-keygen pubkey

## Get your balance of generated cryto wallet in sol
solana balance --url network
solana balance --url http://localhost:8899

## Airdrop yourself
solana airdrop 1 your_wallet_public_address --url network
solana airdrop 1 E1qShBz7MaAWZKHpyKRN215EeqJPWuaf3AUgB4kkWoZ8 --url http://localhost:8899

## Create new token using spl
spl-token create-token --url network	
spl-token create-token --url http://localhost:8899	

## My Newly Created Token Address
3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6

## Create account to hold token
spl-token create-account your_newly_created_token_address --url network	
spl-token create-account 3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6 --url http://localhost:8899

## My Newly Created Account, which can hold token
5pdoXYFvCFBbbu26T3EdFEKgCub4h8dX3rkUXmiKsur6

## Get balance (newly created token) of newly created account 
spl-token balance your_newly_created_token_address --url network	
spl-token balance 3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6 --url http://localhost:8899


## Mint newly created token to newly created account
spl-token mint your_newly_created_token_address no_of_token_to_be_minted --url network	
spl-token mint 3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6 1000 --url http://localhost:8899



## Get circulated supply of newly created token
spl-token supply your_newly_created_token_address  --url network	
spl-token supply 3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6  --url http://localhost:8899


## Renounce / Disable option to mint new tokens of your newly created tokens
spl-token authorize your_newly_created_token_address mint --disable --url network	
spl-token authorize 3ZKQTXPshoaAZUgbdgUp4eWtpURL2EREyZGLG8HcACt6 burn --disable  --url http://localhost:8899


## Burn your tokens from newly created account 
spl-token burn your_newly_created_account_address no_of_token_to_be_burned --url network	
spl-token burn 5pdoXYFvCFBbbu26T3EdFEKgCub4h8dX3rkUXmiKsur6 1000 --url http://localhost:8899
