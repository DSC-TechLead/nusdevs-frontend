import "./events-navbar.css"
import { Notifications, ArrowBack } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

const EventsNavbar: React.FC = () => {
    const [isFocused, setIsFocused] = useState<Boolean>(false)

    return (
        <div className="navbar">
            {isFocused
            ? <IconButton sx={{ color: "#555", width: 32 }}>
                <ArrowBack sx={{ fontSize: 28 }} />
            </IconButton>
            : <Box sx={{ width: 32 }}>
            </Box>}
            <div className="search-container">
                <input className="searchbar" type="text" placeholder="Enter keywords"
                    onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
            </div>
            <IconButton sx={{ color: "#555" }}>
                <Notifications sx={{ fontSize: 28 }} />
            </IconButton>
        </div>
    )
}

export default EventsNavbar