import React from 'react'
import PropTypes from 'prop-types'
import styles from './textfield.module.scss'

export default class Textfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
        };

        this.handleBlur= this.handleBlur.bind(this);
        
    }
    
    handleBlur() {
<<<<<<< Updated upstream
        const currentState = this.state.active;
        this.setState({ active: !currentState });
=======

>>>>>>> Stashed changes
        this.setState(prevState => ({
          filled: !prevState.filled
        }));
      }

     
      

    render(){

        const inputClass = `${styles.input} ${this.state.filled ? 'foo' : null}`
        console.log(this.state.filled)

     return (
       
        

        <div className={styles.wrap}>
            <input className={inputClass}  id={this.props.name} name={this.props.name} type='text' onChange={this.handleBlur}/>
            <label className={styles.label} htmlFor={this.props.name}>{this.props.label}  {this.state.filled}  </label>
        </div>
    )

    }



}

   

    
    





