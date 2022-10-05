import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UploadTab from '../components/GymUpload/UploadTab';
configure({ adapter: new Adapter() });

it("renders UploadTab with all components", () => {
    shallow(<UploadTab />);
});