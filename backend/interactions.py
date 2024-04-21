import csv

def movieData(row):
    return {
        "poster": row[0],
        "title": row[1],
        "year": row[2],
        "runtime": row[4],
        "genre": row[5],
        "rating": row[6],
        "overview": row[7],
        "director": row[9],
        "stars": [
            row[10],
            row[11],
            row[12],
            row[13]
        ],
        "gross": row[15]
    }

def getMovies():
    with open("./data/data.csv", "r") as f:
        reader = [i for i in csv.reader(f)][1:]
        movies = [movieData(i) for i in reader]
        return movies

print(getMovies())