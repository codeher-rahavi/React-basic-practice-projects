import { Component } from "react";


class ClassBasedComponent extends Component {
    //state
    state = {
        showText : false,
        changeColor:false,
        count:0,
        changeCountStyle:false,
    };

    handleCount = () => {
        this.setState({
            ...this.state,
            count:this.state.count + 1,
        })
    }

    handleClick = () =>{
        console.log('button clicked');
        //this is not recommended
        //this.state.showText!=this.state.showText

        const { showText ,changeColor,count} = this.state;
    
        this.setState({
            showText : !showText,
            changeColor : !changeColor,
            count:count
        });
     };

     //componentDidMount
     //componentDidUpdate
     //componenetWillUnmount

    componentDidMount(){
        console.log("this is on first time page load");
     }
    componentDidUpdate(prevprops,prevstate){
      //  console.log(prevstate,this.state);

        if (prevstate && prevstate.count!= this.state.count && this.state.count === 10){
            this.setState({
                ...this.state, 
                changeCountStyle :true,
            });
        }
     }
     componentWillUnmount(){
        console.log('component is getting unmounted');
     }
    render(){
        const { showText,changeColor ,count,changeCountStyle} = this.state;
        // console.log(showText);
        // console.log(changeColor);
        // console.log(count);
        console.log(changeCountStyle);

        return (
            <div>
                {
                    showText ? <h3 style={{color : changeColor? 'red' : 'blue'}}>Class based components</h3>:null
                }

                
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase count</button>
                <h3 style={{color : changeCountStyle? "red" : "black" , fontSize:changeCountStyle?'30px':"12px"}}>Count is {count}</h3>
            </div>
        );
    }
}
export default ClassBasedComponent;