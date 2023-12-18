import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

const card = (
  <React.Fragment>
    <CardContent className="flex space-x-4">
      <a
        href="https://www.python.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="home/python.svg" alt="Python" height={50} width={50}></Image>
      </a>
    </CardContent>
  </React.Fragment>
);

function FilterNewsBotTechUsedCard() {
  return (
    <div className="my-4">
      <Box>
        <h1 className="text-2xl font-bold pb-4">Skills</h1>
        <Card
          variant="outlined"
          sx={{ maxWidth: "75px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
        >
          {card}
        </Card>
      </Box>
    </div>
  );
}

export default FilterNewsBotTechUsedCard;
