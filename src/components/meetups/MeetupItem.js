import { useContext } from 'react';
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const isFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteHandler() {
    if(isFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
