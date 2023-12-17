import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisitGithubButton from "../VisitGithubButton";
import VisitSiteButton from "../VisitSiteButton";
import EtchASketchTechUsedCard from "./EtchASketchTechUsedCard";

function EtchASketchCard() {
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
          sx={{ minWidth: 690, height: "auto", objectFit: "contain", borderRadius: "10px" }}
          image="projects/etch-a-sketch.png"
          title="Etch-A-Sketch"
        />
        <CardContent>
          <div>
            <h1 className="text-4xl font-bold mb-4">Etch-A-Sketch</h1>
            <h3 className="text-l font-medium">
              {" "}
              One of my first ever web development projects which I did as part of the
              Odin Project.
            </h3>
            <h3 className="font-medium mb-4">
              Etch-A-Sketch is a website where users can utilise their mouse to
              engage in interactive grid-based drawing and colouring
              experiences.
            </h3>
            <div className="flex flex-row space-x-4">
              <VisitSiteButton href="https://htmlpreview.github.io/?https://github.com/tjch-o/the-odin-project/blob/main/odin-etch-a-sketch/index.html" />
              <VisitGithubButton href="https://github.com/tjch-o/the-odin-project/tree/main/odin-etch-a-sketch" />
            </div>
            <EtchASketchTechUsedCard />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EtchASketchCard;
