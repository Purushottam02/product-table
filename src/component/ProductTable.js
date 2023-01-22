import "./ProductTable.scss";
const header = ["ProductNo", "ProductName", "ProductDesc", "Price"];

function ProductTable(props) {
  const { data } = props;
  return (
    <>
      <div className="Product-table">
        <div className="table-hader">
          {header.map((index, lable) => {
            return <div className="hader-text">{`${index}`}</div>;
          })}
        </div>
        <div className="container" >
          {data.map((product, lable) => {
            return (
              <div className="table">
                <div className="id">{product.id}</div>
                <div className="title">{product.title}</div>
                <div className="desc">{product.description}</div>
                <div className="price">{product.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductTable;
