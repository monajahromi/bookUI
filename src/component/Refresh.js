import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory  ,Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';



const Refresh = () => {
    const history = useHistory()
    //console.log("location " , location.pathname)

    const refresh = ()=>{
        history.go(0);
        

    }


    return (
        <Tooltip title="تازه سازی">
            <Button color="inherit" onClick={()=>refresh()}><RefreshIcon/></Button>
        </Tooltip>
    );
};

export default Refresh;