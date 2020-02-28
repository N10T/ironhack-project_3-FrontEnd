import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MessageBadge from './Badge/MessageBadge';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    botton: 0
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <BottomNavigation id="footer" value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction href="/" label="" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="" value="infos" icon={<InfoIcon />} />
      <BottomNavigationAction href="/building/create-information" label="" value="New post" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="" value="Messages" icon={<MessageBadge />} />
      {/* <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircle />} /> */}
      <BottomNavigationAction href="/user/building" label="" value="My cocoon" icon={<ApartmentIcon />} />
    </BottomNavigation>
  );
}