import React from 'react';
import { shallow, mount, render } from 'enzyme';
import md5 from 'md5';

import Gravatar from 'components/gravatar';

import Avatar from 'components/avatar';
import Email from 'components/email';

describe('<Gravatar/>', () => {
        
    const wrapper = mount(<Gravatar/>);

    it('contains an <Avatar/> component', () => {
        expect(wrapper.find(Avatar).length).toBe(1);
    });

    it('contains an <Email/> component', () => {
        expect(wrapper.find(Email).length).toBe(1);
    });
    
    it('should have an initial email state', () => {
        expect(wrapper.state().email).toBe('someone@example.com'); 
    });

    it('should have an initial src state', () => {
        expect(wrapper.state().src).toBe('http://placehold.it/200x200');
    });
    
    it('should update the src state on clicking fetch', () => {
        wrapper.setState({ email: 'hello@ifelse.io' });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('email')).toEqual('hello@ifelse.io');
        expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
    });
        
        
});
