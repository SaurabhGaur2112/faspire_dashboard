import React, { Component } from 'react';
import { Card, CardContent, CardActions, Button, Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

export default class AddArtists extends Component{
    render(){
        return(
            <Card>
                <form>
                    <CardContent>
                        <Grid container spacing={24}>
                            <Grid item xs>
                                <TextField 
                                    label="Title"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs>
                                
                            </Grid>
                        </Grid>

                        <Grid container spacing={24}>
                            <Grid item xs>
                                <TextField 
                                    label="Description"
                                    multiline
                                    rows="3"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs>
                                
                            </Grid>
                        </Grid>

                        <Grid container spacing={24}>
                            <Grid item xs>
                                <FormControl component="fieldset" required>
                                    <FormLabel component="legend">Type</FormLabel>
                                    <RadioGroup
                                        aria-label="type"
                                        name="type"
                                        className="radio-position"
                                    >
                                        <FormControlLabel value="1" control={<Radio/>} label="Add" />
                                        <FormControlLabel value="2" control={<Radio/>} label="Video" />
                                        <FormControlLabel value="3" control={<Radio/>} label="Website" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs>
                                <TextField 
                                    label="Youtube Thumbnail"
                                    fullWidth
                                    required
                                />

                                <TextField 
                                    label="Website Link"
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid item xs>
                                <TextField 
                                    label="Youtube Link"
                                    fullWidth
                                    required
                                />

                                <input 
                                    type="file"
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    id="upload-file"
                                />

                                <label
                                    htmlFor="upload-file"
                                >
                                    <Button 
                                        variant="outlined" 
                                        color="primary" 
                                        size="small" 
                                        style={{marginTop: '15px'}}
                                        component="span"
                                    >
                                        Upload Thumbnail
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button variant="raised" color="primary">Submit</Button>
                    </CardActions>
                </form>
            </Card>
        );
    }
}