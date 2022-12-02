import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PolicyForGymUsersPage extends Component {
    render() { return (
        <Box>
            <div className="policy-page-items">
                <Typography variant="h3">Policy for Gym Users</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>

                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">1. Bookings (For Gym Users)</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">1.1 Reserving a Listing</Typography>
                    <Typography variant="subtitle1">
                        When you book a Listing, you are agreeing to pay the Total Price and all charges associated with the Listing identified at checkout. A Booking is created when you receive a booking confirmation. 
                        The cancellation policy and terms, policies, or conditions identified in the Listing or during checkout form part of your agreement with the Host.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">1.2 Reentry</Typography>
                    <Typography variant="subtitle1">A Gym User retains the right to reenter a Gym under a Booking to the extent reentry is (i) permitted by your agreement with the Host, or (ii) consistent with Applicable Laws and Rules.</Typography>
                
                    <Typography className="terms-contents" variant="h6">1.3 Unauthorized GymUsers/Guests and Overstays</Typography>
                    <Typography variant="subtitle1">
                        If you or an additional Gym User/Guest stays at a Gym past the Agreed Duration, the Host has the right to make you or the unauthorized Gym User/Guest leave in a manner consistent with Applicable Laws and Rules, including by imposing reasonable overstay penalties.
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">2. Booking Modifications, Cancellations, and Refunds (For Gym Users)</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">In general, if as a Guest you cancel a Booking, the amount refunded to you is determined by the cancellation policy pursuant to the Booking.</Typography>
                </div>

                <Typography className="terms-contents" variant="h5">3. Gym User Responsibility and Assumption of Risk</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">3.1 Your Responsiblity</Typography>
                    <Typography variant="subtitle1">
                        As a Gym User, you are responsible and liable for your own acts and omissions under your Booking.
                        You are responsible for leaving the Gym and other Host property in the condition it was in when you arrived and you are responsible for any loss, theft, or destruction of the Gym and surrounding equipment from any cause during the Booking period. 
                        You agree to act with integrity, treat others with respect, and comply with Applicable Laws and Rules and the terms of your Booking at all times. 
                        If you book for an additional gym user who is a minor or if you bring a minor to a Gym, you must be legally authorized to act on behalf of the minor and you are solely responsible for the supervision of that minor.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">3.2 Your Assumption of Risk</Typography>
                    <Typography variant="subtitle1">
                        You acknowledge that many activities carry inherent risks and agree that, to the maximum extent permitted by Applicable Laws and Rules, you assume the entire risk arising out of your access to and use of the Fit-Inn Platform including any Content or Fit-Inn Content, use of a Gym or any other Host offering, or any other interaction you have with Members or third parties, whether in person or online. 
                        You acknowledge that you are responsible for investigating a Host and a Gym to determine whether it suits you or additional Gym Users. For example, access to or use of a Gym may carry risk of illness, bodily injury, disability, or death, and you freely and willfully assume those risks by accessing or using a Gym.
                    </Typography>
                
                    <Typography className="terms-contents" variant="h6">3.3 Pets</Typography>
                    <Typography variant="subtitle1">Except as permitted by Applicable Laws and Rules, you may not bring a pet to a Gym unless it is authorized under your Booking. You are fully responsible for any pet you bring to a Gym.</Typography>
                
                    <Typography className="terms-contents" variant="h6">3.4 Alcoholic Beverages, Food, and Non-Alcoholic Beverages</Typography>
                    <Typography variant="subtitle1">Except as permitted by Applicable Laws and Rules, you may not bring foods or drinks to a Gym unless it is authorized under your Booking. You are fully responsible for any mess you bring to a Gym.</Typography>
                </div>

                <Typography className="terms-contents" variant="h5">4. Gym User/Guest Payment Terms</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">4.1 Payment Method Information</Typography>
                    <Typography variant="subtitle1">
                        When you add a Payment Method to your Account, you will be asked to provide billing information such as name, billing address, and financial instrument information. 
                        You authorize Fit-Inn and its payment service providers to collect and store your Payment Method information. You are responsible for (i) evaluating the practices of your Payment Method provider, and (ii) complying with any additional terms or conditions of a third-party payment service provider associated with your Payment Method. 
                        Fit-Inn is not responsible for any loss suffered by you as a result of incorrect Payment Method information provided by you.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">4.2 Automatic Update of Payment Information</Typography>
                    <Typography variant="subtitle1">
                        If your Payment Method account information changes (e.g., account number, routing number, or expiration date), you agree to update your Payment Method immediately. 
                        If you fail to update any changes to your Payment Method, you agree that we may acquire that information from our financial services partners or your bank and automatically update your Payment Method on file.
                    </Typography>
                
                    <Typography className="terms-contents" variant="h6">4.3 Payment Authorization</Typography>
                    <Typography variant="subtitle1">You authorize Fit-Inn or its payment service providers to charge your Payment Method (including charging more than one payment method), either directly or indirectly, for all fees due (including any applicable Taxes) in connection with your Account.</Typography>
                
                    <Typography className="terms-contents" variant="h6">4.4 Timing of Payment</Typography>
                    <Typography variant="subtitle1">
                        Fit-Inn generally charges the Total Price due after the Host accepts your Booking request. However, if you pay with a push Payment Method, Fit-Inn will collect the Total Price due at the time of your Booking request. 
                        If Fit-Inn is unable to collect the Total Price due as scheduled, Fit-Inn will collect the Total Price due and potentially additional fees. Once the payment transaction for your Booking is successfully completed, you will receive a confirmation email summarizing your Booking.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">4.5 Booking Request Status</Typography>
                    <Typography variant="subtitle1">
                        If a requested booking is declined either because it is not accepted by the Host or you cancel the booking request before it is accepted by the Host, any amounts collected by Fit-Inn will be refunded to you, and any pre-authorization of your Payment Method will be released (if applicable). 
                        The timing to receive the refund or for the pre-authorization to be released will vary based on the Payment Method and any applicable payment system rules.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">4.6 Payment Restriction</Typography>
                    <Typography variant="subtitle1">
                        All fees related to Bookings including additional fees to Hosts and other charges must be made through the Fit-Inn Platform. 
                        We reserve the right to decline or limit payments that we believe (i) may violate these Terms, (ii) are unauthorized, fraudulent or illegal, or (iii) expose you, Fit-Inn, or others to risks unacceptable to Fit-Inn.
                    </Typography>
                </div>
            </div>
        </Box>
    );}
}
export default PolicyForGymUsersPage;