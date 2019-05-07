import React from 'react'
import Bigetron from './Bigetron';
import Separator from './Separator';
import HomeContents from './HomeContents';
import WOW from 'wowjs'


class Home extends React.Component{
    componentDidMount(){
        new WOW.WOW().init()
    }
    
    render(){
        return(
            <div>
                <Bigetron/>
                <Separator/>
                <HomeContents/>
            </div>
        )
    }
}

export default Home