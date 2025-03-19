import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <h1></h1>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>

                    <Box>
                        <Avatar className='text-white ' sx={{ width: 56, heighta: 56, bgcolor: "#9155fd" }}>

                        </Avatar>
                    </Box>

                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'> Priya </p>
                            <p className='opacity-70 '>15th April. 2025</p>
                        </div>
                    </div>
                    <Rating value={4.5} name='half-rating' readOnly precision={.5}>

                    </Rating>
                    <p>
                        this produce was truely nice. recomended this product
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
