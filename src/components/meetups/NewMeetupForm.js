import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
    const history = useHistory();

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredtitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredtitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        saveMeetupData(meetupData);
    }

    function saveMeetupData(meetupData) {
        fetch(
            'https://react-todo-app-ef920-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

  return (
      <Card>
          <form className={classes.form} onSubmit={submitHandler}>
              <div className={classes.control}>
                  <label htmlFor='title'>Meetup title</label>
                  <input type='text' id='title' required ref={titleInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor='image'>Meetup Image</label>
                  <input type='url' id='image' required ref={imageInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor='address'>Meetup Address</label>
                  <input type='text' id='address' required ref={addressInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor='Description'>Meetup Description</label>
                  <textarea id='Description' rows='5' required ref={descriptionInputRef}/>
              </div>
              <div className={classes.actions}>
                  <button>Add New Meetup</button>
              </div>
          </form>
      </Card>
  );
}

export default NewMeetupForm;
