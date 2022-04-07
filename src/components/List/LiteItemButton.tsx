import React from 'react'
import ListItemIcon from './Icon'

interface ListItemProps {
    text: string
    onClick: () => void
    icon?: string
}

const ListItemButton: React.FC<ListItemProps> = ({ text, onClick, icon }) => (
    <button
        type="button"
        onClick={() => onClick()}
        className="flex w-full cursor-pointer border-b border-gray-200 px-4 py-2 text-left font-medium hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
    >
        {icon && <ListItemIcon src={icon} />}
        {text}
    </button>
)

export default ListItemButton
