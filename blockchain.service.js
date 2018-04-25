const sha256 = require('js-sha256').sha256

class BlockchainService {
  constructor () {
    this.blocks = [];
  }

  createBlockchain ({ data }) {
    const timestamp = new Date()
    const previousHash = 0
    const index = 0
    this.hashBlock({ data, timestamp, previousHash, index })
  }

  hashBlock ({ data, timestamp, previousHash, index }) {
    let hash = ''
    let nonce = 0

    while( ! this.isHashValid({ hash }) ){
      let input = `${data}${timestamp}${previousHash}${index}${nonce}`
      hash = sha256(input)
      nonce += 1
    }
    
    this.blocks.push(hash)
  }

  getLastHash () {
    return this.blocks.slice(-1)[0]
  }

  isHashValid ({ hash }) {
    return hash.startsWith('0000')
  }

  addNewBlock ({ data }) {
    const index = this.blocks.length
    const previousHash = this.getLastHash()
    return this.hashBlock({ data, timestamp: new Date(), previousHash, index })
  }

  getAllBlocks () {
    return this.blocks;
  }
  
}

module.exports = BlockchainService