from flask_restful import Resource
from database import DB
from flask import request

db = DB()


class Index(Resource):
    def get(self):
        return db.add({"userid": "ok", 'password': 'ok'})

    def post(self):
        data = request.get_json()
        print(data)
        return db.add(data)


class ByIDUser(Resource):
    def get(self, id):
        return db.id(id)

    def delete(self, id):
        return db.delet(id)

    def patch(self, id):
        return db.update(id)


class voting(Resource):
    def post(self, id, voting_time):
        data = request.get_json()
        return db.addBlock(data, id)
