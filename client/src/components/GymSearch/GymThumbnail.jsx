import { React } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function checkEquip(val, props) {
  var equipIDs = [];
  const exist = (id) => id === props.filterEquipment;
  
  val.equipment.forEach(equip => { equipIDs.push(equip.equipmentId); });

  return equipIDs.some(exist);
}

const GymThumbnail = (props) => {
  if (props.gymData.length === 0) return '';
  //if (props.loading === true) return (<CircularProgress/>)
  else return ( <div> 
  <Grid container 
    direction="row"
    spacing={{ xs: 2, md: 3 }} 
    columns={{ xs: 4, sm: 8, md: 12 }}
    justifyContent="center"
    alignItems="baseline"
  > 
    {props.gymData.list_GymItems._GymItems.map((val, index) => (
    <Grid item key={index}> {
      ((val.cost <= props.filterMaxPrice || (props.filterMaxPrice === 0 || props.filterMaxPrice === '')) 
        && // GYM FILTERING BY COST & EQUIPMENT //
        (checkEquip(val, props) || props.filterEquipment === 'Any')
      ) && 
      <Item className="gym-thumbnail-indiv">
        <Grid container direction="row" spacing={2} sx={{ width: 'flex', height: 'flex' }}>
          <Grid item>
            <Link to={{pathname: "/ViewGym", props: val }}>
              <ButtonBase sx={{ width: 200, height: 200 }}>
                  <img src={val.photos[0]} width="200" height="200" ></img>
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h4">{val.title}</Typography>
            <Typography variant="subtitle1" gutterBottom key={val.address.street1}>
                {' ' + val.address.street1} 
                {val.address.street2 === '' ? ' ' + val.address.street2 : ''}<br/>
                {' ' + val.address.City}
                {' ' + val.address.State}
                {' ' + val.address.zipcode}
            </Typography>
            <Typography variant="body1">
                {val.description}<br/>
                <Rating name="gym-rating" value={val.rating} size="small" readOnly/><br/>
                {val.numReviews === 0 ? val.numReviews : 0}{' Reviews'}<br/>
                ${val.cost}/hour<br/>
            </Typography>
          </Grid>
        </Grid>
      </Item>}
    </Grid>))}
  </Grid> 
</div> );}

export default GymThumbnail;