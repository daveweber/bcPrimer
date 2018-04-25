const BlockChainService = require('./blockchain.service')
const blockchainService = new BlockChainService()

blockchainService.createBlockchain({ data: 'Hello World!' })
blockchainService.addNewBlock('First new block')
blockchainService.addNewBlock('I love blockchains')
blockchainService.addNewBlock('Make me a new hash!!')

console.log(blockchainService.getAllBlocks())