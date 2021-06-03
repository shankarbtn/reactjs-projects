import { useContext } from 'react';
import FavoritesContext  from '../store/favorites-context';
import MeetupLists from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;
    if(favoriteCtx.totalFavorites === 0) {
        content = <p>You don't have any favorites yet!!! Add some?</p>;
    } else {
        content = <MeetupLists meetups={favoriteCtx.favorites}/>;
    }

    return (
        <section>
          <h1>YOUR FAVORITES PAGE</h1>
          {content}
      </section>
    );
}

export default FavoritesPage;