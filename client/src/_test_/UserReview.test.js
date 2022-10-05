import renderer from 'react-test-renderer';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Comments from '../components/UserReview/comments/Comments.jsx';
import CommentForm from '../components/UserReview/comments/CommentForm';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

import { useEffect, useState } from "react";


// it('rendering UserReview', () => {

//     const component = renderer.create(
//         <Comments />
//     );

//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     renderer.act(() => {
//         tree.props.addComment();
//       });
// }); 

// afterEach(() => {
//     cleanup();
// });

// test("Render UserReview", () => {
//     render(<Comments />);

//     var comEle = screen.getByTitle("comments-title");

//     expect(comEle).toBeInTheDocument();
// });


it("renders UserReview title", () => {
    const wrapper = shallow(<Comments />);
    const welcome =  <h3 className="comments-title">Comments</h3>;
    expect(wrapper.contains(welcome)).toEqual(true);

});

it("renders UserReview class", () => {
    const wrapper = shallow(<Comments />);
    const func1 = <div className="comment-form-title">Write comment</div>;
    expect(wrapper.contains(func1));
});  

it("renders UserReview function", () => {
    const wrapper = shallow(<Comments />);
    const func2 =  <div className="comments-container"></div>;
    expect(wrapper.contains(func2));
});  