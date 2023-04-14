import psycopg2
from flask import Flask, render_template

# Previous imports remain...
##from flask_sqlalchemy import SQLAlchemy
##from flask_migrate import Migrate

app = Flask(__name__)
con = psycopg2.connect(database="cars_api", user="postgres", password="postgres", host = "127.0.0.1", port = "5000")
cursor = con.cursor()

@app.route('/', methods=['post', 'get'])
def testing():
    cursor.execute("select * from car")
    result = cursor.fetchall
    return render_template("testing", data = result)

#class CarsModel(db.Model):
#    __tablename__ = 'cars'#

#    id = db.Column(db.Integer, primary_key=True)
#    name = db.Column(db.String())
#    model = db.Column(db.String())
 #   doors = db.Column(db.Integer())

 #   def __init__(self, name, model, doors):
 #       self.name = name
 #       self.model = model
 #       self.doors = doors

    
if __name__ == '__main__':
    app.run(debug=True)