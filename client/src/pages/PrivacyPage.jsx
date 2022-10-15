import React, { Component, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class PrivacyPage extends Component {
    render() { return (
        <Box>
            <div className="policy-page-items">
                <Typography variant="h3">Privacy Policy</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>

                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">1. What Information Does The Platform Collect?</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">1.1 Information You Provide Directly</Typography>
                    
                    <Typography variant="subtitle1">Personal information we may collect from you when you use our services includes information you provide when creating an account, listing a gym (e.g. city, geographic location, etc), making a reservation (e.g. contact information, address, email address, telephone number, etc) and birth date.
                        It may include but is not limited to billing information (e.g. credit card info and billing address). You may provide other information such as personal information when listing or booking accommodations. You are allowed you to view, create, reproduce, submit, display, perform, and/or share content, which includes images, written posts (e.g. reviews), comments, and other forms of multimedia (collectively, "User Content").
                        If you disclose any personal information relating to other people to us, you represent that you have the authority to do so and to permit us to use the information in accordance with this Policy.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">1.2 Information We Collect Automatically When You Access and Use Our Platform</Typography>
                    
                    <Typography variant="subtitle1">We and any potential future third party business partners may use a variety of technologies, including cookies and web beacons, that automatically or passively collect information whenever you access or interact with the Platform.
                        You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service. 
                        Usage Information may include the URL or advertisement that referred you to the Platform, the search terms you entered into a search engine that led you to the Platform, and all areas of the Platform that you visit your time zone, location information, and mobile network (if applicable), among other information. 
                        We may use Usage Information for a variety of purposes, including enhancing or otherwise improving the Platform.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">1.3 Location Data</Typography>
                        
                    <Typography variant="subtitle1">
                        We may directly collect specific location information from your device if you have opted-in to such collection through one of our applications. 
                        You may be able to turn off the collection of location information through your device settings. 
                        However, please note that we may still be able to collect or infer your approximate location through other information we collect, such as IP address. 
                        In addition, some mobile service providers may also provide us or our third-party service providers or business partners with information regarding the physical location of the device used to access the Platform.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">The methods used to collect Usage Information may include the following:</Typography>

                    <Typography variant="subtitle1">
                        Cookies and Local Storage: "Cookies" are small text files stored locally on your device; they are used to visit the Platform or otherwise access our online content. 
                        Cookies may be used for many purposes by us and our third party service providers, such as automatically collecting Usage Information, enabling features, and remembering your preferences. 
                        If you do not want to accept cookies, you can block them by adjusting the settings on your browser. You can find more information about cookies and how they work at www.allaboutcookies.org.
                        Certain browsers or browser add-ons may provide additional local data storage mechanisms that are used in a manner similar to cookies, and some of the content included on our Platform may make use of this local storage. 
                        If you choose to disable cookies, or to otherwise restrict local storage, some features of the Platform may not function properly.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">1.4 Information We Collect From Third Parties</Typography>
                        
                    <Typography variant="subtitle1">
                        We may receive information about you from third parties, for example, if someone submits information about a host after using the host's gym equipment, or if we supplement the information we collect with information from others (such as public databases, including those containing records about court and other legal proceedings, and publicly available social media pages).
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">2. How Does The Platform Use The Information It Collects?</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">We may use non-personal information for any purpose and also use information collected from or about you, including personal info and Usage Information, as disclosed in this Policy, including to:</Typography>
                    
                    <Typography variant="subtitle1">
                        enable you to access and use the Platform or other features we offer, such as verifying your email address is active and valid;
                        connect and communicate with other users;
                        facilitate bookings such as sending the guests and hosts respective contact information for purposes of communication;
                        communicate with you, such as responding to your questions, complaints, or comments and getting your feedback, and send you important notices regarding the Platform, our policies, about us as well as marketing, advertising, and promotional messages that may be of interest to you;
                        contact you about administrative matters, such as changes to our Policy, Terms Of Use, or other policies or with regard to your case submission;
                        for internal business purposes, such as improving the Platform, and to comply with legal requirements;
                        sending you order confirmations, processing payments, or as otherwise necessary in order to process your order or communicate with you about your order;
                        review, scan, or analyze your communications with other users on the Platform for fraud prevention, risk assessment, regulatory compliance, investigation, product development, research, and customer support;
                        operate and protect the Platform from errors, misuse of the Platform, fraud, any criminal activity, and other illegal activities or activities that violate our terms and policies, detect and troubleshoot problems, resolve disputes, and enforce applicable agreements and policies; 
                        as otherwise disclosed in this Policy, for other reasons that we disclose when you provide your information, or otherwise with your consent.
                    </Typography>
                </div>
                
                <Typography className="terms-contents" variant="h5">3. Under What Circumstances Does The Platform Share Or Disclose Information?</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">3.1 Publicly Posted Content</Typography>

                    <Typography variant="subtitle1">
                        Listings may include information such as the city, neighborhood, and approximate geographic location displayed on a map of where the location (e.g. gym) is located.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.2 Otherwise At Your Request or With Your Consent</Typography>
                        
                    <Typography variant="subtitle1">
                        We may share information when you direct us to do so.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.3 Subsidiearies and Affiliates</Typography>
                        
                    <Typography variant="subtitle1">
                        We may share your information with our affiliates and subsidiaries for internal business, analytical, operational, and direct marketing purposes.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.4 Service Providers</Typography>
                        
                    <Typography variant="subtitle1">
                        We use third party service providers to provide services to us or on our or your behalf, such as payment processing and sending marketing communications. 
                        We give these third parties access to your personal information (or allow them to collect information from or about you) so that they can provide these services.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">3.5 Business, Tax, and Legal Purposes</Typography>
                        
                    <Typography variant="subtitle1">
                        We may, without notice to you, store, transfer and disclose data to a tax authority relating to transactions, bookings, accommodations, and taxes including but not limited to, personal information, listings, transaction dates and amounts, tax identification numbers, amount of taxes received by hosts from guests, or allegedly due, contact information and similar information.
                        To the extent permitted by law, we may transfer and disclose your personal information to third parties to protect the integrity of the Platform, enforce or protect our Terms Of Use or the rights, property, safety, security of us or any individual; for fraud prevention; in an emergency, to protect the health and safety of our users or the general public. In other cases, unless otherwise required by law, Swimply will only reveal your information to federal, state, or local agencies ("Government") in the event the Government issues a subpoena, court order, or other binding Government request ("Request"). We will respond to such lawfully authorized, properly served Requests, to the extent required by applicable law. e request that mailings for Government information Requests and law enforcement.
                    </Typography>
                </div>

                <Typography className="terms-contents" variant="h5">4. Third Party Advertising and Analytics Providers</Typography>
                <div className="terms-page-links">
                    <Typography className="terms-contents" variant="subtitle1">One of the third party tools we use is Google Analytics, which uses cookies and other technologies to collect and analyze information about use of the Platform and provide other reports. This service may also collect information regarding your use of other websites, apps, and online resources. For information about opting out from Google, go here: https://support.google.com/ads/answer/2662922 and to download the Google Analytics opt-out browser add-on from Google, go here: https://tools.google.com/dlpage/gaoptout.</Typography>
                </div>
            </div>
        </Box>
    );}
}
export default PrivacyPage;