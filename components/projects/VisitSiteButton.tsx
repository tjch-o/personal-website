import React from "react"
import Button from "@mui/material/Button"

interface VisitSiteButtonProps {
    href: string;
}

function VisitSiteButton({href}: VisitSiteButtonProps) {
    return (
        <div className="mb-16">
            <Button
                variant="contained"
                size="large"   
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{backgroundColor: "#c19a6b", "text-transform": "none", fontSize: "18px"}}
                >
                Visit website
                </Button>
        </div>
    )
}

export default VisitSiteButton