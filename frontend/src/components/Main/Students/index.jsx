import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "../Students/index.module.css"

const Students = () => {
    return (
        <>
            <div className={styles.studentsText}>
                <h1 className={styles.studentsH1}>Top Courses That are open for Students</h1>
                <p className={styles.studentsP}>Who are in extremely love with eco friendly system.</p>
            </div>
            <Grid container spacing={7} item xs={10} margin={"0 auto"}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img src="https://preview.colorlib.com/theme/gym/img/c1.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Running Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src="https://preview.colorlib.com/theme/gym/img/c2.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Weight Lifting Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src="https://preview.colorlib.com/theme/gym/img/c3.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Body Combat Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src="https://preview.colorlib.com/theme/gym/img/c4.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Organic Yoga Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src="https://preview.colorlib.com/theme/gym/img/c5.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Raw Fitness Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                        <CardContent className={styles.studentImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src="https://preview.colorlib.com/theme/gym/img/c6.jpg.webp" alt="" />
                            </Typography>
                            <div  className={styles.studentPrice}>
                            <div> 
                                <h3>Body Building Classes</h3>
                            </div>
                            <div>
                                <span style={{color:"rgb(246,33,75)",fontWeight:600}}>$275</span>
                            </div>
                            </div>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                            </Typography>
                            <button className={styles.buttonStudents}>Course Available</button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Students
