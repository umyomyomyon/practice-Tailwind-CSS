import { useState } from 'react';

import './App.css';
import List from './components/List';
import ListItem from './components/List/ListItem';
import ListItemButton from './components/List/LiteItemButton'
import UserIcon from './assets/person.svg'

const ListContainer: React.FC = () => {
  const [items, setItems] = useState(['item1', 'item2', 'item3', 'item4']);
  const [textItems, setTextItems] = useState(['text1', 'text2', 'text3', 'text4'])
  const [users, setUsers] = useState(['user1', 'user2', 'user3', 'user4'])
  const [iconButtons, setIconButtons] = useState(['iconButton1', 'iconButton2', 'iconButton3', 'iconButton4'])

  return (
    <div className="flex justify-between w-9/12">
      <List>
          {textItems.map(text => <ListItem text={text} />)}
        </List>
        <List>
          {items.map(item => <ListItemButton text={item} onClick={() => console.log('clicked.')} />)}
        </List>
        <List>
          {users.map(user => <ListItem text={user} icon={UserIcon} />)}
        </List>
        <List>
          {iconButtons.map(iconButton  => <ListItemButton text={iconButton} onClick={() => console.log('clicked.')} icon={UserIcon} />)}
        </List>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ListContainer />
      </header>
    </div>
  );
}

export default App;
