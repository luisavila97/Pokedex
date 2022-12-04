import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./SearchForm.module.css";

import img from "../../images/pokedex-100.png";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === undefined || query === null || query === "") {
      return navigate("/");
    }

    navigate(`/pokemon/${query}`);
  };
  return (
    <form className={styles.header} onSubmit={handleSubmit}>
      <div>
        <img src={img} alt="Pokedex" />
        <div>
          <h1>Pokedex</h1>
          <p>Search for any Pokemon...</p>
        </div>
      </div>

      <div>
        <input type="text" placeholder="Name of the Pokemon" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        <input className="btn" type="submit" value="Search" />
      </div>
    </form>
  );
};

export default SearchForm;
