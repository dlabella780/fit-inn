import React, { useEffect, useMemo, useState } from "react";
import Pagination from '@mui/material/Pagination';
import PaginationComponent from "../components/Pagination/PaginationComponent.jsx";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";

let questions = [
  {
    questionText: "If your gym host cancels your reservation",
    testText: <NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Section 4.5 Booking Request Status of Gym Users Policy or click here</NavLink> 
  },
  {
    questionText: "If you, as a gym host, cancel a reservation",
    testText: <NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Section 2.1 and/or 2.2 of Gym Host Policy or click here</NavLink>
  },
  {
    questionText: "How to become an gym host",
    testText: <NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Create an account as a host and start listing your gyms. Read up more in the policy page for gym host by clicking this.</NavLink>
  },
  {
    questionText: "Canceling your reservation for a stay",
    testText: <NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Section 2 Booking Modifications, Cancellations, and Refunds (For Gym Users) of Gym Users Policy or click here</NavLink> 
  },
  {
    questionText: "How a gym host cancels a booking",
    testText: <NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Section 2.1 Gym Host Cancellations of Gym Host Policy or click here</NavLink>
  },
  {
    questionText: "Refund your gym guest",
    testText: <NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Section 4.2 Payout of Gym Host Policy or click here</NavLink>
  },
  {
    questionText: "Reviews for experiences",
    testText: "Gym guests have 30 days to leave a public review, with the option to share private feedback for the Host. Keep in mind, guests can still write reviews even if they’re late, they leave early, or they didn’t attend because they couldn’t find the meeting point."
  },
  {
    questionText: "About Fit-Inn",
    testText: <NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>A very quick introduction here</NavLink>
  },
  {
    questionText: "How can I contact Swimply",
    testText: <NavLink to="/pages/ContactUs" style={{ textDecoration: 'none' }}>You can contact us by clicking here</NavLink>
  },
  {
    questionText: "How do I, as a gym guest, cancel my reservation",
    testText: <NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>We recommend you to keep in touch with the gym host and reschedule if possible. Review the Gym User policy to see if you will receive a refund.</NavLink> 
  }
];

export default function FAQPage() {
  const [search, setSearch] = useState(undefined);

  let filteredQuestions = useMemo(
    () =>
      questions.filter((prompt) => {
        return !search || prompt.questionText.includes(search);
      }),
    [search]
  );

  let { pageData, page, maxPage, jumpPage } = PaginationComponent(filteredQuestions, 6);

  useEffect(() => {
    if (search) jumpPage(1);
  }, [search, jumpPage]);

  return (
    <div className="FAQ-page" style={{ minHeight: "80vh" }}>
      <div>
        <main
          role="main"
          style={{ maxWidth: "500px" }}
        >
          <div>
            <h1>Help Center Search Results</h1>
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              label="Search a question"
              variant="outlined"
              placeholder="Search by a keyword or a question starting with a capital letter"
              size="small"
              style ={{width: '100%'}}
            />

            {filteredQuestions.length > 0 ? (
              <>
                {pageData().map((prompt, key) => (
                  <div key={key}>
                    <h2>{prompt.questionText}</h2>
                    <p>{prompt.testText}</p>
                  </div>
                ))}
                <Pagination
                  count={maxPage}
                  page={page}
                  onChange={(e, p) => jumpPage(p)}
                />
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h2>No search results.</h2>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
