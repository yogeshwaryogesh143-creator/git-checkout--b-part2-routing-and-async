import useFoodSearch from "../../hooks/useFoodSearch";
import SearchBar from "../SearchBar";
import FoodList from "../FoodList";

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch();

  return (
    <div>
      <h2>Search Food</h2>
      <SearchBar onSearch={searchFood} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <FoodList products={results} />
    </div>
  );
}

export default HomePage;
