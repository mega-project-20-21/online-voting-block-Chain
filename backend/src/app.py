from flask import Flask
from flask_restful import Resource, Api
from view import Index, ByIDUser, voting
#app config
app = Flask(__name__)

#api config
api = Api(app=app)

#URLS

api.add_resource(Index, '/')
api.add_resource(ByIDUser, '/<string:id>')
api.add_resource(voting, '/<string:id>/<string:voting_time>')

#main function
if __name__ == "__main__":
    app.run(port=5000, debug=True)
