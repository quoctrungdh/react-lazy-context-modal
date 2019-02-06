import React, { Component, lazy, Suspense } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { FormContext } from "./form/form-context";
const Form = lazy(() => import("./form/Form"));


export class App extends Component {
    state = {
        isOpen: false
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <FormContext.Provider
                    value={{
                        isOpen: this.state.isOpen,
                        toggleOpen: this.toggleOpen
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.toggleOpen}
                    >
                        Click me
                    </Button>
                    {
                        this.state.isOpen &&
                        <Suspense fallback={<CircularProgress />}>
                            <Form />
                        </Suspense>
                    }
                </FormContext.Provider>
            </Grid>
        )
    }
}
