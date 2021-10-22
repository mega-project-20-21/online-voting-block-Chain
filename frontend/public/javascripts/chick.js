var gun = Gun(["http://localhost:3000/gun"]);
const blocke = gun.get("block");
(() => {
  if (window.localStorage.getItem("userinfo") === undefined || null) {
    window.location.href = "/";
  }

  const user = JSON.parse(window.localStorage.getItem("userinfo"));

  blocke.map().on((block) => {
    if (block.blockid === user.userid) {
      const kk = [...document.getElementsByTagName("button")];
      kk.map((v) => {
        v.disabled = true;
      });
    }
    localStorage.getItem("gun/", JSON.stringify(block));
  });
})();
function ok(data) {
  const user = JSON.parse(window.localStorage.getItem("userinfo"));
  const d = { ...data, ...user };
  const kk = [...document.getElementsByTagName("button")];
  kk.map((v) => {
    v.disabled = true;
  });
  const ls = new BlockChain();
  const datas = ls.addBlock({ ...d });
  blocke.set({ ...datas });
  window.location.href = "/sucessfullyvoted";
}

class Block {
  constructor(blockid, previousHash, data) {
    this.blockid = blockid; // the block id
    this.timestamp = Date.now(); // the timestamp
    this.blockhash = this.getHash(); // the block hash
    this.prevHash = previousHash; // the hash of the previous block
    this.data = data;
  }
  getHash() {
    return objectHash(
      String(
        this.blockid +
          this.timestamp +
          this.blockhash +
          this.previousHash +
          JSON.stringify(this.data)
      ),
      64
    );
  }
}
var ll = [];
blocke.map().on((block) => {
  ll.push(block);
});
class BlockChain {
  constructor() {
    this.chain = [...ll];
  }
  addBlock(data) {
    let blockid = JSON.parse(localStorage.getItem("userinfo")).userid;
    let previousHash =
      this.chain.length !== 0
        ? this.chain[this.chain.length - 1].blockhash
        : "";
    let block = new Block(blockid, previousHash, data);
    return block;
  }
}
