import React  from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useDispatch} from 'react-redux';
import { setMessage } from '../slider/messageSlider';


function ContactForm() {
  const [state, handleSubmit] = useForm("mgebbdkq");
  const dispatch = useDispatch();
  
  if (state.succeeded) {
    dispatch(setMessage(true))
  }

  return (
      <form onSubmit={handleSubmit}>
        <div className="name-email">
            <input
             type="text" 
             id='name' 
             name='name' 
             placeholder='Name'
             required
           
             />
             <ValidationError 
                prefix="name" 
                field="name"
                errors={state.errors}
            />
            <input 
            type="email"  
            placeholder='Email'
            name='email'
            id='email'
            required
           
            />
        </div>
        <textarea 
        name="message" 
        id="message" 
        rows="5" 
        placeholder='Tell us more about your needs.....'
       
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
            <button type="submit" disabled={state.submitting} className='common_btn form_btn'  >
                Submit
            </button>
    </form>
  );
}

export default ContactForm;