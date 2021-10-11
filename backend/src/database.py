import pymongo
import json
from flask import jsonify
from passlib.hash import pbkdf2_sha256
import uuid
from blockchain import BlockChain

mongo = pymongo.MongoClient(host='localhost', port=27017)


class DB:
    def __init__(self) -> None:
        self.db = mongo.blockChain.user
        self.bb = BlockChain()

    def add(self, data):
        if self.db.find_one({'userid': data['userid']}) is not None:
            return ({"message": 'user alredy exit'})
        data['password'] = pbkdf2_sha256.encrypt(data['password'])
        data['_id'] = uuid.uuid4().hex
        user = self.db.insert_one(data)

        dd = self.db.find_one({'_id': user.inserted_id})
        dd.pop('password')
        return dd

    def id(self, id):
        user = self.db.find_one({'_id': id})
        if user:
            user.pop('password')
            return user

    def delet(self, id):
        if self.db.find_one({'_id': id}) is None:
            return {'massage': f'{id} this id is not exit'}
        delet = self.db.delete_one({'_id': id})
        return {"message": "success"}

    def update(self, data, id):
        user = self.db.find_one({'_id': id})
        if user:
            user = self.db.find_and_modify({'_id': id}, data)
            return user

    def addBlock(self, data, id):
        user = self.db.find_one({'_id': id})
        if user:

            data['userid'] = user['userid']
            data['id'] = user['_id']
            self.bb.addBlocke(data)
            with open('entry.json', 'w', encoding='utf-8') as i:
                i.write(json.dumps(self.bb.chain))
            return {'massage': 'ok'}
        else:
            return ({"message": 'user alredy exit'})
