var movies = [
{title:"The Lion King",
hasWatched: true,
rating: 5
},
{
	title: "Cinderella",
	hasWatched: true,
	rating:3
},
{
	title: "Toy Story",
	hasWatched: false,
	rating:4
}
]


movies.forEach(function(movie){
	console.log(buildString(movie))
 });

function buildString(movie){
var result = "You have "; 
 if(movie.hasWatched){
 	result += "watched";
 } else { 
 	result += "not seen";
 } 
 result += " \"" + movie.title + "\" -"; 
 result += movie.rating + "stars";
 return result;
}