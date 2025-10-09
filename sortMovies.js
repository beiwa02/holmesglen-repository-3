class Movie {
  constructor(movieID, movieTitle, movieYear, movieRating) {
    this.movieID = movieID;
    this.movieTitle = movieTitle;
    this.movieYear = movieYear;
    this.movieRating = movieRating;
  }
}

let movieArray = [];

movieArray.push(new Movie(2, "Worst Movie Ever", "2011", "8.3"));
movieArray.push(new Movie(6, "They Were Out Of Zoos, So We Bought A Planetarium", "2019", "6.8"));
movieArray.push(new Movie(4, "I Blame You For Everything", "2018", "9.0"));
movieArray.push(new Movie(10, "Hostile Hospital", "2002", "0.0"));
movieArray.push(new Movie(5, "We Bought Another Zoo", "2014", "3.2"));
movieArray.push(new Movie(9, "The Woman from A.U.N.T.", "2016", "8.8"));
movieArray.push(new Movie(7, "Lizards On A Bus", "2007", "1.1"));
movieArray.push(new Movie(1, "Best Movie Ever", "2019", "4.5"));
movieArray.push(new Movie(8, "(600) Days Of Summer", "2019", "4.5"));
movieArray.push(new Movie(3, "The LEGO Github Movie", "2022", "7.9"));

// Q4.3: Sort movies ascending by movieID
const sortedMovies = movieArray.sort(function(a, b){return a.movieID - b.movieID});