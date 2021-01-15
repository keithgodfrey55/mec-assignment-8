import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Compatible extends React.Component {
    render(){
        return (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                alert("IOS 6+ and higher, Android 8.0 and higher");
              }}
            >
              Compatible Devices
            </Button>
        );
    }
}

export default Compatible;