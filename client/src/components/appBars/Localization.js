import React, {Fragment} from 'react';
import {
  Button,
  ButtonGroup,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener
} from '@material-ui/core';

import {Translate, ArrowDropDown} from '@material-ui/icons'
import {LocaleContext, Languages} from '../../locales'

// https://material-ui.com/components/button-group/, split button
export default function () {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClick = (idx, cb) => {
    setOpen(false);
    cb(idx)
  }

  return (
    <LocaleContext.Consumer>
      {({locale, changeLocale}) => (
        <Fragment>
          <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
            <Button startIcon={<Translate />} onClick={handleOpen}>
              {locale}<ArrowDropDown />
            </Button>
          </ButtonGroup>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',}}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {Languages.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === locale}
                          onClick={() => handleMenuItemClick(index, changeLocale)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      )}
    </LocaleContext.Consumer>
  );
}
