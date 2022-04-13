import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Gif from "../../components/Gif";
import { setQuery } from "../../store/query-action";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const currentQuery = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const getData = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${currentQuery
      .replace(/\s+/g, "+")
      .toLowerCase()}&api_key=${GIPHY_KEY}&limit=12`;

    const response = await fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <div className="container">
      <SearchBar
        query={currentQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="search-result parent-white">
        {results.map((it) => (
          <div className="gifs">
            <h3>{it.title}</h3><br />
            <Gif key={it.id} source={it.images.downsized.url} title={it.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
