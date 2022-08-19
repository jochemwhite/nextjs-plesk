import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function gamehosting() {
  useEffect(async () => {
    let test = await axios.get(
      "https://panel.amrio.nl/api/application/servers",
      {
        headers: {
          Authorization:
            "Bearer 2TzMEIlYVldcaZgdweHxAZLVM8JZcucPOk4DgJHOIJ4wPfRv",
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(test);
  }, []);

  return <div>game-hosting</div>;
}
