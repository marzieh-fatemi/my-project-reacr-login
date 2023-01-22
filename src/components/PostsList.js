import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function PostsList({posts}){
    return (
        <Container sx={{py: 3}}>
            <Grid container spacing={2}>
                {(posts || []).map((post, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {post.body}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'flex-end'}}>
                                    <Button size="small"> Edite </Button>
                                </CardActions>  
                            </Card>
                        </Grid>
                    );
                })}
        </Grid>
        </Container> 
    )
};
