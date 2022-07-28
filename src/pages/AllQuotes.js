import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Omar", text: "No Pain No Gain" },
  { id: "q2", author: "Hosny", text: "Keep Working" },
];
function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
