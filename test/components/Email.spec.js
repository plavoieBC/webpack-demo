import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Email from 'components/email';

describe('<Email/>', () => {
    const wrapper = mount(<Email />);

    it('should have one input for the email', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('should have a button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });
    
    it('should have props for handleEmailChange and fetchGravatar', () => {
        expect(wrapper.props().handleEmailChange).toBeDefined();
        expect(wrapper.props().fetchGravatar).toBeDefined();    
    });
        

});
