import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PolicyForHostsPage extends Component {
    render() { return (
        <Box>
            <div className="policy-page-items">
                <Typography variant="h3">Policy for Gym Hosts</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>

                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">1. Listings and Bookings (For Hosts)</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">1.1 Creating and Managing your Listing</Typography>
                    <Typography variant="subtitle1">
                        As a Host, you represent that you have all rights (without restrictions) and authority to list your Gyms(s) for Booking on the Fit-Inn Platform. 
                        Your Listing must include complete and accurate information about your Gym, your Gym Fee, other charges like security deposits, or Taxes, and any rules or requirements that apply to Gym Users/Guests, your Listing, or your Gym. 
                        You are responsible for keeping your Listing information (including calendar availability) and Content up-to-date and accurate at all times. You are responsible for ensuring your Listing complies with Applicable Laws and Rules and does not conflict with the rights of a third party. 
                        When you create a Listing, you agree to list your Gym as available for rental exclusively on the Fit-Inn Platform (i.e. you may not double book).
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">1.2 Accepting or Rejecting a Booking Request</Typography>
                    <Typography variant="subtitle1">
                        A Member may request to book your Listing. 
                        If you do not accept or reject the request within a time period provided by the Fit-Inn Platform (the “Booking Request Period”), the request will automatically expire and any fees collected from the Gym User/Guest will be returned to the Gym User/Guest. 
                        Fit-Inn, in its sole discretion, may determine and modify the Booking Request Period from time to time.
                    </Typography>
                
                    <Typography className="terms-contents" variant="h6">1.3 Contracting with Guests</Typography>
                    <Typography variant="subtitle1">
                        A Booking is created when you receive a booking confirmation. You are solely responsible for delivering your Gym and performing your obligations under your Booking. 
                        Except as otherwise provided by these Terms, you may not request that a Guest pay a higher price or additional fees after a Booking is created. 
                        The terms, policies, and conditions specified in your Listing form part of your agreement with the Guest along with the applicable portions of these Terms. 
                        Any terms, policies, or conditions that you include in your Listing must be (i) consistent with these Terms, and (ii) prominently disclosed.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">1.4 Gym Availability</Typography>
                    <Typography variant="subtitle1">
                        You agree to make your Gym available for the Agreed Reservation and Time.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">1.5 Gym Safety</Typography>
                    <Typography variant="subtitle1">
                        As a Gym Host, you represent and warrant that your Gym(s) and other amenities are maintained to ensure the health and safety of Gym Users/Guests, including but not limited to reasonable security measures, ensuring installation and use of safety gym equipments, and addition of other applicable safety-related signage or notice(s) as required by Applicable Laws and Rules.
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">2. Booking Modifications and Cancellations (For Gym Hosts)</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">2.1 Gym Host Cancellations</Typography>
                    <Typography variant="subtitle1">
                        In general, if as a Host you cancel a Booking, the amount refunded to the Gym User/Guest is determined by the cancellation policy that applies to your Booking. 
                        But in some circumstances other policies apply and determine the amount refunded to the Guest. Because cancellations disrupt Guests’ plans and diminish confidence in the Fit-Inn Platform, Gym Hosts should act in good faith to fulfill all Bookings. 
                        If you cancel a Booking, the Fit-Inn Cancellation Policy, linked here and incorporated into these Terms by reference, will apply and preempt any conflicting terms in the Booking.
                        The consequences set forth in this section will not apply if you cancel a Booking due to unforeseen circumstances beyond your control that arise after the Booking was created and make it impracticable or illegal to provide your Gym under the Booking. 
                        Such circumstances include government-declared emergencies, government travel restrictions (not including non-binding travel advisories and similar government guidance), natural disasters, acts of God, and large-scale outages of essential utilities.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">2.2 Cancellations for Inclement Weather</Typography>
                    <Typography variant="subtitle1">
                        In certain circumstances, such as rain, thunder, lightning, hail, tornado, or other inclement weather posing danger to the safety of Gym Users/Guests and Gym Hosts Guests could cancel a Booking. 
                        Under such circumstances, Fit-Inn will not assess a penalty due to the cancellation and will allow the Gym Host to accommodate the reservation at a different date within one week, or as otherwise agreed between the Gym Host and Gym User/Guest, of the original Booking date.
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">3. Gym Host Responsibilities and Assumption of Risk</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">3.1 Your Legal Obligations</Typography>
                    <Typography variant="subtitle1">
                        You represent and warrant that your Gym(s), Listing(s), and Booking(s) comply with Applicable Laws and Rules. You agree that you are responsible for understanding and complying with Applicable Laws and Rules that apply to your Gym, Listing, Booking and your interactions with Guests and third parties. 
                        For example and not by way of limitation, some municipalities restrict the use of pools or require that a Host obtain a license or permit to list or use their Gym or to invite guests. 
                        Information Fit-Inn provides on the Platform regarding legal requirements is for informational purposes only, should not be viewed as legal advice, and you should independently confirm your obligations. 
                        You should seek independent legal advice if you have questions about Applicable Laws and Rules concerning your Listing, Gym, or any potential or actual Dispute you may have with a Gym User/Guest.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">3.2 Your Responsibilities</Typography>
                    <Typography variant="subtitle1">
                        You are responsible for your own acts and omissions and are also responsible for the acts and omissions of anyone you allow to participate in providing your Gym or otherwise performing under your Booking. 
                        You are responsible for setting your Gym Fee and establishing the additional terms or conditions of your Listing and Booking. 
                        You must describe any and all fees and charges in your Listing description and you may not collect any fees or charges for a Booking outside the Fit-Inn Platform.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.3 Food and Non-Alcoholic Beverages</Typography>
                    <Typography variant="subtitle1">
                        Gym Hosts may provide access to snacks and beverages such as water bottles, bags of chips, or soft drinks to Gym Users/Guests at their Gym. 
                        Gym Hosts may not offer or provide access to (i) prepared or homemade foods; or (ii) food and beverages in glass containers; or (iii) alcohol, tobacco, or controlled substances. 
                        You must exercise reasonable diligence to ensure glass containers are not on Gym premises during a Booking. If you offer access to cooking equipment to a Gym User/Guest in your Booking (for example, a microwave), you warrant that the equipment is in excellent working condition, has been inspected in the last 30 days, and will not pose any threat to the Gym User/Guest but for Gym User/Guest’s own misuse. 
                        Furthermore, you must provide the Gym User/Guest with instructions for safe and lawful use of the equipment either through the Fit-Inn Platform or appropriate signage on premises.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.4 Other On-site Amenities</Typography>
                    <Typography variant="subtitle1">
                        You may permit the use of additional amenities on your property (for example, a restroom). Such amenities include the use of a coffee maker or a showering space, however, Gym Hosts are required to maintain all heating devices subject to the manufacturers specifications and must provide Gym Users with user manuals for all heating devices. 
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.5 Pets</Typography>
                    <Typography variant="subtitle1">
                        Gym Hosts are responsible for pets on the Gym premises and must ensure their pets are kept separate and away from Gym Users/Guests at all times during a Booking. You must specify in your Listing if a pet is on your Gym premises and acknowledge that the pet will be kept separate and away from Gym Users/Guests during the Booking.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.6 Insurance</Typography>
                    <Typography variant="subtitle1">
                        While Fit-Inn may offer insurance and property damage protection for Gym Hosts, we recommend that you obtain appropriate insurance for your Gym and suggest that you carefully review policy terms and conditions like coverage details and exclusions. 
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">4. Host Payment Terms</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">4.1 Timing of Payment Collection</Typography>
                    <Typography variant="subtitle1">
                        Fit-Inn generally collects the Total Price when you accept a Gym User/Guest’s booking request. However, if a Gym User/Guest pays with a push Payment Method, Fit-Inn will collect the Total Price at the time of the Booking request.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">4.2 Payout</Typography>
                    <Typography variant="subtitle1">
                        Your Payout for a Booking will equal the Total Price minus Service Fees and applicable Taxes. If a Booking is cancelled, Fit-Inn will remit the amount you are due (if any) as provided in these Terms and applicable cancellation policy. 
                        Balances will be remitted by Fit-Inn to a Gym Host via the Payout Method selected by the Gym Host, depending on the selections the Gym Host makes via the Fit-Inn Platform.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">4.3 Payout Restrictions</Typography>
                    <Typography variant="subtitle1">
                        Fit-Inn may temporarily place a hold, suspend, or cancel any Payout for purposes of preventing suspected or known unlawful activity or fraud, chargeback request, risk assessment, security, or completing an investigation, or if we are unable to verify your identity. 
                        Fit-Inn may also temporarily place a hold on, suspend, or delay initiating or processing any Payout due to you under these Terms as a result of a force majeure event.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">4.4 Limits on Payout</Typography>
                    <Typography variant="subtitle1">
                        For compliance or operational reasons, Fit-Inn may limit the amount of a Payout. If you are due an amount above that limit, Fit-Inn may make a series of Payouts (potentially over multiple days) in order to provide your full Payout amount.
                    </Typography>
                </div>
            </div>
        </Box>
    );}
}
export default PolicyForHostsPage;