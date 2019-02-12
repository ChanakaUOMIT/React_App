import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state={
        hasError:false,
        errorMessage:''
    }

    componentDidCatch=(error, info)=>{
        this.setState({
            hasError:true,
            errorMessage:error
        });
    }
    render(){
       if(this.state.hasError){
        console.log("pass if ErrorBoundary");
            return <h1>{this.state.errorMessage}</h1>
       }else{
           console.log("pass ErrorBoundary");
           return this.props.children;
       }
    }

}

export default ErrorBoundary;