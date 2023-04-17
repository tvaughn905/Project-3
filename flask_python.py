import os
import psycopg2
import json
from flask import Flask, Response, jsonify
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base


conn = psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")

# Open a cursor to perform database operations
cur = conn.cursor()

Base = automap_base()

engine = create_engine(conn)

Base.prepare(engine, reflect = True)

Test = Base.classes.test

session = Session(engine)

app = Flask(__name__)

@app.route('/')
def index():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    

    
    #cur.execute('SELECT * FROM unemployed;')
    #books = cur.fetchall()
    cur.close()
    conn.close()
    cols = ['industry', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    data = session.query(Test).all()
    results = [{col: getattr(b, col) for col in cols} for b in data]
    return jsonify(results = results)
    #return Response(json.dumps(books),  mimetype='application/json')

@app.route('/ethnicity')
def ethnicity():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM ethnicity;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    cols = ['dates', 'white', 'black', 'hipsanic', 'asian']
    results = [{col: getattr(b,col) for col in cols} for b in books]
    return jsonify(results = results)
    #Response(json.dumps(books),  mimetype='application/json')

if __name__ == '__main__':
    app.run(debug=True)