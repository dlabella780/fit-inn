import Enzyme, {shallow} from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContactUs from '../pages/ContactUsPage.jsx';
import YourEmail from "../components/ContactUsForm/YourEmail.jsx";
import { Typography, Box, Button } from "@material-ui/core";

configure({ adapter: new Adapter() });

it('should show text', () => {
    const wrapper = shallow(<ContactUs />);
    const welcome = <Box className="payment-textfields"><span><YourEmail /></span></Box>;
    expect(wrapper.contains(welcome)).toEqual(true);
})

it("renders ContactUs header", () => {
    const wrapper = shallow(<ContactUs />);
    const func1 = <Typography variant="h3">Contact Us</Typography>;
    expect(wrapper.contains(func1)).toEqual(true);
});

it("renders ContactUs function", () => {
    const wrapper = shallow(<ContactUs />);
    const func2 =  <Box className="payment-button"><span><Button variant="contained" color="primary">SEND</Button></span></Box>;
    expect(wrapper.contains(func2));
});  




  