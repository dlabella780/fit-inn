import React, { Component, useState } from "react";
import { Radio, RadioGroup, FormControlLabel, FormGroup, FormLabel, FormControl } from '@mui/material';
import { Box } from "@material-ui/core";

export default class PaymentType extends Component {
	render() {
		return (
            <Box sx={{
            }}>
                <form>
                    <FormControl>
                        <FormLabel id="payment-radio-buttons-group-label">Payment Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="payment-radio-buttons-group-label"
                            defaultValue="credit"
                            name="payment-types-group"
                            >
                                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="checking" control={<Radio />} label="Checking" />
                                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                        </RadioGroup>
                    </FormControl>
                </form>
            </Box>
        )
    }
}
