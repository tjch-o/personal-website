import React from "react";
import Button from "@mui/material/Button";
import { FaGlobeAmericas } from "react-icons/fa";

interface VisitSiteButtonProps {
  href: string;
}

function VisitSiteButton({ href }: VisitSiteButtonProps) {
  return (
    <div className="mb-16">
      <Button
        variant="contained"
        size="large"
        startIcon={<FaGlobeAmericas />}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#603fef",
          "text-transform": "none",
          fontSize: "18px",
          "&:hover": {
            backgroundColor: "#fde992",
            color: "#af9e8e",
          }
        }}
      >
        Visit Website
      </Button>
    </div>
  );
}

export default VisitSiteButton;
