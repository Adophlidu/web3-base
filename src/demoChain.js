const SHA256 = require('crypto-js/sha256')

//定义区块类
class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp //时间戳
    this.data = data //数据
    this.previousHash = previousHash //前一个区块的哈希值
    this.hash = this.calculateHash() //当前区块的哈希值
    this.nonce = 0 //用于挖矿的随机数
  }

  //计算当前区块的哈希值
  calculateHash() {
    return SHA256(
      this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce
    ).toString()
  }

  //挖矿方法
  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++
      this.hash = this.calculateHash()
    }
    console.log('Block mined: ' + this.hash)
  }
}

//定义区块链类
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()] //初始区块
    this.difficulty = 2 //挖矿难度
  }

  //初始区块
  createGenesisBlock() {
    return new Block('01/01/2021', 'Genesis block', '0')
  }

  //获取最后一个区块
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  //添加新的区块
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  //验证区块链的完整性
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }

    return true
  }
}

//测试区块链
let demoCoin = new Blockchain()
console.log('Mining block 1...')
demoCoin.addBlock(new Block('02/01/2021', { amount: 4 }))
console.log('Mining block 2...')
demoCoin.addBlock(new Block('03/01/2021', { amount: 8 }))

//验证区块链的完整性
console.log('Is blockchain valid? ' + demoCoin.isChainValid())

//修改区块数据来破坏区块链的完整性
demoCoin.chain[1].data = { amount: 100 }
console.log('Is blockchain valid after tampering? ' + demoCoin.isChainValid())
