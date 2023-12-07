import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisitGithubButton from "../VisitGithubButton";
import JobFestGoTechUsedCard from "./JobFestGoTechUsedCard";

function JobFestGoCard() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "100%",
          borderColor: "#fff",
          borderWidth: "5px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.8)",
        }}
        className="flex justify-center align-center space-x-4 p-6"
      >
        <CardMedia
          sx={{ width: 2550, height: "auto", objectFit: "contain" }}
          image="projects/jobfestgo.png"
          title="JobFestGo"
        />
        <CardContent>
          <div>
            <h1 className="text-4xl font-bold mb-4">JobFestGo</h1>
            <h3 className="text-l font-medium">
              {" "}
              Team project for NUS CS2103T Software Engineering.
            </h3>
            <h3 className="font-medium mb-4">
              JobFestGo is a command-line (CLI) desktop application built for
              job festival event planners in Singapore to manage contacts and
              tasks for their events. Written in Object-Oriented Programming
              (OOP) fashion, the application follows software engineering
              principles.
            </h3>
            <div className="flex flex-row space-x-4">
              <VisitGithubButton href="https://github.com/AY2324S1-CS2103T-T09-1/tp" />
            </div>
            <JobFestGoTechUsedCard />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default JobFestGoCard;
