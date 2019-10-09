import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
    // constructor(props) {
    //     super(props)
        // this.state = {
        //     size: props.size,
        //     color: props.color,
        //     state: props.state,
        //     href: props.href,
        //     text: props.text,
        //     // icon: props.icon || { url: props.loader, isLeft: true }
        //     icon: props.icon
        // }
    // }

    getClassNames(){
        var classNames = [];

        if (this.props.disabled)
            classNames.push("disabled")
        if (this.props.color)
            classNames.push(this.props.color)
        if (this.props.size)
            classNames.push(this.props.size)
        if (this.props.text)
            classNames.push(this.props.text)

        return classNames.join(" ");
    }

    renderChildren(){
        if (this.props.icon)
        {
            return this.props.icon.isLeft ?
                <React.Fragment>
                    <div>
                        {this.props.icon.component}
                        <span>{this.props.text}</span>
                    </div>
                </React.Fragment>
                : <React.Fragment>
                    <div>
                        <span>{this.props.text}</span>
                        {this.props.icon.component}
                    </div>
                </React.Fragment>
        }
        return this.props.text
    }

    handleClick(e) {
        if (this.props.disabled)
        {
            e.preventDefault();
            return;
        }
        console.log(this.props.text);
    }

    getButton(){
        return <StyledButton
                    style={this.props.style}
                    className={this.getClassNames()}
                    icon={this.props.icon}
                    onClick={this.handleClick.bind(this)}
                >
                    {this.renderChildren()}
                </StyledButton>
    }

    render() {
        if (this.props.href) {
            return (
                <a href={this.props.href}>
                   {this.getButton()}
                </a>
            )
        } return this.getButton()
    };
}

const StyledButton = styled.button`
    position: relative;
    padding: 10px 20px;
    background-color: transparent;
    background-repeat: norepeat;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #000;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    margin: 0px 25px 19px 0px;

    div{
        display: flex;
        align-items: center;

        span{
            padding-left: ${props => props.icon && props.icon.isLeft ? "10px" : ""};
            padding-right: ${props => props.icon && !props.icon.isLeft ? "10px" : ""};
        }
    }


    &.s{
        padding: 5px 15px;
    }

    &.m{
        padding: 10px 20px;
    }

    &.l{
        padding: 15px 25px;
    }

    &.empty{
        padding: 8px;
        span {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    &.primary{
        background-color: #268bff;
        color: #fff;
    }

    &.secondary{
        background-color: rgb(229, 235, 248);
        color: #268bff;
    }

    &.grey{
        background-color: rgb(238, 238, 238);
        color: rgb(171, 168, 168);;
        cursor: not-allowed;

        &:hover{
            opacity: unset;
        }

        &:active{
            box-shadow: none;
        }
    }

    &.danger{
        background-color: rgb(255, 25, 25);
        color: #FFF;
    }

    &:hover{
        opacity: .9;
    }

    &:active{
        // border: 1px solid #268bff;
        box-shadow: 0px 0 2px 0px #268bff;
    }
`;




    // &:before{
    //     content: " ";
    //     background-size: cover;
    //     background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
    //     background-position: center;
    //     position: absolute;
    //     left: 15px;
    //     top: 8px;
    //     width: 20px;
    //     height: 20px;
    // }
    // &:after{
    //     content: " ";
    //     background-size: cover;
    //     background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
    //     background-position: center;
    //     position: absolute;
    //     right: 15px;
    //     top: 8px;
    //     width: 20px;
    //     height: 20px;
    // }