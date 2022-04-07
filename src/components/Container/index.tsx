interface ContainerProps {
    justify: 'center' | 'between'
}

const Container: React.FC<ContainerProps> = ({ children, justify }): JSX.Element => {
    return (
        <div className={`flex justify-${justify} w-9/12`}>
            {children}
        </div>
    )
}

export default Container;
