import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Description,
} from "../Styles/Styles.Card";
import TextBanner from "../TextBanner/TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Services = () => {
  return (
    <>
      <TextBanner
        title="Our Services"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vero?"
      ></TextBanner>
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Training Courses</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Service Desk</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Data Recovery</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Proactive Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>User Support</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>24/7 Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              pariatur impedit blanditiis unde magnam commodi officia cum nam.
              Error, quae!
            </Description>
            <Button>Read More.....</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Services;
