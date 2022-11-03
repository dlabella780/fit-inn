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
  //if (props.loading) return (<CircularProgress/>)
  else return ( <div> 
  <Grid container 
    direction="row"
    spacing={{ xs: 2, md: 3 }} 
    columns={{ xs: 4, sm: 8, md: 12 }}
    justifyContent="space-between"
    alignItems="flex-start"
  > 
    {props.gymData.list_GymItems._GymItems.map((val, index) => (
    <Grid item xs={"flexGrow"} key={index}> {
      // GYM FILTERING BY COST & EQUIPMENT //
      (
        (val.cost <= props.filterMaxPrice || props.filterMaxPrice === 0) 
        && 
        (checkEquip(val, props) || props.filterEquipment === 'Any')
      )
      && 
      <Item className="gym-thumbnail-indiv">
        <Grid item container direction="row" spacing={2}>
        <Grid item>
          <Link to={{pathname: "/ViewGym", props: val }}>
            <ButtonBase sx={{ width: 180, height: 180 }}>
                <img src={val.photos[0]} width="180" height="180" ></img>
            </ButtonBase>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h4">
              {val.title}
          </Typography>
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
              ${val.cost}/hour<br/>
              {val.availability.map((dateM, index) => 
                <Typography variant="body1" key={index}>
                  {(new Date(dateM)).toLocaleString()}<br/>
                </Typography>
              )}
              {/* {val.equipment.map(equip => 
                <Typography>
                  {equip.equipmentId = "0183a535-9d09-3f43-1df7-32a86713e03f" ? '' : 'Wahoo Trainer'}
                  {equip.equipmentId = "0183a535-c37c-4853-491d-7d93354e3852" ? 'Yoga Mat' : ''}
                  {equip.equipmentId = "0183a535-d802-4844-dffe-73516837ab65" ? '' : 'Safety Straps'}
                  {equip.equipmentId = "0183a535-fe85-a5db-fd29-e194fdb6893b" ? '' : 'Landmine'}
                  {equip.equipmentId = "0183a536-1908-f2cc-6b35-bbbbf1920859" ? '' : 'Dip Bar'}
                  {equip.equipmentId = "0183a536-327e-8f92-4a3e-f10704ca6ce3" ? '' : 'Bench'}
                  {equip.equipmentId = "0183a536-4af4-2ac0-7201-38b46bf3b43d" ? '' : 'Power Rack'}
                  {equip.equipmentId = "0183a536-66da-27b7-1022-c7a98e580a73" ? '' : 'Dumbbells'}
                  {equip.equipmentId = "0183a536-85c8-ac9b-4c5f-c0ad4cd25232" ? '' : 'Pullup Bar'}
                  {equip.equipmentId = "0183a536-9e7f-79f2-3c2a-67e0a38907ed" ? '' : 'Iron Plates'}
                  {equip.equipmentId = "0183a536-b898-d087-da21-4e948ea65140" ? '' : 'Rubber Plates'}
                  {equip.equipmentId = "0183a536-cf77-81d0-263f-35e62a3f18ac" ? '' : 'Curl Bar'}
                  {equip.equipmentId = "0183a536-e562-66c8-6da7-4e844b391060" ? '' : 'Barbell'}
                </Typography>)
              } */}
          </Typography>
        </Grid>
        </Grid>
      </Item>}        
    </Grid>))}
  </Grid> 
</div> );}

export default GymThumbnail;