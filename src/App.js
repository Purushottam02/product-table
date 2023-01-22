import { useEffect, useState } from "react";
import "./App.css";
import ProductTable from "./component/ProductTable";
import Search from "./component/Search";
import getProducts from "./service";
import Pagination from "./component/Pagination";

function App() {
  const pagesize = ["4", "5", "6", "10"];

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSelect, setPageSelect] = useState(5);
  const indexOfLastitem = currentPage * pageSelect;
  const indexOfFirstitem = indexOfLastitem - pageSelect;
  const currentPosts = data.slice(indexOfFirstitem, indexOfLastitem);
  const init = async () => {
    const products = await getProducts();
    setData(products);
  };

  const handlechangePage = (e) => {
    e.preventDefault();
    setPageSelect(e.target.value);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    init();
  }, []);
  let tableData = currentPosts;
  if (searchText.length) {
    tableData = data.filter((item) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
  return (
    <div className="App">
      <Search
        onSearchInputChange={(text) => {
          setSearchText(text);
        }}
      />

      <ProductTable data={tableData} />
      <Pagination
        postsPerPage={pageSelect}
        totalPosts={data.length}
        paginate={paginate}
      />

      <div className="pageselector">
        <select name="items" value={pageSelect} onChange={handlechangePage}>
          {pagesize.map((index, lable) => {
            return <option value={`${index}`}>{`${index}`}</option>;
          })}
        </select>
      </div>

      {/*       
      <label for="items">Items Per Page</label>
      <select name="items" value={pageSelect} onChange={handlechangePage}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="10">10</option>
      </select> */}
    </div>
  );
}

export default App;
