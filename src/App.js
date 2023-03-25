import './App.css';
import Country from './components/Country';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {
  const isLogin = false;
  const isSearch = true;

  const arrayMenu = [
    "Trang chủ",
    "Sản phẩm",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ",
  ];
  // if(isLogin) {
  //   return (
  //     <>
  //       Đã login
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       Chưa login
  //     </>
  //   );
  // }

  return (
    <>
      {isLogin ? (<>Đã login</>) : (<>Chưa login</>)}
      {isSearch && <Search />}

      <div>
        <Menu menu={arrayMenu} />
      </div>

      <div>
        <ProductList />
      </div>

      <div>
        <Country />
      </div>
    </>
  )
}

export default App;
