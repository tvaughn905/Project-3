import psycopg2
from flask import Flask#,render_template


app = Flask(__name__)
con = psycopg2.connect(database="Movie_Rentals", user="postgres", password="postgres", host="127.0.0.1", port="5432")##
cursor = con.cursor()

##@app.route('/')##, methods =['post', 'get']
def testing():
    cursor.execute("select * from actor")
    result = cursor.fetchall
    return str(result)
    
    ##return render_template("testing.csv", data=result)

if __name__ == '__main__':
    app.run(debug=True)