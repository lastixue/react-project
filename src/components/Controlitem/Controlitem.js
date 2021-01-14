import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LightGreen from '@material-ui/core/colors/LightGreen';
import {
    Switch,
    FormControlLabel,//設置label之標籤
    Typography,
    Slider
  } from "@material-ui/core";
  const LightGreens = LightGreen[100];
  //製作樣式
  const useStyles = makeStyles((theme)=>({
    switchBase: {
        color: theme.palette.grey[500],
        "&$checked": {
          
          color:LightGreen[300],
          borderColor:LightGreens,
          "& + $track": {
            opacity: 1,
            backgroundColor:LightGreens,
            
        },    
        "&.Mui-disabled + $track": {
            backgroundColor: theme.palette.grey[500],
        },
        },
      },
      track: {
        backgroundColor: theme.palette.grey[500],
      },
      slidertrack: {
        backgroundColor:LightGreen[300],
        color:LightGreen[300],
      },
      sliderthumb:{
        backgroundColor:LightGreen[300],  
      },
      checked: {
      },
      Typography:{
        margin: `${theme.spacing(0.9)}px ${theme.spacing(2)}px`,
      },//theme.spacing 為defaut theme 預設間距 8px 所以theme.spacing(2)=8*2 
      slider:{
        margin: `${theme.spacing(0.9)}px ${theme.spacing(2)}px`,
      }
  }));
  
function Controlitem({name}){
    const classes = useStyles();
    const[auto,setAuto]=useState(false);//設置開關狀態
    return(
    <form>
    <div>
    <FormControlLabel
        labelPlacement="Start"
        label="自動操作"
        control={<Switch 
                    color="teal"
                    classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked,
                      }}
                    onChange={(e) =>setAuto(e.target.checked)} />}//獲取開關狀態
    />  
     <Typography  display="inline" className={classes.Typography} >
    {auto?"開啟":"關閉"}
    </Typography>
    </div>
    <div className={classes.slider}>
    <Typography gutterBottom>
        {name}
      </Typography>
      <Slider
      classes={{
        track: classes.slidertrack,
        thumb: classes.sliderthumb,
        valueLabel:classes.slidertrack
      }}
       defaultValue={[0, 10]}
       min={0}
       max={100}
       valueLabelDisplay="auto"
       aria-labelledby="range-slider"
        // defaultValue={30}
        // aria-labelledby="discrete-slider"
        // valueLabelDisplay="auto"
        // step={10}
        // marks
        // min={10}
        // max={110}
      />
      </div>
        
    </form>    
    )
    /* 需新增
    起始日期時間
    結束日期時間 */
}
export default Controlitem;