import "./ProductTable.scss";
const header = ["ProductNo", "ProductName", "ProductDesc", "Price"];
const cmd = ["open firefox","open terminal","open curl","close 2","open ps"];

function ProductTable(props) {
  const { data,text,application } = props;
  return (
    <>
      <div className="Product-table">
        <div className="table-hader">
          {header.map((index, label) => {
            return <div className="hader-text"key ={`${text}${label}`}>{`${index}`}</div>;
          })}
        </div>
        <div className="container" >
          {data.map((product, label) => {
            return (
              <div className="table"key ={`${text}${label}`}>
                <div className="id">{product.id}</div>
                <div className="title">{product.title}</div>
                <div className="desc">{product.description}</div>
                <div className="price">{product.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='function'>
          {cmd.map((index,label)=>{

            return(
                <div key ={`${data}${label}`} onClick={application}>
                  {`${index}`};
                </div>
              );
            
          })}
      </div>
    </>
  );
}
export default ProductTable;
