import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './Transaction-history/TransactionHistory';
import transactions from './Transaction-history/transactions.json';

export default function App() {
  return (
    <div
      style={{
        height: '100 %',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
}
