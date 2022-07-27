import React,{useState, useEffect, useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { appContext } from "../../Context/AppContext";


export const Stock = () => {

    const {
        filter, 
        setFilter
      } = useContext(appContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    
    

  return (
    <div style={{padding: '10px'}}>
        <br/>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Stock
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
      >
        <div>
            <input type="checkbox" name="stock" value={filter.stock} onChange={() => setFilter({...filter, stock: true})} checked={filter.stock}/> In Stock
        </div>
        <div>
            <input type="checkbox" name="stock" value={filter.stock} onChange={() => setFilter({...filter, stock: false})} checked={!filter.stock}/> Out of Stock
        </div>
        
      </Menu>
        

    </div>
  )
}
