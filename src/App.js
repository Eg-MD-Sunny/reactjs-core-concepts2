import './App.css';

function App() {
	const products = [
		{name:'Laptob', price: 153000},
		{name:'phone', price: 93000},
		{name:'Watch', price: 33000},
		{name:'Tablat', price: 5000},
	]
  return (
    <div className="App">
		{
			products.map(product=>{
				return <Product name={product.name} price={product.price}></Product>
			})
		}
		{/* <Product name="Laptop" price="47000"></Product>
		<Product name="Phone" price="75000"></Product>
		<Product name="Watch" price="3500"></Product> */}
    </div>
  );
}

//Component Create
function Product(props){
	return (
		<div className="product">
			<h3>Name: {props.name}</h3>
			<p>Price: {props.price}</p>
		</div>
	)
}

export default App;
