import React from 'react';
import { TextField, Paper, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const addTodo = ({ createTodo, input, setInput }) => {
    return (
        <Paper style={{ margin: 'auto', padding: 16 }} sx={{ width: '50%' }}>
            <Grid container>
                <Grid xs={5} md={6} item style={{ paddingRight: 16 }}>
                    <TextField item style={{ paddingLeft: 140, float: 'center' }}
                        placeholder="Add Todo here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={4} item style={{ paddingLeft: 150 }}>
                    <Button item style={{ height: 55 }}
                        fullWidth
                        color="primary"
                        variant="outlined"
                        startIcon={<AddIcon/>}
                        onClick={createTodo}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
  };
  
  export default addTodo;