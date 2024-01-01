const {
    Connection,
    PublicKey, 
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    web3
} = require("@solana/web3.js");

const localClusterUrl = 'http://localhost:8899';
// const localClusterUrl = clusterApiUrl('devnet');




const wallet        = new Keypair();
const publicKey     = new PublicKey(wallet._keypair.publicKey)
const secretKey     = wallet._keypair.secretKey

// console.log(publicKey);
// console.log(secretKey);

const getWalletBalance = async() =>{
    try{
        const connection = new Connection((localClusterUrl), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet Balance: ${walletBalance}`)
    }catch(err){
        console.error(err);
    }
}


        // const connection = new Connection((localClusterUrl), 'confirmed')
        // const fromAirdropSignature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL) // 2nd param is in lamport => convert to sol
        // await connection.confirmTransaction(fromAirdropSignature);

const airDropSol = async() => {
    try{

        const connection = new Connection((localClusterUrl), 'confirmed');
        
        const fromAirdropSignature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL * 1)
        // const fromAirdropSignature = await connection.requestAirdrop(publicKey, 10000 );

        // Wait for confirmation using 'confirmed' commitment
        const latestBlockHash = await connection.getLatestBlockhash()

        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: fromAirdropSignature,
        })

    }catch(err){
        console.log(err);
    }
}

const main = async() => {
    await getWalletBalance();
    await airDropSol();
    await getWalletBalance();
}

main();