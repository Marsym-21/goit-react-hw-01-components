import css from '../app.module.css';
import PropTypes from 'prop-types';
import Profile from 'components/profile/render-profile';
import user from 'components/profile/user.json';
import Statistics from 'components/statistics/render-statistics';
import data from 'components/statistics/data.json';
import FriendList from 'components/friends/render-friendList';
import friends from 'components/friends/friends.json';
import TransactionHistory from 'components/transaction_history/render-transactionHistory';
import transactions from 'components/transaction_history/transactions.json';

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
