import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     size: props.size,
        //     color: props.color,
        //     state: props.state,
        //     href: props.href,
        //     text: props.text,
        //     // icon: props.icon || { url: props.loader, isLeft: true }
        //     icon: props.icon
        // }
    }

    getClassNames(){
        var classNames = [];

        if (this.props.disabled)
            classNames.push("disabled")
        if (this.props.color)
            classNames.push(this.props.color)
        if (this.props.size)
            classNames.push(this.props.size)

        return classNames.join(" ");
    }

    onClick(e) {
        if (this.props.disabled)
        {
            e.preventDefault();
            return;
        }
        this.props.onClick(e);
    }

    renderChildren(){
        if (this.props.icon)
        {
            return this.props.icon.isLeft ?
                <React.Fragment>
                    {this.props.icon.component}
                    {this.props.text}
                </React.Fragment>
                : <React.Fragment>
                    {this.props.text}
                    {this.props.icon.component}
                </React.Fragment>
        }
        return this.props.text
    }

    getButton(){
        return <StyledButton
                style={this.props.style}
                className={this.getClassNames()}
                icon={this.props.icon}
                onClick={this.onClick.bind(this)}
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


// TODO disabled without click
// Disabled as a state????
// TODO content if empty needed?
// как добавлять другие пропсы, почему ислефт нет в пропсах
// стейт не использовали, он должен быть логическим?

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
    padding-left: ${props => props.icon && props.icon.isLeft ? "40px" : ""};
    padding-right: ${props => props.icon && !props.icon.isLeft ? "40px" : ""};

    &:before{
        content: " ";
        background-size: cover;
        background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
        background-position: center;
        position: absolute;
        left: 15px;
        top: 8px;
        width: 20px;
        height: 20px;
    }
    &:after{
        content: " ";
        background-size: cover;
        background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
        background-position: center;
        position: absolute;
        right: 15px;
        top: 8px;
        width: 20px;
        height: 20px;
    }


    &.s{
        padding: 5px 15px;
        padding-left: ${props => props.icon && props.icon.isLeft ? "33px" : ""};
        padding-right: ${props => props.icon && !props.icon.isLeft ? "33px" : ""};

        &:before{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            left: 7px;
            top: 3px;
            width: 20px;
            height: 20px;
        }
        &:after{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            right: 7px;
            top: 4px;
            width: 20px;
            height: 20px;
        }
    }

    &.m{
        padding: 10px 20px;
        padding-left: ${props => props.icon && props.icon.isLeft ? "40px" : ""};
        padding-right: ${props => props.icon && !props.icon.isLeft ? "40px" : ""};

        &:before{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            left: 15px;
            top: 8px;
            width: 20px;
            height: 20px;
        }
        &:after{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            right: 15px;
            top: 8px;
            width: 20px;
            height: 20px;
        }
    }

    &.l{
        padding: 15px 25px;
        padding-left: ${props => props.icon && props.icon.isLeft ? "45px" : ""};
        padding-right: ${props => props.icon && !props.icon.isLeft ? "45px" : ""};

        &:before{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            left: 17px;
            top: 13px;
            width: 20px;
            height: 20px;
        }
        &:after{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            right: 17px;
            top: 13px;
            width: 20px;
            height: 20px;
        }
    }

    &.empty{
        padding: 15px;
        // padding-left: ${props => props.icon && props.icon.isLeft ? "45px" : ""};
        // padding-right: ${props => props.icon && !props.icon.isLeft ? "45px" : ""};

        &:before{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            left: 6px;
            top: 6px;
            width: 20px;
            height: 20px;
        }
        &:after{
            content: " ";
            background-size: cover;
            background: url(${props => props.icon && !props.icon.isLeft && props.icon.url});
            background-position: center;
            position: absolute;
            right: 6px;
            top: 6px;
            width: 20px;
            height: 20px;
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

    &.disabled{
        background-color: rgb(238, 238, 238);
        color: rgb(171, 168, 168);;
        cursor: not-allowed;

        &:hover{
            opacity: unset;
        }

        &:active{
            // border: 1px solid #268bff;
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
