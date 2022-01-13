import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{flexGrow: 1, position: 'absolute', bottom: 0, py: 2}} className="flex items-center justify-center w-full h-24 border-t">
            <a
                href="https://al3des.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by al3des
            </a>
        </Box>
    )
}