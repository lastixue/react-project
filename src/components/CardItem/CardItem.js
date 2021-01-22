import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function CardItem({title}){
    return(
    <>
    <Typography variant="h4">{title}</Typography>
    <CircularProgressbar 
        value={66}
        text='66%'
        strokeWidth={15}
        styles={buildStyles({
          pathColor: "#B3C6AC"
        })}
    />
    </>
    )
}
export default CardItem;