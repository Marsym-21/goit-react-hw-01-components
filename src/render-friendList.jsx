import PropTypes from 'prop-types';
import FriendListItem from 'render-friendListItem';
import css from './friendList.module.css';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
