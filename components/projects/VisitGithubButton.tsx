import React from "react"
import Button from "@mui/material/Button"
import { FaGithub } from "react-icons/fa"

function VisitGithubButton() {
    return (
        <div className="mb-16">
            <Button
                variant="contained"
                size="large"
                startIcon={<FaGithub />}    
                href="https://github.com/McNaBry/orbital-grindtogether"
                target="_blank"
                rel="noopener noreferrer"
                >
                Visit Github
                </Button>
        </div>
    )
}

export default VisitGithubButton