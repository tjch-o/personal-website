import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

interface SocialMediaButtonProps {
  icon: string;
  link: string;
  alt: string;
}

function SocialMediaButton({ icon, link, alt }: SocialMediaButtonProps) {
  return (
    <Button size="large">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={icon} alt={alt} width="40" height="40" />
      </a>
    </Button>
  );
}

export default SocialMediaButton;
