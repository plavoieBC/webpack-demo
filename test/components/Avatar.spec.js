import React from 'react';
import { mount, shallow } from 'enzyme';

import Avatar from 'components/avatar';

describe('<Avatar/>', function () {
    it('should have an image to display the gravatar', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should have props for email and src', function () {
        const wrapper = mount(<Avatar/>);
        expect(wrapper.props.email).toBeDefined();
        expect(wrapper.props.src).toBeDefined();
    });
});