import os
import psycopg2
from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

conn = psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")

# Open a cursor to perform database operations
cur = conn.cursor()

@app.route('/')
def index():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM unemployed;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    return str(books)

if __name__ == '__main__':
    app.run(debug=True)