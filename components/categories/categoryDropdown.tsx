// BasicMenu.tsx

import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type BasicMenuProps = {
  applyFilter: (filter: string) => void;
};

const BasicMenu = ({ applyFilter }: BasicMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [title, setTitle] = useState('Rekommenderas'); 

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (selectedTitle: string) => {
    setTitle(selectedTitle); 
    applyFilter(selectedTitle.toLowerCase()); 
    handleClose();
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <b>{title}</b>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('Rekommenderas')}>Rekommenderas</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Högsta till lägsta pris')}>Högsta till lägsta pris</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Lägsta till högsta pris')}>Lägsta till högsta pris</MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenu;
