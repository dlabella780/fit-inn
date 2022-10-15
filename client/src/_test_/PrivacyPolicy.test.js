import Enzyme, {shallow} from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PrivacyPage from '../pages/PrivacyPage.jsx';
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

it('renders one of the NavLink in PrivacyPage', () => {
    const wrapper = shallow(<PrivacyPage />);
    const welcome = <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>;
    expect(wrapper.contains(welcome)).toEqual(true);
})

it("renders of PrivacyPage content", () => {
    const wrapper = shallow(<PrivacyPage />);
    const func1 = <Typography variant="h6">1.1 Information You Provide Directly</Typography>;
    expect(wrapper.contains(func1)).toEqual(true);
});

