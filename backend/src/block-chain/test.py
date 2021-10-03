from os import write
import time
import hashlib as h
import datetime as date
import uuid


class block:
    def __init__(self, previoushash, data):
        self.id = uuid.uuid4().hex
        self.timestamp = date.datetime.now().strftime('%Y-%m-%dT%H:%M:%S.%f')
        self.prevhash = previoushash
        self.data = data
        self.blockhash = self.hase()

    def hase(self):
        block_encryption = h.sha256()
        block_encryption.update(
            str(str(self.id)+str(self.timestamp)+str(self.data)+str(self.prevhash)).encode('utf-8'))
        return block_encryption.hexdigest()


class BlockChain:
    def __init__(self):
        self.chain = []

    def addBlocke(self, data):
        previousHash = self.chain[len(
            self.chain)-1]['blockhash'] if len(self.chain) != 0 else ''
        Block = block(previoushash=previousHash, data=data)
        Block.blockhash = Block.hase()
        self.chain.append({'id': Block.id, 'timestamp': Block.timestamp,
                          'blockhash': Block.blockhash, 'prevhash': Block.prevhash, 'data': Block.data})
