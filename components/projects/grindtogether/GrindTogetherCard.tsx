import React from "react";
import GrindTogetherTechUsedCard from "./GrindTogetherTechUsedCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisitGithubButton from "../VisitGithubButton";
import VisitSiteButton from "../VisitSiteButton";

function GrindTogetherCard() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 1500,
          borderColor: "#fddc5c",
          borderWidth: "5px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
        className="flex justify-center align-center space-x-4 p-6"
      >
        <CardMedia
          sx={{ height: 500, width: 900 }}
          image="projects/grindtogether.png"
          title="GrindTogether"
        />
        <CardContent>
          <div>
            <h1 className="text-4xl font-bold mb-4">GrindTogether</h1>
            <h3 className="text-l font-medium">
              {" "}
              Submission for NUS Orbital Programme 2023.
            </h3>
            <h3 className="text-l font-medium mb-4">
              GrindTogether is a full-stack web app that allows NUS students to
              find study partners by posting study invitations based on modules,
              faculty and location.
            </h3>
            <div className="flex flex-row space-x-4">
              <VisitSiteButton />
              <VisitGithubButton />
            </div>
            <GrindTogetherTechUsedCard />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default GrindTogetherCard;
