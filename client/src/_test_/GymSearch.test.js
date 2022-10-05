import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GymSearchPage from '../pages/GymSearchPage';
import AdvancedSearchBar from '../pages/GymSearchPage';
configure({ adapter: new Adapter() });

it("renders GymSearchPage with all components", () => {
    shallow(<GymSearchPage />);
});