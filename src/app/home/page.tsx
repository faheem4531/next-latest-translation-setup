"use client";
import { Box } from "@mui/material";
import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/Hero";

export default function HomePage() {
  return (
    <>
      <Box>
        <Box
          sx={{
            position: "fixed",
            left: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            top: 0,
            zIndex: 10,
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ marginTop: "82px" }}>
          <Hero />
          <Box height={"100vh"} bgcolor={"black"}></Box>
        </Box>
      </Box>
    </>
  );
}
