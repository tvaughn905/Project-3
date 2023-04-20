from flask_cors import cross_origin
import psycopg2
import json
from flask import Flask, Response




conn = psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")

# Open a cursor to perform database operations
cur = conn.cursor()

app = Flask(__name__)

@app.route('/industry')
@cross_origin()
def industry():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM unemployed;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    titles = ['industry', 'fy14', 'fy15', 'fy16', 'fy17', 'fy18', 'fy19', 'fy20', 'fy21']
    industry_dict = []

    for i in range(len(books)):
            industry = {titles[0]: books[i][0], titles[1]: books[i][1], titles[2]: books[i][2],
            titles[3]: books[i][3], titles[4]: books[i][4], titles[5]: books[i][5],
            titles[6]: books[i][6], titles[7]: books[i][7], titles[8]: books[i][8]}
            
            industry_dict.append(industry)

    return Response(json.dumps(industry_dict),  mimetype='application/json')

@app.route('/ethnicity')
@cross_origin()
def ethnicity():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM ethnicity;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    titles = ['dates', 'white', 'black', 'hipsanic', 'asian']
    ethnicity_dict = []

    for i in range(len(books)):
        ethnicity = {titles[0]: books[i][0], titles[1]: books[i][1], titles[2]: books[i][2],
        titles[3]: books[i][3], titles[4]: books[i][4]}
        
        ethnicity_dict.append(ethnicity)

    return Response(json.dumps(ethnicity_dict),  mimetype='application/json')

@app.route('/gender')
@cross_origin()
def gender():
    conn =psycopg2.connect(database="flask_df", user="flask_df_user", password="DF4LP1UcZJt3AN4cUW9hrbfp2p4FtWL3", host="dpg-cgtiqjl269vbmeuj26cg-a.oregon-postgres.render.com", port="5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM gender;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    titles = ['date', 'women', 'men']
    gender_dict = []

    for i in range(len(books)):
            gender = {titles[0]: books[i][0], titles[1]: books[i][1], titles[2]: books[i][2],}
            
            gender_dict.append(gender)

    return Response(json.dumps(gender_dict),  mimetype='application/json')

if __name__ == '__main__':
    app.run(debug=True)