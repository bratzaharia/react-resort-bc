import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

// get all unique values
const getUnique = (item, value) => {
  return[...new Set(item.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
  // get unique types
  let types = getUnique(rooms, 'type');
  // console.log(types)

  // add all
  types = ['all', ...types];
  // console.log(types)
  // console.log(context);

  // map to jsx
  types = types.map((item, index) => {
    return 
  })

  return <section className="filter-container">
    <Title title="search rooms" />
    <form action="" className="filter-form">
      {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {  }
          </select>
        </div>


      {/* end select type */}
    </form>
  </section>;
}
