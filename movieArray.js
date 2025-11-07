// Movie class
class Movie {
  constructor(movieID, movieTitle, movieYear, movieRating) {
    this.movieID = movieID;
    this.movieTitle = movieTitle;
    this.movieYear = movieYear;
    this.movieRating = movieRating;
  }
}

// 10 default movies
let movieArray = [
  (new Movie(1, "Best Movie Ever", "2019", "4.5")),
  (new Movie(2, "Worst Movie Ever", "2011", "8.3")),
  (new Movie(3, "The LEGO Github Movie", "2022", "7.9")),
  (new Movie(4, "I Blame You For Everything", "2018", "9.0")),
  (new Movie(5, "We Bought Another Zoo", "2014", "3.2")),
  (new Movie(6, "They Were Out Of Zoos, So We Bought A Planetarium", "2019", "6.8")),
  (new Movie(7, "Lizards On A Bus", "2007", "1.1")),
  (new Movie(8, "(600) Days Of Summer", "2019", "4.5")),
  (new Movie(9, "The Woman from A.U.N.T.", "2016", "8.8")),
  (new Movie(10, "Hostile Hospital", "2002", "0.0")),
];

//////////////////////////////////////////////////////////////////////////

class MovieList {
  constructor(rootID, movieArray) {
    this.rootID = rootID; // HTML ID of the list destination
    this.movieList = movieArray;
    this.refresh();
  }

  // Methods
  movieRow(index, title, year, rating) {
    const rootElement = document.getElementById(this.rootID); // Parent element

    // Create elements for DOM
    const row = document.createElement('div');
    const idDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const yearDiv = document.createElement('div');
    const ratingDiv = document.createElement('div');

    // Add content to elements
    idDiv.textContent = index;
    titleDiv.textContent = title;
    yearDiv.textContent = year;
    ratingDiv.textContent = rating;

    // Add elements to DOM
    // Append elements to row
    row.appendChild(idDiv);
    row.appendChild(titleDiv);
    row.appendChild(yearDiv);
    row.appendChild(ratingDiv);
    // Append row to DOM
    rootElement.appendChild(row);

    // Add classes to divs
    row.classList.add('row');
    idDiv.classList.add("idDiv");
    titleDiv.classList.add("titleDiv");
    yearDiv.classList.add("yearDiv");
    ratingDiv.classList.add("ratingDiv");
  }

  // Generate all rows
  genMovieList() {
    for (let i = 0; i < this.movieList.length; i++) {
      let movie = this.movieList[i];
      this.movieRow(movie.movieID, movie.movieTitle, movie.movieYear, movie.movieRating);
    }
  }

  // Remove elements
  removeElements() {
    const rootElement = document.getElementById(this.rootID); // Parent element
    const childNodes = document.getElementsByClassName('row'); // Array of elements
    const len = childNodes.length - 1;

    // Loop through, removing all children
    for (let i = len; i >= 0; i--) {
      const child = childNodes[i];
      rootElement.removeChild(child);
    }
  }

  // Clear the DOM of movies, then show the requested movies
  refresh() {
    this.removeElements();
    this.genMovieList();
  }


  // Sorting
  // Sort title ascending
  sortA2Z() {
    this.movieList.sort(function (a, b) {
      return a.movieTitle.localeCompare(b.movieTitle);
    });
    this.refresh();
  }

  // Sort title descending
  sortZ2A() {
    this.movieList.sort(function (a, b) {
      return b.movieTitle.localeCompare(a.movieTitle);
    });
    this.refresh();
  }

  // Sort rating descending
  sortRating() {
    this.movieList.sort(function (a, b) {
      return b.movieRating.localeCompare(a.movieRating);
    });
    this.refresh();
  }

  // Sort ID descending
  sortID() {
    this.movieList.sort(function (a, b) {
      return (a.movieID - b.movieID);
    });
    this.refresh();
  }


  // Searching
  // Search results
  genSearchList(array) {
    if (array.length == 0) {
      this.movieRow("", "0 results", "", "");
    } else {
      for (let movie of array) {
      this.movieRow(movie.movieID, movie.movieTitle, movie.movieYear, movie.movieRating);
      }
    }
  }

  // Search by ID
  searchID(query) {
    let searchResults = [];
    // Compare
    for (let movie of this.movieList) {
      if(movie.movieID == query) {
        searchResults.push(movie);
      }
    }
    // Display
    this.removeElements();
    this.genSearchList(searchResults);
  }

  // Search by title
  searchTitle(query) {
    let searchResults = [];

    for (let movie of this.movieList) {
      // Make searching case insensitive
      let lowerMovieTitle = (movie.movieTitle).toLowerCase();
      let lowerQuery = query.toLowerCase();
      // Compare
      if(lowerMovieTitle.includes(lowerQuery)) {
        searchResults.push(movie);
      }
    }
    // Empty searchResults if the query is empty
    if (query == "") {
      searchResults = [];
    }
    // Display
    this.removeElements();
    this.genSearchList(searchResults);
  }
}

//////////////////////////////////////////////////////////////////////////

let movieList = new MovieList('list', movieArray);

//////////////////////////////////////////////////////////////////////////
// Click functions
// Sorting
// Sort A-Z
function a2zClick() {
  movieList.sortA2Z();
}

// Sort Z-A
function z2aClick() {
  movieList.sortZ2A();
}

// Sort rating (descending)
function ratingClick() {
  movieList.sortRating();
}

// Show all movies, ordered by ID (ascending)
function refreshClick() {
  movieList.refresh();
  movieList.sortID();
}