import React from "react"
import Button from "@mui/material/Button"
import { FaGithub } from "react-icons/fa"

interface VisitGithubButtonProps {
    href: string;
}

function VisitGithubButton({href}: VisitGithubButtonProps) {
    return (
        <div className="mb-16">
            <Button
                variant="contained"
                size="large"
                startIcon={<FaGithub />}    
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx = {{backgroundColor: "#af69ef",
                    "text-transform": "none", fontSize: "18px"}}
                >
                Visit Github
                </Button>
        </div>
    )
}

export default VisitGithubButton