import { useState } from "react";

function SearchUser(props) {
  const { listUser } = props;
  const [suggest, setSuggest] = useState([]);
  const [className, setClassName] = useState("");

  const handleChange = (e) => {
    if(e.target.value.length > 0) {
      const result = listUser.filter(item => {
        return item.includes(e.target.value);
      })
      setSuggest(result);
      setClassName("suggest--show");
    } else {
      setSuggest([]);
      setClassName("");
    }
  }

  return (
    <>
      <input onChange={handleChange} />
      {suggest.length > 0 && (
        <div className={"suggest " + className}>
          {suggest.map((item, index) => (
            <div key={index} className="suggest__item">
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SearchUser;