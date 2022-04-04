import React from 'react';
import ListItemIcon from './Icon';
import UserIcon from '../../assets/person.svg';

interface ListItemProps {
    text: string;
    icon?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, icon }) => {
    return (
            <li className="flex w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                {icon && <ListItemIcon src={UserIcon} />}
                {text}
            </li>
    )
}

export default ListItem;
