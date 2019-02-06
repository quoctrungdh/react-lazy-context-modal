import React from "react";

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { FormContext } from "./form-context";

export default function FormDialog() {
    return (
        <FormContext.Consumer>
            {({ toggleOpen }) => (
                <Dialog
                    open
                    onBackdropClick={toggleOpen}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here.
                            We will send update occasionally.
                        </DialogContentText>
                        <TextField
                            type="email"
                            autoFocus
                            label="Email address"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleOpen}>Cancel</Button>
                        <Button onClick={toggleOpen} color="primary">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            )}
        </FormContext.Consumer>
    )
}