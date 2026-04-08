// Define the Movie class
class Movie {
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast; 
    this.description = description;
    this.rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const movieInfoDiv = document.getElementById('movie-info');
    
    movieInfoDiv.innerHTML += `
      <div>
        <p><strong>Title:</strong> ${this.title}</p>
        <p><strong>Cast:</strong> ${this.cast.join(', ')}</p>
        <p><strong>Description:</strong> ${this.description}</p>
        <p><strong>Rating:</strong> ${this.rating}</p>
        <hr>
      </div>
    `;
  }
}

const glassOnion = new Movie(
  "Glass Onion: A Knives Out Mystery",
  ["Daniel Craig", "Edward Norton", "Janelle Monáe", "Kathryn Hahn"],
  "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
  7.1
);

glassOnion.displayInfo();

const movies = [glassOnion];

function updateMovieRating(title, newRating) {
  // Find the movie in the collection
  const movieToUpdate = movies.find(m => m.title === title);
  
  if (movieToUpdate) {
    movieToUpdate.updateRating(newRating);
    
    const movieInfoDiv = document.getElementById('movie-info');
    movieInfoDiv.innerHTML += `<h3>Updated rating:</h3>`;
    
    movieToUpdate.displayInfo();
  }
}

updateMovieRating("Glass Onion: A Knives Out Mystery", 8.0);