import React from 'react';
import './css/StoryReel.css'
import Story from "./Story";

const StoryReel = () => {
    return (
        <div className={'storyReel'}>
            <Story title={'Ahmed Gomaa'} profileSrc={'https://images.unsplash.com/photo-1602162629363-b681cf9baa6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} image={'https://images.unsplash.com/photo-1601758124369-33f53c1b34c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} />
            <Story title={'Ahmed Gomaa'} profileSrc={'https://images.unsplash.com/photo-1602162629363-b681cf9baa6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} image={'https://images.unsplash.com/photo-1601758124369-33f53c1b34c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} />
            <Story title={'Ahmed Gomaa'} profileSrc={'https://images.unsplash.com/photo-1602162629363-b681cf9baa6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} image={'https://images.unsplash.com/photo-1601758124369-33f53c1b34c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} />

        </div>
    );
};

export default StoryReel;