import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MailsVacancy from './MailsVacanccy';
import MailWarning from './MailWarning';
import MailsAnniversary from './MailAnniversary';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mailTab-tabpanel-${index}`}
      aria-labelledby={`mailTab-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function MailTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ height:"100%", bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' ,minWidth: '160px', display: 'flex',flexShrink: 0 ,alignContent:"center",justifyContent:"center",marginTop:"40px"}} >

        <Tab label="Vaccancy " {...a11yProps(0)} />
        <Tab label="Warning " {...a11yProps(1)} />
        <Tab label="Anniversary" {...a11yProps(2)} />

      </Tabs>
     
      <TabPanel value={value} index={0}>
      <MailsVacancy/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <MailWarning/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MailsAnniversary/>
      </TabPanel>
    </Box>
  );
}
