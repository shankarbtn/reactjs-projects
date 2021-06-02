import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(false);

    fetch('https://react-todo-app-ef920-default-rtdb.firebaseio.com/meetups.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
      const meetupsArr = [];

      for(const key in data) {
        const meetupDetails = {
          id: key,
          ...data[key]
        };
        meetupsArr.push(meetupDetails);
      }
      setIsLoading(false);
      setLoadedMeetups(meetupsArr);
    });
  }, []);

  return (
      <section>
          <h1>ALL MEETUPS PAGE</h1>
          {isLoading ? <h2>Loading ...</h2> : <MeetupList meetups={loadedMeetups}/>}
      </section>
  );
}

export default AllMeetupsPage;
