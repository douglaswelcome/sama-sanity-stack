
import React, {useState, useReducer} from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.scss'




const Form = (props) => {
    const {id} = props;


    const handleSubmit = async event => {
        event.preventDefault();

        const formEl = document.querySelector('#myForm');
        const formData = new FormData(formEl);
        const formDataSerialized = Object.fromEntries(formData);
        

        const jsonObject = {
            "fields": [
            {
              "name": "email",
              "value": formDataSerialized.email
            },
          ],
    
            "context": {
              "pageUri": "logic.com/page",
              "pageName": "Example page"
            },
            "legalConsentOptions": {
              "consent": { 
                "consentToProcess": true,
                "text": "I agree to allow Example Company to store and process my personal data.",
                "communications": [
                  {
                    "value": true,
                    "subscriptionTypeId": 999,
                    "text": "I agree to receive marketing communications from Example Company."
                  }
                ]
              }
            }
          };

          console.log(jsonObject);

        let portal = '6398568';
        let formId = 'a3c90d1c-198e-403e-8cf2-cf670974d279'
        const url = 'https://api.hsforms.com/submissions/v3/integration/submit/' + portal + '/' + formId;
        const res= await fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonObject),
            headers: {
              'Content-type': 'application/json',
            }
          });
        
        const result = await res.json()
        console.log(result);
        
      }

    return (
        <form id={id} onSubmit={handleSubmit}>
            {props.children} 
        </form>
    )


}


Form.propTypes ={
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string
}

export default Form