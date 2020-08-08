from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flaskext.mysql import MySQL
import sys
import json

mysql = MySQL()
app = Flask(__name__)

env = 'dhivya'
port = 5000
if __name__ == "__main__":
    if len(sys.argv) > 1:
        env = sys.argv[1]
        print("env=" + env)
    if len(sys.argv) > 2:
        port = sys.argv[2]
        print("port=" + port)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'dhiya'
app.config['MYSQL_DATABASE_DB'] = env
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

api = Api(app)

class Department(Resource):
    def get(self, lid):
        conn = mysql.connect()
        cursor = conn.cursor()
        select_query = "select lid,username,password,phonenum from loginSignUp where  lid = " + str(lid)
        cursor.execute(select_query)
        rows = cursor.fetchall()
        if len(rows) > 0:
            resp = {'lid': rows[0][0], 'username': rows[0][1], 'password': rows[0][2], 'phonenum': rows[0][3]}
#            resp = jsonify(rows)
            return resp

        return {'student': None}, 404

    def post(self, lid,username,password,phonenum):
        data = request.get_json()
        conn = mysql.connect()
        cursor = conn.cursor()
        insert_query = "insert into loginSignUp (lid,username,password,phonenum) values (%s,%s,%s,%s,load_file('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/blueRose.jpg'))"
        cursor.execute(insert_query,[(lid,username,password,phonenum)])
        conn.commit()
        conn.close()
        resp = {'lid': lid, 'username': data['username'],'password': data['password'],'phonenum': data['password']}
        return resp, 201



api.add_resource(Department, '/department/<int:lid>')
api.add_resource(Department, '/department/<int:lid>/<string:username>/<string:password>/<string:phonenum>')


app.run(port=port, debug=True)


