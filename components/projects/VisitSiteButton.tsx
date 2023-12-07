import React from "react"
import Button from "@mui/material/Button"
import { FaGithub } from "react-icons/fa"

function VisitGithubButton() {
    return (
        <div className="mb-16">
            <Button
                variant="contained"
                size="large"   
                href="https://glittery-pastelito-97d2c4.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{backgroundColor: "#c19a6b", color: "#fff"}}
                >
                Try out GrindTogether
                </Button>
        </div>
    )
}

export default VisitGithubButton