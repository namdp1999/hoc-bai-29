import './App.css';
import Cart from './components/Cart';
import Country from './components/Country';
import Lamp from './components/Lamp';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import Search from './components/Search';
import SearchUser from './components/SearchUser';

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

  const listUser = [
    "Le Van A",
    "Nguyen Thi B",
    "Do Thi C",
    "Hoang Van D",
    "Dao Thi E",
    "Le Thi F",
    "Le Thi G"
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
      <SearchUser listUser={listUser} />

      {/* <div>
        <Cart />
      </div>

      <hr />

      <div>
        <Lamp />
      </div>

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
      </div> */}
    </>
  )
}

export default App;
