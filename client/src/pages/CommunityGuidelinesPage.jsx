import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CommunityGuidelinesPage extends Component {
    render() { return (
        <Box>
            <div className="policy-page-items">
                <Typography variant="h3">Community Guidelines</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>

                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">We welcome you to Fit-Inn, a community where you can host your own gyms for other people to use and where you yourself can go to other hosted gyms to exercise and do gym routines.</Typography>
                <div className="terms-page-links">
                    <Typography className="terms-contents" variant="h6">
                        By joining this community, you agree to treat all Platform members in a civil manner. Abuse of any kind will result in your Platform membership being revoked.
                    </Typography>
                    
                    <Typography className="terms-contents" variant="h6">
                        We reserve the right to remove any content at any time. In addition, you understand that the administrators of this site may suspend or ban you from the site at any time, for any reason, without notice.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">
                        We respect your privacy. We do not share or sell your personal data with any third parties for any reason.
                    </Typography>

                    <Typography className="terms-contents" variant="h6">
                        If you have any questions about these community guidelines, please contact [GIVE A NAME AND EMAIL HERE].
                    </Typography>
                </div>
            </div>
        </Box>
    );}
}
export default CommunityGuidelinesPage;