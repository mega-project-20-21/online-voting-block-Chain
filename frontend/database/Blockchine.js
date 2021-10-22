const bcrypt = require("bcrypt"); // import the bcrypt js librairy

class Block {
  // create the block structure or class

  constructor(blockid, previousHash, data) {
    // create a contractor. in a block we find this information :
    this.blockid = blockid; // the block id
    this.timestamp = Date.now(); // the timestamp
    this.blockhash = this.getHash(); // the block hash
    this.prevHash = previousHash; // the hash of the previous block
    this.data = data; // and all the transactions
  }
  getHash() {
    return bcrypt.hashSync(
      String(
        this.blockid +
          this.timestamp +
          this.blockhash +
          this.previousHash +
          JSON.stringify(this.data)
      ),
      10
    ); // this method will hash the data in the block using a salt of 10 and return that hash. We use the bcrypt library
  }
}

class BlockChain {
  // the blochain structure or class
  constructor() {
    // create a constractor.
    this.chain = []; // a blockchain is a series of blocks, so we need an array []
  }

  addBlock(data) {
    // create a method that will take the entire block and add it to the blockchain
    let blockid = this.chain.length; // The block id will be the length or the total number of blocks in the chain minus 1, so the first block will have 0 as an index
    let previousHash =
      this.chain.length !== 0
        ? this.chain[this.chain.length - 1].blockhash
        : ""; // if it's the first block then its previous hash will be empty, if not then it will take the hash of the previous block
    let block = new Block(blockid, previousHash, data); // Now create the block

    this.chain.push(block); // Add the block to the blockchain
  }
}

export const Myfirstblockchain = new BlockChain();
