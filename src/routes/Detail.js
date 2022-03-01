import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    console.log(movieDetails);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <img src={movieDetails.medium_cover_image} alt="title" />
            <h2>{movieDetails.title}</h2>
            <ul>{movieDetails.description_full}</ul>
            <button
              onClick={() =>
                window.open("https://yts.mx/movies/jai-bhim-2021", "_blank")
              }
            >
              Move to Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
