import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './About.css';

const About = () => {
  const cardData = [
    {
      title: "Who are WE",
      content: "We are a community of passionate computer science students. We are builders, dreamers, problem-solvers. We are here to grow and strengthen the Computer Science Student community here at NIT DGP and connect our members to all the people, resources, and opportunities they want to achieve their goals."
    },
    {
      title: "Our Vision",
      content: "Our vision is to create an inclusive environment for the CSE community and beyond, offering resources and events that foster learning and professional development. We aim to organize diverse events and workshops for all students interested in computer science and related fields, from coding competitions and hackathons to talks on emerging tech trends. Additionally, we aim to connect students with alumni regardless of academic background."
    },
    {
      title: "Our Journey",
      content: "Our journey as a CSE students society has been one of development and community building. We began as a small group of like-minded individuals with a passion for technology, and we have since grown into a thriving community of students and faculty. We have organised events, seminars, and guest lectures to provide opportunities for learning and networking. Our journey continues as we strive to inspire and support the next generation of CSE professionals."
    }
  ];

  return (
    <div className="about-container">
      <Typography variant="h3" className="about-heading">
        About Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div" className="card-title">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
