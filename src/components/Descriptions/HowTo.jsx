import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`action-tabpanel-${index}`}
			aria-labelledby={`action-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		'aria-controls': `action-tabpanel-${index}`,
	};
}

function Item(props) {
	return null;
}

Item.propTypes = {children: PropTypes.node};
export default function HowTo() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => { setValue(newValue); };
	const handleChangeIndex = (index) => { setValue(index); };
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				width: 1000,
				position: 'center',
				minHeight: 200,
			}}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="action tabs example"
				>
					<Tab label="For Users" {...a11yProps(0)} />
					<Tab label="For Hosts" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={3}>
								<Grid item xs>
									<Item>
										DISCOVER
										<Typography variant="h6" component="h2">
											Find a gym near you and get into great shape!
										</Typography>
									</Item>
								</Grid>
								<Grid item xs>
									<Item>
										BOOK A GYM
										<Typography variant="h6" component="h2">
											Schedule a spot near you within your budget!
										</Typography>
									</Item>
								</Grid>
								<Grid item xs>
									<Item>
										ENJOY FITTING-INN
										<Typography variant="h6" component="h2">
											Gain confidence, strength, and make friends along the way.
										</Typography>
									</Item>
								</Grid>
							</Grid>
					</Box>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={3}>
							<Grid item xs>
								<Item>
									LIST YOUR GYM
									<Typography variant="h6" component="h2">
										Provide others access to your home gym!
									</Typography>
								</Item>
							</Grid>
							<Grid item xs>
								<Item>
									ACCEPT RESERVATIONS
									<Typography variant="h6" component="h2">
										Rent out your gym and schedule user access!
									</Typography>
								</Item>
							</Grid>
							<Grid item xs>
								<Item>
									GET PAID!
									<Typography variant="h6" component="h2">
										Set your rates and make some cash!
									</Typography>
								</Item>
							</Grid>
						</Grid>
					</Box>
				</TabPanel>
			</SwipeableViews>
	</Box>);
}
