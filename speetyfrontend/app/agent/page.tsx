"use client";
import React, { useState } from "react";
import poppins from "@/font/font";
import SearchBar from "@/components/SearchBar";
import AgentProp from "@/services/agent/AgentProp";

export default function Property() {
  //write a logic to run a query on the database and retrieve the results
  //use the PropertyProp for each returns
  return (
    <div className={poppins.className}>
      <SearchBar />
      <div className="mt-4 ml-4">
        <AgentProp
          photoUrl={"/agent.jpeg"}
          name={"Roman Witek"}
          stars={4}
          phone={"(973) 9739-739"}
          usersReviews={258}
          company={"Coldwell Banker Realty"}
          license={"7844026"}
        />
      </div>
    </div>
  );
}
