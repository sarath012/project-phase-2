import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });

  const navigate = useNavigate();
  const [imageError, setImageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (formdata.images.length === 0) {
      setImageError("Please enter image urls");
      valid = false;
    }
    if (valid) {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formdata.title,
          description: formdata.description,
          price: parseInt(formdata.price),
          discountPercentage: parseInt(formdata.discountPercentage),
          rating: parseInt(formdata.rating),
          stock: parseInt(formdata.stock),
          brand: formdata.brand,
          category: formdata.category,
          thumbnail: formdata.thumbnail,
          images: formdata.images,
        }),
      }).then((res) => console.log(res.json()));
    }
  };

  // console.log(formdata);

  return (
    <div>

      <div>
      <button
          className="productpage-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/products")}
        >
          Back to Products page
        </button>
      </div>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formdata.title}
          onChange={(e) => setFormData({ ...formdata, title: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formdata.description}
          onChange={(e) =>
            setFormData({ ...formdata, description: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={formdata.price}
          onChange={(e) => setFormData({ ...formdata, price: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="rating"
          placeholder="Enter Discount Percentage"
          value={formdata.discountPercentage}
          onChange={(e) =>
            setFormData({ ...formdata, discountPercentage: e.target.value })
          }
          required
          min="0"
          max="100"
          step="0.01"
        />
        <br />
        <br />
        <input
          type="number"
          name="rating"
          placeholder="Enter Rating"
          value={formdata.rating}
          onChange={(e) => setFormData({ ...formdata, rating: e.target.value })}
          required
          min="0"
          max="5"
          step="0.01"
        />
        <br />
        <br />
        <input
          type="number"
          name="stock"
          placeholder="Enter Stock"
          value={formdata.stock}
          onChange={(e) => setFormData({ ...formdata, stock: e.target.value })}
          required
          min="0"
          step="1"
        />
        <br />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Enter Brand"
          value={formdata.brand}
          onChange={(e) => setFormData({ ...formdata, brand: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          value={formdata.category}
          onChange={(e) =>
            setFormData({ ...formdata, category: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="thumbnail"
          placeholder="Enter Thumbnail"
          value={formdata.thumbnail}
          onChange={(e) =>
            setFormData({ ...formdata, thumbnail: e.target.value })
          }
          required
        />
        <br />
        <br />
        <div className="skillsinputautocomplete">
          <Autocomplete
            value={formdata.images}
            multiple
            freeSolo
            options={[]}
            onChange={(event, newValue) => {
              setFormData({ ...formdata, images: newValue });
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  //   style={{
                  //     backgroundColor: 'white'
                  //   }}
                />
              ))
            }
            style={{
              minWidth: "12em",
              //   borderRadius: "5px",
              //   backgroundColor: '#003c77',
            }}
            // sx={{
            //   '& .MuiAutocomplete-clearIndicator': {
            //     color: 'white',
            //   },
            // }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter Image Urls"
                // sx={{ input: { color: 'white' } }}
                // InputLabelProps={{
                //   style: {
                //     color: 'white'
                //   }
                // }}
              />
            )}
          />
        </div>
        {imageError !== "" && <span>{imageError}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
