import css from '../app.module.css';
import PropTypes from 'prop-types';
import Profile from 'render-profile';
import user from '../user.json';
import Statistics from 'render-statistics';
import data from '../data.json';
import FriendList from 'render-friendList';
import friends from '../friends.json';
import TransactionHistory from 'render-transactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

App.propTypes = {
  Profile: PropTypes.object,
  Statistics: PropTypes.object,
  FriendList: PropTypes.object,
  TransactionHistory: PropTypes.object,
};
