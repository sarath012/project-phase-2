import React, { useState, useEffect } from "react";
import data from "../../Object/products.json";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../Store/shopcartSlice";

export const Checkboxes = ({ filterbasis }) => {

  const filter = useSelector((state) => state.shopcart.filter);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [options, setOptions] = useState([]);
  // const [selected, setSelected] = useState([]);

  useEffect(() => {
    let arr = [];
    data.products.map((product) => {
      if (!arr.includes(product[filterbasis])) {
        arr.push(product[filterbasis]);
      }
    });
    setOptions(arr);
  }, []);

  const handleChange = (e) => {
    let filtercopy = { ...filter };
    if (filtercopy[filterbasis].includes(e.target.value)) {
      let filtered = filtercopy[filterbasis].filter(
        (item) => item !== e.target.value
      );
      filtercopy[filterbasis] = filtered;
    } else {
      filtercopy[filterbasis] = [...filter[filterbasis], e.target.value];
    }
    dispatch(setFilter(filtercopy));
  };


  if (options === null) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "10px" }}>
      <br />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        {filterbasis}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => {
          return (
            <div key={option.id}>
              <input
                type="checkbox"
                name={filterbasis}
                value={option}
                onChange={handleChange}
                checked={filter[filterbasis].includes(option)}
              />
              {option}
            </div>
          );
        })}
      </Menu>
      {/* {options.map((option)=> {
            return(
                <div>
                    <input type="checkbox" name={filterbasis} value={option}/>{option}
                </div>
                
            );
        })} */}
    </div>
  );
};
