import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisitGithubButton from "../VisitGithubButton";
import VisitSiteButton from "../VisitSiteButton";
import URLShortsTechUsedCard from "./URLShortsTechUsedCard";

function URLShortsCard() {
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
          sx={{ width: 720, height: "auto", objectFit: "contain", borderRadius: "10px" }}
          image="projects/urlshorts.png"
          title="URLShorts"
        />
        <CardContent>
          <div>
            <h1 className="text-4xl font-bold mb-4">URLShorts</h1>
            <h3 className="text-l font-medium">
              {" "}
              A project aimed at replicating the functionality of TinyURL.
            </h3>
            <h3 className="font-medium mb-4">
              URLShorts is a simple full-stack web app that provides short and
              concise URLs for users to share with their friends.
            </h3>
            <div className="flex flex-row space-x-4">
              <VisitSiteButton href="https://tangerine-druid-c2be4c.netlify.app/" />
              <VisitGithubButton href="https://github.com/tjch-o/URLShorts" />
            </div>
            <URLShortsTechUsedCard />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default URLShortsCard;
