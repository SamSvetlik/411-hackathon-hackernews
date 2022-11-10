import React from "react";

function InputComponent(props) {

const {
    handleSelect, filterTerm
}= props
console.log(filterTerm)

  return (
    <div>
      <form>
        <select name="selectList" id="selectList" value={filterTerm} onChange={handleSelect}>
          <option value="date"> Date</option>
          <option value="author"> Author</option>
        </select>
      </form>
    </div>
  );
}

export default InputComponent;
