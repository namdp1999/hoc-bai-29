import { useState } from "react";

function Lamp() {
  // let status = true;
  const [status, setStatus] = useState(true);

  const handleClick = () => {
    // status = !status;
    setStatus(!status);
  }

  return (
    <>
      <div>
        {status ? (
          <>Đèn đang bật</>
        ) : (
          <>Đèn đã tắt</>
        )}
      </div>
      <div>
        <button onClick={handleClick}>
          {status ? (<>Tắt</>) : (<>Bật</>)}
        </button>
      </div>
    </>
  )
}

export default Lamp;