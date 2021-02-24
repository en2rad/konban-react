import React from 'react';
import {InputLabel, FormControl, Select} from "@material-ui/core";

function SelectUsers({ onChange }) {


    return (
        <FormControl variant="outlined" label="USA" className="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select onChange={(ev) => onChange(ev.target.value )} native label="Select">
                <option key="1">Select</option> 
                <option key="2">Select1</option>  
                <option key="3">Select2</option>   
                {/* {props.data.map(curr => {
                    return <option key={curr.Cur_ID}>{curr.Cur_Abbreviation}</option>  
                })} */}
            </Select>
        </FormControl>
    )
}

export default SelectUsers