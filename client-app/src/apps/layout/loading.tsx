import React, { PureComponent } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
interface Props{
    inverted ?:boolean;
    content:string;
}
export default function Loading({inverted=true,content='...'}:Props){
return (
    <Dimmer active={true} inverted={inverted}>
        <Loader content={content}/>
    </Dimmer>
)
}