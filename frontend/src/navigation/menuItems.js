import TemperatureIcon from '@mui/icons-material/AcUnit';
import PhIcon from '@mui/icons-material/LocalDrink';
import DosageIcon from '@mui/icons-material/LocalPharmacy';
import AlarmIcon from '@mui/icons-material/Alarm';
import SettingsIcon from '@mui/icons-material/Settings';

export const menuItems = [
  { name: 'Temperature', icon: <TemperatureIcon />, path : 'temperature' },
  { name: 'pH', icon: <PhIcon />, path : 'ph' },
  { name: 'Doso', icon: <DosageIcon />, path : 'doso' },
  { name: 'Alarms', icon: <AlarmIcon />, path : 'alarms' },
  { name: 'Settings', icon: <SettingsIcon />, path : 'settings' }
];
